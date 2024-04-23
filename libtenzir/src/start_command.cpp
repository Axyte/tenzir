//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2018 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/start_command.hpp"

#include "tenzir/fwd.hpp"

#include "tenzir/application.hpp"
#include "tenzir/command.hpp"
#include "tenzir/concept/parseable/tenzir/endpoint.hpp"
#include "tenzir/config.hpp"
#include "tenzir/defaults.hpp"
#include "tenzir/detail/settings.hpp"
#include "tenzir/endpoint.hpp"
#include "tenzir/error.hpp"
#include "tenzir/logger.hpp"
#include "tenzir/scope_linked.hpp"
#include "tenzir/spawn_node.hpp"
#include "tenzir/systemd.hpp"

#include <caf/actor_system_config.hpp>
#include <caf/io/middleman.hpp>
#include <caf/openssl/all.hpp>
#include <caf/scoped_actor.hpp>
#include <caf/settings.hpp>
#include <caf/typed_event_based_actor.hpp>

#include <csignal>

namespace tenzir {

namespace {

/// Actor to run one of the additional commands given as
/// parameters to the Tenzir node.
using command_runner_actor = typed_actor_fwd<
  // Handle a request.
  auto(atom::run, invocation)->caf::result<void>>::unwrap;

command_runner_actor::behavior_type
command_runner(command_runner_actor::pointer self) {
  return {
    [self](atom::run, tenzir::invocation& invocation) -> caf::result<void> {
      auto [root, root_factory] = make_application("tenzir-ctl");
      auto result = run(invocation, self->home_system(), root_factory);
      if (!result)
        TENZIR_ERROR("failed to run start command {}: {}", invocation,
                     result.error());
      return {};
    },
  };
}

} // namespace

using namespace std::chrono_literals;

caf::message start_command(const invocation& inv, caf::actor_system& sys) {
  TENZIR_TRACE_SCOPE("{} {}", TENZIR_ARG(inv.options),
                     TENZIR_ARG("args", inv.arguments.begin(),
                                inv.arguments.end()));
  // Bail out early for bogus invocations.
  if (caf::get_or(inv.options, "tenzir.node", false))
    return caf::make_message(
      caf::make_error(ec::invalid_configuration,
                      "unable to run 'tenzir start' when spawning a "
                      "node locally instead of connecting to one; please "
                      "unset the option tenzir.node"));
  // Construct an endpoint.
  endpoint node_endpoint;
  auto str = get_or(inv.options, "tenzir.endpoint", defaults::endpoint.data());
  if (!parsers::endpoint(str, node_endpoint))
    return caf::make_message(
      caf::make_error(ec::parse_error, "invalid endpoint", str));
  // Default to port 5158/tcp if none is set.
  if (!node_endpoint.port)
    node_endpoint.port = port{defaults::endpoint_port, port_type::tcp};
  // Get a convenient and blocking way to interact with actors.
  caf::scoped_actor self{sys};
  // Spawn our node.
  auto node_opt = spawn_node(self, content(sys.config()));
  if (!node_opt)
    return caf::make_message(std::move(node_opt.error()));
  auto const& node = node_opt->get();
  // Publish our node.
  auto const* host = node_endpoint.host.empty() ? defaults::endpoint_host.data()
                                                : node_endpoint.host.c_str();
  auto publish = [&]() -> caf::expected<uint16_t> {
    const auto reuse_address = true;
    if (sys.has_openssl_manager()) {
      return caf::openssl::publish(node, node_endpoint.port->number(), host,
                                   reuse_address);
    }
    auto& mm = sys.middleman();
    return mm.publish(node, node_endpoint.port->number(), host, reuse_address);
  };
  auto bound_port = publish();
  if (!bound_port) {
    auto err
      = diagnostic::error("failed to bind to port {}",
                          node_endpoint.port->number())
          .note("{}", bound_port.error())
          .hint("check for other running tenzir-node processes at port {}",
                node_endpoint.port->number())
          .to_error();
    return caf::make_message(std::move(err));
  }
  auto listen_addr = std::string{host} + ':' + std::to_string(*bound_port);
  TENZIR_INFO("node is listening on {}", listen_addr);
  // Notify the service manager if it expects an update.
  if (auto error = systemd::notify_ready())
    return caf::make_message(std::move(error));
  // Run main loop.
  caf::error err;
  auto stop = false;
  self->monitor(node);
  // A single line of output to publish out address for scripts.
  if (caf::get_or(inv.options, "tenzir.start.print-endpoint", false))
    fmt::print("{}\n", listen_addr);
  auto commands = caf::get_or(inv.options, "tenzir.start.commands",
                              std::vector<std::string>{});
  if (commands.empty()) {
    if (auto const* command
        = caf::get_if<std::string>(&inv.options, "tenzir.start.commands"))
      commands.push_back(*command);
  }
  std::vector<command_runner_actor> command_runners;
  if (!commands.empty()) {
    auto [root, root_factory] = make_application("tenzir-ctl");
    // We're already in the start command, so we can safely assert that
    // make_application works as expected.
    TENZIR_ASSERT(root);
    for (auto const& command : commands) {
      // We use std::quoted for correct tokenization of quoted strings. The
      // invocation parser expects a vector of strings that are correctly
      // tokenized already.
      auto tokenizer = std::stringstream{command};
      auto cli = std::vector<std::string>{};
      auto current = std::string{};
      while (tokenizer >> std::quoted(current))
        cli.push_back(std::move(current));
      TENZIR_INFO("running post-start command {}", command);
      auto hook_invocation = parse(*root, cli.begin(), cli.end());
      if (!hook_invocation)
        return caf::make_message(hook_invocation.error());
      detail::merge_settings(inv.options, hook_invocation->options,
                             policy::merge_lists::yes);
      // In case the listen port option was set to 0 we need to set the
      // port that was allocated by the operating system here.
      caf::put(hook_invocation->options, "tenzir.endpoint", listen_addr);
      auto runner = self->spawn<caf::detached>(command_runner);
      command_runners.push_back(runner);
      self->send(runner, atom::run_v, *hook_invocation);
    }
  }
  self
    ->do_receive(
      [&](caf::down_msg& msg) {
        TENZIR_ASSERT(msg.source == node);
        TENZIR_DEBUG("{} received DOWN from node", *self);
        stop = true;
        if (msg.reason != caf::exit_reason::user_shutdown)
          err = std::move(msg.reason);
      },
      [&](atom::signal, int signal) {
        TENZIR_DEBUG("{} got {}", *self, ::strsignal(signal));
        TENZIR_ASSERT(signal == SIGINT || signal == SIGTERM);
        self->send_exit(node, caf::exit_reason::user_shutdown);
      })
    .until([&] {
      return stop;
    });
  return caf::make_message(std::move(err));
}

} // namespace tenzir
