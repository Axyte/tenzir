//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/concept/parseable/core/parser.hpp"
#include "tenzir/concept/parseable/detail/char_helpers.hpp"

namespace tenzir {

struct any_parser : public parser_base<any_parser> {
  using attribute = char;

  template <class Iterator, class Attribute>
  bool parse(Iterator& f, const Iterator& l, Attribute& x) const {
    if (f == l)
      return false;
    detail::absorb(x, *f);
    ++f;
    return true;
  }
};

template <>
struct parser_registry<char> {
  using type = any_parser;
};

namespace parsers {

static const auto any = any_parser{};

} // namespace parsers
} // namespace tenzir
