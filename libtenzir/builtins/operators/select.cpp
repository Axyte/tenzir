//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/arrow_table_slice.hpp>
#include <tenzir/concept/convertible/data.hpp>
#include <tenzir/concept/convertible/to.hpp>
#include <tenzir/concept/parseable/tenzir/pipeline.hpp>
#include <tenzir/error.hpp>
#include <tenzir/pipeline.hpp>
#include <tenzir/plugin.hpp>
#include <tenzir/select_optimization.hpp>
#include <tenzir/type.hpp>

#include <arrow/type.h>
#include <caf/expected.hpp>

#include <algorithm>
#include <cstddef>
#include <optional>
#include <utility>

namespace tenzir::plugins::select {

namespace {

/// The configuration of a select pipeline operator.
struct configuration {
  /// The key suffixes of the fields to keep.
  std::vector<std::string> fields = {};

  /// Support type inspection for easy parsing with convertible.
  template <class Inspector>
  friend auto inspect(Inspector& f, configuration& x) {
    return f.apply(x.fields);
  }

  /// Enable parsing from a record via convertible.
  static inline const record_type& schema() noexcept {
    static auto result = record_type{
      {"fields", list_type{string_type{}}},
    };
    return result;
  }
};

class select_operator final
  : public schematic_operator<select_operator, std::vector<offset>> {
public:
  select_operator() = default;

  explicit select_operator(configuration config) noexcept
    : config_{std::move(config)} {
    // nop
  }

  auto initialize(const type& schema, operator_control_plane&) const
    -> caf::expected<state_type> override {
    auto indices = state_type{};
    for (const auto& field : config_.fields) {
      for (auto index : schema.resolve(field)) {
        indices.push_back(std::move(index));
      }
    }
    std::sort(indices.begin(), indices.end());
    indices.erase(std::unique(indices.begin(), indices.end()), indices.end());
    return indices;
  }

  auto process(table_slice slice, state_type& state) const
    -> output_type override {
    return select_columns(slice, state);
  }

  auto name() const -> std::string override {
    return "select";
  }

  auto optimize(expression const& filter, event_order order,
                select_optimization const& selection) const
    -> optimize_result override {
    if (config_.fields.empty() && selection.fields_of_interest.empty()) {
      return optimize_result::order_invariant(*this, order);
    }
    if (!selection.fields_of_interest.empty()) {
      auto config_fields = config_.fields;
      auto selection_fields = selection.fields_of_interest;
      std::sort(config_fields.begin(), config_fields.end());
      std::sort(selection_fields.begin(), selection_fields.end());
      std::vector<std::string> intersection;
      std::set_intersection(config_fields.begin(),
                            config_fields.end(), // First range
                            selection_fields.begin(),
                            selection_fields.end(),          // Second range
                            std::back_inserter(intersection) // Output iterator
      );
      if (intersection.empty()) {
        return optimize_result{filter, order, copy(), std::nullopt};
      }
      return optimize_result{filter, order, nullptr,
                             select_optimization(intersection)};
    }
    return optimize_result{filter, order, nullptr,
                           select_optimization(config_.fields)};
  }

  friend auto inspect(auto& f, select_operator& x) -> bool {
    return f.apply(x.config_);
  }

private:
  /// The underlying configuration of the transformation.
  configuration config_ = {};
};

class plugin final : public virtual operator_plugin<select_operator> {
public:
  auto signature() const -> operator_signature override {
    return {.transformation = true};
  }

  auto make_operator(std::string_view pipeline) const
    -> std::pair<std::string_view, caf::expected<operator_ptr>> override {
    using parsers::end_of_pipeline_operator, parsers::required_ws_or_comment,
      parsers::optional_ws_or_comment, parsers::extractor,
      parsers::extractor_char, parsers::extractor_list;
    const auto* f = pipeline.begin();
    const auto* const l = pipeline.end();
    const auto p = required_ws_or_comment >> extractor_list
                   >> optional_ws_or_comment >> end_of_pipeline_operator;
    auto config = configuration{};
    if (!p(f, l, config.fields)) {
      return {
        std::string_view{f, l},
        caf::make_error(ec::syntax_error, fmt::format("failed to parse select "
                                                      "operator: '{}'",
                                                      pipeline)),
      };
    }
    return {
      std::string_view{f, l},
      std::make_unique<select_operator>(std::move(config)),
    };
  }
};

} // namespace

} // namespace tenzir::plugins::select

TENZIR_REGISTER_PLUGIN(tenzir::plugins::select::plugin)
