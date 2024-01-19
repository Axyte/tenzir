//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/argument_parser.hpp>
#include <tenzir/plugin.hpp>
#include <tenzir/series_builder.hpp>

#include <caf/typed_event_based_actor.hpp>

namespace tenzir::plugins::diagnostics {

namespace {

class plugin final : public virtual operator_parser_plugin {
public:
  auto name() const -> std::string override {
    return "diagnostics";
  };

  auto signature() const -> operator_signature override {
    return {.source = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser = argument_parser{"diagnostics", "https://docs.tenzir.com/next/"
                                                 "operators/diagnostics"};
    bool live = false;
    parser.add("--live", live);
    parser.parse(p);
    const auto definition = fmt::format("export --internal {}| where #schema "
                                        "== /tenzir.diagnostics.*/",
                                        live ? " --live" : "");
    auto result = pipeline::internal_parse_as_operator(definition);
    if (not result) {
      diagnostic::error("failed to transform `diagnostics` operator into `{}`",
                        definition)
        .hint("{}", result.error())
        .throw_();
    }
    return std::move(*result);
  }
};

} // namespace

} // namespace tenzir::plugins::diagnostics

TENZIR_REGISTER_PLUGIN(tenzir::plugins::diagnostics::plugin)
