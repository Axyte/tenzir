//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/argument_parser2.hpp"
#include "tenzir/tql2/ast.hpp"

#include <tenzir/tql2/arrow_utils.hpp>
#include <tenzir/tql2/eval_impl.hpp>
#include <tenzir/tql2/plugin.hpp>

namespace tenzir::plugins::misc {

namespace {

class type_id final : public function_plugin {
public:
  auto name() const -> std::string override {
    return "tql2.type_id";
  }

  auto make_function(invocation inv, session ctx) const
    -> std::unique_ptr<function_use> override {
    auto expr = ast::expression{};
    argument_parser2::fn("type_id").add(expr, "<value>").parse(inv, ctx);
    return function_use::make(
      [expr = std::move(expr)](evaluator eval, session ctx) -> series {
        auto value = eval(expr);
        auto type_id = value.type.make_fingerprint();
        auto b = arrow::StringBuilder{};
        // TODO
        check(b.Reserve(value.length()));
        for (auto i = int64_t{0}; i < value.length(); ++i) {
          check(b.Append(type_id));
        }
        return {string_type{}, finish(b)};
      });
  }
};

class secret final : public function_plugin {
public:
  auto name() const -> std::string override {
    return "tql2.secret";
  }

  auto make_function(invocation inv, session ctx) const
    -> std::unique_ptr<function_use> override {
    auto expr = ast::expression{};
    argument_parser2::fn("secret").add(expr, "<string>").parse(inv, ctx);
    return function_use::make(
      [expr = std::move(expr)](evaluator eval, session ctx) -> series {
        auto value = eval(expr);
        auto b = arrow::StringBuilder{};
        check(b.Reserve(value.length()));
        for (auto i = int64_t{0}; i < value.length(); ++i) {
          // TODO: Actually resolve the secret.
          check(b.Append("A385F-BB052-CAFE9-CEC2D"));
        }
        return {string_type{}, finish(b)};
      });
  }
};

} // namespace

} // namespace tenzir::plugins::misc

TENZIR_REGISTER_PLUGIN(tenzir::plugins::misc::type_id)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::misc::secret)
