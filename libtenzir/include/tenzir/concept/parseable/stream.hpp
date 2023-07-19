//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/concept/parseable/parse.hpp"

#include <istream>
#include <type_traits>

namespace tenzir {

template <class CharT, class Traits, class T>
auto operator>>(std::basic_istream<CharT, Traits>& in, T& x)
  -> decltype(in) requires(parseable<std::istreambuf_iterator<CharT>, T>) {
  using tenzir::parse; // enable ADL
  std::istreambuf_iterator<CharT> begin{in}, end;
  if (!parse(begin, end, x))
    in.setstate(std::ios_base::failbit);
  return in;
}

} // namespace tenzir
