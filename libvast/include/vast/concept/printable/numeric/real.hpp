//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/concept/printable/core/printer.hpp"
#include "vast/concept/printable/detail/print_numeric.hpp"

#include <cmath>
#include <cstdint>
#include <string>
#include <type_traits>

namespace vast {

template <class T, int MaxDigits = 10, int MinDigits = 0>
struct real_printer : printer_base<real_printer<T, MaxDigits, MinDigits>> {
  static_assert(std::is_floating_point<T>{}, "T must be a floating point type");

  using attribute = T;

  template <class Iterator>
  bool print(Iterator& out, T x) const {
    // negative = positive + sign
    if (x < 0) {
      *out++ = '-';
      x = -x;
    }
    T left;
    uint64_t right = std::round(std::modf(x, &left) * std::pow(10, MaxDigits));
    if constexpr (MaxDigits == 0) {
      detail::print_numeric(out, static_cast<uint64_t>(std::round(x)));
      return true;
    }
    detail::print_numeric(out, static_cast<uint64_t>(left));
    *out++ = '.';
    // Add leading decimal zeros.
    auto magnitude = right == 0 ? MaxDigits : std::log10(right);
    for (auto i = 1.0; i < MaxDigits - magnitude; ++i)
      *out++ = '0';
    // Chop off trailing zeros of the decimal digits.
    while (right > 0 && right % 10 == 0)
      right /= 10;
    if constexpr (MinDigits == 0)
      detail::print_numeric(out, right);
    else
      for (auto i = detail::print_numeric(out, right); i < MinDigits; ++i)
        *out++ = '0';
    return true;
  }
};

template <class T>
  requires(std::is_floating_point_v<T>)
struct printer_registry<T> {
  using type = real_printer<T>;
};

namespace printers {

auto const fp = real_printer<float>{};
auto const real = real_printer<double>{};
auto const real1 = real_printer<double, 1>{};
auto const real2 = real_printer<double, 2>{};
auto const real3 = real_printer<double, 3>{};
auto const real4 = real_printer<double, 4>{};
auto const real5 = real_printer<double, 5>{};
auto const real6 = real_printer<double, 6>{};

} // namespace printers
} // namespace vast
