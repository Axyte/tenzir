//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/concept/parseable/core/parser.hpp"

namespace vast {

template <class Lhs, class Rhs>
class difference_parser : public parser_base<difference_parser<Lhs, Rhs>> {
public:
  using lhs_attribute = typename Lhs::attribute;
  using rhs_attribute = typename Rhs::attribute;
  using attribute = lhs_attribute;

  constexpr difference_parser(Lhs lhs, Rhs rhs)
    : lhs_{std::move(lhs)}, rhs_{std::move(rhs)} {
  }

  template <class Iterator, class Attribute>
  bool parse(Iterator& f, const Iterator& l, Attribute& a) const {
    auto save = f;
    if (!rhs_(f, l, unused))
      return lhs_(f, l, a); // Invoke LHS only if RHS doesn't fail.
    f = save;
    return false;
  }

private:
  Lhs lhs_;
  Rhs rhs_;
};

} // namespace vast
