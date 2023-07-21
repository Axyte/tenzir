//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "explore/theme.hpp"

#include <tenzir/table_slice.hpp>
#include <tenzir/type.hpp>

#include <ftxui/dom/direction.hpp>

#include <map>
#include <memory>
#include <unordered_map>
#include <vector>

namespace tenzir::plugins::explore {

struct operator_args;
struct printer_args;

struct table_state;
using table_state_ptr = std::shared_ptr<table_state>;

/// The state for a table.
struct table_state {
  /// The slices for this table.
  std::vector<table_slice> slices;
};

/// The state of the UI.
struct ui_state {
  /// Table slices by schema.
  std::unordered_map<type, table_state_ptr> tables;

  /// Defines styling and colors.
  struct theme theme = default_theme();

  /// The position of the navigator.
  ftxui::Direction navigator_position = ftxui::Direction::Up;

  /// Hide the navigator if there is exactly one schema.
  bool navigator_auto_hide = false;

  /// Flag that controls whether to show the column types.
  bool hide_types = false;
};

/// Construct the global UI state from the plugin configuration.
auto make_ui_state(const operator_args& args) -> ui_state;

/// Construct the global UI state from the plugin configuration.
auto make_ui_state(const printer_args& args) -> ui_state;

} // namespace tenzir::plugins::explore