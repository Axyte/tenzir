//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2022 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/data.hpp>
#include <vast/error.hpp>
#include <vast/expression.hpp>
#include <vast/plugin.hpp>

#include <caf/error.hpp>
#include <caf/expected.hpp>
#include <fmt/format.h>

namespace vast::plugins::substrait {

class plugin final : public virtual query_language_plugin {
  caf::error initialize(data) override {
    return caf::none;
  }

  [[nodiscard]] const char* name() const override {
    return "substrait";
  }

  [[nodiscard]] caf::expected<expression>
  parse(std::string_view query) const override {
    return caf::make_error(ec::unspecified, "tbd");
  }
};

} // namespace vast::plugins::substrait

VAST_REGISTER_PLUGIN(vast::plugins::substrait::plugin)
