//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/actors.hpp"
#include "tenzir/aliases.hpp"
#include "tenzir/detail/weak_handle.hpp"

namespace tenzir {

class metric_handler {
public:
  metric_handler() = default;
  metric_handler(detail::weak_handle<metrics_receiver_actor> new_receiver,
                 uint64_t operator_index);

  auto emit(const std::string& schema, record&& r) -> void;

  detail::weak_handle<metrics_receiver_actor> receiver;
  uint64_t op_index = {};
};

} // namespace tenzir
