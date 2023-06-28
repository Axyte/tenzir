//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2019 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/count_command.hpp"

#include "vast/fwd.hpp"

#include "vast/actors.hpp"
#include "vast/error.hpp"
#include "vast/logger.hpp"
#include "vast/read_query.hpp"
#include "vast/scope_linked.hpp"
#include "vast/spawn_or_connect_to_node.hpp"

#include <caf/actor.hpp>
#include <caf/scoped_actor.hpp>
#include <caf/settings.hpp>

#include <chrono>
#include <csignal>

using namespace std::chrono_literals;

namespace vast {

caf::message count_command(const invocation& inv, caf::actor_system& sys) {
  VAST_DEBUG("{}", inv);
  const auto& options = inv.options;
  // Read query from input file, STDIN or CLI arguments.
  auto query = read_query(inv, "tenzir.count.read", must_provide_query::no);
  if (!query)
    return caf::make_message(std::move(query.error()));
  // Get a convenient and blocking way to interact with actors.
  caf::scoped_actor self{sys};
  // Get VAST node.
  auto node_opt
    = spawn_or_connect_to_node(self, options, content(sys.config()));
  if (auto err = std::get_if<caf::error>(&node_opt))
    return caf::make_message(std::move(*err));
  const auto& node = std::holds_alternative<node_actor>(node_opt)
                       ? std::get<node_actor>(node_opt)
                       : std::get<scope_linked<node_actor>>(node_opt).get();
  VAST_ASSERT(node != nullptr);
  // Spawn COUNTER at the node.
  caf::actor cnt;
  auto args = invocation{options, "spawn counter", {*query}};
  VAST_DEBUG("{} spawns counter with parameters: {}",
             detail::pretty_type_name(inv.full_name), query);
  auto err = caf::error{};
  self->request(node, caf::infinite, atom::spawn_v, std::move(args))
    .receive(
      [&](caf::actor actor) {
        cnt = std::move(actor);
        if (!cnt)
          err = caf::make_error(ec::invalid_result, //
                                "remote spawn returned nullptr");
      },
      [&](caf::error e) { //
        err = std::move(e);
      });
  if (err)
    return caf::make_message(std::move(err));
  self->send(cnt, atom::run_v, self);
  bool counting = true;
  uint64_t result = 0;
  self->receive_while
    // Loop until false.
    (counting)
    // Message handlers.
    (
      [&](uint64_t x) {
        result += x;
      },
      [&](atom::done) {
        counting = false;
      },
      [&](atom::signal, int signal) {
        VAST_DEBUG("{} got {}", detail::pretty_type_name(inv.full_name),
                   ::strsignal(signal));
        VAST_ASSERT(signal == SIGINT || signal == SIGTERM);
        counting = false;
      });
  std::cout << result << std::endl;
  return {};
}

} // namespace vast
