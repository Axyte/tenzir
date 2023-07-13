//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

/// This namesapce hosts various functions related to controling the terminal.
/// @warn All functions in this namesapce are not thread-safe.
namespace vast::detail::terminal {

/// RAII helper for scope-wise terminal unbuffering.
struct unbufferer {
  unbufferer();
  ~unbufferer();
};

/// Makes the stdin unbuffered.
/// @returns `true` on success.
bool unbuffer();

/// Makes the stdin buffered again after a call to ::unbuffer.
/// @returns `true` on success.
bool buffer();

/// Disables printing of characters to the terminal.
/// @returns `true` on success.
bool disable_echo();

/// Enables printing of characters to the terminal.
/// @returns `true` on success.
bool enable_echo();

/// Tries to extract a single a character from STDIN within a short time
/// interval. The function blocks until either input arrives or the timeout
/// expires. Moreover, the function sets the terminal to unbuffered before
/// attempting to read a character and sets it back to buffered upon returning.
///
/// @param c The character from STDIN.
///
/// @param timeout The maximum number of milliseconds to block.
///
/// @returns `true` *iff* extracting a character from STDIN was successful
/// within *timeout* milliseconds.
///
/// @post Iff the function returned `true`, *c* contains the next character
/// from STDIN.
bool get(char& c, int timeout = 100);

} // namespace vast::detail::terminal
