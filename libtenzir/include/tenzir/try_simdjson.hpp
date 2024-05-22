//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/try.hpp"

#include <simdjson.h>

template <class T>
struct tenzir::tryable<simdjson::simdjson_result<T>> {
  static auto is_success(const simdjson::simdjson_result<T>& x) -> bool {
    return x.error() == simdjson::error_code::SUCCESS;
  }

  static auto get_success(simdjson::simdjson_result<T>&& x) -> T {
    return std::move(x).value_unsafe();
  }

  static auto get_error(simdjson::simdjson_result<T>&& x)
    -> simdjson::error_code {
    return x.error();
  }
};
