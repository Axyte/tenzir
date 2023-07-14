//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2017 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/bitmap_base.hpp"
#include "tenzir/coder.hpp"
#include "tenzir/concept/printable/core.hpp"
#include "tenzir/concept/printable/core/ignore.hpp"
#include "tenzir/concept/printable/numeric/integral.hpp"
#include "tenzir/concept/printable/tenzir/bitmap.hpp"

#include <type_traits>

namespace tenzir {

template <class Bitmap, class Policy = policy::expanded>
struct vector_coder_printer
  : printer_base<vector_coder_printer<Bitmap, Policy>> {
  using attribute = vector_coder<Bitmap>;

  template <class Iterator, class Coder>
  bool print(Iterator& out, const Coder& coder) const {
    if (coder.storage().empty())
      return true;
    auto i = size_t{0};
    auto key = printers::integral<size_t> ->* [&] { return i++; };
    auto row = ignore(key) << '\t' << printers::bitmap<Bitmap, Policy>;
    auto bmi = row % '\n';
    return bmi.print(out, coder.storage());
  }
};

template <class Coder>
  requires(std::is_base_of_v<vector_coder<typename Coder::bitmap_type>, Coder>)
struct printer_registry<Coder> {
  using type
    = vector_coder_printer<typename Coder::bitmap_type, policy::expanded>;
};

namespace printers {

template <class Bitmap, class Policy>
auto const vector_coder = vector_coder_printer<Bitmap, Policy>{};

} // namespace printers
} // namespace tenzir
