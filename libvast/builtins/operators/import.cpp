//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/argument_parser.hpp>
#include <vast/concept/parseable/string/char_class.hpp>
#include <vast/concept/parseable/vast/pipeline.hpp>
#include <vast/error.hpp>
#include <vast/logger.hpp>
#include <vast/node_control.hpp>
#include <vast/pipeline.hpp>
#include <vast/plugin.hpp>

#include <arrow/type.h>
#include <caf/attach_stream_source.hpp>
#include <caf/scheduled_actor.hpp>
#include <caf/scoped_actor.hpp>
#include <caf/typed_event_based_actor.hpp>

namespace vast::plugins::import {

namespace {

class import_source_driver final
  : public caf::stream_source_driver<
      caf::broadcast_downstream_manager<table_slice>> {
public:
  import_source_driver(generator<table_slice>& input, uint64_t& num_events,
                       operator_control_plane& ctrl)
    : input_{input}, num_events_{num_events}, ctrl_{ctrl} {
  }

  void pull(caf::downstream<table_slice>& out, size_t num) override {
    auto it = input_.unsafe_current();
    for (size_t i = 0; i < num; ++i) {
      TENZIR_ASSERT(it != input_.end());
      ++it;
      if (it == input_.end())
        return;
      auto next = std::move(*it);
      if (next.rows() == 0) {
        return;
      }
      num_events_ += next.rows();
      next.import_time(time::clock::now());
      out.push(std::move(next));
    }
  }

  auto done() const noexcept -> bool override {
    return input_.unsafe_current() == input_.end();
  }

  void finalize(const caf::error& error) override {
    if (error && error != caf::exit_reason::unreachable) {
      ctrl_.warn(error);
    }
  }

private:
  generator<table_slice>& input_;
  uint64_t& num_events_;
  operator_control_plane& ctrl_;
};

class import_operator final : public crtp_operator<import_operator> {
public:
  auto
  operator()(generator<table_slice> input, operator_control_plane& ctrl) const
    -> generator<std::monostate> {
    const auto start_time = std::chrono::steady_clock::now();
    // TODO: Some of the the requests this operator makes are blocking, so we
    // have to create a scoped actor here; once the operator API uses async we
    // can offer a better mechanism here.
    auto blocking_self = caf::scoped_actor{ctrl.self().system()};
    auto components
      = get_node_components<index_actor>(blocking_self, ctrl.node());
    if (!components) {
      ctrl.abort(std::move(components.error()));
      co_return;
    }
    co_yield {};
    auto [index] = std::move(*components);
    auto num_events = uint64_t{};
    auto source = caf::detail::make_stream_source<import_source_driver>(
      &ctrl.self(), input, num_events, ctrl);
    source->add_outbound_path(index);
    for (const auto& plugin : plugins::get<analyzer_plugin>()) {
      // We can safely assert that the analyzer was already initialized. The
      // pipeline API guarantees that remote operators run after the node was
      // successfully initialized, which implies that analyzers have been
      // initialized as well.
      auto analyzer = plugin->analyzer();
      TENZIR_ASSERT(analyzer);
      source->add_outbound_path(analyzer);
    }
    while (input.unsafe_current() != input.end()) {
      if (source->generate_messages()) {
        source->out().emit_batches();
      }
      co_yield {};
    }
    source->out().fan_out_flush();
    source->out().force_emit_batches();
    source->stop();
    const auto elapsed = std::chrono::steady_clock::now() - start_time;
    const auto rate
      = static_cast<double>(num_events)
        / std::chrono::duration_cast<
            std::chrono::duration<double, std::chrono::seconds::period>>(
            elapsed)
            .count();
    TENZIR_DEBUG("imported {} events in {}{}", num_events, data{elapsed},
                 std::isfinite(rate)
                   ? fmt::format(" at a rate of {:.2f} events/s", rate)
                   : "");
  }

  auto name() const -> std::string override {
    return "import";
  }

  friend auto inspect(auto& f, import_operator& x) -> bool {
    (void)f, (void)x;
    return true;
  }

  auto location() const -> operator_location override {
    return operator_location::remote;
  }
};

class plugin final : public virtual operator_plugin<import_operator> {
public:
  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser = argument_parser{"import", "https://docs.tenzir.com/next/"
                                            "operators/sinks/import"};
    parser.parse(p);
    return std::make_unique<import_operator>();
  }
};

} // namespace

} // namespace vast::plugins::import

TENZIR_REGISTER_PLUGIN(vast::plugins::import::plugin)
