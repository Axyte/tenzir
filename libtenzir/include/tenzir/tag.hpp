//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/die.hpp"

#include <variant>

namespace tenzir {

/// Marker type for the given type.
template <typename T>
struct tag {
  using type = T;

  friend auto inspect(auto& f, tag& x) -> bool {
    return f.object(x).pretty_name("tag").fields();
  }
};

/// Value of the marker type for the given type.
template <typename T>
inline constexpr auto tag_v = tag<T>{};

/// Variant of the marker types of the given types.
template <typename... Ts>
struct tag_variant : std::variant<tag<Ts>...> {
  using std::variant<tag<Ts>...>::variant;

  template <class T>
  static auto make() -> tag_variant {
    return tag_variant{tag_v<T>};
  }

  /// Returns whether this holds `tag<T>`.
  template <typename T>
  auto is() const -> bool {
    return std::holds_alternative<tag<T>>(*this);
  }

  template <class Inspector>
  friend auto inspect(Inspector& f, tag_variant& x) -> bool {
    auto index = x.index();
    if (not f.apply(index)) {
      return false;
    }
    if constexpr (Inspector::is_loading) {
      switch (index) {
#define TENZIR_TAG_VARIANT_APPLY_INDEX(idx)                                    \
  case idx:                                                                    \
    if constexpr ((idx) < sizeof...(Ts)) {                                     \
      x.template emplace<idx>();                                               \
      return true;                                                             \
    }                                                                          \
    return false
        TENZIR_TAG_VARIANT_APPLY_INDEX(0);
        TENZIR_TAG_VARIANT_APPLY_INDEX(1);
        TENZIR_TAG_VARIANT_APPLY_INDEX(2);
        TENZIR_TAG_VARIANT_APPLY_INDEX(3);
#undef TENZIR_TAG_VARIANT_APPLY_INDEX
        default:
          die("unimplemented");
      }
    }
    return true;
  }
};

} // namespace tenzir
