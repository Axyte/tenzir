//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/detail/assert.hpp"
#include "tenzir/detail/default_formatter.hpp"
#include "tenzir/detail/inspect_enum_str.hpp"
#include "tenzir/tql/basic.hpp"

#include <fmt/format.h>

#include <functional>

/// Similar to `TENZIR_ASSERT(...)`, but throws a `diagnostic` instead of
/// aborting. Unlike `TENZIR_ASSERT(...)`, this assertion is always checked,
/// hence the expression is allowed to have side-effects.
#define TENZIR_DIAG_ASSERT(x)                                                  \
  do {                                                                         \
    if (!(x)) {                                                                \
      ::tenzir::diagnostic::error("internal error: assertion `{}` failed at "  \
                                  "{}:{}",                                     \
                                  #x, __FILE__, __LINE__)                      \
        .throw_();                                                             \
    }                                                                          \
  } while (false)

namespace tenzir {

class diagnostic_handler {
public:
  virtual ~diagnostic_handler() = default;

  virtual void emit(diagnostic d) = 0;
};

enum class severity { error, warning, note };

template <class Inspector>
auto inspect(Inspector& f, severity& x) -> bool {
  return detail::inspect_enum_str(f, x, {"error", "warning", "note"});
}

struct diagnostic_annotation {
  diagnostic_annotation() = default;

  explicit diagnostic_annotation(bool primary, std::string text,
                                 location source);

  /// True if the source represents the underlying reason for the outer
  /// diagnostic, false if it is only related to it.
  bool primary{};

  /// An message for explanations, can be empty.
  std::string text;

  /// The location that this annotation is associated to, can be unknown.
  location source;

  friend auto inspect(auto& f, diagnostic_annotation& x) -> bool {
    return f.object(x)
      .pretty_name("diagnostic_span")
      .fields(f.field("primary", x.primary), f.field("text", x.text),
              f.field("source", x.source));
  }
};

template <>
inline constexpr auto enable_default_formatter<diagnostic_annotation> = true;

enum class diagnostic_note_kind {
  /// Generic note, not further specified.
  note,
  /// The usage description for an operator.
  usage,
  /// Recommendation on how to solve the problem.
  hint,
  /// Link to the associated documentation.
  docs
};

template <class Inspector>
auto inspect(Inspector& f, diagnostic_note_kind& x) -> bool {
  return detail::inspect_enum_str(f, x, {"note", "usage", "hint", "docs"});
}

/// Additional information related to a parent diagnostic.
struct diagnostic_note {
  diagnostic_note() = default;

  explicit diagnostic_note(diagnostic_note_kind kind, std::string message);

  /// The type of this note.
  diagnostic_note_kind kind;

  /// The (required) message of this note.
  std::string message;

  // In the future, we could allow annotations here as well.
  // std::vector<diagnostic_annotation> annotations;

  friend auto inspect(auto& f, diagnostic_note& x) -> bool {
    return f.object(x)
      .pretty_name("diagnostic_note")
      .fields(f.field("kind", x.kind), f.field("message", x.message));
  }
};

template <>
inline constexpr auto enable_default_formatter<diagnostic_note> = true;

/// A structured representation of a compiler diagnostic.
struct [[nodiscard]] diagnostic {
  /// The severity of the diagnostic.
  enum severity severity;

  /// Description of the diagnostic, should not be empty.
  std::string message;

  /// Annotations that are directly related to the message.
  std::vector<diagnostic_annotation> annotations;

  /// Additional notes which have their own message.
  std::vector<diagnostic_note> notes;

  template <class... Ts>
  static auto
  builder(enum severity s, fmt::format_string<Ts...> str, Ts&&... xs)
    -> diagnostic_builder;

  static auto builder(enum severity s, caf::error err) -> diagnostic_builder;

  template <class... Ts>
  static auto error(fmt::format_string<Ts...> str, Ts&&... xs)
    -> diagnostic_builder;

  static auto error(caf::error err) -> diagnostic_builder;

  template <class... Ts>
  static auto warning(fmt::format_string<Ts...> str, Ts&&... xs)
    -> diagnostic_builder;

  static auto warning(caf::error err) -> diagnostic_builder;

  auto modify() && -> diagnostic_builder;

  /// Wraps the diagnostic in an error object.
  auto to_error() const& -> caf::error {
    return caf::make_error(ec::diagnostic, *this);
  }

  auto to_error() && -> caf::error {
    return caf::make_error(ec::diagnostic, std::move(*this));
  }

  template <class Inspector>
  friend auto inspect(Inspector& f, diagnostic& x) -> bool {
    return f.object(x)
      .pretty_name("diagnostic")
      .fields(f.field("severity", x.severity), f.field("message", x.message),
              f.field("annotations", x.annotations), f.field("notes", x.notes));
  }
};

template <>
inline constexpr auto enable_default_formatter<diagnostic> = true;

/// Utility class to construct a `diagnostic`.
class [[nodiscard]] diagnostic_builder {
public:
  explicit diagnostic_builder(diagnostic start) : result_{std::move(start)} {
  }

  diagnostic_builder(enum severity severity, std::string message)
    : result_{severity, std::move(message), {}, {}} {
  }

  // -- annotations -----------------------------------------------------------

  auto
  primary(location source, std::string text = "") && -> diagnostic_builder {
    result_.annotations.push_back(
      diagnostic_annotation{true, std::move(text), source});
    return std::move(*this);
  }

  template <class... Ts>
    requires(sizeof...(Ts) > 0)
  auto primary(location source, fmt::format_string<Ts...> str,
               Ts&&... xs) && -> diagnostic_builder {
    return std::move(*this).primary(
      source, fmt::format(std::move(str), std::forward<Ts>(xs)...));
  }

  auto
  secondary(location source, std::string text = "") && -> diagnostic_builder {
    result_.annotations.push_back(
      diagnostic_annotation{false, std::move(text), source});
    return std::move(*this);
  }

  template <class... Ts>
    requires(sizeof...(Ts) > 0)
  auto secondary(location source, fmt::format_string<Ts...> str,
                 Ts&&... xs) && -> diagnostic_builder {
    return std::move(*this).secondary(
      source, fmt::format(std::move(str), std::forward<Ts>(xs)...));
  }

  // -- notes -----------------------------------------------------------------

  auto severity(enum severity s) && -> diagnostic_builder {
    result_.severity = s;
    return std::move(*this);
  }

  auto note(std::string str) && -> diagnostic_builder {
    result_.notes.push_back(
      diagnostic_note{diagnostic_note_kind::note, std::move(str)});
    return std::move(*this);
  }

  template <class... Ts>
    requires(sizeof...(Ts) > 0)
  auto
  note(fmt::format_string<Ts...> str, Ts&&... xs) && -> diagnostic_builder {
    return std::move(*this).note(
      fmt::format(std::move(str), std::forward<Ts>(xs)...));
  }

  auto docs(std::string str) && -> diagnostic_builder {
    result_.notes.push_back(
      diagnostic_note{diagnostic_note_kind::docs, std::move(str)});
    return std::move(*this);
  }

  template <class... Ts>
    requires(sizeof...(Ts) > 0)
  auto
  docs(fmt::format_string<Ts...> str, Ts&&... xs) && -> diagnostic_builder {
    return std::move(*this).docs(
      fmt::format(std::move(str), std::forward<Ts>(xs)...));
  }

  auto usage(std::string str) && -> diagnostic_builder {
    result_.notes.push_back(
      diagnostic_note{diagnostic_note_kind::usage, std::move(str)});
    return std::move(*this);
  }

  template <class... Ts>
    requires(sizeof...(Ts) > 0)
  auto
  usage(fmt::format_string<Ts...> str, Ts&&... xs) && -> diagnostic_builder {
    return std::move(*this).usage(
      fmt::format(std::move(str), std::forward<Ts>(xs)...));
  }

  auto hint(std::string str) && -> diagnostic_builder {
    result_.notes.push_back(
      diagnostic_note{diagnostic_note_kind::hint, std::move(str)});
    return std::move(*this);
  }

  template <class... Ts>
    requires(sizeof...(Ts) > 0)
  auto
  hint(fmt::format_string<Ts...> str, Ts&&... xs) && -> diagnostic_builder {
    return std::move(*this).hint(
      fmt::format(std::move(str), std::forward<Ts>(xs)...));
  }

  // -- finalizing ------------------------------------------------------------

  auto done() && -> diagnostic {
    return std::move(result_);
  }

  void emit(diagnostic_handler& diag) && {
    diag.emit(std::move(result_));
  }

  [[noreturn]] void throw_() && {
    throw std::move(result_);
  }

private:
  diagnostic result_;
};

template <class... Ts>
auto diagnostic::builder(enum severity s, fmt::format_string<Ts...> str,
                         Ts&&... xs) -> diagnostic_builder {
  return diagnostic_builder{s, fmt::format(std::move(str),
                                           std::forward<Ts>(xs)...)};
}

template <class... Ts>
auto diagnostic::error(fmt::format_string<Ts...> str, Ts&&... xs)
  -> diagnostic_builder {
  return builder(severity::error, std::move(str), std::forward<Ts>(xs)...);
}

inline auto diagnostic::error(caf::error err) -> diagnostic_builder {
  return builder(severity::error, std::move(err));
}

template <class... Ts>
auto diagnostic::warning(fmt::format_string<Ts...> str, Ts&&... xs)
  -> diagnostic_builder {
  return builder(severity::warning, std::move(str), std::forward<Ts>(xs)...);
}

inline auto diagnostic::warning(caf::error err) -> diagnostic_builder {
  return builder(severity::warning, std::move(err));
}

inline auto diagnostic::modify() && -> diagnostic_builder {
  return diagnostic_builder{std::move(*this)};
}

class null_diagnostic_handler final : public diagnostic_handler {
public:
  void emit(diagnostic diag) override {
    (void)diag;
  }

private:
};

class collecting_diagnostic_handler final : public diagnostic_handler {
public:
  void emit(diagnostic diag) override {
    result.push_back(std::move(diag));
  }

  auto collect() && -> std::vector<diagnostic> {
    return std::move(result);
  }

private:
  std::vector<diagnostic> result;
};

enum class color_diagnostics { no, yes };

struct location_origin {
  std::string filename;
  std::string source;
};

// TODO: The optionality of `origin` is a hack until we make the necessary info
// available in all places where we need it.
auto make_diagnostic_printer(std::optional<location_origin> origin,
                             color_diagnostics color, std::ostream& stream)
  -> std::unique_ptr<diagnostic_handler>;

} // namespace tenzir

template <>
struct fmt::formatter<tenzir::severity> {
  constexpr auto parse(format_parse_context& ctx) {
    return ctx.begin();
  }

  template <typename FormatContext>
  auto format(const tenzir::severity& x, FormatContext& ctx) const {
    using enum tenzir::severity;
    return fmt::format_to(ctx.out(), "{}", std::invoke([&] {
                            switch (x) {
                              case error:
                                return "error";
                              case warning:
                                return "warning";
                              case note:
                                return "note";
                            }
                            TENZIR_UNREACHABLE();
                          }));
  }
};

template <>
struct fmt::formatter<tenzir::diagnostic_note_kind> {
  constexpr auto parse(format_parse_context& ctx) {
    return ctx.begin();
  }

  template <typename FormatContext>
  auto format(const tenzir::diagnostic_note_kind& x, FormatContext& ctx) const {
    using enum tenzir::diagnostic_note_kind;
    return fmt::format_to(ctx.out(), "{}", std::invoke([&] {
                            switch (x) {
                              case note:
                                return "note";
                              case usage:
                                return "usage";
                              case hint:
                                return "hint";
                              case docs:
                                return "docs";
                            }
                            TENZIR_UNREACHABLE();
                          }));
  }
};
