//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/tql2/parser.hpp"

#include "tenzir/concept/parseable/string.hpp"
#include "tenzir/concept/parseable/tenzir/data.hpp"
#include "tenzir/detail/assert.hpp"
#include "tenzir/plugin.hpp"
#include "tenzir/tql2/ast.hpp"

#include <arrow/util/utf8.h>

#include <ranges>

namespace tenzir::tql2 {

using namespace tenzir::tql2::ast;

namespace {

auto precedence(unary_op x) -> int {
  using enum unary_op;
  switch (x) {
    case pos:
    case neg:
      return 7;
    case not_:
      return 3;
  };
  TENZIR_UNREACHABLE();
}

auto precedence(binary_op x) -> int {
  using enum binary_op;
  switch (x) {
    case mul:
    case div:
      return 6;
    case add:
    case sub:
      return 5;
    case gt:
    case ge:
    case lt:
    case le:
    case eq:
    case neq:
    case in:
      return 4;
    case and_:
      return 2;
    case or_:
      return 1;
  }
  TENZIR_UNREACHABLE();
}

class parser {
public:
  using tk = token_kind;

  static auto parse_file(std::span<token> tokens, std::string_view source,
                         diagnostic_handler& diag) -> pipeline {
    try {
      auto self = parser{tokens, source};
      auto pipe = self.parse_pipeline();
      if (self.next_ != self.tokens_.size()) {
        self.throw_token("expected EOF");
      }
      return pipe;
    } catch (diagnostic& d) {
      // TODO
      diag.emit(d);
      return pipeline{{}};
    }
  }

private:
  auto accept_stmt_sep() -> bool {
    return accept(tk::newline) || accept(tk::pipe);
  }

  auto parse_pipeline() -> pipeline {
    auto scope = ignore_newlines(false);
    auto steps = std::vector<statement>{};
    auto end = [&] {
      // TODO: rbrace
      return eoi() || peek(tk::rbrace);
    };
    auto accept_stmt_end = [&] {
      return end() || accept_stmt_sep();
    };
    while (true) {
      while (accept_stmt_sep()) {
      }
      if (accept(tk::let)) {
        if (auto ident = accept(tk::identifier)) {
          diagnostic::error("identifier after `let` must start with `$`")
            .primary(ident.location, "try `${}` instead", ident.text)
            .throw_();
        }
        auto name = expect(tk::dollar_ident);
        expect(tk::equal);
        auto expr = parse_expression();
        // TODO: Dollar ident.
        steps.emplace_back(let_stmt{name.as_identifier(), std::move(expr)});
        if (not accept_stmt_end()) {
          throw_token();
        }
        continue;
      }
      if (accept(tk::if_)) {
        auto condition = parse_expression();
        expect(tk::lbrace);
        auto consequence = parse_pipeline();
        expect(tk::rbrace);
        auto alternative = std::optional<pipeline>{};
        if (accept(tk::else_)) {
          expect(tk::lbrace);
          alternative = parse_pipeline();
          expect(tk::rbrace);
        }
        steps.emplace_back(if_stmt{
          std::move(condition),
          std::move(consequence),
          std::move(alternative),
        });
        if (not accept_stmt_end()) {
          throw_token();
        }
        continue;
      }
      if (accept(tk::match)) {
        // TODO: Decide exact syntax, useable for both single-line and
        // multi-line TQL, and for expressions and statements.
        //    match foo {
        //      "ok", 42 => { ... }
        //    }
        auto expr = parse_expression();
        auto arms = std::vector<match_stmt::arm>{};
        expect(tk::lbrace);
        auto scope = ignore_newlines(true);
        // TODO: Restrict this.
        while (not peek(tk::rbrace)) {
          auto filter = std::vector<expression>{};
          while (true) {
            filter.push_back(parse_expression());
            if (accept(tk::fat_arrow)) {
              break;
            }
            expect(tk::comma);
          }
          expect(tk::lbrace);
          auto pipe = parse_pipeline();
          expect(tk::rbrace);
          // TODO: require comma or newline?
          (void)accept(tk::comma);
          arms.emplace_back(std::move(filter), std::move(pipe));
        }
        scope.done();
        expect(tk::rbrace);
        steps.emplace_back(match_stmt{std::move(expr), std::move(arms)});
        if (not accept_stmt_end()) {
          throw_token();
        }
        continue;
      }
      if (end()) {
        // TODO: Use if(START) instead.
        break;
      }
      // either selector followed by `=`, or entity (no_dollar)
      // TODO: Parse entities that consist of multiple identifiers.
      auto left = parse_selector();
      if (auto equal = accept(tk::equal)) {
        auto right = parse_expression();
        steps.emplace_back(
          assignment{std::move(left), equal.location, std::move(right)});
        if (not accept_stmt_end()) {
          throw_token();
        }
      } else if (left.path.size() == 1) {
        // TODO: Parse operator.
        // TODO: Proper entity.
        auto op = entity{{std::move(left.path[0])}};
        auto args = std::vector<expression>{};
        while (not accept_stmt_end()) {
          if (not args.empty()) {
            if (not accept(tk::comma)) {
              // Allow `{ ... }` without comma as final argument.
              if (not peek(tk::lbrace)) {
                diagnostic::error("unexpected continuation of arguments")
                  .primary(next_location())
                  .hint("try inserting a `,` before")
                  .throw_();
              }
              args.emplace_back(parse_record_or_pipeline());
              if (accept_stmt_end()) {
                break;
              }
              auto before = args.back().match([](auto& x) {
                return x.location();
              });
              diagnostic::error(
                "expected end of statement due to final argument")
                .primary(next_location(), "expected end of statement")
                .secondary(before, "final argument")
                .hint("insert a `,` before `{` to continue arguments")
                .throw_();
            }
            consume_trivia_with_newlines();
          }
          args.push_back(parse_expression());
        }
        steps.emplace_back(invocation{std::move(op), std::move(args)});
      } else {
        diagnostic::error("expected operator name or `=` afterwards")
          .primary(left.location())
          .throw_();
      }
    }
    return pipeline{std::move(steps)};
  }

  auto selector_start() -> bool {
    return peek(tk::identifier) || peek(tk::this_);
  }

  auto parse_selector() -> selector {
    auto this_ = accept(tk::this_);
    auto path = std::vector<identifier>{};
    while (true) {
      if (this_ || not path.empty()) {
        if (not accept(tk::dot)) {
          break;
        }
      }
      if (auto ident = accept(tk::identifier)) {
        path.emplace_back(std::string{ident.text}, ident.location);
      } else {
        throw_token();
      }
    }
    return selector{this_ ? this_.location : std::optional<location>{},
                    std::move(path)};
  }

  auto parse_record_or_pipeline() -> expression {
    auto begin = accept(tk::lbrace);
    if (not begin) {
      throw_token();
    }
    // { }       // unknown -> record
    // { test :  // record
    // OTHERWISE pipeline
    // TODO: This does not respect trivia.
    auto scope = ignore_newlines(true);
    auto is_record = peek(tk::rbrace)
                     || (raw_peek(tk::identifier) && raw_peek(tk::colon, 1));
    if (is_record) {
      auto content = std::vector<record::content_kind>{};
      while (true) {
        if (not content.empty()) {
          // TODO: Check.
          if (not peek(tk::rbrace)) {
            // TODO: Improve error message.
            expect(tk::comma);
          }
        }
        if (peek(tk::rbrace)) {
          scope.done();
          auto end = expect(tk::rbrace);
          return expression{
            record{begin.location, std::move(content), end.location}};
        }
        auto name = expect(tk::identifier);
        expect(tk::colon);
        auto expr = parse_expression();
        content.emplace_back(
          record::field{identifier{name.text, name.location}, std::move(expr)});
      }
    }
    auto pipe = parse_pipeline();
    scope.done();
    auto end = expect(tk::rbrace);
    return pipeline_expr{begin.location, std::move(pipe), end.location};
  }

  auto peek_unary_op() -> std::optional<unary_op> {
#define X(x, y)                                                                \
  if (peek(tk::x)) {                                                           \
    return unary_op::y;                                                        \
  }
    X(not_, not_);
    X(minus, neg);
#undef X
    return std::nullopt;
  }

  auto peek_binary_op() -> std::optional<binary_op> {
#define X(x, y)                                                                \
  if (peek(tk::x)) {                                                           \
    return binary_op::y;                                                       \
  }
    X(plus, add);
    X(minus, sub);
    X(star, mul);
    X(slash, div);
    X(greater, gt);
    X(greater_equal, ge);
    X(less, le);
    X(less_equal, le);
    X(equal_equal, eq);
    X(bang_equal, neq);
    X(and_, and_);
    X(or_, or_);
    X(in, in);
#undef X
    return std::nullopt;
  }

  auto parse_expression(int prec = 0) -> expression {
    // TODO
    auto expr = parse_unary_expression();
    // foo = bar = baz
    while (true) {
      if (prec == 0) {
        if (auto equal = accept(tk::equal)) {
          auto left = std::get_if<selector>(expr.kind.get());
          if (not left) {
            diagnostic::error("left of `=` must be selector")
              .primary(expr.location())
              .hint("equality comparison is done with `==`")
              .throw_();
          }
          // TODO: Check precedence.
          auto right = parse_expression();
          expr = assignment{std::move(*left), equal.location, std::move(right)};
          continue;
        }
      }
      if (auto bin_op = peek_binary_op()) {
        auto new_prec = precedence(*bin_op);
        if (new_prec >= prec) {
          auto location = advance();
          consume_trivia_with_newlines();
          auto right = parse_expression(new_prec + 1);
          expr = binary_expr{
            std::move(expr),
            located{*bin_op, location},
            std::move(right),
          };
          continue;
        }
      }
      break;
    }
    return expr;
  }

  auto parse_unary_expression() -> expression {
    if (auto op = peek_unary_op()) {
      auto location = advance();
      auto expr = parse_expression(precedence(*op));
      return unary_expr{
        located{*op, location},
        std::move(expr),
      };
    }
    auto expr = parse_primary_expression();
    while (true) {
      if (auto dot = accept(tk::dot)) {
        auto name = expect(tk::identifier);
        // TODO: `accept(tk::lpar)` for method call
        expr = field_access{
          std::move(expr),
          dot.location,
          name.as_identifier(),
        };
        continue;
      }
      if (auto lbracket = accept(tk::lbracket)) {
        if (auto rbracket = accept(tk::rbracket)) {
          expr = unpack{std::move(expr),
                        lbracket.location.combine(rbracket.location)};
        } else {
          auto index = parse_expression();
          rbracket = expect(tk::rbracket);
          expr = index_expr{std::move(expr), lbracket.location,
                            std::move(index), rbracket.location};
        }
        continue;
      }
      break;
    }
    return expr;
  }

  auto parse_primary_expression() -> expression {
    // Literals: bool, duration, time, double, ipv4, ipv6, uint/int??, string
    if (accept(tk::lpar)) {
      auto result = parse_expression();
      expect(tk::rpar);
      return result;
    }
    if (auto token = accept(tk::underscore)) {
      return underscore{};
    }
    if (auto token = accept(tk::string)) {
      // TODO: Make this better?
      auto result = std::string{};
      TENZIR_ASSERT(token.text.size() >= 2);
      auto f = token.text.begin() + 1;
      auto e = token.text.end() - 1;
      for (auto it = f; it != e; ++it) {
        auto x = *it;
        if (x != '\\') {
          result.push_back(x);
          continue;
        }
        ++it;
        if (it == e) {
          // TODO: invalid, but cannot happen
          TENZIR_UNREACHABLE();
        }
        x = *it;
        if (x == '\\') {
          result.push_back('\\');
        } else if (x == '"') {
          result.push_back('"');
        } else if (x == 'n') {
          result.push_back('\n');
        } else {
          diagnostic::error("found unknown escape sequence `{}`",
                            token.text.substr(it - f, 2))
            .primary(token.location.subloc(it - f, 2))
            .throw_();
        }
      }
      if (not arrow::util::ValidateUTF8(result)) {
        // TODO: Would be nice to report the actual error location.
        diagnostic::error("string contains invalid utf-8")
          .primary(token.location)
          .hint("consider using a blob instead: b{}", token.text)
          .throw_();
      }
      return literal{std::move(result), token.location};
    }
    if (auto token = accept(tk::number)) {
      // TODO: Make this better, do not use existing parsers.
      if (auto result = int64_t{}; parsers::i64(token.text, result)) {
        return literal{result, token.location};
      }
      if (auto result = uint64_t{}; parsers::u64(token.text, result)) {
        return literal{result, token.location};
      }
      if (auto result = double{}; parsers::real(token.text, result)) {
        return literal{result, token.location};
      }
      if (auto result = duration{}; parsers::duration(token.text, result)) {
        return literal{result, token.location};
      }
      diagnostic::error("could not parse number")
        .primary(token.location)
        .note("number parsing still is very rudimentary")
        .throw_();
    }
    if (auto token = accept(tk::datetime)) {
      // TODO: Make this better.
      if (auto result = time{}; parsers::ymdhms(token.text, result)) {
        return literal{result, token.location};
      }
      diagnostic::error("could not parse datetime")
        .primary(token.location)
        .throw_();
    }
    if (auto token = accept(tk::true_)) {
      return literal{true, token.location};
    }
    if (auto token = accept(tk::false_)) {
      return literal{false, token.location};
    }
    if (auto token = accept(tk::null)) {
      return literal{null{}, token.location};
    }
    if (auto token = accept(tk::ip)) {
      // TODO
      if (auto result = ip{}; parsers::ip(token.text, result)) {
        return literal{result, token.location};
      }
    }
    if (auto token = accept(tk::dollar_ident)) {
      return dollar_var{token.as_identifier()};
    }
    if (selector_start()) {
      // Check if we have identifier followed by `(` or `'`.
      // TODO: Accept entity as function name.
      auto selector = parse_selector();
      auto ent = std::optional<entity>{};
      if (accept(tk::single_quote)) {
        if (selector.this_ || selector.path.size() != 1) {
          diagnostic::error("todo: unexpected stuff before entity")
            .primary(selector.location())
            .throw_();
        }
        auto path = std::move(selector.path);
        while (true) {
          auto ident = expect(tk::identifier);
          path.push_back(ident.as_identifier());
          if (not accept(tk::single_quote)) {
            break;
          }
        }
        ent = entity{std::move(path)};
      }
      if (accept(tk::lpar)) {
        // TODO: Chained method calls.
        auto receiver = std::optional<expression>{};
        if (not ent) {
          if (selector.this_ and selector.path.empty()) {
            diagnostic::error("`this` cannot be called")
              .primary(*selector.this_)
              .throw_();
          }
          TENZIR_ASSERT(not selector.path.empty());
          ent = entity{{std::move(selector.path.back())}};
          selector.path.pop_back();
          if (selector.this_ || not selector.path.empty()) {
            receiver = std::move(selector);
          }
        }
        auto scope = ignore_newlines(true);
        auto args = std::vector<expression>{};
        while (true) {
          if (peek(tk::rpar)) {
            scope.done();
            (void)advance();
            break;
          }
          if (not args.empty()) {
            expect(tk::comma);
            if (peek(tk::rpar)) {
              scope.done();
              (void)advance();
              break;
            }
          }
          if (auto comma = accept(tk::comma)) {
            if (args.empty()) {
              diagnostic::error("unexpected comma before any arguments")
                .primary(comma.location)
                .throw_();
            } else {
              diagnostic::error("duplicate comma")
                .primary(comma.location)
                .throw_();
            }
          }
          args.push_back(parse_expression());
        }
        TENZIR_ASSERT(ent);
        return function_call{std::move(receiver), std::move(*ent),
                             std::move(args)};
      }
      return selector;
    }
    if (peek(tk::lbrace)) {
      return parse_record_or_pipeline();
    }
    if (auto open = accept(tk::lbracket)) {
      auto items = std::vector<expression>{};
      while (true) {
        if (not items.empty()) {
          if (not accept(tk::comma)) {
            if (not peek(tk::rbracket)) {
              throw_token();
            }
          }
        }
        if (auto close = accept(tk::rbracket)) {
          return list{open.location, std::move(items), close.location};
        }
        items.push_back(parse_expression());
      }
      throw_token();
    }
    throw_token();
  }

  struct accept_result {
    std::string_view text;
    location location;

    explicit operator bool() const {
      // TODO: Is this okay?
      return text.data() != nullptr;
    }

    auto as_identifier() const -> identifier {
      return identifier{text, location};
    }

    auto as_string() const -> located<std::string> {
      return {text, location};
    }
  };

  [[nodiscard]] auto advance() -> location {
    TENZIR_ASSERT(next_ < tokens_.size());
    auto begin = next_ == 0 ? 0 : tokens_[next_ - 1].end;
    auto end = tokens_[next_].end;
    ++next_;
    consume_trivia();
    tries_.clear();
    return {begin, end};
  }

  [[nodiscard]] auto accept(token_kind kind) -> accept_result {
    if (next_ < tokens_.size()) {
      if (kind == tokens_[next_].kind) {
        auto loc = advance();
        return accept_result{source_.substr(loc.begin, loc.end - loc.begin),
                             location{loc.begin, loc.end}};
      }
    }
    tries_.push_back(kind);
    return {};
  }

  auto expect(token_kind kind) -> accept_result {
    if (auto result = accept(kind)) {
      return result;
    }
    throw_token();
  }

  auto silent_peek(token_kind kind) -> bool {
    return next_ < tokens_.size() && tokens_[next_].kind == kind;
  }

  auto peek(token_kind kind) -> bool {
    // TODO: Does this count as trying the token?
    tries_.push_back(kind);
    return silent_peek(kind);
  }

  auto raw_peek(token_kind kind, size_t offset = 0) -> bool {
    auto index = next_;
    while (true) {
      if (index >= tokens_.size()) {
        return false;
      }
      if (is_trivia(tokens_[index].kind)) {
        index += 1;
        continue;
      }
      if (offset == 0) {
        return tokens_[index].kind == kind;
      }
      offset -= 1;
      index += 1;
    }
  }

  class [[nodiscard]] newline_scope {
  public:
    explicit newline_scope(bool* ptr, bool value) : previous_{*ptr}, ptr_{ptr} {
      *ptr = value;
    }

    void done() const {
      TENZIR_ASSERT(ptr_);
      *ptr_ = previous_;
    }

    ~newline_scope() {
      if (ptr_) {
        done();
      }
    }

    newline_scope(newline_scope&& other) noexcept : ptr_{other.ptr_} {
      other.ptr_ = nullptr;
    }

    newline_scope(const newline_scope& other) = delete;
    auto operator=(newline_scope&& other) -> newline_scope& = delete;
    auto operator=(const newline_scope& other) -> newline_scope& = delete;

    bool previous_{};
    bool* ptr_ = nullptr;
  };

  auto ignore_newlines(bool value) -> newline_scope {
    auto scope = newline_scope{&ignore_newline_, value};
    consume_trivia();
    return scope;
  }

  auto is_trivia(token_kind kind) const -> bool {
    switch (kind) {
      case tk::line_comment:
      case tk::delim_comment:
      case tk::whitespace:
        return true;
      case tk::newline:
        return ignore_newline_;
      default:
        return false;
    }
  }

  template <class F>
  void consume_while(F&& f) {
    while (next_ < tokens_.size()) {
      if (f(tokens_[next_].kind)) {
        next_ += 1;
      } else {
        break;
      }
    }
  }

  void consume_trivia() {
    consume_while([&](token_kind k) {
      return is_trivia(k);
    });
  }

  void consume_trivia_with_newlines() {
    consume_while([&](token_kind k) {
      return is_trivia(k) || k == token_kind::newline;
    });
  }

  auto eoi() const -> bool {
    return next_ == tokens_.size();
  }

  auto next_location() -> location {
    auto loc = location{};
    if (next_ < tokens_.size()) {
      loc.begin = next_ == 0 ? 0 : tokens_[next_ - 1].end;
      loc.end = tokens_[next_].end;
    } else {
      loc.begin = tokens_.back().end;
      loc.end = tokens_.back().end;
    }
    return loc;
  }

  [[noreturn]] void throw_token(std::string message) {
    auto loc = next_location();
    auto got = std::string_view{};
    if (next_ < tokens_.size()) {
      got = describe(tokens_[next_].kind);
    } else {
      got = "EOF";
    }
    diagnostic::error("{}", message).primary(loc, "got {}", got).throw_();
  }

  [[noreturn]] void throw_token() {
    std::ranges::sort(tries_);
    tries_.erase(std::ranges::unique(tries_).begin(), tries_.end());
    throw_token(fmt::format(
      "expected one of: {}",
      fmt::join(tries_ | std::ranges::views::transform(describe), ", ")));
  }

  parser(std::span<token> tokens, std::string_view source)
    : tokens_{tokens}, source_{source} {
    consume_trivia();
  }

  bool ignore_newline_ = false;
  size_t next_ = 0;
  std::vector<token_kind> tries_;
  std::span<token> tokens_;
  std::string_view source_;
};

} // namespace

auto parse(std::span<token> tokens, std::string_view source,
           diagnostic_handler& diag) -> ast::pipeline {
  return parser::parse_file(tokens, source, diag);
}

} // namespace tenzir::tql2
