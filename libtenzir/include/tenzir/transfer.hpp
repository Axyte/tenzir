//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/chunk.hpp"
#include "tenzir/curl.hpp"
#include "tenzir/generator.hpp"
#include "tenzir/http.hpp"

#include <chrono>
#include <string>

namespace tenzir {

/// Options for a cURL-based transfer.
/// @relates transfer
struct transfer_options {
  transfer_options() = default;

  std::string default_protocol{};
  std::chrono::milliseconds poll_timeout{100};
  bool verbose = false;

  friend auto inspect(auto& f, transfer_options& x) -> bool {
    return f.object(x)
      .pretty_name("tenzir.transfer_options")
      .fields(f.field("default_protocol", x.default_protocol),
              f.field("poll_timeout", x.poll_timeout),
              f.field("verbose", x.verbose));
  }
};

/// A cURL-based transfer.
class transfer {
public:
  /// Constructs a transfer.
  explicit transfer(transfer_options opts = {});

  /// Prepares a transfer with an HTTP request.
  /// @note resets the transfer.
  auto prepare(const http::request& req) -> caf::error;

  /// Prepares a transfer with an URL.
  /// @param url The URL to use.
  /// @note resets the transfer.
  auto prepare(uri url) -> caf::error;

  /// Prepares a chunk with a binary data.
  auto prepare(chunk_ptr chunk) -> caf::error;

  /// Runs until the current transfer completed.
  auto perform() -> caf::error;

  /// Retrieves file single chunk.
  auto download() -> caf::expected<chunk_ptr>;

  /// Retrieves the file in chunks.
  auto download_chunks() -> generator<caf::expected<chunk_ptr>>;

  /// Resets all transfer parameters, keeping the underlying connection alive.
  auto reset() -> caf::error;

  /// Returns a reference to the contained handle.
  auto handle() -> curl::easy&;

  transfer_options options;

private:
  curl::easy easy_;
};

auto download(http::request req, transfer_options opts = {})
  -> caf::expected<chunk_ptr>;

} // namespace tenzir
