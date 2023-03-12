//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/concept/parseable/string.hpp>
#include <vast/concept/parseable/vast/identifier.hpp>
#include <vast/concept/parseable/vast/pipeline.hpp>
#include <vast/error.hpp>
#include <vast/legacy_pipeline.hpp>
#include <vast/logger.hpp>
#include <vast/plugin.hpp>

#include <arrow/type.h>
#include <caf/error.hpp>

namespace vast::plugins::load_ {

namespace {

class load_operator final : public crtp_operator<load_operator> {
public:
  explicit load_operator(const loader_plugin& loader, record config)
    : loader_plugin_{loader}, config_{std::move(config)} {
  }

  auto operator()(operator_control_plane& ctrl) const
    -> caf::expected<generator<chunk_ptr>> {
    return loader_plugin_.make_loader(config_, ctrl);
  }

  auto to_string() const -> std::string override {
    return fmt::format("load {}", loader_plugin_.name());
  }

private:
  const loader_plugin& loader_plugin_;
  record config_;
};

class plugin final : public virtual operator_plugin {
public:
  auto initialize(const record&, const record&) -> caf::error override {
    return {};
  }

  auto name() const -> std::string override {
    return "load";
  };

  auto make_operator(std::string_view pipeline) const
    -> std::pair<std::string_view, caf::expected<operator_ptr>> override {
    using parsers::optional_ws_or_comment, parsers::end_of_pipeline_operator,
      parsers::plugin_name, parsers::required_ws_or_comment;
    const auto* f = pipeline.begin();
    const auto* const l = pipeline.end();
    const auto p = optional_ws_or_comment >> plugin_name
                   >> optional_ws_or_comment >> end_of_pipeline_operator;
    auto loader_name = std::string{};
    if (!p(f, l, loader_name)) {
      return {
        std::string_view{f, l},
        caf::make_error(ec::syntax_error,
                        fmt::format("failed to parse load operator: '{}'",
                                    pipeline)),
      };
    }
    const auto* loader = plugins::find<loader_plugin>(loader_name);
    if (!loader) {
      return {
        std::string_view{f, l},
        caf::make_error(ec::lookup_error,
                        fmt::format("no loader found for '{}'", loader_name)),
      };
    }
    return {
      std::string_view{f, l},
      std::make_unique<load_operator>(*loader, record{}),
    };
  }
};

} // namespace

} // namespace vast::plugins::load_

VAST_REGISTER_PLUGIN(vast::plugins::load_::plugin)