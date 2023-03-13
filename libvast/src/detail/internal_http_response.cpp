//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/detail/internal_http_response.hpp>
#include <vast/error.hpp>

namespace vast::detail {

internal_http_response::internal_http_response(
  caf::typed_response_promise<std::string> promise)
  : body_(std::string{""}), promise_(std::move(promise)) {
}

internal_http_response::~internal_http_response() {
  promise_.deliver(std::move(body_));
}

void internal_http_response::append(std::string body) {
  if (body_)
    *body_ += body;
}

void internal_http_response::abort(uint16_t error_code, std::string message) {
  body_ = caf::make_error(ec::system_error,
                          fmt::format("Error {}: {}", error_code, message));
}

caf::expected<std::string> internal_http_response::release() && {
  return std::move(body_);
}

} // namespace vast::detail