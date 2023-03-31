//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/pipeline.hpp"

#include <vast/concept/parseable/string/char_class.hpp>
#include <vast/concept/parseable/vast/pipeline.hpp>
#include <vast/error.hpp>
#include <vast/legacy_pipeline.hpp>
#include <vast/logger.hpp>
#include <vast/plugin.hpp>

#include <arrow/type.h>

namespace vast::plugins::pass {

namespace {

// Does nothing with the input.
class pass_operator : public legacy_pipeline_operator {
public:
  pass_operator() noexcept = default;

  caf::error add(table_slice slice) override {
    VAST_TRACE("pass operator adds batch");
    transformed_.push_back(std::move(slice));
    return caf::none;
  }

  caf::expected<std::vector<table_slice>> finish() override {
    VAST_DEBUG("pass operator finished transformation");
    return std::exchange(transformed_, {});
  }

private:
  /// The slices being transformed.
  std::vector<table_slice> transformed_ = {};
};

// Does nothing with the input.
class pass_operator2 final : public crtp_operator<pass_operator2> {
public:
  template <operator_input_batch T>
  auto operator()(T x) const -> T {
    return x;
  }

  auto to_string() const -> std::string override {
    return "pass";
  }
};

class plugin final : public virtual pipeline_operator_plugin,
                     public virtual operator_plugin {
public:
  // plugin API
  caf::error initialize([[maybe_unused]] const record& plugin_config,
                        [[maybe_unused]] const record& global_config) override {
    return {};
  }

  [[nodiscard]] std::string name() const override {
    return "pass";
  };

  // transform plugin API
  [[nodiscard]] caf::expected<std::unique_ptr<legacy_pipeline_operator>>
  make_pipeline_operator(const record&) const override {
    return std::make_unique<pass_operator>();
  }

  [[nodiscard]] std::pair<
    std::string_view, caf::expected<std::unique_ptr<legacy_pipeline_operator>>>
  make_pipeline_operator(std::string_view pipeline) const override {
    using parsers::optional_ws_or_comment, parsers::end_of_pipeline_operator;
    const auto* f = pipeline.begin();
    const auto* const l = pipeline.end();
    const auto p = optional_ws_or_comment >> end_of_pipeline_operator;
    if (!p(f, l, unused)) {
      return {
        std::string_view{f, l},
        caf::make_error(ec::syntax_error, fmt::format("failed to parse "
                                                      "pass operator: '{}'",
                                                      pipeline)),
      };
    }
    return {
      std::string_view{f, l},
      std::make_unique<pass_operator>(),
    };
  }

  auto make_operator(std::string_view pipeline) const
    -> std::pair<std::string_view, caf::expected<operator_ptr>> override {
    using parsers::optional_ws_or_comment, parsers::end_of_pipeline_operator;
    const auto* f = pipeline.begin();
    const auto* const l = pipeline.end();
    const auto p = optional_ws_or_comment >> end_of_pipeline_operator;
    if (!p(f, l, unused)) {
      return {
        std::string_view{f, l},
        caf::make_error(ec::syntax_error, fmt::format("failed to parse "
                                                      "pass operator: '{}'",
                                                      pipeline)),
      };
    }
    return {
      std::string_view{f, l},
      std::make_unique<pass_operator2>(),
    };
  }
};

} // namespace

} // namespace vast::plugins::pass

VAST_REGISTER_PLUGIN(vast::plugins::pass::plugin)