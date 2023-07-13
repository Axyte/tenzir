//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/concept/printable/core/printer.hpp"
#include "vast/concept/support/detail/attr_fold.hpp"
#include "vast/concept/support/detail/sequence.hpp"
#include "vast/detail/type_traits.hpp"

#include <tuple>
#include <type_traits>

namespace vast {

template <class Lhs, class Rhs>
class sequence_printer;

template <class>
struct is_sequence_printer : std::false_type {};

template <class... Ts>
struct is_sequence_printer<sequence_printer<Ts...>> : std::true_type {};

template <class T>
constexpr bool is_sequence_printer_v = is_sequence_printer<T>::value;

template <class Lhs, class Rhs>
class sequence_printer : public printer_base<sequence_printer<Lhs, Rhs>> {
public:
  using lhs_type = Lhs;
  using rhs_type = Rhs;
  using lhs_attribute = typename Lhs::attribute;
  using rhs_attribute = typename Rhs::attribute;

  // LHS = unused && RHS = unused  =>  unused
  // LHS = T && RHS = unused       =>  LHS
  // LHS = unused && RHS = T       =>  RHS
  // LHS = T && RHS = U            =>  std:tuple<T, U>
  using attribute =
    std::conditional_t<
      std::is_same_v<lhs_attribute, unused_type>
        && std::is_same_v<rhs_attribute, unused_type>,
      unused_type,
      std::conditional_t<
        std::is_same_v<lhs_attribute, unused_type>,
        rhs_attribute,
        std::conditional_t<
          std::is_same_v<rhs_attribute, unused_type>,
          lhs_attribute,
          detail::attr_fold<
            decltype(std::tuple_cat(detail::tuple_wrap<lhs_attribute>{},
                                    detail::tuple_wrap<rhs_attribute>{}))
          >
        >
      >
    >;

  constexpr sequence_printer(Lhs lhs, Rhs rhs)
    : lhs_{std::move(lhs)}, rhs_{std::move(rhs)} {
  }

  template <class Iterator, class Attribute>
  bool print(Iterator& out, const Attribute& a) const {
    return print_left(out, a) && print_right(out, a);
  }

private:
  template <class Iterator, class... Ts>
  bool print_left(Iterator& out, const std::tuple<Ts...>& x) const {
    return lhs_.print(out, detail::access_left<sequence_printer>(x));
  }

  template <class Iterator, class... Ts>
  bool print_right(Iterator& out, const std::tuple<Ts...>& x) const {
    return rhs_.print(out, detail::access_right<sequence_printer>(x));
  }

  template <class Iterator>
  bool print_left(Iterator& out, unused_type) const {
    return lhs_.print(out, unused);
  }

  template <class Iterator>
  bool print_right(Iterator& out, unused_type) const {
    return rhs_.print(out, unused);
  }

  template <class Iterator, class T, class U>
  bool print_left(Iterator& out, const std::pair<T, U>& p) const {
    return lhs_.print(out, p.first);
  }

  template <class Iterator, class T, class U>
  bool print_right(Iterator& out, const std::pair<T, U>& p) const {
    return rhs_.print(out, p.second);
  }

  template <class Iterator, class Attribute>
  bool print_left(Iterator& out, const Attribute& a) const {
    return lhs_.print(out, a);
  }

  template <class Iterator, class Attribute>
  bool print_right(Iterator& out, const Attribute& a) const {
    return rhs_.print(out, a);
  }

  Lhs lhs_;
  Rhs rhs_;
};

} // namespace vast
