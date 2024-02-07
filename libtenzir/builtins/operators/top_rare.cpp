//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/argument_parser.hpp>
#include <tenzir/concept/parseable/string/char_class.hpp>
#include <tenzir/concept/parseable/tenzir/pipeline.hpp>
#include <tenzir/detail/string_literal.hpp>
#include <tenzir/error.hpp>
#include <tenzir/location.hpp>
#include <tenzir/logger.hpp>
#include <tenzir/pipeline.hpp>
#include <tenzir/plugin.hpp>

namespace tenzir::plugins::top_rare {

namespace {

template <detail::string_literal Name, detail::string_literal SortOrder>
class top_rare_plugin final : public virtual operator_parser_plugin {
  auto name() const -> std::string override {
    return std::string{Name.str()};
  }

  auto signature() const -> operator_signature override {
    return {.transformation = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser = argument_parser{
      std::string{Name.str()}, fmt::format("https://docs.tenzir.com/docs/next/"
                                           "operators/transformations/{}",
                                           Name.str())};
    auto field = located<std::string>{};
    auto count_field = std::optional<located<std::string>>{};
    parser.add(field, "<str>");
    parser.add("-c,--count-field", count_field, "<str>");
    parser.parse(p);
    if (count_field) {
      if (count_field->inner.empty()) {
        diagnostic::error("`--count-field` must not be empty")
          .primary(count_field->source)
          .throw_();
      }
      if (count_field->inner == field.inner) {
        diagnostic::error("invalid duplicate field value `{}` for count and "
                          "value fields",
                          field.inner)
          .primary(field.source)
          .primary(count_field->source)
          .throw_();
      }
    } else {
      if (field.inner == default_count_field) {
        diagnostic::error("invalid duplicate field value `{}` for count and "
                          "value fields",
                          field.inner)
          .primary(field.source)
          .throw_();
      } else {
        count_field.emplace();
        count_field->inner = default_count_field;
      }
    }

    // TODO: Replace this textual parsing with a subpipeline to improve
    // diagnostics for this operator.
    auto repr = fmt::format("summarize "
                            "{0}=count({1}) by "
                            "{1} | sort {0} {2}",
                            count_field->inner, field.inner, SortOrder.str());
    auto parsed = pipeline::internal_parse_as_operator(repr);
    if (not parsed) {
      // TODO: Improve error message.
      diagnostic::error(parsed.error()).throw_();
    }
    return std::move(*parsed);
  }

private:
  static constexpr auto default_count_field = "count";
};

using top_plugin = top_rare_plugin<"top", "desc">;
using rare_plugin = top_rare_plugin<"rare", "asc">;

} // namespace

} // namespace tenzir::plugins::top_rare

TENZIR_REGISTER_PLUGIN(tenzir::plugins::top_rare::top_plugin)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::top_rare::rare_plugin)
