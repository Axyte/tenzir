//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/pipeline_executor.hpp"

#include "tenzir/actors.hpp"
#include "tenzir/atoms.hpp"
#include "tenzir/connect_to_node.hpp"
#include "tenzir/detail/narrow.hpp"
#include "tenzir/diagnostics.hpp"
#include "tenzir/error.hpp"
#include "tenzir/execution_node.hpp"
#include "tenzir/pipeline.hpp"

#include <caf/actor_system_config.hpp>
#include <caf/attach_stream_sink.hpp>
#include <caf/attach_stream_source.hpp>
#include <caf/attach_stream_stage.hpp>
#include <caf/downstream.hpp>
#include <caf/error.hpp>
#include <caf/event_based_actor.hpp>
#include <caf/exit_reason.hpp>
#include <caf/policy/select_all.hpp>
#include <caf/typed_event_based_actor.hpp>
#include <caf/typed_response_promise.hpp>

#include <iterator>

namespace tenzir {

void pipeline_executor_state::start_nodes_if_all_spawned() {
  auto untyped_exec_nodes = std::vector<caf::actor>{};
  for (auto node : exec_nodes) {
    if (not node) {
      // Not all spawned yet.
      return;
    }
    untyped_exec_nodes.push_back(caf::actor_cast<caf::actor>(node));
  }
  self->link_to(exec_nodes.back());
  self->set_exit_handler([this](caf::exit_msg& msg) {
    TENZIR_DEBUG("{} received exit from all execution nodes: {}", *self,
                 msg.reason);
    self->quit(std::move(msg.reason));
  });
  TENZIR_DEBUG("{} successfully spawned {} execution nodes", *self,
               untyped_exec_nodes.size());
  untyped_exec_nodes.pop_back();
  // The exec nodes delegate the `atom::start` message to the preceding exec
  // node. Thus, when we start the last node, all nodes before are started as
  // well, and the request is completed only afterwards.
  self
    ->request(exec_nodes.back(), caf::infinite, atom::start_v,
              std::move(untyped_exec_nodes))
    .then(
      [this]() mutable {
        finish_start();
      },
      [this](caf::error& err) mutable {
        TENZIR_VERBOSE("{} aborts start because execution node could not be "
                       "started: {}",
                       *self, err);
        abort_start(std::move(err));
      });
}

void pipeline_executor_state::spawn_execution_nodes(pipeline pipe) {
  TENZIR_DEBUG("{} spawns execution nodes", *self);
  auto input_type = operator_type::make<void>();
  auto previous = exec_node_actor{};
  bool spawn_remote = false;
  // Spawn pipeline piece by piece.
  auto op_index = 0;
  for (auto&& op : std::move(pipe).unwrap()) {
    // Only switch locations if necessary.
    if (spawn_remote and op->location() == operator_location::local) {
      spawn_remote = false;
    } else if (not spawn_remote
               and op->location() == operator_location::remote) {
      spawn_remote = true;
    }
    auto description = fmt::format("{:?}", op);
    if (spawn_remote) {
      TENZIR_DEBUG("{} spawns {} remotely", *self, description);
      if (not node) {
        abort_start(caf::make_error(
          ec::invalid_argument, "encountered remote operator, but remote node "
                                "is nullptr"));
        return;
      }
      // The node will instantiate the operator for us, but we already need its
      // output type to spawn the following operator.
      auto output_type = op->infer_type(input_type);
      if (not output_type) {
        abort_start(caf::make_error(ec::invalid_argument,
                                    "could not spawn '{}' for {}", description,
                                    input_type));
        return;
      }
      // Allocate an empty handle in the list of exec nodes. When the node actor
      // returns the handle, we set the handle. This is also used to detect when
      // all exec nodes are spawned.
      auto index = exec_nodes.size();
      exec_nodes.emplace_back();
      self
        ->request(node, caf::infinite, atom::spawn_v,
                  operator_box{std::move(op)}, input_type, diagnostics, metrics,
                  op_index)
        .then(
          [=, this](exec_node_actor& exec_node) {
            TENZIR_VERBOSE("{} spawned {} remotely", *self, description);
            self->monitor(exec_node);
            exec_nodes[index] = std::move(exec_node);
            start_nodes_if_all_spawned();
          },
          [=, this](caf::error& err) {
            TENZIR_DEBUG("{} failed to spawn {} remotely: {}", *self,
                         description, err);
            abort_start(std::move(err));
          });
      input_type = *output_type;
    } else {
      TENZIR_DEBUG("{} spawns {} locally", *self, description);
      auto spawn_result
        = spawn_exec_node(self, std::move(op), input_type, node, diagnostics,
                          metrics, op_index, has_terminal);
      if (not spawn_result) {
        abort_start(add_context(spawn_result.error(),
                                "{} failed to spawn execution node", *self));
        return;
      }
      TENZIR_DEBUG("{} spawned {} locally", *self, description);
      std::tie(previous, input_type) = std::move(*spawn_result);
      self->monitor(previous);
      exec_nodes.push_back(previous);
    }
    ++op_index;
  }
  if (exec_nodes.empty()) {
    TENZIR_DEBUG("{} quits because of empty pipeline", *self);
    finish_start();
    self->quit();
    return;
  }
  start_nodes_if_all_spawned();
}

void pipeline_executor_state::abort_start(diagnostic reason) {
  TENZIR_DEBUG("{} sends diagnostic due to start abort: {:?}", *self, reason);
  self->request(diagnostics, caf::infinite, std::move(reason))
    .then(
      [this]() {
        // We already delivered the error as a diagnostic.
        TENZIR_DEBUG("{} delivered diagnostic and shuts down silently", *self);
        start_rp.deliver(ec::diagnostic);
        self->quit(ec::diagnostic);
      },
      [this](caf::error& error) {
        TENZIR_WARN("{} could not send start diagnostic: {}", *self, error);
        start_rp.deliver(
          add_context(error, "{} could not deliver diagnostic", *self));
        self->quit(ec::diagnostic);
      });
}

void pipeline_executor_state::abort_start(caf::error reason) {
  if (reason == ec::diagnostic) {
    TENZIR_DEBUG("{} delivers silent start abort", *self);
    start_rp.deliver(ec::diagnostic);
    self->quit(ec::diagnostic);
    return;
  }
  abort_start(
    diagnostic::error("{}", reason).note("pipeline failed to start").done());
}

void pipeline_executor_state::finish_start() {
  TENZIR_DEBUG("{} signals successful start", *self);
  start_rp.deliver();
}

auto pipeline_executor_state::start() -> caf::result<void> {
  TENZIR_DEBUG("{} got start request", *self);
  if (not this->pipe) {
    return caf::make_error(ec::logic_error,
                           "pipeline exeuctor can only start once");
  }
  auto pipe = *std::exchange(this->pipe, std::nullopt);
  start_rp = self->make_response_promise<void>();
  auto output = pipe.infer_type<void>();
  if (not output) {
    TENZIR_DEBUG("{} failed type inference", *self);
    abort_start(output.error());
    return start_rp;
  }
  if (not output->is<void>()) {
    TENZIR_DEBUG("{} fails because pipeline ends with {}", *self,
                 operator_type_name(*output));
    auto ops = pipe.operators();
    auto suffix = std::string{};
    if (not ops.empty()) {
      suffix = fmt::format(" instead of `{}`", ops.back()->name());
    }
    abort_start(
      diagnostic::error("expected pipeline to end with a sink{}", suffix)
        .docs("https://docs.tenzir.com/operators")
        .done());
    return start_rp;
  }
  if (not node) {
    for (const auto& op : pipe.operators()) {
      if (op->location() == operator_location::remote) {
        TENZIR_DEBUG("{} connects to node because of remote operators", *self);
        connect_to_node(self, content(self->system().config()),
                        [this, pipe = std::move(pipe)](
                          caf::expected<node_actor> result) mutable {
                          if (not result) {
                            abort_start(std::move(result.error()));
                            return;
                          }
                          node = *result;
                          spawn_execution_nodes(std::move(pipe));
                        });
        return start_rp;
      }
    }
  }
  spawn_execution_nodes(std::move(pipe));
  return start_rp;
}

auto pipeline_executor_state::pause() -> caf::result<void> {
  if (start_rp.pending()) {
    return caf::make_error(ec::logic_error,
                           "cannot pause a pipeline before it was started");
  }
  auto rp = self->make_response_promise<void>();
  self
    ->fan_out_request<caf::policy::select_all>(exec_nodes, caf::infinite,
                                               atom::pause_v)
    .then(
      [rp]() mutable {
        rp.deliver();
      },
      [rp](const caf::error& err) mutable {
        rp.deliver(add_context(err, "failed to pause exec-node"));
      });
  return rp;
}

auto pipeline_executor_state::resume() -> caf::result<void> {
  auto rp = self->make_response_promise<void>();
  self
    ->fan_out_request<caf::policy::select_all>(exec_nodes, caf::infinite,
                                               atom::resume_v)
    .then(
      [rp]() mutable {
        rp.deliver();
      },
      [rp](const caf::error& err) mutable {
        rp.deliver(add_context(err, "failed to resume exec-node"));
      });
  return rp;
}

auto pipeline_executor(
  pipeline_executor_actor::stateful_pointer<pipeline_executor_state> self,
  pipeline pipe, receiver_actor<diagnostic> diagnostics,
  receiver_actor<metric> metrics, node_actor node, bool has_terminal)
  -> pipeline_executor_actor::behavior_type {
  TENZIR_DEBUG("{} was created", *self);
  self->state.self = self;
  self->state.node = std::move(node);
  self->state.pipe = std::move(pipe);
  self->state.diagnostics = std::move(diagnostics);
  self->state.metrics = std::move(metrics);
  self->state.allow_unsafe_pipelines
    = caf::get_or(self->system().config(), "tenzir.allow-unsafe-pipelines",
                  self->state.allow_unsafe_pipelines);
  self->state.has_terminal = has_terminal;
  self->set_down_handler([self](caf::down_msg& msg) {
    const auto exec_node
      = std::find_if(self->state.exec_nodes.begin(),
                     self->state.exec_nodes.end(), [&](const auto& exec_node) {
                       return msg.source == exec_node.address();
                     });
    if (exec_node != self->state.exec_nodes.end()) {
      self->state.exec_nodes.erase(exec_node);
    }
  });
  return {
    [self](atom::start) -> caf::result<void> {
      return self->state.start();
    },
    [self](atom::pause) -> caf::result<void> {
      return self->state.pause();
    },
    [self](atom::resume) -> caf::result<void> {
      return self->state.resume();
    },
  };
}

} // namespace tenzir
