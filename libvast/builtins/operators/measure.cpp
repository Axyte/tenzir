//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/concept/parseable/string/char_class.hpp>
#include <vast/concept/parseable/vast/pipeline.hpp>
#include <vast/error.hpp>
#include <vast/logger.hpp>
#include <vast/pipeline.hpp>
#include <vast/plugin.hpp>
#include <vast/table_slice_builder.hpp>

#include <arrow/type.h>

namespace vast::plugins::measure {

namespace {

class measure_operator final : public crtp_operator<measure_operator> {
public:
  measure_operator() = default;

  measure_operator(uint64_t batch_size, bool real_time, bool cumulative)
    : batch_size_{batch_size}, real_time_{real_time}, cumulative_{cumulative} {
  }

  auto operator()(generator<table_slice> input) const
    -> generator<table_slice> {
    auto last_finish = std::chrono::steady_clock::now();
    const auto batch_timeout = std::chrono::seconds{1};
    static const auto schema = type{
      "tenzir.metrics.events",
      record_type{
        {"timestamp", time_type{}},
        {"events", uint64_type{}},
        {"schema", string_type{}},
        {"schema_id", string_type{}},
      },
    };
    auto builder = table_slice_builder{schema};
    auto counters = std::unordered_map<type, uint64_t>{};
    for (auto&& slice : input) {
      const auto now = std::chrono::steady_clock::now();
      if (slice.rows() == 0) {
        if (builder.rows() > 0 and last_finish + batch_timeout < now) {
          last_finish = now;
          co_yield builder.finish();
          continue;
        }
        co_yield {};
        continue;
      }
      auto& events = counters[slice.schema()];
      events = cumulative_ ? events + slice.rows() : slice.rows();
      const auto ok
        = builder.add(time{std::chrono::system_clock::now()}, events,
                      slice.schema().name(), slice.schema().make_fingerprint());
      VAST_ASSERT(ok);
      if (real_time_ or builder.rows() == batch_size_
          or last_finish + batch_timeout < now) {
        last_finish = now;
        co_yield builder.finish();
        continue;
      }
      co_yield {};
    }
    if (builder.rows() > 0)
      co_yield builder.finish();
  }

  auto operator()(generator<chunk_ptr> input) const -> generator<table_slice> {
    auto last_finish = std::chrono::steady_clock::now();
    const auto batch_timeout = std::chrono::seconds{1};
    static const auto schema = type{
      "tenzir.metrics.bytes",
      record_type{
        {"timestamp", time_type{}},
        {"bytes", uint64_type{}},
      },
    };
    auto builder = table_slice_builder{schema};
    auto counter = uint64_t{};
    for (auto&& chunk : input) {
      const auto now = std::chrono::steady_clock::now();
      if (!chunk || chunk->size() == 0) {
        if (builder.rows() > 0 and last_finish + batch_timeout < now) {
          last_finish = now;
          co_yield builder.finish();
          continue;
        }
        co_yield {};
        continue;
      }
      counter = cumulative_ ? counter + chunk->size() : chunk->size();
      const auto ok = builder.add(std::chrono::time_point_cast<time::duration>(
                                    std::chrono::system_clock::now()),
                                  counter);
      VAST_ASSERT(ok);
      if (real_time_ or builder.rows() == batch_size_
          or last_finish + batch_timeout < now) {
        last_finish = now;
        co_yield builder.finish();
        continue;
      }
      co_yield {};
    }
    if (builder.rows() > 0)
      co_yield builder.finish();
  }

  auto to_string() const -> std::string override {
    return fmt::format("measure{}{}", real_time_ ? " --real-time" : "",
                       cumulative_ ? " --cumulative" : "");
  }

  auto name() const -> std::string override {
    return "measure";
  }

  friend auto inspect(auto& f, measure_operator& x) -> bool {
    return detail::apply_all(f, x.batch_size_, x.real_time_, x.cumulative_);
  }

private:
  uint64_t batch_size_ = {};
  bool real_time_ = {};
  bool cumulative_ = {};
};

class plugin final : public virtual operator_plugin<measure_operator> {
public:
  auto make_operator(std::string_view pipeline) const
    -> std::pair<std::string_view, caf::expected<operator_ptr>> override {
    using parsers::optional_ws_or_comment, parsers::required_ws_or_comment,
      parsers::str, parsers::end_of_pipeline_operator;
    const auto* f = pipeline.begin();
    const auto* const l = pipeline.end();
    bool real_time = false;
    bool cumulative = false;
    const auto p = *ignore((required_ws_or_comment
                            >> str{"--real-time"}.then([&](std::string) {
                                real_time = true;
                              }))
                           | (required_ws_or_comment
                              >> str{"--cumulative"}.then([&](std::string) {
                                  cumulative = true;
                                })))
                   >> optional_ws_or_comment >> end_of_pipeline_operator;
    if (!p(f, l, unused)) {
      return {
        std::string_view{f, l},
        caf::make_error(ec::syntax_error, fmt::format("failed to parse "
                                                      "measure operator: '{}'",
                                                      pipeline)),
      };
    }
    return {
      std::string_view{f, l},
      std::make_unique<measure_operator>(batch_size_, real_time, cumulative),
    };
  }

private:
  uint64_t batch_size_ = {};
};

} // namespace

} // namespace vast::plugins::measure

VAST_REGISTER_PLUGIN(vast::plugins::measure::plugin)
