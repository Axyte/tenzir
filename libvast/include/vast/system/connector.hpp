//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/system/actors.hpp"

#include <caf/io/middleman_actor.hpp>
#include <caf/timespan.hpp>
#include <caf/typed_event_based_actor.hpp>

#include <chrono>
#include <optional>

namespace vast::system {

struct connector_state {
  /// List of remote destinations for which to use mTLS connections.
  std::vector<std::string> tls_whitelist;

  [[nodiscard]] bool is_tls_destination(connect_request request) const;
};

/// @brief Creates an actor that establishes the connection to a remote VAST
/// node.
/// @param retry_delay Delay between two connection attempts. Don't retry if not
/// set.
/// @param deadline Time point after which the connector can no longer connect
/// to a remote VAST node. Try connecting until success if not set.
/// @return actor handle that can be used to connect with a remote VAST node.
connector_actor::behavior_type
connector(connector_actor::stateful_pointer<connector_state> self,
          std::optional<caf::timespan> retry_delay,
          std::optional<std::chrono::steady_clock::time_point> deadline,
          std::vector<std::string> tls_whitelist);

} // namespace vast::system