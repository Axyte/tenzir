/******************************************************************************
 *                    _   _____   __________                                  *
 *                   | | / / _ | / __/_  __/     Visibility                   *
 *                   | |/ / __ |_\ \  / /          Across                     *
 *                   |___/_/ |_/___/ /_/       Space and Time                 *
 *                                                                            *
 * This file is part of VAST. It is subject to the license terms in the       *
 * LICENSE file found in the top-level directory of this distribution and at  *
 * http://vast.io/license. No part of VAST, including this file, may be       *
 * copied, modified, propagated, or distributed except according to the terms *
 * contained in the LICENSE file.                                             *
 ******************************************************************************/

#pragma once

#include <chrono>
#include <cstdint>
#include <string_view>

#include <caf/atom.hpp>
#include <caf/fwd.hpp>

namespace vast::defaults {

namespace command {

/// Path to persistent state.
constexpr std::string_view directory = "vast";

/// Hostname or IP address of a remote node.
constexpr std::string_view endpoint_host = "";

/// TCP port address of a remote node.
constexpr uint16_t endpoint_port = 42000;

/// Server ID for the consensus module.
constexpr std::string_view id = "";

/// Path for reading input events or `-` for reading from STDIN.
constexpr std::string_view read_path = "-";

/// Path to alternate schema.

/// Path for writing query results or `-` for writing to STDOUT.
constexpr std::string_view write_path = "-";

/// Inverse factor by which to delay packets. For example, if 5, then for two
/// packets spaced *t* seconds apart, the source will sleep for *t/5* seconds.
constexpr int64_t pseudo_realtime_factor = 0;

/// Number of bytes to keep per event.
constexpr size_t cutoff = std::numeric_limits<size_t>::max();

/// Flow table expiration interval.
constexpr size_t flow_expiry = 10;

/// Flush to disk after that many packets.
constexpr size_t flush_interval = 10'000;

/// Maximum number of results.
constexpr size_t max_events = 0;

/// Maximum flow lifetime before eviction.
constexpr size_t max_flow_age = 60;

/// Number of concurrent flows to track.
constexpr size_t max_flows = 1'048'576; // 1_Mi

/// Number of events generated by the test source.
constexpr size_t generated_events = 100;

/// The unique ID of this node.
constexpr std::string_view node_id = "node";

/// @returns the table slice type from `options` if available, otherwise the
///          type configured in the actor system, or ::system::table_slice_type
///          if no user-defined option is available.
caf::atom_value table_slice_type(caf::actor_system& sys,
                                 caf::settings& options);

} // namespace command

namespace system {

/// The default table slice type.
constexpr caf::atom_value table_slice_type = caf::atom("default");

/// Maximum size for sources that generate table slices.
constexpr size_t table_slice_size = 100;

/// Maximum number of events per INDEX partition.
constexpr size_t max_partition_size = 1'048'576; // 1_Mi

/// Maximum number of in-memory INDEX partitions.
constexpr size_t max_in_mem_partitions = 10;

/// Number of immediately scheduled INDEX partitions.
constexpr size_t taste_partitions = 5;

/// Maximum number of concurrent INDEX queries.
constexpr size_t num_query_supervisors = 10;

/// Number of cached ARCHIVE segments.
constexpr size_t segments = 10;

/// Maximum size of ARCHIVE segments in MB.
constexpr size_t max_segment_size = 128;

/// Number of initial IDs to request in the IMPORTER.
constexpr size_t initially_requested_ids = 128;

/// Rate at which telemetry data is sent to the ACCOUNTANT.
constexpr std::chrono::milliseconds telemetry_rate = std::chrono::milliseconds{
  1000};

} // namespace system

} // namespace vast::defaults
