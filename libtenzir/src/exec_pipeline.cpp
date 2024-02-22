//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/diagnostics.hpp>
#include <tenzir/exec_pipeline.hpp>
#include <tenzir/pipeline.hpp>
#include <tenzir/pipeline_executor.hpp>
#include <tenzir/tql/parser.hpp>
#include <tenzir/tql2/lexer.hpp>
#include <tenzir/tql2/parser.hpp>
#include <tenzir/tql2/resolve.hpp>

#include <arrow/util/utf8.h>
#include <caf/event_based_actor.hpp>
#include <caf/expected.hpp>
#include <caf/scoped_actor.hpp>

#include <string_view>

namespace tenzir {

namespace {

auto format_metric(const metric& metric) -> std::string {
  auto result = std::string{};
  auto it = std::back_inserter(result);
  constexpr auto indent = std::string_view{"  "};
  it = fmt::format_to(it, "operator #{} ({})\n", metric.operator_index + 1,
                      metric.operator_name);
  it = fmt::format_to(it, "{}total: {}\n", indent, data{metric.time_total});
  it = fmt::format_to(it, "{}scheduled: {} ({:.2f}%)\n", indent,
                      data{metric.time_scheduled},
                      100.0 * static_cast<double>(metric.time_scheduled.count())
                        / static_cast<double>(metric.time_total.count()));
  it
    = fmt::format_to(it, "{}processing: {} ({:.2f}%)\n", indent,
                     data{metric.time_processing},
                     100.0 * static_cast<double>(metric.time_processing.count())
                       / static_cast<double>(metric.time_total.count()));
  it = fmt::format_to(it, "{}running: {} ({:.2f}%)\n", indent,
                      data{metric.time_running},
                      100.0 * static_cast<double>(metric.time_running.count())
                        / static_cast<double>(metric.time_total.count()));
  it = fmt::format_to(it, "{}paused: {} ({:.2f}%)\n", indent,
                      data{metric.time_paused},
                      100.0 * static_cast<double>(metric.time_paused.count())
                        / static_cast<double>(metric.time_total.count()));
  it = fmt::format_to(
    it, "{}runs: {} ({:.2f}% processing / {:.2f}% input / {:.2f}% output)\n",
    indent, metric.num_runs,
    100.0 * metric.num_runs_processing / metric.num_runs,
    100.0 * metric.num_runs_processing_input / metric.num_runs,
    100.0 * metric.num_runs_processing_output / metric.num_runs);
  if (metric.inbound_measurement.unit != "void") {
    it = fmt::format_to(it, "{}inbound:\n", indent);
    it = fmt::format_to(
      it, "{}{}{}: {} at a rate of {:.2f}/s\n", indent, indent,
      metric.inbound_measurement.unit, metric.inbound_measurement.num_elements,
      static_cast<double>(metric.inbound_measurement.num_elements)
        / std::chrono::duration_cast<
            std::chrono::duration<double, std::chrono::seconds::period>>(
            metric.time_running)
            .count());
    if (metric.inbound_measurement.unit != operator_type_name<chunk_ptr>()) {
      it = fmt::format_to(
        it, "{}{}bytes: {} at a rate of {:.2f}/s (estimate)\n", indent, indent,
        metric.inbound_measurement.num_approx_bytes,
        static_cast<double>(metric.inbound_measurement.num_approx_bytes)
          / std::chrono::duration_cast<
              std::chrono::duration<double, std::chrono::seconds::period>>(
              metric.time_running)
              .count());
    }
    it = fmt::format_to(
      it, "{}{}batches: {} ({:.2f} {}/batch)\n", indent, indent,
      metric.inbound_measurement.num_batches,
      static_cast<double>(metric.inbound_measurement.num_elements)
        / static_cast<double>(metric.inbound_measurement.num_batches),
      metric.inbound_measurement.unit);
  }
  if (metric.outbound_measurement.unit != "void") {
    it = fmt::format_to(it, "{}outbound:\n", indent);
    it = fmt::format_to(
      it, "{}{}{}: {} at a rate of {:.2f}/s\n", indent, indent,
      metric.outbound_measurement.unit,
      metric.outbound_measurement.num_elements,
      static_cast<double>(metric.outbound_measurement.num_elements)
        / std::chrono::duration_cast<
            std::chrono::duration<double, std::chrono::seconds::period>>(
            metric.time_running)
            .count());
    if (metric.outbound_measurement.unit != operator_type_name<chunk_ptr>()) {
      it = fmt::format_to(
        it, "{}{}bytes: {} at a rate of {:.2f}/s (estimate)\n", indent, indent,
        metric.outbound_measurement.num_approx_bytes,
        static_cast<double>(metric.outbound_measurement.num_approx_bytes)
          / std::chrono::duration_cast<
              std::chrono::duration<double, std::chrono::seconds::period>>(
              metric.time_running)
              .count());
    }
    it = fmt::format_to(
      it, "{}{}batches: {} ({:.2f} {}/batch)\n", indent, indent,
      metric.outbound_measurement.num_batches,
      static_cast<double>(metric.outbound_measurement.num_elements)
        / static_cast<double>(metric.outbound_measurement.num_batches),
      metric.outbound_measurement.unit);
  }
  return result;
}

auto add_implicit_source_and_sink(pipeline pipe, exec_config const& config)
  -> caf::expected<pipeline> {
  if (pipe.infer_type<void>()) {
    // Don't add implicit source.
  } else if (pipe.infer_type<chunk_ptr>()
             && !config.implicit_bytes_source.empty()) {
    auto op
      = pipeline::internal_parse_as_operator(config.implicit_bytes_source);
    if (not op) {
      return caf::make_error(
        ec::logic_error, fmt::format("failed to prepend implicit "
                                     "'{}': {}",
                                     config.implicit_bytes_source, op.error()));
    }
    pipe.prepend(std::move(*op));
  } else if (pipe.infer_type<table_slice>()
             && !config.implicit_events_source.empty()) {
    auto op
      = pipeline::internal_parse_as_operator(config.implicit_events_source);
    if (not op) {
      return caf::make_error(ec::logic_error,
                             fmt::format("failed to prepend implicit "
                                         "'{}': {}",
                                         config.implicit_events_source,
                                         op.error()));
    }
    pipe.prepend(std::move(*op));
  } else {
    // Pipeline is ill-typed. We don't add implicit source or sink and continue,
    // as this is handled further down the line.
    return pipe;
  }
  auto out = pipe.infer_type<void>();
  if (not out) {
    return caf::make_error(ec::logic_error,
                           fmt::format("expected pipeline to accept void here, "
                                       "but: {}",
                                       out.error()));
  }
  if (out->is<void>()) {
    // Pipeline is already closed, nothing to do here.
  } else if (out->is<chunk_ptr>() && !config.implicit_bytes_sink.empty()) {
    auto op = pipeline::internal_parse_as_operator(config.implicit_bytes_sink);
    if (not op) {
      return caf::make_error(
        ec::logic_error, fmt::format("failed to append implicit "
                                     "'{}': {}",
                                     config.implicit_bytes_sink, op.error()));
    }
    pipe.append(std::move(*op));
  } else if (out->is<table_slice>() && !config.implicit_events_sink.empty()) {
    auto op = pipeline::internal_parse_as_operator(config.implicit_events_sink);
    if (not op) {
      return caf::make_error(
        ec::logic_error, fmt::format("failed to append implicit "
                                     "'{}': {}",
                                     config.implicit_events_sink, op.error()));
    }
    pipe.append(std::move(*op));
  }
  if (not pipe.is_closed()) {
    return caf::make_error(ec::logic_error,
                           fmt::format("expected pipeline to be closed after "
                                       "adding implicit source and sink"));
  }
  return pipe;
}

auto exec_pipeline2(std::string content,
                    std::unique_ptr<diagnostic_handler> diag,
                    const exec_config& cfg, caf::actor_system& sys)
  -> caf::expected<void> {
  auto content_view = std::string_view{content};
  auto tokens = tql2::lex(content);
  // TODO: Refactor this.
  arrow::util::InitializeUTF8();
  if (not arrow::util::ValidateUTF8(content)) {
    // Figure out the exact token.
    auto last = size_t{0};
    for (auto& token : tokens) {
      if (not arrow::util::ValidateUTF8(content_view.substr(last, token.end))) {
        // TODO: We can't really do this directly, unless we handle invalid
        // UTF-8 in diagnostics.
        diagnostic::error("invalid UTF8")
          .primary(location{last, token.end})
          .emit(*diag);
      }
      last = token.end;
    }
    return ec::silent;
  }
  if (cfg.dump_tokens) {
    auto last = size_t{0};
    auto has_error = false;
    for (auto& token : tokens) {
      fmt::print("{:>15} {:?}\n", token.kind,
                 content_view.substr(last, token.end - last));
      last = token.end;
      has_error |= token.kind == tql2::token_kind::error;
    }
    if (has_error) {
      return ec::silent;
    }
    return {};
  }
  auto error_emitted = false;
  for (auto& token : tokens) {
    if (token.kind == tql2::token_kind::error) {
      auto begin = size_t{0};
      if (&token != tokens.data()) {
        begin = (&token - 1)->end;
      }
      diagnostic::error("could not parse token")
        .primary(location{begin, token.end})
        .emit(*diag);
      error_emitted = true;
    }
  }
  if (error_emitted) {
    return ec::silent;
  }
  class improve_me final : public diagnostic_handler {
  public:
    explicit improve_me(std::unique_ptr<diagnostic_handler> inner)
      : inner_{std::move(inner)} {
    }

    void emit(diagnostic d) override {
      if (d.severity == severity::error) {
        error_ = true;
      }
      inner_->emit(std::move(d));
    }

    auto error() const -> bool {
      return error_;
    }

  private:
    bool error_ = false;
    std::unique_ptr<diagnostic_handler> inner_;
  };
  auto im = improve_me{std::move(diag)};
  auto parsed = tql2::parse(tokens, content, im);
  if (im.error()) {
    return ec::silent;
  }
  if (cfg.dump_ast) {
    fmt::println("{:#?}", parsed);
    return {};
  }
  tql2::resolve_entities(parsed, im);
  if (im.error()) {
    return ec::silent;
  }
  diagnostic::warning("pipeline is valid, but execution is not yet implemented")
    .hint("use `--dump-ast` to show AST")
    .emit(im);
  return {};
}

} // namespace

auto exec_pipeline(std::string content,
                   std::unique_ptr<diagnostic_handler> diag,
                   const exec_config& cfg, caf::actor_system& sys)
  -> caf::expected<void> {
  if (cfg.tql2) {
    return exec_pipeline2(std::move(content), std::move(diag), cfg, sys);
  }
  auto parsed = tql::parse(std::move(content), *diag);
  if (not parsed) {
    return ec::silent;
  }
  if (cfg.dump_ast) {
    for (auto& op : *parsed) {
      fmt::print("{:#?}\n", op);
    }
    return {};
  }
  auto pipe = tql::to_pipeline(std::move(*parsed));
  auto implicit_pipe = add_implicit_source_and_sink(std::move(pipe), cfg);
  if (not implicit_pipe) {
    return std::move(implicit_pipe.error());
  }
  pipe = std::move(*implicit_pipe);
  pipe = pipe.optimize_if_closed();
  auto self = caf::scoped_actor{sys};
  auto result = caf::expected<void>{};
  auto metrics = std::vector<metric>{};
  // TODO: This command should probably implement signal handling, and check
  // whether a signal was raised in every iteration over the executor. This
  // will likely be easier to implement once we switch to the actor-based
  // asynchronous executor, so we may as well wait until then.
  struct handler_state {
    pipeline_executor_actor executor = {};
  };
  auto handler = self->spawn(
    [&](caf::stateful_actor<handler_state>* self) -> caf::behavior {
      self->set_down_handler([&, self](const caf::down_msg& msg) {
        TENZIR_DEBUG("command received down message `{}` from {}", msg.reason,
                     msg.source);
        if (msg.reason) {
          result = msg.reason;
        }
        self->quit(msg.reason);
      });
      self->state.executor = self->spawn<caf::monitored>(
        pipeline_executor, std::move(pipe),
        caf::actor_cast<receiver_actor<diagnostic>>(self),
        caf::actor_cast<receiver_actor<metric>>(self), node_actor{}, true);
      self->request(self->state.executor, caf::infinite, atom::start_v)
        .then(
          []() {
            TENZIR_DEBUG("started pipeline successfully");
          },
          [&, self](caf::error& err) {
            TENZIR_DEBUG("failed to start pipeline: {}", err);
            result = std::move(err);
            self->quit();
          });
      return {
        [&](diagnostic& d) {
          diag->emit(std::move(d));
        },
        [&](metric& m) {
          if (cfg.dump_metrics) {
            const auto idx = m.operator_index;
            if (idx >= metrics.size()) {
              metrics.resize(idx + 1);
            }
            metrics[idx] = std::move(m);
          }
        },
      };
    });
  self->wait_for(handler);
  TENZIR_DEBUG("command is done");
  if (cfg.dump_metrics) {
    for (const auto& metric : metrics) {
      fmt::print(stderr, "{}", format_metric(metric));
    }
  }
  return result;
}

} // namespace tenzir
