//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/system/make_pipelines.hpp"
#include <vast/arrow_table_slice.hpp>
#include <vast/arrow_table_slice_builder.hpp>
#include <vast/concept/convertible/data.hpp>
#include <vast/concept/convertible/to.hpp>
#include <vast/detail/inspection_common.hpp>
#include <vast/detail/narrow.hpp>
#include <vast/error.hpp>
#include <vast/hash/default_hash.hpp>
#include <vast/hash/hash_append.hpp>
#include <vast/optional.hpp>
#include <vast/pipeline.hpp>
#include <vast/plugin.hpp>
#include <vast/table_slice_builder_factory.hpp>

#include <arrow/array/builder_binary.h>
#include <arrow/scalar.h>
#include <fmt/format.h>

namespace vast::plugins::hash {

namespace {

/// The configuration of the hash pipeline operator.
struct configuration {
  std::string field;
  std::string out;
  std::optional<std::string> salt;

  /// Support type inspection for easy parsing with convertible.
  template <class Inspector>
  friend auto inspect(Inspector& f, configuration& x) {
    return detail::apply_all(f, x.field, x.out, x.salt);
  }

  /// Enable parsing from a record via convertible.
  static inline const record_type& layout() noexcept {
    static auto result = record_type{
      {"field", string_type{}},
      {"out", string_type{}},
      {"salt", string_type{}},
    };
    return result;
  }
};

class hash_operator : public pipeline_operator {
public:
  explicit hash_operator(configuration configuration);

  [[nodiscard]] caf::error
  add(type layout, std::shared_ptr<arrow::RecordBatch> batch) override {
    VAST_TRACE("hash operator adds batch");
    // Get the target field if it exists.
    const auto& layout_rt = caf::get<record_type>(layout);
    auto column_index = layout_rt.resolve_key(config_.field);
    if (!column_index) {
      transformed_.emplace_back(layout, std::move(batch));
      return caf::none;
    }
    // Apply the transformation.
    auto transform_fn = [&](struct record_type::field field,
                            std::shared_ptr<arrow::Array> array) noexcept
      -> std::vector<
        std::pair<struct record_type::field, std::shared_ptr<arrow::Array>>> {
      auto hashes_builder
        = string_type::make_arrow_builder(arrow::default_memory_pool());
      if (config_.salt) {
        for (const auto& value : values(field.type, *array)) {
          const auto digest = vast::hash(value, *config_.salt);
          const auto append_result
            = hashes_builder->Append(fmt::format("{:x}", digest));
          VAST_ASSERT(append_result.ok(), append_result.ToString().c_str());
        }
      } else {
        for (const auto& value : values(field.type, *array)) {
          const auto digest = vast::hash(value);
          const auto append_result
            = hashes_builder->Append(fmt::format("{:x}", digest));
          VAST_ASSERT(append_result.ok(), append_result.ToString().c_str());
        }
      }
      return {
        {
          std::move(field),
          std::move(array),
        },
        {
          {
            config_.out,
            string_type{},
          },
          hashes_builder->Finish().ValueOrDie(),
        },
      };
    };
    auto [adjusted_layout, adjusted_batch] = transform_columns(
      layout, batch, {{*column_index, std::move(transform_fn)}});
    VAST_ASSERT(adjusted_layout);
    VAST_ASSERT(adjusted_batch);
    transformed_.emplace_back(std::move(adjusted_layout),
                              std::move(adjusted_batch));
    return caf::none;
  }

  [[nodiscard]] caf::expected<std::vector<pipeline_batch>> finish() override {
    VAST_DEBUG("hash operator finished transformation");
    return std::exchange(transformed_, {});
  }

private:
  /// The slices being transformed.
  std::vector<pipeline_batch> transformed_;

  /// The underlying configuration of the transformation.
  configuration config_ = {};
};

hash_operator::hash_operator(configuration configuration)
  : config_(std::move(configuration)) {
}

class plugin final : public virtual pipeline_operator_plugin {
public:
  // plugin API
  caf::error initialize(data) override {
    return {};
  }

  [[nodiscard]] std::string name() const override {
    return "hash";
  };

  // transform plugin API
  [[nodiscard]] caf::expected<std::unique_ptr<pipeline_operator>>
  make_pipeline_operator(const record& options) const override {
    if (!options.contains("field"))
      return caf::make_error(ec::invalid_configuration,
                             "key 'field' is missing in configuration for hash "
                             "operator");
    if (!options.contains("out"))
      return caf::make_error(ec::invalid_configuration,
                             "key 'out' is missing "
                             "in configuration for hash operator");
    auto config = to<configuration>(options);
    if (!config)
      return config.error();
    return std::make_unique<hash_operator>(std::move(*config));
  }

  virtual std::pair<std::string_view::iterator,
                    caf::expected<std::unique_ptr<pipeline_operator>>>
  parse_pipeline_string(std::string_view str) const override {
    record options;
    auto parse_result = system::parse_pipeline(str);
    if (parse_result.parse_error) {
      return {parse_result.new_str_it, parse_result.parse_error};
    }
    if (!parse_result.extractors.empty()) {
      const auto &field = parse_result.extractors.front();
      options["field"] = field;
      options["out"] = field;
    }
    for (const auto &option : parse_result.long_form_options) {
      auto key = option.first;
      auto value = option.second;
      options[key] = value;
    }

    return {parse_result.new_str_it, make_pipeline_operator(options)};
  }
};

} // namespace

} // namespace vast::plugins::hash

VAST_REGISTER_PLUGIN(vast::plugins::hash::plugin)
