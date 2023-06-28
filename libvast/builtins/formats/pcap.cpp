//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/argument_parser.hpp>
#include <vast/arrow_table_slice.hpp>
#include <vast/detail/byteswap.hpp>
#include <vast/die.hpp>
#include <vast/error.hpp>
#include <vast/logger.hpp>
#include <vast/pcap.hpp>
#include <vast/plugin.hpp>
#include <vast/table_slice_builder.hpp>
#include <vast/type.hpp>
#include <vast/view.hpp>

#include <arrow/record_batch.h>

namespace vast::plugins::pcap {

namespace {

using namespace vast::pcap;

/// Returns a stateful function that retrieves a given number of bytes in a
/// contiguous buffer from a generator of chunks. The last span is underful,
/// i.e., smaller than the number of bytes requested, and zero-sized if the
/// input boundaries are aligned. The function returns nullopt whenever it
/// merges buffers from multiple chunks. This does not indicate completion.
auto make_byte_reader(generator<chunk_ptr> input) {
  input.begin(); // prime the pump
  return
    [input = std::move(input), chunk = chunk_ptr{}, chunk_offset = size_t{0},
     buffer = std::vector<std::byte>{}, buffer_offset = size_t{0}](
      size_t num_bytes) mutable -> std::optional<std::span<const std::byte>> {
      // The internal chunk is not available when we first enter this function
      // and as well when we have no more chunks (at the end).
      if (!chunk) {
        VAST_ASSERT(chunk_offset == 0);
        // Can we fulfill our request from the buffer?
        if (buffer.size() - buffer_offset >= num_bytes) {
          auto result = as_bytes(buffer).subspan(buffer_offset, num_bytes);
          buffer_offset += num_bytes;
          return result;
        }
        // Can we get more chunks?
        auto current = input.unsafe_current();
        if (current == input.end()) {
          // We're done and return an underful chunk.
          auto result = as_bytes(buffer).subspan(buffer_offset);
          buffer_offset = buffer.size();
          VAST_ASSERT(result.size() < num_bytes);
          return result;
        }
        chunk = std::move(*current);
        ++current;
        if (!chunk)
          return std::nullopt;
      }
      // We have a chunk.
      VAST_ASSERT(chunk != nullptr);
      if (buffer.size() == buffer_offset) {
        // Have consumed the entire chunk last time? Then reset and try again.
        if (chunk_offset == chunk->size()) {
          chunk_offset = 0;
          chunk = nullptr;
          return std::nullopt;
        }
        VAST_ASSERT(chunk_offset < chunk->size());
        // If we have a chunk, but not enough bytes, then we must buffer.
        if (chunk->size() - chunk_offset < num_bytes) {
          buffer = {chunk->begin() + chunk_offset, chunk->end()};
          buffer_offset = 0;
          chunk = nullptr;
          chunk_offset = 0;
          return std::nullopt;
        }
        // Enough in the chunk, simply yield from it.
        auto result = as_bytes(*chunk).subspan(chunk_offset, num_bytes);
        chunk_offset += num_bytes;
        return result;
      }
      // If we need to process both a buffer and chunk, we copy over the chunk
      // remainder into the buffer.
      buffer.erase(buffer.begin(), buffer.begin() + buffer_offset);
      buffer_offset = 0;
      buffer.reserve(buffer.size() + chunk->size() - chunk_offset);
      buffer.insert(buffer.end(), chunk->begin() + chunk_offset, chunk->end());
      chunk = nullptr;
      chunk_offset = 0;
      if (buffer.size() >= num_bytes) {
        auto result = as_bytes(buffer).subspan(0, num_bytes);
        buffer_offset = num_bytes;
        return result;
      }
      return std::nullopt;
    };
}

struct parser_args {
  std::optional<location> emit_file_header;

  template <class Inspector>
  friend auto inspect(Inspector& f, parser_args& x) -> bool {
    return f.object(x)
      .pretty_name("parser_args")
      .fields(f.field("emit-file-header", x.emit_file_header));
  }
};

class pcap_parser final : public plugin_parser {
public:
  pcap_parser() = default;

  explicit pcap_parser(parser_args args) : args_{std::move(args)} {
  }

  auto name() const -> std::string override {
    return "pcap";
  }

  auto
  instantiate(generator<chunk_ptr> input, operator_control_plane& ctrl) const
    -> std::optional<generator<table_slice>> override {
    auto make = [](auto& ctrl, generator<chunk_ptr> input,
                   bool emit_file_header) -> generator<table_slice> {
      // A PCAP file starts with a 24-byte header.
      file_header file{};
      auto read_n = make_byte_reader(std::move(input));
      while (true) {
        auto length = sizeof(file_header);
        auto bytes = read_n(length);
        if (!bytes) {
          co_yield {};
          continue;
        }
        if (bytes->size() != length) {
          diagnostic::error("PCAP file header to short")
            .note("from `pcap`")
            .note("expected {} bytes, but got {}", length, bytes->size())
            .emit(ctrl.diagnostics());
          co_return;
        }
        std::memcpy(&file, bytes->data(), bytes->size());
        break;
      }
      auto need_byte_swap = false;
      auto magic = file.magic_number;
      auto swapped = detail::byteswap(magic);
      if (magic == magic_number_1 || magic == magic_number_2) {
        VAST_DEBUG("detected identical byte order in file and host");
      } else if (swapped == magic_number_1 || swapped == magic_number_2) {
        VAST_DEBUG("detected different byte order in file and host");
        need_byte_swap = true;
      } else {
        diagnostic::error("invalid PCAP magic number: {0:x}", magic)
          .note("from `pcap`")
          .emit(ctrl.diagnostics());
        co_return;
      }
      if (need_byte_swap)
        file = byteswap(file);
      VAST_DEBUG("parsed PCAP file header");
      if (emit_file_header) {
        auto builder = table_slice_builder{file_header_type()};
        if (!(builder.add(file.magic_number) && builder.add(file.major_version)
              && builder.add(file.minor_version) && builder.add(file.reserved1)
              && builder.add(file.reserved2) && builder.add(file.snaplen)
              && builder.add(file.linktype))) {
          diagnostic::error("failed to emit PCAP file header")
            .note("from `pcap`")
            .emit(ctrl.diagnostics());
          co_return;
        }
        co_yield builder.finish();
      }
      // After the header, the remainder of the file are Packet Records,
      // consisting of a 16-byte header and variable-length payload.
      auto builder = table_slice_builder{packet_record_type()};
      auto num_packets = size_t{0};
      while (true) {
        packet_record packet;
        while (true) {
          auto length = sizeof(packet_header);
          auto bytes = read_n(length);
          if (!bytes) {
            co_yield {};
            continue;
          }
          if (bytes->empty()) {
            VAST_INFO("completed trace of {} packets", num_packets);
            co_return;
          }
          if (bytes->size() != length) {
            diagnostic::error("PCAP packet header to short")
              .note("from `pcap`")
              .note("expected {} bytes, but got {}", length, bytes->size())
              .emit(ctrl.diagnostics());
            co_return;
          }
          std::memcpy(&packet.header, bytes->data(), sizeof(packet_header));
          if (need_byte_swap)
            packet.header = byteswap(packet.header);
          break;
        }
        while (true) {
          auto length = packet.header.captured_packet_length;
          auto bytes = read_n(length);
          if (!bytes) {
            co_yield {};
            continue;
          }
          if (bytes->size() != length) {
            diagnostic::error("truncated last packet; expected {} but got {}",
                              length, bytes->size())
              .note("from `pcap`")
              .emit(ctrl.diagnostics());
            co_return;
          }
          packet.data = *bytes;
          break;
        }
        ++num_packets;
        VAST_DEBUG("packet #{} got size: {}", num_packets, packet.data.size());
        /// Build record.
        auto seconds = std::chrono::seconds(packet.header.timestamp);
        auto timestamp = time{std::chrono::duration_cast<duration>(seconds)};
        if (file.magic_number == magic_number_1)
          timestamp
            += std::chrono::microseconds(packet.header.timestamp_fraction);
        else if (file.magic_number == magic_number_2)
          timestamp
            += std::chrono::nanoseconds(packet.header.timestamp_fraction);
        else
          die("invalid magic number"); // validated earlier
        const auto* ptr = reinterpret_cast<const char*>(packet.data.data());
        auto data = std::string_view{ptr, packet.data.size()};
        if (!(builder.add(file.linktype & 0x0000FFFF) && builder.add(timestamp)
              && builder.add(packet.header.captured_packet_length)
              && builder.add(packet.header.original_packet_length)
              && builder.add(data))) {
          diagnostic::error("failed to add packet #{}", num_packets)
            .note("from `pcap`")
            .emit(ctrl.diagnostics());
          co_return;
        }
        co_yield builder.finish();
      }
    };
    return make(ctrl, std::move(input), !!args_.emit_file_header);
  }

  friend auto inspect(auto& f, pcap_parser& x) -> bool {
    return f.object(x)
      .pretty_name("pcap_parser")
      .fields(f.field("args", x.args_));
  }

private:
  parser_args args_;
};

struct printer_args {
  // template <class Inspector>
  // friend auto inspect(Inspector& f, printer_args& x) -> bool {
  //   return f.object(x).pretty_name("printer_args");
  // }
};

class pcap_printer final : public plugin_printer {
public:
  pcap_printer() = default;

  explicit pcap_printer(printer_args args) : args_{std::move(args)} {
  }

  auto name() const -> std::string override {
    return "pcap";
  }

  static auto
  make_file_header(uint16_t linktype, uint32_t snaplen = maximum_snaplen)
    -> chunk_ptr {
    auto header = file_header{
      .magic_number = magic_number_2,
      .major_version = 2,
      .minor_version = 4,
      .reserved1 = 0,
      .reserved2 = 0,
      .snaplen = snaplen,
      .linktype = linktype,
    };
    const auto* ptr = reinterpret_cast<const std::byte*>(&header);
    auto bytes = std::span<const std::byte>{ptr, sizeof(file_header)};
    return chunk::copy(bytes);
  }

  auto instantiate(type input_schema, operator_control_plane& ctrl) const
    -> caf::expected<std::unique_ptr<printer_instance>> override {
    if (input_schema.name() != "pcap.packet")
      return caf::make_error(ec::print_error,
                             fmt::format("cannot process schema '{}'",
                                         input_schema.name()));
    return printer_instance::make(
      [&ctrl, input_schema = std::move(input_schema), linktype = uint16_t{0},
       file_header_printed = false, buffer = std::vector<std::byte>{}](
        table_slice slice) mutable -> generator<chunk_ptr> {
        if (slice.rows() == 0)
          co_return;
        // TODO: once write/to support predicate pushdown, we want to push down
        // the predicate `#schema == "pcap.packet"`. Until then, it's the user's
        // responsibility to do this.
        if (input_schema.name() != "pcap.packet") {
          diagnostic::warning("cannot process schema {}", input_schema.name())
            .note("from `pcap`")
            .emit(ctrl.diagnostics());
          co_return;
        }
        // Iterate row-wise.
        const auto& input_record = caf::get<record_type>(input_schema);
        auto resolved_slice = resolve_enumerations(slice);
        auto array
          = to_record_batch(resolved_slice)->ToStructArray().ValueOrDie();
        for (const auto& row : values(input_record, *array)) {
          VAST_ASSERT_CHEAP(row);
          // NB: the API for record_view is just wrong. It should expose a
          // field-based access method, as opposed to just key-value pairs.
          auto timestamp = time{};
          auto captured_packet_length = uint64_t{0};
          auto original_packet_length = uint64_t{0};
          auto data = std::string_view{};
          auto packet_linktype = uint16_t{0};
          for (const auto& [key, value] : *row) {
            if (key == "linktype")
              packet_linktype
                = detail::narrow_cast<uint16_t>(caf::get<uint64_t>(value));
            if (key == "timestamp")
              timestamp = caf::get<time>(value);
            if (key == "captured_packet_length")
              captured_packet_length = caf::get<uint64_t>(value);
            if (key == "original_packet_length")
              original_packet_length = caf::get<uint64_t>(value);
            if (key == "data")
              data = caf::get<std::string_view>(value);
          }
          // Print the file header once.
          if (!file_header_printed) {
            linktype = packet_linktype;
            co_yield make_file_header(linktype);
            file_header_printed = true;
          } else if (packet_linktype != linktype) {
            diagnostic::error("packet with new linktype {}, first was {}",
                              packet_linktype, linktype)
              .note("from `pcap`")
              .emit(ctrl.diagnostics());
            co_return;
          }
          // Split timestamp in seconds and nanoseconds.
          auto ns = timestamp.time_since_epoch();
          auto secs = std::chrono::duration_cast<std::chrono::seconds>(ns);
          auto fraction = ns - secs;
          auto header = packet_header{
            .timestamp = detail::narrow_cast<uint32_t>(secs.count()),
            .timestamp_fraction
            = detail::narrow_cast<uint32_t>(fraction.count()),
            .captured_packet_length
            = detail::narrow_cast<uint32_t>(captured_packet_length),
            .original_packet_length
            = detail::narrow_cast<uint32_t>(original_packet_length),
          };
          // Copy over header.
          buffer.resize(sizeof(packet_header) + data.size());
          std::memcpy(buffer.data(), &header, sizeof(header));
          std::memcpy(buffer.data() + sizeof(packet_header), data.data(),
                      data.size());
          co_yield chunk::copy(buffer);
        }
      });
  }

  auto allows_joining() const -> bool override {
    return false;
  }

  friend auto inspect(auto& f, pcap_printer& x) -> bool {
    return f.object(x)
      .pretty_name("pcap_printer")
      .fields(f.field("args", x.args_));
  }

private:
  printer_args args_;
};

class plugin final : public virtual parser_plugin<pcap_parser>,
                     public virtual printer_plugin<pcap_printer> {
public:
  auto initialize(const record& config, const record& /* global_config */)
    -> caf::error override {
    config_ = config;
    return caf::none;
  }

  auto parse_parser(parser_interface& p) const
    -> std::unique_ptr<plugin_parser> override {
    auto parser = argument_parser{
      name(),
      fmt::format("https://docs.tenzir.com/docs/next/formats/{}", name())};
    auto args = parser_args{};
    parser.add("-e,--emit-file-header", args.emit_file_header);
    parser.parse(p);
    return std::make_unique<pcap_parser>(std::move(args));
  }

  auto parse_printer(parser_interface& p) const
    -> std::unique_ptr<plugin_printer> override {
    auto parser = argument_parser{
      name(),
      fmt::format("https://docs.tenzir.com/docs/next/formats/{}", name())};
    auto args = printer_args{};
    parser.parse(p);
    return std::make_unique<pcap_printer>(std::move(args));
  }

  auto name() const -> std::string override {
    return "pcap";
  }

private:
  record config_;
};

} // namespace

} // namespace vast::plugins::pcap

VAST_REGISTER_PLUGIN(vast::plugins::pcap::plugin)
