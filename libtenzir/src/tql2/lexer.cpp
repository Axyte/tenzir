//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/tql2/lexer.hpp"

#include "tenzir/concept/parseable/string/char_class.hpp"

#include <arrow/util/utf8.h>

namespace tenzir::tql2 {

auto lex(std::string_view content) -> std::vector<token> {
  // TODO: The char-class parsers (such as `parsers::alnum`) can cause undefined
  // behavior. We should fix them or use something different here.
  using namespace parsers;
  // clang-format off
  auto continue_ident = alnum | '_';
  auto identifier = (alpha | '_') >> *continue_ident;
  auto digit_us = digit | '_';
  auto p
    = ignore(*xdigit >> ':' >> *xdigit >> ':' >> *xdigit >> *(('.' | ':') >> *xdigit))
      ->* [] { return token_kind::ip; }
    | ignore(+digit >> '.' >> +digit >> +('.' >> +digit))
      ->* [] { return token_kind::ip; }
    | ignore(+digit >> '-' >> +digit >> '-' >> +digit >> *(alnum | ':' | '+' | '-'))
      ->* [] { return token_kind::datetime; }
    | ignore(digit >> *digit_us >> -('.' >> *digit_us) >> -identifier)
      ->* [] { return token_kind::number; }
    | ignore('"' >> *(('\\' >> any) | (any - '"')) >> '"')
      ->* [] { return token_kind::string; }
    | ignore('"' >> *(('\\' >> any) | (any - '"')))
      ->* [] { return token_kind::error; } // non-terminated string
    | ignore("//" >> *(any - '\n'))
      ->* [] { return token_kind::line_comment; }
    | ignore("/*" >> *(any - "*/") >> "*/")
      ->* [] { return token_kind::delim_comment; }
    | ignore("/*" >> *(any - "*/"))
      ->* [] { return token_kind::error; } // non-terminated comment
    | ignore(ch<'@'>)
      ->* [] { return token_kind::at; }
#define X(x, y) ignore(lit{x}) ->* [] { return token_kind::y; }
    | X("=>", fat_arrow)
    | X("==", equal_equal)
    | X("!=", equal_equal)
    | X(">=", greater_equal)
    | X("<=", less_equal)
    | X(">", greater)
    | X("<", less)
    | X("+", plus)
    | X("-", minus)
    | X("*", star)
    | X("/", slash)
    | X("=", equal)
    | X("|", pipe)
    | X(".", dot)
    | X("(", lpar)
    | X(")", rpar)
    | X("{", lbrace)
    | X("}", rbrace)
    | X("[", lbracket)
    | X("]", rbracket)
    | X(",", comma)
    | X(":", colon)
    | X("_", underscore)
    | X("'", single_quote)
    | X("\n", newline)
#undef X
#define X(x, y) ignore(lit{x} >> !continue_ident) ->* [] { return token_kind::y; }
    | X("and", and_)
    | X("else", else_)
    | X("false", false_)
    | X("if", if_)
    | X("in", in)
    | X("let", let)
    | X("match", match)
    | X("not", not_)
    | X("null", null)
    | X("or", or_)
    | X("this", this_)
    | X("true", true_)
#undef X
    | ignore('$' >> identifier)
      ->* [] { return token_kind::dollar_ident; }
    | ignore(identifier)
      ->* [] { return token_kind::identifier; }
    | ignore(+((space - '\n') | ("\\" >> *(space - '\n') >> '\n')))
      ->* [] { return token_kind::whitespace; }
  ;
  // clang-format on
  auto result = std::vector<token>{};
  auto current = content.begin();
  while (current != content.end()) {
    auto kind = token_kind{};
    if (p.parse(current, content.end(), kind)) {
      result.emplace_back(kind, current - content.begin());
    } else {
      ++current;
      auto end = current - content.begin();
      if (result.empty() || result.back().kind != token_kind::error) {
        result.emplace_back(token_kind::error, end);
      } else {
        result.back().end = end;
      }
    }
  }
  return result;
}

} // namespace tenzir::tql2
