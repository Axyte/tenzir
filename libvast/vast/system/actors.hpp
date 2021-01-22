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

#include "vast/fwd.hpp"

#include "vast/atoms.hpp"

#include <caf/replies_to.hpp>

#define VAST_ADD_TYPE_ID(type) CAF_ADD_TYPE_ID(vast_actors, type)

namespace vast::system {

/// Helper utility that enables extending typed actor forwartd declarations
/// without including <caf/typed_actor.hpp>.
template <class... Fs>
struct typed_actor_fwd;

template <class... Fs>
struct typed_actor_fwd {
  template <class Handle>
  struct extend_with_helper;

  template <class... Gs>
  struct extend_with_helper<caf::typed_actor<Gs...>> {
    using type = typed_actor_fwd<Fs..., Gs...>;
  };

  template <class Handle>
  using extend_with = typename extend_with_helper<Handle>::type;

  using unwrap = caf::typed_actor<Fs...>;
};

/// A flush listener actor listens for flushes.
using flush_listener_actor = typed_actor_fwd<
  // Reacts to the requested flush message.
  caf::reacts_to<atom::flush>>::unwrap;

/// The ARCHIVE CLIENT actor interface.
using archive_client_actor = typed_actor_fwd<
  // An ARCHIVE CLIENT receives table slices from the ARCHIVE for partial
  // query hits.
  caf::reacts_to<table_slice>,
  // An ARCHIVE CLIENT receives (done, error) when the query finished.
  caf::reacts_to<atom::done, caf::error>>::unwrap;

/// The PARTITION CLIENT actor interface.
using partition_client_actor = typed_actor_fwd<
  // The client sends an expression to the partition and receives several sets
  // of ids followed by a final `atom::done` which as sent as response to the
  // expression. This interface provides the callback for the middle part of
  // this sequence.
  caf::reacts_to<ids>>::unwrap;

/// The INDEX CLIENT actor interface.
using index_client_actor = typed_actor_fwd<
  // Receives done from the INDEX when the query finished.
  caf::reacts_to<atom::done>>
  // Receives ids from the INDEX for partial query hits.
  ::extend_with<partition_client_actor>::unwrap;

/// The PARTITION actor interface.
using partition_actor = typed_actor_fwd<
  // Evaluate the given expression, returning the relevant evaluation triples.
  // TODO: Passing the `partition_client_actor` here is an historical artifact,
  // a cleaner API would be to just return the evaluated `vast::ids`.
  caf::replies_to<expression, partition_client_actor>::with<atom::done>>::unwrap;

/// A set of relevant partition actors, and their uuids.
// TODO: Move this elsewhere.
using query_map = std::vector<std::pair<uuid, partition_actor>>;

/// The QUERY SUPERVISOR actor interface.
using query_supervisor_actor = typed_actor_fwd<
  /// Reacts to an expression and a set of relevant partitions by
  /// sending several `vast::ids` to the index_client_actor, followed
  /// by a final `atom::done`.
  caf::reacts_to<expression, query_map, index_client_actor>>::unwrap;

/// The EVALUATOR actor interface.
using evaluator_actor = typed_actor_fwd<
  // Re-evaluates the expression and relays new hits to the PARTITION CLIENT.
  caf::replies_to<partition_client_actor>::with<atom::done>>::unwrap;

/// The STATUS CLIENT actor interface.
using status_client_actor = typed_actor_fwd<
  // Reply to a status request from the NODE.
  caf::replies_to<atom::status, status_verbosity>::with< //
    caf::dictionary<caf::config_value>>>::unwrap;

/// The INDEXER actor interface.
using indexer_actor = typed_actor_fwd<
  // Returns the ids for the given predicate.
  caf::replies_to<curried_predicate>::with<ids>,
  // Requests the INDEXER to shut down.
  caf::reacts_to<atom::shutdown>>::unwrap;

/// The ACTIVE INDEXER actor interface.
using active_indexer_actor = typed_actor_fwd<
  // Hooks into the table slice column stream.
  caf::replies_to<caf::stream<table_slice_column>>::with<
    caf::inbound_stream_slot<table_slice_column>>,
  // Finalizes the ACTIVE INDEXER into a chunk, which containes an INDEXER.
  caf::replies_to<atom::snapshot>::with<chunk_ptr>>
  // Conform the the INDEXER ACTOR interface.
  ::extend_with<indexer_actor>::unwrap;

/// The ACCOUNTANT actor interface.
using accountant_actor = typed_actor_fwd<
  // Update the configuration of the ACCOUNTANT.
  caf::replies_to<atom::config, accountant_config>::with< //
    atom::ok>,
  // Registers the sender with the ACCOUNTANT.
  caf::reacts_to<atom::announce, std::string>,
  // Record duration metric.
  caf::reacts_to<std::string, duration>,
  // Record time metric.
  caf::reacts_to<std::string, time>,
  // Record integer metric.
  caf::reacts_to<std::string, integer>,
  // Record count metric.
  caf::reacts_to<std::string, count>,
  // Record real metric.
  caf::reacts_to<std::string, real>,
  // Record a metrics report.
  caf::reacts_to<report>,
  // Record a performance report.
  caf::reacts_to<performance_report>,
  // The internal telemetry loop of the ACCOUNTANT.
  caf::reacts_to<atom::telemetry>>
  // Conform to the procotol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The QUERY SUPERVISOR MASTER actor interface.
using query_supervisor_master_actor = typed_actor_fwd<
  // Enlist the QUERY SUPERVISOR as an available worker.
  caf::reacts_to<atom::worker, query_supervisor_actor>>::unwrap;

/// The INDEX actor interface.
using index_actor = typed_actor_fwd<
  // Triggered when the INDEX finished querying a PARTITION.
  caf::reacts_to<atom::done, uuid>,
  // Hooks into the table slice stream.
  caf::replies_to<caf::stream<table_slice>>::with<
    caf::inbound_stream_slot<table_slice>>,
  // Registers the ARCHIVE with the ACCOUNTANT.
  caf::reacts_to<accountant_actor>,
  // Subscribes a FLUSH LISTENER to the INDEX.
  caf::reacts_to<atom::subscribe, atom::flush, flush_listener_actor>,
  // Evaluatates an expression.
  caf::reacts_to<expression>,
  // Queries PARTITION actors for a given query id.
  caf::reacts_to<uuid, uint32_t>,
  // Replaces the SYNOPSIS of the PARTITION witht he given partition id.
  caf::reacts_to<atom::replace, uuid, std::shared_ptr<partition_synopsis>>,
  // Erases the given events from the INDEX, and returns their ids.
  caf::replies_to<atom::erase, uuid>::with<ids>>
  // Conform to the protocol of the QUERY SUPERVISOR MASTER actor.
  ::extend_with<query_supervisor_master_actor>
  // Conform to the procol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

using archive_actor = typed_actor_fwd<
  // Hook into the table slice stream.
  caf::replies_to<caf::stream<table_slice>>::with< //
    caf::inbound_stream_slot<table_slice>>,
  // Register an exporter actor.
  // TODO: This should probably take an archive_client_actor.
  caf::reacts_to<atom::exporter, caf::actor>,
  // Registers the ARCHIVE with the ACCOUNTANT.
  caf::reacts_to<accountant_actor>,
  // Starts handling a query for the given ids.
  // TODO: This forwards to the second handler; this should probably be
  // removed, as it is not type safe.
  caf::reacts_to<ids>,
  // Starts handling a query for the given ids.
  caf::reacts_to<ids, archive_client_actor>,
  // Handles a query for the given ids, and sends the table slices back to the
  // ARCHIVE CLIENT.
  caf::reacts_to<ids, archive_client_actor, uint64_t>,
  // The internal telemetry loop of the ARCHIVE.
  caf::reacts_to<atom::telemetry>,
  // Erase the events with the given ids.
  caf::replies_to<atom::erase, ids>::with< //
    atom::done>>
  // Conform to the procotol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The TYPE REGISTRY actor interface.
using type_registry_actor = typed_actor_fwd<
  // The internal telemetry loop of the TYPE REGISTRY.
  caf::reacts_to<atom::telemetry>,
  // Hooks into the table slice stream.
  caf::replies_to<caf::stream<table_slice>>::with< //
    caf::inbound_stream_slot<table_slice>>,
  // Registers the given type.
  caf::reacts_to<atom::put, vast::type>,
  // Registers all types in the given schema.
  caf::reacts_to<atom::put, vast::schema>,
  // Retrieves all known types.
  caf::replies_to<atom::get>::with<type_set>,
  // Registers the given taxonomies.
  caf::reacts_to<atom::put, taxonomies>,
  // Retrieves the known taxonomies.
  caf::replies_to<atom::get, atom::taxonomies>::with< //
    taxonomies>,
  // Loads the taxonomies on disk.
  caf::replies_to<atom::load>::with< //
    atom::ok>,
  // Resolves an expression in terms of the known taxonomies.
  caf::replies_to<atom::resolve, expression>::with< //
    expression>,
  // Registers the TYPE REGISTRY with the ACCOUNTANT.
  caf::reacts_to<accountant_actor>>
  // Conform to the procotol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The DISK MONITOR actor interface.
using disk_monitor_actor = typed_actor_fwd<
  // Checks the monitoring requirements.
  caf::reacts_to<atom::ping>,
  // Purge events as required for the monitoring requirements.
  caf::reacts_to<atom::erase>>
  // Conform to the protocol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The interface for file system I/O. The filesystem actor implementation
/// must interpret all operations that contain paths *relative* to its own
/// root directory.
using filesystem_actor = typed_actor_fwd<
  // Writes a chunk of data to a given path. Creates intermediate directories
  // if needed.
  caf::replies_to<atom::write, path, chunk_ptr>::with< //
    atom::ok>,
  // Reads a chunk of data from a given path and returns the chunk.
  caf::replies_to<atom::read, path>::with< //
    chunk_ptr>,
  // Memory-maps a file.
  caf::replies_to<atom::mmap, path>::with< //
    chunk_ptr>>
  // Conform to the procotol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

/// The interface of an ACTIVE PARTITION actor.
using active_partition_actor = typed_actor_fwd<
  // Hooks into the table slice stream.
  caf::replies_to<caf::stream<table_slice>>::with< //
    caf::inbound_stream_slot<table_slice>>,
  // Persists the active partition at the specified path.
  caf::replies_to<atom::persist, path, index_actor>::with< //
    atom::ok>,
  // A repeatedly called continuation of the persist request.
  caf::reacts_to<atom::persist, atom::resume>>
  // Conform to the protocol of the PARTITION.
  ::extend_with<partition_actor>::unwrap;

using exporter_actor = typed_actor_fwd<
  // Request extraction of all events.
  caf::reacts_to<atom::extract>,
  // Request extraction of the given number of events.
  caf::reacts_to<atom::extract, uint64_t>,
  // Register the ACCOUNTANT actor.
  caf::reacts_to<accountant_actor>,
  // Register the ARCHIVE actor.
  caf::reacts_to<archive_actor>,
  // Register the INDEX actor.
  caf::reacts_to<index_actor>,
  // Register the SINK actor.
  caf::reacts_to<atom::sink, caf::actor>,
  // Register a list of IMPORTER actors.
  // FIXME: This cannot take an importer_actor, because that'd introduce a
  // cyclic dependency between the importer_actor and exporter_actor
  // declarations. We should improve the logic of wiring up the importers with
  // continuous exporters, e.g., by having the node deal with the issue.
  caf::reacts_to<atom::importer, std::vector<caf::actor>>,
  // Execute previously registered query.
  caf::reacts_to<atom::run>,
  // Register a STATISTICS SUBSCRIBER actor.
  caf::reacts_to<atom::statistics, caf::actor>,
  // Hook into the table slice stream.
  // TODO: This should probably be modeled as a IMPORTER CLIENT actor.
  caf::replies_to<caf::stream<table_slice>>::with< //
    caf::inbound_stream_slot<table_slice>>>
  // Conform to the protocol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>
  // Conform to the protocol of the ARCHIVE CLIENT actor.
  ::extend_with<archive_client_actor>
  // Conform to the protocol of the INDEX CLIENT actor.
  ::extend_with<index_client_actor>::unwrap;

/// The interface of an IMPORTER actor.
using importer_actor = typed_actor_fwd<
  // Register the ACCOUNTANT actor.
  caf::reacts_to<accountant_actor>,
  // Register the EXPORTER actor as a sink.
  caf::replies_to<exporter_actor>::with< //
    caf::outbound_stream_slot<table_slice>>,
  // Add a new sink.
  caf::replies_to<atom::add, caf::actor>::with< //
    caf::outbound_stream_slot<table_slice>>,
  // Add a new source.
  caf::replies_to<caf::stream<table_slice>>::with< //
    caf::inbound_stream_slot<table_slice>>,
  // Add a new source with a description.
  caf::replies_to<caf::stream<table_slice>, std::string>::with< //
    caf::inbound_stream_slot<table_slice>>,
  // Register a FLUSH LISTENER actor.
  caf::reacts_to<atom::subscribe, atom::flush, flush_listener_actor>,
  // The internal telemetry loop of the IMPORTER.
  caf::reacts_to<atom::telemetry>>
  // Conform to the protocol of the STATUS CLIENT actor.
  ::extend_with<status_client_actor>::unwrap;

} // namespace vast::system

// -- type announcements -------------------------------------------------------

CAF_BEGIN_TYPE_ID_BLOCK(vast_actors, caf::id_block::vast_atoms::end)

  VAST_ADD_TYPE_ID((vast::system::accountant_actor))
  VAST_ADD_TYPE_ID((vast::system::active_indexer_actor))
  VAST_ADD_TYPE_ID((vast::system::active_partition_actor))
  VAST_ADD_TYPE_ID((vast::system::archive_actor))
  VAST_ADD_TYPE_ID((vast::system::archive_client_actor))
  VAST_ADD_TYPE_ID((vast::system::disk_monitor_actor))
  VAST_ADD_TYPE_ID((vast::system::evaluator_actor))
  VAST_ADD_TYPE_ID((vast::system::exporter_actor))
  VAST_ADD_TYPE_ID((vast::system::filesystem_actor))
  VAST_ADD_TYPE_ID((vast::system::flush_listener_actor))
  VAST_ADD_TYPE_ID((vast::system::index_actor))
  VAST_ADD_TYPE_ID((vast::system::index_client_actor))
  VAST_ADD_TYPE_ID((vast::system::indexer_actor))
  VAST_ADD_TYPE_ID((vast::system::importer_actor))
  VAST_ADD_TYPE_ID((vast::system::partition_actor))
  VAST_ADD_TYPE_ID((vast::system::partition_client_actor))
  VAST_ADD_TYPE_ID((vast::system::query_map))
  VAST_ADD_TYPE_ID((vast::system::query_supervisor_actor))
  VAST_ADD_TYPE_ID((vast::system::query_supervisor_master_actor))
  VAST_ADD_TYPE_ID((vast::system::status_client_actor))
  VAST_ADD_TYPE_ID((vast::system::type_registry_actor))

CAF_END_TYPE_ID_BLOCK(vast_actors)

#undef VAST_ADD_TYPE_ID
