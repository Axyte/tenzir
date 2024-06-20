//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/argument_parser2.hpp>
#include <tenzir/concept/parseable/tenzir/si.hpp>
#include <tenzir/detail/narrow.hpp>
#include <tenzir/series_builder.hpp>
#include <tenzir/tql2/arrow_utils.hpp>
#include <tenzir/tql2/eval.hpp>
#include <tenzir/tql2/plugin.hpp>

#include <arrow/util/tdigest.h>
#include <caf/detail/is_one_of.hpp>

#include <random>

namespace tenzir::plugins::numeric {

namespace {

// TODO: Move this.
template <class... Ts>
concept one_of = caf::detail::is_one_of<Ts...>::value;

class round_use final : public function_use {
public:
  round_use(ast::expression value, std::optional<ast::expression> spec)
    : value_{std::move(value)}, spec_{std::move(spec)} {
  }

  auto run(evaluator eval, session ctx) const -> series override {
    auto value = located{eval(value_), value_.get_location()};
    if (not spec_) {
      // round(<number>)
      return round_without_spec(std::move(value), ctx);
    }
    // round(<duration>, <duration>)
    // round(x, 1h) -> round to multiples of 1h
    // round(<time>, <duration>)
    // round(x, 1h) -> round so that time is multiples of 1h (for UTC timezone?)
    auto spec = located{eval(*spec_), spec_->get_location()};
    return round_with_spec(std::move(value), std::move(spec), ctx);
  }

private:
  static auto round_with_spec(located<series> value, located<series> spec,
                              session ctx) -> series {
    diagnostic::warning("round(_, _) is not implemented yet")
      .primary(spec)
      .emit(ctx);
    return series::null(value.inner.type, value.inner.length());
  }

  static auto round_without_spec(located<series> value, session ctx) -> series {
    auto length = value.inner.length();
    auto null = [&] {
      auto b = arrow::Int64Builder{};
      check(b.AppendNulls(length));
      return finish(b);
    };
    auto f = detail::overload{
      [&](const arrow::NullArray&) {
        return null();
      },
      [](const arrow::Int64Array& arg) {
        return std::make_shared<arrow::Int64Array>(arg.data());
      },
      [&](const arrow::DoubleArray& arg) {
        auto b = arrow::Int64Builder{};
        check(b.Reserve(length));
        for (auto row = int64_t{0}; row < length; ++row) {
          if (arg.IsNull(row)) {
            check(b.AppendNull());
          } else {
            // TODO: NaN, inf, ...
            auto result = std::llround(arg.Value(row));
            check(b.Append(result));
          }
        }
        return finish(b);
      },
      [&]<one_of<arrow::DurationArray, arrow::TimestampArray> T>(const T&) {
        diagnostic::warning("`round` with duration requires second argument")
          .primary(value)
          .hint("for example `round(x, 1h)`")
          .emit(ctx);
        return null();
      },
      [&](const auto&) {
        diagnostic::warning("`round` expected `int64` or `double`, got `{}`",
                            value.inner.type.kind())
          // TODO: Wrong location.
          .primary(value)
          .emit(ctx);
        return null();
      },
    };
    return series{int64_type{}, caf::visit(f, *value.inner.array)};
  }

  ast::expression value_;
  std::optional<ast::expression> spec_;
};

class round final : public function_plugin {
public:
  auto name() const -> std::string override {
    return "tql2.round";
  }

  auto make_function(invocation inv, session ctx) const
    -> std::unique_ptr<function_use> override {
    auto value = ast::expression{};
    auto spec = std::optional<ast::expression>{};
    argument_parser2::fn("round")
      .add(value, "<value>")
      .add(spec, "<spec>")
      .parse(inv, ctx);
    return std::make_unique<round_use>(std::move(value), std::move(spec));
  }
};

class sqrt final : public function_plugin {
public:
  auto name() const -> std::string override {
    return "tql2.sqrt";
  }

  auto make_function(invocation inv, session ctx) const
    -> std::unique_ptr<function_use> override {
    auto expr = ast::expression{};
    argument_parser2::fn("sqrt").add(expr, "<number>").parse(inv, ctx);
    return function_use::make(
      [expr = std::move(expr)](evaluator eval, session ctx) -> series {
        auto value = eval(expr);
        auto compute = [&](const arrow::DoubleArray& x) {
          auto b = arrow::DoubleBuilder{};
          check(b.Reserve(x.length()));
#if 0
          // TODO: This is probably UB.
          auto alloc = arrow::AllocateBuffer(x.length() * sizeof(double));
          TENZIR_ASSERT(alloc.ok());
          auto buffer = std::move(*alloc);
          TENZIR_ASSERT(buffer);
          auto target = new (buffer->mutable_data()) double[x.length()];
          auto begin = x.raw_values();
          auto end = begin + x.length();
          auto null_alloc = arrow::AllocateBuffer((x.length() + 7) / 8);
          TENZIR_ASSERT(null_alloc.ok());
          auto null_buffer = std::move(*null_alloc);
          TENZIR_ASSERT(null_buffer);
          auto null_target = null_buffer->mutable_data();
          if (auto nulls = x.null_bitmap()) {
            std::memcpy(null_target, nulls->data(), nulls->size());
          } else {
            std::memset(null_target, 0xFF, (x.length() + 7) / 8);
          }
          while (begin != end) {
            auto val = *begin;
            if (val < 0.0) [[unlikely]] {
              auto mask = 0xFF ^ (0x01 << ((begin - end) % 8));
              null_target[(begin - end) / 8] &= mask;
              // TODO: Emit warning/error?
            }
            *target = std::sqrt(*begin);
            ++begin;
            ++target;
          }
          return std::make_shared<arrow::DoubleArray>(
            x.length(), std::move(buffer), std::move(null_buffer));
#else
          // TODO
          for (auto y : x) {
            if (not y) {
              // TODO: Warning?
              check(b.AppendNull());
              continue;
            }
            auto z = *y;
            if (z < 0.0) {
              // TODO: Warning?
              check(b.AppendNull());
              continue;
            }
            check(b.Append(std::sqrt(z)));
          }
#endif
          return finish(b);
        };
        auto f = detail::overload{
          [&](const arrow::DoubleArray& value) {
            return compute(value);
          },
          [&](const arrow::Int64Array& value) {
            // TODO: Conversation should be automatic (if not
            // part of the kernel).
            auto b = arrow::DoubleBuilder{};
            check(b.Reserve(value.length()));
            for (auto y : value) {
              if (y) {
                check(b.Append(static_cast<double>(*y)));
              } else {
                check(b.AppendNull());
              }
            }
            return compute(*finish(b));
          },
          [&](const arrow::NullArray& value) {
            return series::null(double_type{}, value.length()).array;
          },
          [&](const auto&) {
            // TODO: Think about what we want and generalize this.
            diagnostic::warning("expected `number`, got `{}`",
                                value.type.kind())
              .primary(expr)
              .docs("https://docs.tenzir.com/functions/sqrt")
              .emit(ctx);
            auto b = arrow::DoubleBuilder{};
            check(b.AppendNulls(value.length()));
            return finish(b);
          },
        };
        return {double_type{}, caf::visit(f, *value.array)};
      });
  }
};

class random final : public function_plugin {
public:
  auto name() const -> std::string override {
    return "tql2.random";
  }

  auto make_function(invocation inv, session ctx) const
    -> std::unique_ptr<function_use> override {
    argument_parser2::fn("random").parse(inv, ctx);
    return function_use::make([](evaluator eval, session ctx) -> series {
      TENZIR_UNUSED(ctx);
      auto b = arrow::DoubleBuilder{};
      check(b.Reserve(eval.length()));
      auto engine = std::default_random_engine{std::random_device{}()};
      auto dist = std::uniform_real_distribution<double>{0.0, 1.0};
      for (auto i = int64_t{0}; i < eval.length(); ++i) {
        check(b.Append(dist(engine)));
      }
      return {double_type{}, finish(b)};
    });
  }

  // auto eval(invocation inv, diagnostic_handler& dh) const -> series override {
  //   auto success = function_argument_parser{"random"}.parse(inv, dh);
  //   if (not success) {
  //     return series::null(double_type{}, inv.length);
  //   }
  //   if (not inv.args.empty()) {
  //     diagnostic::error("`random` expects no arguments")
  //       .primary(inv.self)
  //       .emit(dh);
  //   }
  //   auto b = arrow::DoubleBuilder{};
  //   check(b.Reserve(inv.length));
  //   auto engine = std::default_random_engine{std::random_device{}()};
  //   auto dist = std::uniform_real_distribution<double>{0.0, 1.0};
  //   for (auto i = int64_t{0}; i < inv.length; ++i) {
  //     check(b.Append(dist(engine)));
  //   }
  //   return {double_type{}, finish(b)};
  // }
};

// TODO: This also needs to work with durations, so the default return value
// should be `null` instead.
class sum_instance final : public aggregation_instance {
public:
  explicit sum_instance(ast::expression expr) : expr_{std::move(expr)} {
  }

  using sum_t = variant<int64_t, uint64_t, double>;

  void update(const table_slice& input, session ctx) override {
    // TODO: values.type
    auto arg = eval(expr_, input, ctx);
    auto f = detail::overload{
      [&](const arrow::Int64Array& array) {
        // Double => Double
        // UInt64 => Int64
        // Int64 => Int64
        sum_ = sum_.match(
          [&](double sum) -> sum_t {
            for (auto row = int64_t{0}; row < array.length(); ++row) {
              if (array.IsNull(row)) {
                // TODO: What do we do here?
              } else {
                sum += static_cast<double>(array.Value(row));
              }
            }
            return sum;
          },
          [&](auto previous) -> sum_t {
            static_assert(caf::detail::is_one_of<decltype(previous), int64_t,
                                                 uint64_t>::value);
            // TODO: Check narrowing.
            auto sum = static_cast<int64_t>(previous);
            for (auto row = int64_t{0}; row < array.length(); ++row) {
              if (array.IsNull(row)) {
                // TODO: What do we do here?
              } else {
                sum += array.Value(row);
              }
            }
            return sum;
          });
      },
      [&](const arrow::UInt64Array& array) {
        // Double => Double
        // UInt64 => UInt64Array
        // Int64 => Int64
        TENZIR_UNUSED(array);
        TENZIR_TODO();
      },
      [&](const arrow::DoubleArray& array) {
        // * => Double
        auto sum = sum_.match([](auto sum) {
          return static_cast<double>(sum);
        });
        for (auto row = int64_t{0}; row < array.length(); ++row) {
          if (array.IsNull(row)) {
            // TODO: What do we do here?
          } else {
            sum += array.Value(row);
          }
        }
        sum_ = sum;
      },
      [&](const arrow::NullArray&) {
        // do nothing
      },
      [&](auto&) {
        diagnostic::warning("expected integer or double, but got {}",
                            arg.type.kind())
          .primary(expr_)
          .emit(ctx);
      },
    };
    caf::visit(f, *arg.array);
  }

  auto finish() -> data override {
    return sum_.match([](auto sum) {
      return data{sum};
    });
  }

private:
  ast::expression expr_;
  sum_t sum_ = uint64_t{0};
};

class sum final : public aggregation_plugin {
public:
  auto name() const -> std::string override {
    return "tql2.sum";
  }

  auto make_aggregation(invocation inv, session ctx) const
    -> std::unique_ptr<aggregation_instance> override {
    if (inv.call.args.size() != 1) {
      diagnostic::error("expected exactly one argument, got {}",
                        inv.call.args.size())
        .primary(inv.call)
        .emit(ctx);
      return nullptr;
    }
    return std::make_unique<sum_instance>(inv.call.args[0]);
  }
};

class count_instance final : public aggregation_instance {
public:
  explicit count_instance(std::optional<ast::expression> expr)
    : expr_{std::move(expr)} {
  }

  void update(const table_slice& input, session ctx) override {
    if (not expr_) {
      count_ += detail::narrow<int64_t>(input.rows());
      return;
    }
    auto arg = eval(*expr_, input, ctx);
    count_ += arg.array->length() - arg.array->null_count();
  }

  auto finish() -> data override {
    return count_;
  }

private:
  std::optional<ast::expression> expr_;
  int64_t count_ = 0;
};

class count final : public aggregation_plugin {
public:
  auto name() const -> std::string override {
    return "tql2.count";
  }

  auto make_aggregation(invocation inv, session ctx) const
    -> std::unique_ptr<aggregation_instance> override {
    auto arg = std::optional<ast::expression>{};
    argument_parser2::fn("count").add(arg, "<expr>").parse(inv, ctx);
    return std::make_unique<count_instance>(std::move(arg));
  }
};

class quantile_instance final : public aggregation_instance {
public:
  quantile_instance(ast::expression expr, double quantile, uint32_t delta,
                    uint32_t buffer_size)
    : expr_{std::move(expr)}, quantile_{quantile}, digest_{delta, buffer_size} {
  }

  void update(const table_slice& input, session ctx) override {
    auto arg = eval(expr_, input, ctx);
    auto f = detail::overload{
      [&]<one_of<double_type, int64_type, uint64_type> Type>(const Type& ty) {
        auto& array = caf::get<type_to_arrow_array_t<Type>>(*arg.array);
        for (auto value : values(ty, array)) {
          if (value) {
            digest_.NanAdd(*value);
          }
        }
      },
      [&](const null_type&) {
        // Silently ignore nulls, like we do above.
      },
      [&](const auto&) {
        diagnostic::warning("expected number, got `{}`", arg.type.kind())
          .primary(expr_)
          .emit(ctx);
      },
    };
    caf::visit(f, arg.type);
  }

  auto finish() -> data override {
    return digest_.Quantile(quantile_);
  }

private:
  ast::expression expr_;
  double quantile_;
  arrow::internal::TDigest digest_;
};

class quantile final : public aggregation_plugin {
public:
  auto name() const -> std::string override {
    return "tql2.quantile";
  }

  auto make_aggregation(invocation inv, session ctx) const
    -> std::unique_ptr<aggregation_instance> override {
    // TODO: Improve.
    auto expr = ast::expression{};
    // TODO: Reconsider whether we want a default here. Maybe positional?
    auto quantile_opt = std::optional<located<double>>{};
    auto delta_opt = std::optional<located<int64_t>>{};
    auto buffer_size_opt = std::optional<located<int64_t>>{};
    argument_parser2::fn("quantile")
      .add(expr, "expr")
      .add("q", quantile_opt)
      // TODO: This is a test for hidden parameters.
      .add("_delta", delta_opt)
      .add("_buffer_size", buffer_size_opt)
      .parse(inv, ctx);
    // TODO: Type conversion? Probably not necessary here, but maybe elsewhere.
    // TODO: This is too much manual labor.
    auto quantile = 0.5;
    if (quantile_opt) {
      if (quantile_opt->inner < 0.0 || quantile_opt->inner > 1.0) {
        diagnostic::error("expected quantile to be in [0.0, 1.0]")
          .primary(*quantile_opt)
          .emit(ctx);
      }
      quantile = quantile_opt->inner;
    }
    // TODO: We put this function somewhere. Find it.
    auto try_narrow = [](int64_t x) -> std::optional<uint32_t> {
      if (0 <= x && x <= std::numeric_limits<uint32_t>::max()) {
        return static_cast<uint32_t>(x);
      }
      return std::nullopt;
    };
    auto delta = uint32_t{100};
    if (delta_opt) {
      if (auto narrowed = try_narrow(delta_opt->inner)) {
        delta = *narrowed;
      } else {
        diagnostic::error("expected delta to fit in a uint32")
          .primary(*delta_opt)
          .emit(ctx);
      }
    }
    auto buffer_size = uint32_t{500};
    if (buffer_size_opt) {
      if (auto narrowed = try_narrow(buffer_size_opt->inner)) {
        buffer_size = *narrowed;
      } else {
        diagnostic::error("expected buffer size to fit in a uint32")
          .primary(*buffer_size_opt)
          .emit(ctx);
      }
    }
    return std::make_unique<quantile_instance>(expr, quantile, delta,
                                               buffer_size);
  }
};

} // namespace

} // namespace tenzir::plugins::numeric

TENZIR_REGISTER_PLUGIN(tenzir::plugins::numeric::round)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::numeric::sqrt)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::numeric::random)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::numeric::sum)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::numeric::count)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::numeric::quantile)
