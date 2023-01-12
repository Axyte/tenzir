//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/system/indexer.hpp"

#include "vast/fwd.hpp"

#include "vast/chunk.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/expression.hpp"
#include "vast/detail/assert.hpp"
#include "vast/detail/fill_status_map.hpp"
#include "vast/expression.hpp"
#include "vast/logger.hpp"
#include "vast/system/status.hpp"
#include "vast/table_slice_column.hpp"
#include "vast/type.hpp"
#include "vast/value_index.hpp"
#include "vast/value_index_factory.hpp"
#include "vast/view.hpp"

#include <caf/attach_stream_sink.hpp>

namespace vast::system {

active_indexer_actor::behavior_type
active_indexer(active_indexer_actor::stateful_pointer<indexer_state> self,
               const std::string& name, value_index_ptr index) {
  VAST_ASSERT_CHEAP(!name.empty());
  VAST_ASSERT_CHEAP(index);
  self->state.name = fmt::format("indexer-{}", name);
  self->state.idx = std::move(index);
  return {
    [self](caf::stream<table_slice_column> in)
      -> caf::result<caf::inbound_stream_slot<table_slice_column>> {
      VAST_TRACE("{} got a new stream", *self);
      self->state.stream_initiated = true;
      auto result = caf::attach_stream_sink(
        self, in,
        [=](caf::unit_t&) {
          VAST_TRACE("{} initializes stream", *self);
          // nop
        },
        [=](caf::unit_t&, const std::vector<table_slice_column>& columns) {
          VAST_ASSERT(self->state.idx != nullptr);
          for (const auto& column : columns)
            column.slice().append_column_to_index(column.index(),
                                                  *self->state.idx);
        },
        [=](caf::unit_t&, const caf::error& err) {
          VAST_TRACE("indexer is closing stream");
          if (err) {
            // Exit reason `unreachable` is generated by CAF and will arrive
            // after that the actor state was destroyed, so we can't safely
            // access `self->state` here.
            // TODO: We also need to deliver the promise here *if* self
            // still exists and the promise is already pending.
            VAST_ERROR("indexer got a stream error: {}", render(err));
            return;
          }
          if (self->state.promise.pending())
            self->state.promise.deliver(chunkify(self->state.idx));
        });
      return result.inbound_slot();
    },
    [self](atom::evaluate, const curried_predicate& pred) -> caf::result<ids> {
      VAST_DEBUG("{} got predicate: {}", *self, pred);
      VAST_ASSERT(self->state.idx);
      auto& idx = *self->state.idx;
      auto rep = to_internal(idx.type(), make_view(pred.rhs));
      return idx.lookup(pred.op, rep);
    },
    [self](atom::snapshot) {
      // The partition is only allowed to send a single snapshot atom.
      VAST_ASSERT(!self->state.promise.pending());
      self->state.promise = self->make_response_promise<chunk_ptr>();
      // Checking 'idle()' is not enough, since we emprically can
      // have data that was flushed in the upstream stage but is not
      // yet visible to the sink.
      if (self->state.stream_initiated
          && (self->stream_managers().empty()
              || self->stream_managers().begin()->second->done())) {
        self->state.promise.deliver(chunkify(self->state.idx));
      }
      return self->state.promise;
    },
    [self](atom::shutdown) {
      self->quit(caf::exit_reason::user_shutdown); // clang-format fix
    },
    [self](atom::status, status_verbosity v) {
      record result;
      result["memory-usage"] = count{self->state.idx->memusage()};
      if (v >= status_verbosity::debug)
        detail::fill_status_map(result, self);
      return result;
    },
  };
}

indexer_actor::behavior_type
passive_indexer(indexer_actor::stateful_pointer<indexer_state> self,
                uuid partition_id, value_index_ptr index) {
  VAST_ASSERT_CHEAP(index);
  self->state.name = fmt::format("indexer-{}", index->type());
  self->state.partition_id = partition_id;
  self->state.idx = std::move(index);
  return {
    [self](atom::evaluate, const curried_predicate& pred) -> caf::result<ids> {
      VAST_DEBUG("{} got predicate: {}", *self, pred);
      VAST_ASSERT(self->state.idx);
      auto& idx = *self->state.idx;
      auto rep = to_internal(idx.type(), make_view(pred.rhs));
      return idx.lookup(pred.op, rep);
    },
    [self](atom::shutdown) {
      self->quit(caf::exit_reason::user_shutdown);
    },
  };
}

} // namespace vast::system