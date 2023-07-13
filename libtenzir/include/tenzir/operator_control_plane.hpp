//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/fwd.hpp"

#include "tenzir/actors.hpp"
#include "tenzir/diagnostics.hpp"
#include "tenzir/die.hpp"
#include "tenzir/taxonomies.hpp"
#include "tenzir/type.hpp"

#include <caf/typed_actor.hpp>

namespace tenzir {

/// The operator control plane is the bridge between an operator and an
/// executor, and serves as an escape hatch for the operator into an outer
/// context like the actor system.
struct operator_control_plane {
  /// Destroy the operator control plane.
  virtual ~operator_control_plane() noexcept = default;

  /// Returns the hosting actor.
  [[nodiscard]] virtual auto self() noexcept -> exec_node_actor::base& = 0;

  /// Returns the node actor, if the operator location is remote.
  [[nodiscard]] virtual auto node() noexcept -> node_actor = 0;

  /// Stop the execution of the operator.
  /// @pre error != caf::none
  virtual auto abort(caf::error error) noexcept -> void = 0;

  /// Emit a warning that gets transported via the executor's side-channel.
  /// An executor may treat warnings as errors. Warnings additionally get
  /// reported to the executor's side-channel as `tenzir.warning` events.
  virtual auto warn(caf::error warning) noexcept -> void = 0;

  /// Emit events to the executor's side-channel, e.g., metrics.
  virtual auto emit(table_slice metrics) noexcept -> void = 0;

  /// Access available schemas.
  [[nodiscard]] virtual auto schemas() const noexcept
    -> const std::vector<type>& = 0;

  /// Access available concepts.
  [[nodiscard]] virtual auto concepts() const noexcept
    -> const concepts_map& = 0;

  /// Returns the pipeline's diagnostic handler.
  virtual auto diagnostics() noexcept -> diagnostic_handler& = 0;

  /// Returns whether the pipeline may do potentially unsafe things.
  virtual auto allow_unsafe_pipelines() const noexcept -> bool = 0;
};

} // namespace tenzir
