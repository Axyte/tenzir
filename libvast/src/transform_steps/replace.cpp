//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/transform_steps/replace.hpp"

#include "vast/arrow_table_slice.hpp"
#include "vast/arrow_table_slice_builder.hpp"
#include "vast/concept/convertible/data.hpp"
#include "vast/concept/convertible/to.hpp"
#include "vast/concept/parseable/vast/data.hpp"
#include "vast/detail/narrow.hpp"
#include "vast/error.hpp"
#include "vast/plugin.hpp"
#include "vast/table_slice_builder_factory.hpp"

#include <arrow/array.h>
#include <fmt/format.h>

namespace vast {

replace_step::replace_step(replace_step_configuration configuration, data value)
  : value_(std::move(value)), config_(std::move(configuration)) {
  VAST_ASSERT(is_basic(value_));
}

caf::error
replace_step::add(type layout, std::shared_ptr<arrow::RecordBatch> batch) {
  VAST_TRACE("replace step adds batch");
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
    field.type = type::infer(value_);
    auto builder = field.type.make_arrow_builder(arrow::default_memory_pool());
    auto f = [&]<concrete_type Type>(const Type& type) {
      for (int i = 0; i < array->length(); ++i) {
        if (caf::holds_alternative<caf::none_t>(value_)) {
          const auto append_status = builder->AppendNull();
          VAST_ASSERT(append_status.ok(), append_status.ToString().c_str());
        } else {
          VAST_ASSERT(caf::holds_alternative<type_to_data_t<Type>>(value_));
          const auto append_status
            = append_builder(type,
                             caf::get<type_to_arrow_builder_t<Type>>(*builder),
                             make_view(caf::get<type_to_data_t<Type>>(value_)));
          VAST_ASSERT(append_status.ok(), append_status.ToString().c_str());
        }
      }
    };
    caf::visit(f, field.type);
    array = builder->Finish().ValueOrDie();
    return {
      {
        std::move(field),
        std::move(array),
      },
    };
  };
  auto [adjusted_layout, adjusted_batch]
    = transform(layout, batch, {{*column_index, std::move(transform_fn)}});
  VAST_ASSERT(adjusted_layout);
  VAST_ASSERT(adjusted_batch);
  transformed_.emplace_back(std::move(adjusted_layout),
                            std::move(adjusted_batch));
  return caf::none;
}

caf::expected<std::vector<transform_batch>> replace_step::finish() {
  VAST_DEBUG("replace step finished transformation");
  auto retval = std::move(transformed_);
  transformed_.clear();
  return retval;
}

class replace_step_plugin final : public virtual transform_plugin {
public:
  // Plugin API
  caf::error initialize(data) override {
    return {};
  }

  [[nodiscard]] const char* name() const override {
    return "replace";
  };

  // Transform Plugin API
  [[nodiscard]] caf::expected<std::unique_ptr<transform_step>>
  make_transform_step(const record& options) const override {
    if (!options.contains("field"))
      return caf::make_error(ec::invalid_configuration,
                             "key 'field' is missing in configuration for "
                             "replace step");
    if (!options.contains("value"))
      return caf::make_error(ec::invalid_configuration,
                             "key 'value' is missing in configuration for "
                             "replace step");
    auto config = to<replace_step_configuration>(options);
    if (!config)
      return config.error();
    auto data = from_yaml(config->value);
    if (!data)
      return caf::make_error(ec::invalid_configuration,
                             fmt::format("could not parse '{}' as valid data "
                                         "object: {}",
                                         config->value, render(data.error())));
    if (!is_basic(*data))
      return caf::make_error(ec::invalid_configuration, "only basic types are "
                                                        "allowed for 'replace' "
                                                        "transform");
    return std::make_unique<replace_step>(std::move(*config), std::move(*data));
  }
};

} // namespace vast

VAST_REGISTER_PLUGIN(vast::replace_step_plugin)
