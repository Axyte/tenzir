//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/concept/parseable/core/parser.hpp"

#include <type_traits>

namespace tenzir {

/// Wraps a parser and ignores its attribute.
template <class Parser>
class ignore_parser : public parser_base<ignore_parser<Parser>> {
public:
  using attribute = unused_type;

  constexpr explicit ignore_parser(Parser p) : parser_{std::move(p)} {
  }

  template <class Iterator, class Attribute>
  bool parse(Iterator& f, const Iterator& l, Attribute&) const {
    return parser_(f, l, unused);
  }

private:
  Parser parser_;
};

template <parser Parser>
constexpr auto ignore(Parser&& p) {
  return ignore_parser<std::decay_t<Parser>>{std::forward<Parser>(p)};
}

} // namespace tenzir
