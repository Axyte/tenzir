//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/concept/printable/print.hpp"

#include <ostream>
#include <type_traits>

namespace vast {

template <class Char, class Traits, class T>
auto operator<<(std::basic_ostream<Char, Traits>& out, const T& x)
  -> decltype(out) requires(printable<std::ostreambuf_iterator<Char>, T>) {
  using vast::print; // enable ADL
  if (!print(std::ostreambuf_iterator<Char>{out}, x))
    out.setstate(std::ios_base::failbit);
  return out;
}

} // namespace vast
