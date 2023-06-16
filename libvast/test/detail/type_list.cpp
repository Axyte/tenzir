//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/detail/type_list.hpp"

namespace {

using namespace vast::detail;

// simple list
static_assert(std::is_same_v<tl_common_types_t<type_list<int, double, float>,
                                               type_list<float, double>>,
                             type_list<float, double>>);

// remove duplicates
static_assert(std::is_same_v<tl_common_types_t<type_list<int, int, int>,
                                               type_list<int, int, int, int>>,
                             type_list<int>>);

// empty RHS
static_assert(
  std::is_same_v<tl_common_types_t<type_list<int, int, int>, type_list<>>,
                 type_list<>>);

// empty LHS
static_assert(
  std::is_same_v<tl_common_types_t<type_list<>, type_list<int>>, type_list<>>);

} // namespace
