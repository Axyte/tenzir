//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/concept/printable/core/printer.hpp"

namespace tenzir {

template <class Printer>
class and_printer : public printer_base<and_printer<Printer>> {
public:
  using attribute = unused_type;

  explicit and_printer(Printer p) : printer_{std::move(p)} {
  }

  template <class Iterator, class Attribute>
  bool print(Iterator& out, const Attribute&) const {
    return printer_.print(out, unused);
  }

private:
  Printer printer_;
};

} // namespace tenzir
