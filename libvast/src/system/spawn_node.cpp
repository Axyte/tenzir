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

#include "vast/system/spawn_node.hpp"

#include <caf/config_value.hpp>
#include <caf/scoped_actor.hpp>

#include "vast/defaults.hpp"
#include "vast/logger.hpp"
#include "vast/scope_linked.hpp"
#include "vast/system/node.hpp"

namespace vast::system {

expected<scope_linked_actor> spawn_node(caf::scoped_actor& self,
                                        const caf::config_value_map& opts) {
  // Fetch values from config.
  auto id = caf::get_or(opts, "id", defaults::command::node_id);
  auto dir = caf::get_or(opts, "dir", defaults::command::directory);
  auto abs_dir = path{dir}.complete();
  VAST_DEBUG_ANON(__func__, "spawns local node:", id);
  // Pointer to the root command to system::node.
  scope_linked_actor node{self->spawn(system::node, id, abs_dir)};
  auto spawn_component = [&](auto&&... xs) {
    return [&] {
      caf::error result;
      auto args = caf::make_message(std::move(xs)...);
      self->request(node.get(), caf::infinite, "spawn", std::move(args))
        .receive([](const caf::actor&) { /* nop */ },
                 [&](caf::error& e) { result = std::move(e); });
      return result;
    };
  };
  auto err = caf::error::eval(
    spawn_component("metastore"),
    spawn_component("archive"),
    spawn_component("index"),
    spawn_component("importer")
  );
  if (err) {
    VAST_ERROR(self, self->system().render(err));
    return err;
  }
  return node;
}

} // namespace vast::system
