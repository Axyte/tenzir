//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/concept/parseable/core/parser.hpp"
#include "vast/concept/parseable/core/rule.hpp"
#include "vast/concept/parseable/numeric.hpp"
#include "vast/concept/parseable/string/quoted_string.hpp"
#include "vast/concept/parseable/string/string.hpp"
#include "vast/concept/parseable/vast/identifier.hpp"
#include "vast/concept/parseable/vast/ip.hpp"
#include "vast/concept/parseable/vast/pattern.hpp"
#include "vast/concept/parseable/vast/si.hpp"
#include "vast/concept/parseable/vast/subnet.hpp"
#include "vast/concept/parseable/vast/time.hpp"
#include "vast/data.hpp"

#include <caf/none.hpp>

namespace vast {
namespace parsers {

constexpr inline auto number = (parsers::count >> &!chr{'.'})
                               | (parsers::integer >> &!chr{'.'})
                               | parsers::real;

} // namespace parsers

struct data_parser : parser_base<data_parser> {
  using attribute = data;

  template <class Iterator, class Attribute>
  bool parse(Iterator& f, const Iterator& l, Attribute& a) const {
    static auto p = make<Iterator>();
    return p(f, l, a);
  }

private:
  template <class Iterator>
  static auto make() {
    using namespace parser_literals;
    rule<Iterator, data> p;
    auto ws = ignore(*parsers::space);
    auto x = ws >> ref(p) >> ws;
    auto kvp = x >> "->" >> x;
    auto trailing_comma = ~(',' >> ws);
    auto named_field = ws >> parsers::identifier >> ":" >> x;
    // clang-format off
    auto unnamed_field = x ->* [](data value) {
      return std::make_pair(std::string{}, std::move(value));
    };
    // A record can either be ordered with unnamed fields or unordered
    // with named fields. Allowing a mixture of both would mean we'd
    // have to deal with ambiguous inputs.
    auto record_parser =
        '<' >> ~as<record>(named_field % ',') >> trailing_comma >> '>'
        // Creating a record with repeated field names technically violates
        // the consistency of the underlying stable_map. We live with that
        // until record is refactored into a proper type (FIXME).
      | ('<' >> (unnamed_field % ',') >> trailing_comma >> '>')
        ->* [](record::vector_type&& xs) {
          return record::make_unsafe(std::move(xs));
        };
    p = parsers::time
      | parsers::duration
      | parsers::net
      | parsers::ip
      | parsers::number
      | parsers::boolean
      | parsers::qqstr
      | parsers::pattern
      | '[' >> ~(x % ',') >> trailing_comma >> ']'
      | '{' >> ~as<map>(kvp % ',') >> trailing_comma >> '}'
      | record_parser
      | as<caf::none_t>("null"_p)
      | as<caf::none_t>(parsers::ch<'_'>)
      ;
    // clang-format on
    return p;
  }
};

template <>
struct parser_registry<data> {
  using type = data_parser;
};

namespace parsers {

static auto const data = data_parser{};

} // namespace parsers
} // namespace vast
