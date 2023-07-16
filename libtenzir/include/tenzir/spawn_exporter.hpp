//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2018 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/fwd.hpp"

#include "tenzir/actors.hpp"

#include <caf/typed_actor.hpp>

namespace tenzir {

/// Tries to spawn a new EXPORTER.
/// @param self Points to the parent actor.
/// @param args Configures the new actor.
/// @returns a handle to the spawned actor on success, an error otherwise
auto spawn_exporter(node_actor::stateful_pointer<node_state> self,
                    spawn_arguments& args) -> caf::expected<caf::actor>;

} // namespace tenzir
