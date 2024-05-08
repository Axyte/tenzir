//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/concept/parseable/string/char_class.hpp>
#include <tenzir/concept/parseable/tenzir/pipeline.hpp>
#include <tenzir/detail/croncpp.hpp>
#include <tenzir/detail/string_literal.hpp>
#include <tenzir/detail/weak_run_delayed.hpp>
#include <tenzir/error.hpp>
#include <tenzir/logger.hpp>
#include <tenzir/parser_interface.hpp>
#include <tenzir/pipeline.hpp>
#include <tenzir/plugin.hpp>

#include <arrow/type.h>
#include <caf/typed_event_based_actor.hpp>

namespace tenzir::plugins::every_cron {

namespace {

using alarm_clock_actor = caf::typed_actor<
  // Waits for `delay` before returning.
  auto(duration delay)->caf::result<void>>;

auto make_alarm_clock(alarm_clock_actor::pointer self)
  -> alarm_clock_actor::behavior_type {
  return {
    [self](duration delay) -> caf::result<void> {
      auto rp = self->make_response_promise<void>();
      detail::weak_run_delayed(self, delay, [rp]() mutable {
        rp.deliver();
      });
      return rp;
    },
  };
}

template <typename T>
concept scheduler_concept
  = requires(const T t, time::clock::time_point now, parser_interface& p) {
      { t.next_after(now) } -> std::same_as<time::clock::time_point>;
      { T::parse(p) } -> std::same_as<T>;
      { T::name } -> std::convertible_to<std::string_view>;
    };

/// Base template for all kinds of scheduled execution operators, such as the
/// 'every' and 'cron' The actual scheduling logic, CAF serialization and name
/// are handled by the `Scheduler` template parameter
template <scheduler_concept Scheduler>
class scheduled_execution_operator final : public operator_base {
public:
  scheduled_execution_operator() = default;

  scheduled_execution_operator(operator_ptr op, Scheduler scheduler)
    : op_{std::move(op)}, scheduler_{std::move(scheduler)} {
    if (auto* op = dynamic_cast<scheduled_execution_operator*>(op_.get())) {
      op_ = std::move(op->op_);
    }
    TENZIR_ASSERT(
      not dynamic_cast<const scheduled_execution_operator*>(op_.get()));
  }

  auto optimize(expression const& filter, event_order order) const
    -> optimize_result override {
    auto result = op_->optimize(filter, order);
    if (not result.replacement) {
      return result;
    }
    if (auto* pipe = dynamic_cast<pipeline*>(result.replacement.get())) {
      auto ops = std::move(*pipe).unwrap();
      for (auto& op : ops) {
        op = std::make_unique<scheduled_execution_operator>(
          std::move(result.replacement), std::move(scheduler_));
        // Only the first operator can be a source and needs to be replaced.
        break;
      }
      result.replacement = std::make_unique<pipeline>(std::move(ops));
      return result;
    }
    result.replacement = std::make_unique<scheduled_execution_operator>(
      std::move(result.replacement), std::move(scheduler_));
    return result;
  }

  template <class Input, class Output>
  auto run(operator_input input,
           operator_control_plane& ctrl) const -> generator<Output> {
    auto alarm_clock = ctrl.self().spawn(make_alarm_clock);
    auto next_run = scheduler_.next_after(time::clock::now());
    auto done = false;
    co_yield {};
    auto make_input = [&, input = std::move(input)]() mutable {
      if constexpr (std::is_same_v<Input, std::monostate>) {
        (void)next_run;
        TENZIR_ASSERT(std::holds_alternative<std::monostate>(input));
        return []() -> std::monostate {
          return {};
        };
      } else {
        TENZIR_ASSERT(std::holds_alternative<generator<Input>>(input));
        auto typed_input = std::move(std::get<generator<Input>>(input));
        // We prime the generator's coroutine manually so that we can use
        // `unsafe_current()` in the adapted generator.
        typed_input.begin();
        return
          [&, input = std::move(typed_input)]() mutable -> generator<Input> {
            auto it = input.unsafe_current();
            while (time::clock::now() < next_run and it != input.end()) {
              co_yield std::move(*it);
              ++it;
            }
            done = it == input.end();
          };
      }
    }();
    while (true) {
      auto gen = op_->instantiate(make_input(), ctrl);
      if (not gen) {
        diagnostic::error(gen.error()).emit(ctrl.diagnostics());
        co_return;
      }
      auto typed_gen = std::get_if<generator<Output>>(&*gen);
      TENZIR_ASSERT(typed_gen);
      for (auto&& result : *typed_gen) {
        co_yield std::move(result);
      }
      if (done) {
        break;
      }
      const auto now = time::clock::now();
      const auto delta = next_run - now;
      if (delta < duration::zero()) {
        next_run = scheduler_.next_after(now);
        continue;
      }
      next_run = scheduler_.next_after(next_run);

      ctrl.self()
        .request(alarm_clock, caf::infinite, delta)
        .await([]() { /*nop*/ },
               [&](const caf::error& err) {
                 diagnostic::error(err)
                   .note("failed to wait for {} timeout", data{next_run - now})
                   .emit(ctrl.diagnostics());
               });
      co_yield {};
    }
  }

  auto instantiate(operator_input input, operator_control_plane& ctrl) const
    -> caf::expected<operator_output> override {
    auto f = [&]<class Input>(const Input&) -> caf::expected<operator_output> {
      using generator_type
        = std::conditional_t<std::is_same_v<Input, std::monostate>,
                             generator<std::monostate>, Input>;
      using input_type = typename generator_type::value_type;
      using tag_type
        = std::conditional_t<std::is_same_v<input_type, std::monostate>,
                             tag<void>, tag<input_type>>;
      auto output = infer_type_impl(tag_type{});
      if (not output) {
        return std::move(output.error());
      }
      if (output->template is<table_slice>()) {
        return run<input_type, table_slice>(std::move(input), ctrl);
      }
      if (output->template is<chunk_ptr>()) {
        return run<input_type, chunk_ptr>(std::move(input), ctrl);
      }
      TENZIR_ASSERT(output->template is<void>());
      return run<input_type, std::monostate>(std::move(input), ctrl);
    };
    return std::visit(f, input);
  }

  auto copy() const -> operator_ptr override {
    return std::make_unique<scheduled_execution_operator>(op_->copy(),
                                                          scheduler_);
  };

  auto location() const -> operator_location override {
    return op_->location();
  }

  auto detached() const -> bool override {
    return op_->detached();
  }

  auto internal() const -> bool override {
    return op_->internal();
  }

  auto input_independent() const -> bool override {
    return op_->input_independent();
  }

  auto infer_type_impl(operator_type input) const
    -> caf::expected<operator_type> override {
    return op_->infer_type(input);
  }

  auto name() const -> std::string override {
    return std::string{scheduler_.name};
  }

  friend auto inspect(auto& f, scheduled_execution_operator& x) -> bool {
    return f.object(x).fields(f.field("op", x.op_), x.scheduler_.field(f));
  }

private:
  operator_ptr op_;
  Scheduler scheduler_;
};

/// Base plugin template for scheduled execution operators
/// The actual parsing is handled by the `Scheduler` type
template <scheduler_concept Scheduler>
class scheduled_execution_plugin
  : public virtual operator_plugin<scheduled_execution_operator<Scheduler>> {
public:
  auto signature() const -> operator_signature override {
    return {
      .source = true,
      .transformation = true,
      .sink = true,
    };
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    using operator_type = scheduled_execution_operator<Scheduler>;
    auto scheduler = Scheduler::parse(p);

    auto result = p.parse_operator();
    if (not result.inner) {
      diagnostic::error("failed to parse operator")
        .primary(result.source)
        .throw_();
    }
    if (auto* pipe = dynamic_cast<pipeline*>(result.inner.get())) {
      auto ops = std::move(*pipe).unwrap();
      for (auto& op : ops) {
        op = std::make_unique<operator_type>(std::move(op),
                                             std::move(scheduler));
        // Only the first operator can be a source and needs to be replaced.
        break;
      }
      return std::make_unique<pipeline>(std::move(ops));
    }
    return std::make_unique<operator_type>(std::move(result.inner),
                                           std::move(scheduler));
  }
};

/// scheduler for the 'every' operator
class every_scheduler {
public:
  every_scheduler() = default;
  explicit every_scheduler(const duration interval) : interval_{interval} {
  }

  constexpr static std::string_view name = "every";

  auto field(auto& f) {
    return f.field("interval", interval_);
  }

  auto next_after(time::clock::time_point now) const noexcept {
    return std::chrono::time_point_cast<time::clock::time_point::duration>(
      now + interval_);
  }

  static auto parse(parser_interface& p) {
    auto interval_data = p.parse_data();
    const auto* interval = caf::get_if<duration>(&interval_data.inner);
    if (not interval) {
      diagnostic::error("interval must be a duration")
        .primary(interval_data.source)
        .throw_();
    }
    if (*interval <= duration::zero()) {
      diagnostic::error("interval must be a positive duration")
        .primary(interval_data.source)
        .throw_();
    }
    return every_scheduler{*interval};
  }

private:
  duration interval_;
};
using every_operator = scheduled_execution_operator<every_scheduler>;
using every_plugin = scheduled_execution_plugin<every_scheduler>;

/// scheduler for the 'cron' operator
class cron_scheduler {
public:
  cron_scheduler() = default;
  explicit cron_scheduler(detail::cron::cronexpr expr)
    : expr_{std::move(expr)} {
  }

  constexpr static std::string_view name = "cron";

  auto next_after(time::clock::time_point now) const noexcept {
    const auto tt = time::clock::to_time_t(now);

    return time::clock::from_time_t(detail::cron::cron_next(expr_, tt));
  }

  auto field(auto& f) {
    const auto get = [this]() {
      return detail::cron::to_cronstr(expr_);
    };
    const auto set = [this](std::string_view text) {
      expr_ = detail::cron::make_cron(text);
    };
    return f.field("cronexpr", get, set);
  }

  static cron_scheduler parse(parser_interface& p) {
    auto cronexpr_string = p.accept_shell_arg();
    if (not cronexpr_string) {
      diagnostic::error("expected cron expression")
        .primary(p.current_span())
        .throw_();
    }
    try {
      return cron_scheduler{detail::cron::make_cron(cronexpr_string->inner)};
    } catch (const detail::cron::bad_cronexpr& ex) {
      // croncpp re-throws the message from the stoul failure
      // which happens for most cases of invalid expressions
      // libstdc++ and libc++ contain the string "stoul" in their what()
      // we can check for this and provide a slightly better error message
      if (std::string_view{ex.what()}.find("stoul") != std::string_view::npos) {
        diagnostic::error(
          "bad cron expression: invalid value for at least one field")
          .primary(cronexpr_string->source)
          .throw_();
      } else {
        diagnostic::error("bad cron expression: \"{}\"", ex.what())
          .primary(cronexpr_string->source)
          .throw_();
      }
    }
  }

private:
  detail::cron::cronexpr expr_;
};
using cron_operator = scheduled_execution_operator<cron_scheduler>;
using cron_plugin = scheduled_execution_plugin<cron_scheduler>;

} // namespace

} // namespace tenzir::plugins::every_cron

TENZIR_REGISTER_PLUGIN(tenzir::plugins::every_cron::every_plugin)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::every_cron::cron_plugin)
