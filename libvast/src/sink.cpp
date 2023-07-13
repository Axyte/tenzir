//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2020 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/sink.hpp"

#include "vast/concept/printable/std/chrono.hpp"
#include "vast/concept/printable/stream.hpp"
#include "vast/concept/printable/to_string.hpp"
#include "vast/concept/printable/vast/uuid.hpp"
#include "vast/error.hpp"
#include "vast/format/writer.hpp"
#include "vast/instrumentation.hpp"
#include "vast/logger.hpp"
#include "vast/report.hpp"
#include "vast/status.hpp"
#include "vast/table_slice.hpp"

#include <caf/attach_stream_sink.hpp>
#include <caf/event_based_actor.hpp>
#include <caf/settings.hpp>

namespace vast {

namespace {

void process_slice(caf::stateful_actor<sink_state>* self, table_slice slice) {
  TENZIR_DEBUG("{} got: {} events from {}", *self, slice.rows(),
               self->current_sender());
  auto now = std::chrono::steady_clock::now();
  auto time_since_flush = now - self->state.last_flush;
  if (self->state.processed == 0) {
    TENZIR_INFO("{} received first result with a latency of {}",
                self->state.name, to_string(time_since_flush));
  }
  auto reached_max_events = [&] {
    TENZIR_INFO("{} reached limit of {} events", *self, self->state.max_events);
    self->state.writer->flush();
    self->state.send_report();
    self->quit();
  };
  auto t = timer::start(self->state.measurement);
  table_slice::size_type starting_rows = self->state.processed;
  // Drop excess elements.
  auto remaining = self->state.max_events - self->state.processed;
  if (remaining == 0) {
    t.stop(self->state.processed - starting_rows);
    return reached_max_events();
  }
  if (slice.rows() > remaining)
    slice = head(std::move(slice), remaining);
  // Handle events.
  if (auto err = self->state.writer->write(slice)) {
    TENZIR_ERROR("{} {}", *self, render(err));
    t.stop(self->state.processed - starting_rows);
    self->quit(std::move(err));
    return;
  }
  // Stop when reaching configured limit.
  self->state.processed += slice.rows();
  if (self->state.processed >= self->state.max_events) {
    t.stop(self->state.processed - starting_rows);
    return reached_max_events();
  }
  t.stop(self->state.processed - starting_rows);
  // Force flush if necessary.
  if (time_since_flush > self->state.flush_interval) {
    self->state.writer->flush();
    self->state.last_flush = now;
    self->state.send_report();
  }
}

} // namespace

sink_state::sink_state(caf::event_based_actor* self_ptr) : self(self_ptr) {
  // nop
}

void sink_state::send_report() {
  auto r = performance_report{{{std::string{name}, measurement}}};
  measurement = {};
  if (statistics_subscriber)
    self->send(statistics_subscriber, r);
  if (accountant)
    self->send(accountant, atom::metrics_v, r);
}

caf::behavior sink(caf::stateful_actor<sink_state>* self,
                   format::writer_ptr&& writer, uint64_t max_events) {
  TENZIR_DEBUG("{} spawned ({}, {})", *self, writer->name(),
               TENZIR_ARG(max_events));
  using namespace std::chrono;
  self->state.writer = std::move(writer);
  self->state.last_flush = steady_clock::now();
  if (max_events > 0) {
    TENZIR_DEBUG("{} caps event export at {} events", *self, max_events);
    self->state.max_events = max_events;
  } else {
    // Interpret 0 as infinite.
    self->state.max_events = std::numeric_limits<uint64_t>::max();
  }
  self->set_exit_handler([=](const caf::exit_msg& msg) {
    self->state.send_report();
    self->quit(msg.reason);
  });
  return {
    [self](
      caf::stream<table_slice> in) -> caf::inbound_stream_slot<table_slice> {
      struct stream_state {
        caf::actor self;
        caf::stateful_actor<sink_state>* self_ptr{nullptr};
      };
      return caf::attach_stream_sink(
               self, in,
               [self](stream_state& state) {
                 state.self = self;
                 state.self_ptr = self;
               },
               [](stream_state& state, table_slice slice) {
                 process_slice(state.self_ptr, std::move(slice));
               },
               [](stream_state& state, const caf::error& err) {
                 // There's no need to warn here, as we already print the error
                 // in the down handler of the sink command.
                 state.self_ptr->state.writer->flush();
                 state.self_ptr->state.send_report();
                 state.self_ptr->quit(err);
               })
        .inbound_slot();
    },
    [self](table_slice slice) {
      process_slice(self, std::move(slice));
    },
    [self](atom::limit, uint64_t max) {
      TENZIR_DEBUG("{} caps event export at {} events", *self, max);
      if (self->state.processed < max)
        self->state.max_events = max;
      else
        TENZIR_WARN("{} ignores new limit of {} (already processed {} events)",
                    *self, max, self->state.processed);
    },
    [self](accountant_actor accountant) {
      TENZIR_DEBUG("{} sets accountant to {}", *self, accountant);
      auto& st = self->state;
      st.accountant = std::move(accountant);
      self->send(st.accountant, atom::announce_v, st.name);
    },
    [self](atom::statistics, const caf::actor& statistics_subscriber) {
      TENZIR_DEBUG("{} sets statistics subscriber to {}", *self,
                   statistics_subscriber);
      self->state.statistics_subscriber = statistics_subscriber;
    },
    [self](atom::status, status_verbosity v) {
      record result;
      if (v >= status_verbosity::detailed) {
        record sink_status;
        if (self->state.writer)
          sink_status["format"] = self->state.writer->name();
        sink_status["processed"] = uint64_t{self->state.processed};
        auto xs = list{};
        xs.emplace_back(std::move(sink_status));
        result["sinks"] = std::move(xs);
      }
      return result;
    },
  };
}

} // namespace vast
