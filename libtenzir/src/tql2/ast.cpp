//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/tql2/ast.hpp"

namespace tenzir::tql2::ast {

auto expression::location() const -> tenzir::location {
  return match([](const auto& x) {
    return x.location();
  });
}

} // namespace tenzir::tql2::ast