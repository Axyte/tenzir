//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/adaptive_table_slice_builder.hpp>
#include <tenzir/argument_parser.hpp>
#include <tenzir/community_id.hpp>
#include <tenzir/error.hpp>
#include <tenzir/ether_type.hpp>
#include <tenzir/flow.hpp>
#include <tenzir/frame_type.hpp>
#include <tenzir/location.hpp>
#include <tenzir/logger.hpp>
#include <tenzir/mac.hpp>
#include <tenzir/plugin.hpp>

#include <arrow/record_batch.h>
#include <netinet/in.h>

namespace tenzir::plugins::decapsulate {

namespace {

auto to_uint16(std::span<const std::byte, 2> bytes) {
  const auto* data = bytes.data();
  const auto* ptr = reinterpret_cast<const uint16_t*>(std::launder(data));
  return detail::to_host_order(*ptr);
}

/// An 802.3 Ethernet frame.
struct frame {
  static auto make(std::span<const std::byte> bytes, frame_type type)
    -> std::optional<frame> {
    switch (type) {
      default:
        break;
      case frame_type::ethernet: {
        // Need at least 2 MAC addresses and the 2-byte EtherType.
        constexpr size_t ethernet_header_size = 6 + 6 + 2;
        if (bytes.size() < ethernet_header_size)
          return std::nullopt;
        auto dst = mac{bytes.subspan<0, 6>()};
        auto src = mac{bytes.subspan<6, 6>()};
        auto result = frame{dst, src};
        auto type = as_ether_type(bytes.subspan<12, 2>());
        switch (type) {
          default:
            result.type = type;
            result.payload = bytes.subspan<ethernet_header_size>();
            break;
          case ether_type::ieee_802_1aq: {
            size_t min_frame_size = 6 + 6 + 4 + 2;
            if (bytes.size() < min_frame_size)
              return std::nullopt;
            result.outer_vid = to_uint16(bytes.subspan<14, 2>());
            *result.outer_vid &= 0x0FFF; // lower 12 bits only
            result.type = as_ether_type(bytes.subspan<16, 2>());
            result.payload = bytes.subspan(min_frame_size);
            // Keep going for QinQ frames (TPID = 0x8100).
            if (result.type == ether_type::ieee_802_1aq) {
              min_frame_size += 4;
              if (bytes.size() < min_frame_size)
                return std::nullopt;
              result.inner_vid = to_uint16(bytes.subspan<18, 2>());
              *result.inner_vid &= 0x0FFF; // lower 12 bits only
              result.type = as_ether_type(bytes.subspan<20, 2>());
              result.payload = bytes.subspan(min_frame_size);
            }
            break;
          }
          case ether_type::ieee_802_1q_db: {
            constexpr size_t min_frame_size = 6 + 6 + 4 + 4 + 2;
            if (bytes.size() < min_frame_size)
              return std::nullopt;
            result.outer_vid = to_uint16(bytes.subspan<14, 2>());
            *result.outer_vid &= 0x0FFF; // lower 12 bits only
            result.inner_vid = to_uint16(bytes.subspan<18, 2>());
            *result.inner_vid &= 0x0FFF; // lower 12 bits only
            result.type = as_ether_type(bytes.subspan<20, 2>());
            result.payload = bytes.subspan<min_frame_size>();
            break;
          }
        }
        return result;
      }
    }
    return std::nullopt;
  }

  frame(mac dst, mac src) : dst{dst}, src{src} {
  }

  mac dst;                             ///< Destination MAC address
  mac src;                             ///< Source MAC address
  std::optional<uint16_t> outer_vid{}; ///< Outer 802.1Q tag control information
  std::optional<uint16_t> inner_vid{}; ///< Outer 802.1Q tag control information
  ether_type type{ether_type::invalid}; ///< EtherType
  std::span<const std::byte> payload{}; ///< Payload
};

/// An IP packet.
struct packet {
  static auto make(std::span<const std::byte> bytes, ether_type type)
    -> std::optional<packet> {
    packet result;
    switch (type) {
      default:
        break;
      case ether_type::ipv4: {
        constexpr size_t ipv4_header_size = 20;
        if (bytes.size() < ipv4_header_size)
          return std::nullopt;
        size_t header_length = (std::to_integer<uint8_t>(bytes[0]) & 0x0f) * 4;
        if (bytes.size() < header_length)
          return std::nullopt;
        result.src = ip::v4(bytes.subspan<12, 4>());
        result.dst = ip::v4(bytes.subspan<16, 4>());
        result.type = std::to_integer<uint8_t>(bytes[9]);
        result.payload = bytes.subspan(header_length);
        return result;
      }
      case ether_type::ipv6: {
        constexpr size_t ipv6_header_size = 40;
        if (bytes.size() < ipv6_header_size)
          return std::nullopt;
        result.src = ip::v6(bytes.subspan<8, 16>());
        result.dst = ip::v6(bytes.subspan<24, 16>());
        result.type = std::to_integer<uint8_t>(bytes[6]);
        result.payload = bytes.subspan(40);
        return result;
      }
    }
    return std::nullopt;
  }

  ip src{};
  ip dst{};
  uint8_t type{0};
  std::span<const std::byte> payload{};
};

/// A layer 4 segment.
struct segment {
  static auto make(std::span<const std::byte> bytes, uint8_t type)
    -> std::optional<segment> {
    segment result;
    switch (type) {
      default:
        break;
      case IPPROTO_TCP: {
        constexpr size_t min_tcp_header_size = 20;
        if (bytes.size() < min_tcp_header_size)
          return std::nullopt;
        result.src = to_uint16(bytes.subspan<0, 2>());
        result.dst = to_uint16(bytes.subspan<2, 2>());
        result.type = port_type::tcp;
        size_t data_offset = (std::to_integer<uint8_t>(bytes[12]) >> 4) * 4;
        if (bytes.size() < data_offset)
          return std::nullopt;
        result.payload = bytes.subspan(data_offset);
        return result;
      }
      case IPPROTO_UDP: {
        constexpr size_t udp_header_size = 8;
        if (bytes.size() < udp_header_size)
          return std::nullopt;
        result.src = to_uint16(bytes.subspan<0, 2>());
        result.dst = to_uint16(bytes.subspan<2, 2>());
        result.type = port_type::udp;
        result.payload = bytes.subspan<8>();
        return result;
      }
      case IPPROTO_ICMP: {
        constexpr size_t icmp_header_size = 8;
        if (bytes.size() < icmp_header_size)
          return std::nullopt;
        auto message_type = std::to_integer<uint8_t>(bytes[0]);
        auto message_code = std::to_integer<uint8_t>(bytes[1]);
        result.src = message_type;
        result.dst = message_code;
        result.type = port_type::icmp;
        result.payload = bytes.subspan<8>();
        return result;
      }
    }
    return std::nullopt;
  }

  uint16_t src{0};
  uint16_t dst{0};
  port_type type{port_type::unknown};
  std::span<const std::byte> payload{};
};

/// Parses a packet in a sequence where each step is split into two parts:
/// 1. Reconstruct the header structure into a dedicated structure.
/// 2. Append the structure to the builder.
auto parse(auto& builder, std::span<const std::byte> bytes, frame_type type)
  -> std::optional<diagnostic> {
  auto fail = [](auto err) -> diagnostic {
    return diagnostic::warning("failed to add record field")
      .note(to_string(std::move(err)))
      .done();
  };
  // Parse layer 2.
  auto frame = frame::make(bytes, type);
  if (!frame) {
    TENZIR_TRACE("failed to parse layer-2 frame");
    return std::nullopt;
  }
  auto ether = builder.push_field("ether").push_record();
  auto src_str = fmt::to_string(frame->src);
  auto dst_str = fmt::to_string(frame->dst);
  if (auto err = ether.push_field("src").add(std::string_view{src_str}))
    return fail(err);
  if (auto err = ether.push_field("dst").add(std::string_view{dst_str}))
    return fail(err);
  if (frame->outer_vid) {
    auto vlan = builder.push_field("vlan").push_record();
    if (auto err = vlan.push_field("outer").add(
          static_cast<uint64_t>(*frame->outer_vid)))
      return fail(err);
    if (frame->inner_vid)
      if (auto err = vlan.push_field("inner").add(
            static_cast<uint64_t>(*frame->inner_vid)))
        return fail(err);
  }
  if (auto err
      = ether.push_field("type").add(static_cast<uint64_t>(frame->type)))
    return fail(err);
  // Parse layer 3.
  auto packet = packet::make(frame->payload, frame->type);
  if (!packet) {
    TENZIR_TRACE("failed to parse layer-3 packet");
    return std::nullopt;
  }
  auto ip = builder.push_field("ip").push_record();
  if (auto err = ip.push_field("src").add(packet->src))
    return fail(err);
  if (auto err = ip.push_field("dst").add(packet->dst))
    return fail(err);
  if (auto err = ip.push_field("type").add(static_cast<uint64_t>(packet->type)))
    return fail(err);
  // Parse layer 4.
  auto segment = segment::make(packet->payload, packet->type);
  if (!segment) {
    TENZIR_TRACE("failed to parse layer-4 segment");
    return std::nullopt;
  }
  switch (segment->type) {
    case port_type::icmp: {
      auto icmp = builder.push_field("icmp").push_record();
      if (auto err = icmp.push_field("type").add(uint64_t{segment->src}))
        return fail(err);
      if (auto err = icmp.push_field("code").add(uint64_t{segment->dst}))
        return fail(err);
      break;
    }
    case port_type::tcp: {
      auto tcp = builder.push_field("tcp").push_record();
      if (auto err = tcp.push_field("src_port").add(uint64_t{segment->src}))
        return fail(err);
      if (auto err = tcp.push_field("dst_port").add(uint64_t{segment->dst}))
        return fail(err);
      break;
    }
    case port_type::udp: {
      auto udp = builder.push_field("udp").push_record();
      if (auto err = udp.push_field("src_port").add(uint64_t{segment->src}))
        return fail(err);
      if (auto err = udp.push_field("dst_port").add(uint64_t{segment->dst}))
        return fail(err);
      break;
    }
    case port_type::icmp6:
    case port_type::sctp:
    case port_type::unknown:
      break;
  }
  // Compute Community ID.
  auto conn = make_flow(packet->src, packet->dst, segment->src, segment->dst,
                        segment->type);
  auto cid = community_id::compute<policy::base64>(conn);
  if (auto err = builder.push_field("community_id").add(cid))
    return fail(err);
  return std::nullopt;
}

struct operator_args {
  std::optional<located<uint16_t>> vxlan_port;

  friend auto inspect(auto& f, operator_args& x) -> bool {
    return f.object(x)
      .pretty_name("operator_args")
      .fields(f.field("vxlan_port", x.vxlan_port));
  }
};

class decapsulate_operator final : public crtp_operator<decapsulate_operator> {
public:
  decapsulate_operator() = default;

  explicit decapsulate_operator(operator_args args) : args_{std::move(args)} {
  }

  auto
  operator()(generator<table_slice> input, operator_control_plane& ctrl) const
    -> generator<table_slice> {
    for (auto&& slice : input) {
      if (slice.rows() == 0) {
        co_yield {};
        continue;
      }
      if (slice.schema().name() != "pcap.packet") {
        diagnostic::warning("cannot decapsulate schema '{}'",
                            slice.schema().name())
          .note("schema must be 'pcap.packet'")
          .emit(ctrl.diagnostics());
        continue;
      }
      // Get the packet payload.
      const auto& layout = caf::get<record_type>(slice.schema());
      const auto linktype_index = layout.resolve_key("linktype");
      if (!linktype_index) {
        diagnostic::warning("got a malformed 'pcap.packet' event")
          .note("schema 'pcap.packet' must have a 'linktype' field")
          .emit(ctrl.diagnostics());
        co_yield {};
        continue;
      }
      auto [linktype_field, linktype_array] = linktype_index->get(slice);
      auto linktype_values = caf::get_if<arrow::UInt64Array>(&*linktype_array);
      if (!linktype_values) {
        diagnostic::warning("got a malformed 'pcap.packet' event")
          .note("field 'linktype' not of type uint64")
          .emit(ctrl.diagnostics());
        co_yield {};
        continue;
      }
      const auto data_index = layout.resolve_key("data");
      if (!data_index) {
        diagnostic::warning("got a malformed 'pcap.packet' event")
          .note("schema 'pcap.packet' must have a 'data' field")
          .emit(ctrl.diagnostics());
        co_yield {};
        continue;
      }
      auto [data_field, data_array] = data_index->get(slice);
      auto data_values = caf::get_if<arrow::StringArray>(&*data_array);
      if (!data_values) {
        diagnostic::warning("got a malformed 'pcap.packet' event")
          .note("field 'data' not of type string")
          .emit(ctrl.diagnostics());
        co_yield {};
        continue;
      }
      auto builder = adaptive_table_slice_builder{};
      for (auto i = 0u; i < slice.rows(); ++i) {
        auto linktype = (*linktype_values)[i];
        auto data = (*data_values)[i];
        if (!data)
          continue;
        auto row = builder.push_row();
        auto raw_frame = std::span<const std::byte>{
          reinterpret_cast<const std::byte*>(data->data()), data->size()};
        auto inferred_type = static_cast<frame_type>(linktype ? *linktype : 0);
        if (auto diag = parse(row, raw_frame, inferred_type))
          ctrl.diagnostics().emit(std::move(*diag));
      }
      // Add back the untouched data column at the end before yielding.
      auto transformation = indexed_transformation{
        .index = {slice.columns() - 1},
        .fun = [&](struct record_type::field in_field,
                   std::shared_ptr<arrow::Array> in_array)
          -> indexed_transformation::result_type {
          return {
            {std::move(in_field), std::move(in_array)},
            // {{"data", string_type{}}, std::move(data_array)},
            {{"pcap", slice.schema()},
             to_record_batch(slice)->ToStructArray().ValueOrDie()},
          };
        },
      };
      co_yield transform_columns(builder.finish(), {std::move(transformation)});
    }
  }

  auto optimize(expression const& filter, event_order order) const
    -> optimize_result override {
    (void)filter;
    return optimize_result::order_invariant(*this, order);
  }

  auto name() const -> std::string override {
    return "decapsulate";
  }

  friend auto inspect(auto& f, decapsulate_operator& x) -> bool {
    return f.object(x)
      .pretty_name("decapsulate_operator")
      .fields(f.field("args", x.args_));
  }

private:
  operator_args args_;
};

class plugin final : public operator_plugin<decapsulate_operator> {
public:
  auto name() const -> std::string override {
    return "decapsulate";
  }

  auto signature() const -> operator_signature override {
    return {.transformation = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser
      = argument_parser{name(), fmt::format("https://docs.tenzir.com/next/"
                                            "operators/transformations/{}",
                                            name())};
    operator_args args;
    parser.add("-v,--vxlan", args.vxlan_port, "<count>");
    parser.parse(p);
    return std::make_unique<decapsulate_operator>(std::move(args));
  }

private:
  record config_;
};

} // namespace

} // namespace tenzir::plugins::decapsulate

TENZIR_REGISTER_PLUGIN(tenzir::plugins::decapsulate::plugin)
