//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/arrow_table_slice.hpp>
#include <tenzir/cast.hpp>
#include <tenzir/concept/parseable/tenzir/data.hpp>
#include <tenzir/concept/parseable/tenzir/expression.hpp>
#include <tenzir/concept/parseable/tenzir/pipeline.hpp>
#include <tenzir/concept/parseable/to.hpp>
#include <tenzir/detail/narrow.hpp>
#include <tenzir/detail/overload.hpp>
#include <tenzir/error.hpp>
#include <tenzir/plugin.hpp>
#include <tenzir/table_slice_builder.hpp>
#include <tenzir/type.hpp>

#include <arrow/array.h>
#include <fmt/format.h>

namespace tenzir::plugins::put_extend_replace {

namespace {

enum class mode {
  put,
  extend,
  replace,
};

constexpr auto operator_name(enum mode mode) -> std::string_view {
  switch (mode) {
    case mode::put:
      return "put";
    case mode::extend:
      return "extend";
    case mode::replace:
      return "replace";
  }
  return "<unknown>";
}

/// The parsed configuration.
struct configuration {
  std::vector<std::tuple<std::string, caf::optional<operand>>>
    extractor_to_operand = {};

  friend auto inspect(auto& f, configuration& x) -> bool {
    return f.apply(x.extractor_to_operand);
  }
};

auto make_drop() {
  return
    [](struct record_type::field, std::shared_ptr<arrow::Array>)
      -> std::vector<
        std::pair<struct record_type::field, std::shared_ptr<arrow::Array>>> {
    return {};
  };
}

template <mode Mode>
auto make_extend(const table_slice& slice, const configuration& config,
                 operator_control_plane& ctrl,
                 std::unordered_set<std::string> duplicates, bool override) {
  return [&, duplicates = std::move(duplicates),
          override](struct record_type::field input_field,
                    std::shared_ptr<arrow::Array> input_array) mutable {
    // For each field in the configuration, we want to create a new field.
    auto result = std::vector<
      std::pair<struct record_type::field, std::shared_ptr<arrow::Array>>>{};
    result.reserve(override ? config.extractor_to_operand.size()
                            : 1 + config.extractor_to_operand.size());
    for (auto it = config.extractor_to_operand.rbegin();
         it < config.extractor_to_operand.rend(); ++it) {
      auto [field, operand] = *it;
      if (not duplicates.insert(field).second) {
        ctrl.warn(caf::make_error(
          ec::invalid_argument,
          fmt::format("{} operator ignores duplicate or conflicting "
                      "assignment for field {} in schema {}",
                      operator_name(Mode), field, slice.schema())));
        continue;
      }
      if (not operand) {
        auto field_as_operand = to<tenzir::operand>(field);
        if (not field_as_operand) {
          field_as_operand = data{};
        }
        operand.emplace(std::move(*field_as_operand));
      }
      auto [type, array] = resolve_operand(slice, *operand);
      result.insert(result.begin(), {{field, type}, array});
    }
    if (not override) {
      result.insert(result.begin(),
                    {std::move(input_field), std::move(input_array)});
    }
    return result;
  };
}

auto make_replace(const table_slice& slice, const operand& op) {
  return [&](struct record_type::field input_field,
             std::shared_ptr<arrow::Array>)
           -> std::vector<std::pair<struct record_type::field,
                                    std::shared_ptr<arrow::Array>>> {
    auto resolved = resolve_operand(slice, op);
    return {{
      {input_field.name, resolved.first},
      resolved.second,
    }};
  };
}

template <mode Mode>
class put_extend_operator final
  : public crtp_operator<put_extend_operator<Mode>> {
public:
  put_extend_operator() = default;

  explicit put_extend_operator(configuration config) noexcept
    : config_{std::move(config)} {
    // nop
  }

  auto name() const -> std::string override {
    return std::string{operator_name(Mode)};
  }

  auto operator()(const table_slice& slice, operator_control_plane& ctrl) const
    -> table_slice {
    if (slice.rows() == 0)
      return {};
    const auto& layout = caf::get<record_type>(slice.schema());
    auto batch = to_record_batch(slice);
    TENZIR_ASSERT(batch);
    auto transformations = std::vector<indexed_transformation>{};
    switch (Mode) {
      case mode::put: {
        // For `put` we drop all fields except for the last one, and then
        // replace the last with the new one.
        for (size_t i = 0; i < layout.num_fields() - 1; ++i) {
          transformations.push_back({{i}, make_drop()});
        }
        auto duplicates = std::unordered_set<std::string>{};
        duplicates.reserve(config_.extractor_to_operand.size());
        const auto override = true;
        transformations.push_back(
          {{layout.num_fields() - 1},
           make_extend<Mode>(slice, config_, ctrl, std::move(duplicates),
                             override)});
        break;
      }
      case mode::extend: {
        // For `extend` we instead consider all keys in the schema as
        // conflicting fields.
        auto duplicates = std::unordered_set<std::string>{};
        duplicates.reserve(layout.num_leaves()
                           + config_.extractor_to_operand.size());
        for (const auto& leaf : layout.leaves()) {
          duplicates.insert(layout.key(leaf.index));
        }
        const auto override = false;
        transformations.push_back(
          {{layout.num_fields() - 1},
           make_extend<Mode>(slice, config_, ctrl, std::move(duplicates),
                             override)});
        break;
      }
      case mode::replace: {
        // For `replace` we need to treat the field as an extractor.
        auto index_to_operand
          = std::vector<std::pair<offset, const operand*>>{};
        for (const auto& [extractor, operand] : config_.extractor_to_operand) {
          if (not operand) {
            ctrl.warn(caf::make_error(
              ec::logic_error,
              fmt::format("{} operator ignores implicit implicit assignment "
                          "for extractor {}",
                          operator_name(Mode), extractor)));
            continue;
          }
          for (const auto& index :
               layout.resolve_key_suffix(extractor, slice.schema().name())) {
            index_to_operand.emplace_back(index, &*operand);
          }
          for (const auto& index : layout.resolve_type_extractor(extractor)) {
            index_to_operand.emplace_back(index, &*operand);
          }
        }
        // Remove adjacent duplicates.
        std::stable_sort(index_to_operand.begin(), index_to_operand.end(),
                         [](const auto& lhs, const auto& rhs) {
                           return lhs.first < rhs.first;
                         });
        const auto duplicate_it
          = std::unique(index_to_operand.begin(), index_to_operand.end(),
                        [](const auto& lhs, const auto& rhs) {
                          return lhs.first == rhs.first;
                        });
        index_to_operand.erase(duplicate_it, index_to_operand.end());
        // Create the transformation.
        for (const auto& [index, operand] : index_to_operand) {
          transformations.push_back({index, make_replace(slice, *operand)});
        }
        break;
      }
    }
    // Lastly, apply our transformation.
    auto result = transform_columns(slice, transformations);
    if (Mode == mode::put) {
      auto renamed_schema
        = type{"tenzir.put", caf::get<record_type>(result.schema())};
      result = cast(std::move(result), renamed_schema);
    }
    return result;
  }

  auto to_string() const -> std::string override {
    auto result = std::string{operator_name(Mode)};
    bool first = true;
    for (const auto& [field, operand] : config_.extractor_to_operand) {
      if (not std::exchange(first, false)) {
        result += ',';
      }
      fmt::format_to(std::back_inserter(result), " {}", field);
      if (operand) {
        fmt::format_to(std::back_inserter(result), "={}", *operand);
      }
    }
    return result;
  }

  auto optimize(expression const& filter, event_order order) const
    -> optimize_result override {
    (void)filter;
    return optimize_result{std::nullopt, order, this->copy()};
  }

  friend auto inspect(auto& f, put_extend_operator& x) -> bool {
    return f.apply(x.config_);
  }

private:
  /// The underlying configuration of the transformation.
  configuration config_ = {};
};

template <mode Mode>
class plugin final : public virtual operator_plugin<put_extend_operator<Mode>> {
public:
  auto make_operator(std::string_view pipeline) const
    -> std::pair<std::string_view, caf::expected<operator_ptr>> override {
    using parsers::end_of_pipeline_operator, parsers::required_ws_or_comment,
      parsers::optional_ws_or_comment, parsers::extractor, parsers::operand;
    const auto* f = pipeline.begin();
    const auto* const l = pipeline.end();
    // put|extend <field=operand>...
    // replace <extractor=operand>...
    // clang-format off
    const auto p
       = required_ws_or_comment
      >> ((extractor >> -(optional_ws_or_comment >> '=' >> optional_ws_or_comment >> operand))
        % (optional_ws_or_comment >> ',' >> optional_ws_or_comment))
      >> optional_ws_or_comment
      >> end_of_pipeline_operator;
    // clang-format on
    auto config = configuration{};
    if (!p(f, l, config.extractor_to_operand)) {
      return {
        std::string_view{f, l},
        caf::make_error(ec::syntax_error,
                        fmt::format("failed to parse {} operator: '{}'",
                                    operator_name(Mode), pipeline)),
      };
    }
    return {
      std::string_view{f, l},
      std::make_unique<put_extend_operator<Mode>>(std::move(config)),
    };
  }
};

using put_plugin = plugin<mode::put>;
using extend_plugin = plugin<mode::extend>;
using replace_plugin = plugin<mode::replace>;

} // namespace

} // namespace tenzir::plugins::put_extend_replace

TENZIR_REGISTER_PLUGIN(tenzir::plugins::put_extend_replace::put_plugin)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::put_extend_replace::extend_plugin)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::put_extend_replace::replace_plugin)
