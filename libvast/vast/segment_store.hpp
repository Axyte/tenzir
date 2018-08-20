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

#include <caf/fwd.hpp>
#include <caf/intrusive_ptr.hpp>
#include <caf/ref_counted.hpp>

#include "vast/filesystem.hpp"
#include "vast/fwd.hpp"
#include "vast/segment.hpp"
#include "vast/segment_builder.hpp"
#include "vast/store.hpp"
#include "vast/uuid.hpp"

#include "vast/detail/cache.hpp"
#include "vast/detail/range_map.hpp"

namespace vast {

/// @relates segment_store
using segment_store_ptr = caf::intrusive_ptr<segment_store>;

/// A store that keeps its data in terms of segments.
class segment_store : public store, public caf::ref_counted {
public:
  /// Constructs a segment store.
  /// @param sys A reference to an actor system for table slice
  ///            deserialization.
  /// @param dir The directory where to store state.
  /// @param max_segment_size The maximum segment size in bytes.
  /// @param in_memory_segments The number of semgents to cache in memory.
  /// @pre `max_segment_size > 0`
  static segment_store_ptr make(caf::actor_system& sys,
                                path dir, size_t max_segment_size,
                                size_t in_memory_segments);

  ~segment_store();

  error put(const_table_slice_handle xs) override;

  caf::expected<std::vector<const_table_slice_handle>>
  get(const ids& xs) override;

  caf::error flush() override;

  /// @cond PRIVATE

  segment_store(caf::actor_system& sys, path dir, uint64_t max_segment_size,
                size_t in_memory_segments);

  /// @endcond

private:
  path meta_path() const {
    return dir_ / "meta";
  }

  path segment_path() const {
    return dir_ / "segments";
  }

  caf::actor_system& actor_system_;
  path dir_;
  uint64_t max_segment_size_;
  detail::range_map<id, uuid> segments_;
  detail::cache<uuid, segment_ptr> cache_;
  segment_builder builder_;
  std::vector<segment_ptr> builder_slices_;
};

} // namespace vast
