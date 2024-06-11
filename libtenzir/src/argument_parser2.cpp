//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/argument_parser2.hpp"

#include "tenzir/detail/enumerate.hpp"
#include "tenzir/tql2/eval.hpp"
#include "tenzir/tql2/exec.hpp"

namespace tenzir {

namespace {

template <class T>
concept data_type = detail::tl_contains_v<data::types, T>;

} // namespace

void argument_parser2::parse(const operator_factory_plugin::invocation& inv,
                             session ctx) {
  TENZIR_ASSERT(function_ == false);
  return parse(inv.self, inv.args, ctx);
}

void argument_parser2::parse(const ast::function_call& call, session ctx) {
  TENZIR_ASSERT(function_ == true);
  return parse(call.fn, call.args, ctx);
}

void argument_parser2::parse(const ast::entity& self,
                             std::span<ast::expression const> args,
                             session ctx) {
  // TODO: Simplify and deduplicate everything in this function.
  auto emit = [&](diagnostic_builder d) {
    // TODO
    TENZIR_ASSERT(self.path.size() == 1);
    auto name = self.path[0].name;
    auto invocation = usage();
    if (function_) {
      invocation = fmt::format("({})", invocation);
    } else {
      invocation = fmt::format(" {}", invocation);
    }
    d = std::move(d).usage(fmt::format("{}{}", name, invocation));
    if (not docs_.empty()) {
      d = std::move(d).docs(docs_);
    }
    std::move(d).emit(ctx);
  };
  auto kind = [](const data& x) -> std::string_view {
    // TODO: Refactor this.
    return caf::visit(
      []<class Data>(const Data&) -> std::string_view {
        if constexpr (caf::detail::is_one_of<Data, pattern>::value) {
          TENZIR_UNREACHABLE();
        } else {
          return to_string(type_kind::of<data_to_type_t<Data>>);
        }
      },
      x);
  };
  auto arg = args.begin();
  for (auto [idx, positional] : detail::enumerate(positional_)) {
    if (arg == args.end()) {
      if (first_optional_ && idx >= *first_optional_) {
        break;
      }
      emit(diagnostic::error("expected additional positional argument `{}`",
                             positional.meta)
             .primary(self));
      break;
    }
    auto& expr = *arg;
    if (std::holds_alternative<ast::assignment>(*expr.kind)) {
      if (first_optional_ && idx >= *first_optional_) {
        break;
      }
      emit(diagnostic::error("expected positional argument `{}` first",
                             positional.meta)
             .primary(expr));
      break;
    }
    positional.set.match(
      [&]<data_type T>(setter<located<T>>& set) {
        auto value = const_eval(expr, ctx);
        if (not value) {
          return;
        }
        // TODO: Make this more beautiful.
        auto storage = T{};
        auto cast = caf::get_if<T>(&*value);
        if constexpr (std::same_as<T, uint64_t>) {
          if (not cast) {
            auto other = caf::get_if<int64_t>(&*value);
            if (other) {
              if (*other < 0) {
                emit(diagnostic::error("expected positive integer, got `{}`",
                                       *other)
                       .primary(expr));
                return;
              }
              storage = *other;
              cast = &storage;
            }
          }
        }
        if (not cast) {
          emit(diagnostic::error("expected argument of type `{}`, but got `{}`",
                                 type_kind::of<data_to_type_t<T>>, kind(value))
                 .primary(expr));
          return;
        }
        set(located{std::move(*cast), expr.get_location()});
      },
      [&](setter<ast::expression>& set) {
        set(expr);
      },
      [&](setter<located<pipeline>>& set) {
        auto pipe_expr = std::get_if<ast::pipeline_expr>(&*expr.kind);
        if (not pipe_expr) {
          emit(
            diagnostic::error("expected a pipeline expression").primary(expr));
          return;
        }
        auto pipe = prepare_pipeline(std::move(pipe_expr->inner), ctx);
        set(located{std::move(pipe), expr.get_location()});
      });
    ++arg;
  }
  for (; arg != args.end(); ++arg) {
    auto assignment = std::get_if<ast::assignment>(&*arg->kind);
    if (not assignment) {
      emit(diagnostic::error("did not expect more positional arguments")
             .primary(*arg));
      continue;
    }
    auto sel = std::get_if<ast::simple_selector>(&assignment->left);
    if (not sel || sel->has_this() || sel->path().size() != 1) {
      emit(diagnostic::error("invalid name").primary(assignment->left));
      continue;
    }
    auto& name = sel->path()[0].name;
    auto it = std::ranges::find(named_, name, &named::name);
    if (it == named_.end()) {
      emit(diagnostic::error("named argument `{}` does not exist", name)
             .primary(assignment->left));
      continue;
    }
    auto& expr = assignment->right;
    it->set.match(
      [&]<data_type T>(setter<located<T>>& set) {
        auto value = const_eval(expr, ctx);
        if (not value) {
          return;
        }
        auto cast = caf::get_if<T>(&*value);
        if (not cast) {
          // TODO: Attempt conversion.
          emit(diagnostic::error("expected argument of type `{}`, but got `{}`",
                                 type_kind::of<data_to_type_t<T>>, kind(value))
                 .primary(expr));
          return;
        }
        set(located{std::move(*cast), expr.get_location()});
      },
      [&](setter<ast::expression>& set) {
        set(expr);
      },
      [&](setter<located<pipeline>>& set) {
        auto pipe_expr = std::get_if<ast::pipeline_expr>(&*expr.kind);
        if (not pipe_expr) {
          emit(
            diagnostic::error("expected a pipeline expression").primary(expr));
          return;
        }
        auto pipe = prepare_pipeline(std::move(pipe_expr->inner), ctx);
        set(located{std::move(pipe), expr.get_location()});
      });
  }
}

auto argument_parser2::usage() const -> std::string {
  if (usage_cache_.empty()) {
    for (auto [idx, positional] : detail::enumerate(positional_)) {
      if (std::holds_alternative<setter<located<pipeline>>>(positional.set)) {
        usage_cache_ += " { ... }";
        continue;
      }
      if (not usage_cache_.empty()) {
        usage_cache_ += ", ";
      }
      if (first_optional_ && idx >= *first_optional_) {
        usage_cache_ += fmt::format("{}?", positional.meta);
      } else {
        usage_cache_ += positional.meta;
      }
    }
    for (auto& [name, set] : named_) {
      if (not usage_cache_.empty()) {
        usage_cache_ += ", ";
      }
      auto meta = set.match(
        []<data_type T>(const setter<located<T>>&) {
          return fmt::format("<{}>", type_kind::of<data_to_type_t<T>>);
        },
        [](const setter<ast::expression>&) -> std::string {
          return "<expr>";
        },
        [](const setter<located<pipeline>>&) -> std::string {
          return "{ ... }";
        });
      usage_cache_ += fmt::format("{}={}", name, meta);
    }
  }
  return usage_cache_;
}

template <argument_parser_type T>
auto argument_parser2::add(T& x, std::string meta) -> argument_parser2& {
  TENZIR_ASSERT(not first_optional_, "encountered required positional after "
                                     "optional positional argument");
  if constexpr (argument_parser_bare_type<T>) {
    positional_.emplace_back(setter<located<T>>{[&x](located<T> y) {
                               x = std::move(y.inner);
                             }},
                             std::move(meta));
  } else {
    positional_.emplace_back(setter<T>{[&x](T y) {
                               x = std::move(y);
                             }},
                             std::move(meta));
  }
  return *this;
}

template <argument_parser_type T>
auto argument_parser2::add(std::optional<T>& x, std::string meta)
  -> argument_parser2& {
  if (not first_optional_) {
    first_optional_ = positional_.size();
  }
  if constexpr (argument_parser_bare_type<T>) {
    positional_.emplace_back(setter<located<T>>{[&x](located<T> y) {
                               x = std::move(y.inner);
                             }},
                             std::move(meta));
  } else {
    positional_.emplace_back(setter<T>{[&x](T y) {
                               x = std::move(y);
                             }},
                             std::move(meta));
  }
  return *this;
}

template <argument_parser_type T>
auto argument_parser2::add(std::string name, std::optional<T>& x)
  -> argument_parser2& {
  if constexpr (argument_parser_bare_type<T>) {
    named_.emplace_back(std::move(name), setter<located<T>>{[&x](located<T> y) {
                          x = std::move(y.inner);
                        }});
  } else {
    named_.emplace_back(std::move(name), setter<T>{[&x](T y) {
                          x = std::move(y);
                        }});
  }
  return *this;
}

auto argument_parser2::add(std::string name, std::optional<location>& x)
  -> argument_parser2& {
  named_.emplace_back(std::move(name),
                      setter<located<bool>>{[&x](located<bool> y) {
                        if (y.inner) {
                          x = y.source;
                        } else {
                          x = std::nullopt;
                        }
                      }});
  return *this;
}

auto argument_parser2::add(std::string name, bool& x) -> argument_parser2& {
  named_.emplace_back(std::move(name),
                      setter<located<bool>>{[&x](located<bool> y) {
                        x = y.inner;
                      }});
  return *this;
}

template <std::monostate>
struct instantiate_argument_parser_add {
  template <class T>
  using positional
    = auto (argument_parser2::*)(T&, std::string) -> argument_parser2&;

  template <class T>
  using named
    = auto (argument_parser2::*)(std::string, T&) -> argument_parser2&;

  template <class... T>
  struct inner {
    static constexpr auto value = std::tuple{
      static_cast<positional<T>>(&argument_parser2::add)...,
      static_cast<positional<std::optional<T>>>(&argument_parser2::add)...,
      static_cast<named<std::optional<T>>>(&argument_parser2::add)...,
    };
  };

  static constexpr auto value
    = detail::tl_apply_t<argument_parser_types, inner>::value;
};

template struct instantiate_argument_parser_add<std::monostate{}>;

} // namespace tenzir
