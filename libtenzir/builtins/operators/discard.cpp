//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/argument_parser.hpp>
#include <tenzir/plugin.hpp>

namespace tenzir::plugins::discard {

namespace {

class discard_operator final : public crtp_operator<discard_operator> {
public:
  discard_operator() = default;

  auto name() const -> std::string override {
    return "discard";
  }

  template <operator_input_batch Batch>
  auto operator()(generator<Batch> input) const -> generator<std::monostate> {
    for (auto&& slice : input) {
      (void)slice;
      co_yield {};
    }
  }

  auto internal() const -> bool override {
    return true;
  }

  auto optimize(expression const& filter, event_order order,
                select_optimization const& selection) const
    -> optimize_result override {
    (void)selection;
    (void)filter, (void)order;
    return optimize_result{std::nullopt, event_order::unordered, copy(),
                           selection};
  }

  friend auto inspect(auto& f, discard_operator& x) -> bool {
    return f.object(x).fields();
  }
};

class plugin final : public virtual operator_plugin<discard_operator> {
public:
  auto signature() const -> operator_signature override {
    return {.sink = true};
  }

  auto parse_operator(parser_interface&) const -> operator_ptr override {
    return std::make_unique<discard_operator>();
  }
};

} // namespace

} // namespace tenzir::plugins::discard

TENZIR_REGISTER_PLUGIN(tenzir::plugins::discard::plugin)
