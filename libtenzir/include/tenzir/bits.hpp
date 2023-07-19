//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/detail/operators.hpp"
#include "tenzir/word.hpp"

#include <tuple>

namespace tenzir {

/// A sequence of bits represented by a single word. If the size is greater
/// than or equal to the word size, then the data block must be all 0s or
/// all 1s. Otherwise, only the N least-significant bits are active, and the
/// remaining bits in the block are guaranteed to be 0.
template <class T>
class bits : detail::equality_comparable<bits<T>> {
  public:
  using word_type = word<T>;
  using value_type = typename word_type::value_type;
  using size_type = typename word_type::size_type;
  static constexpr size_type npos = word_type::npos;

  /// @returns the width of the underlying block.
  static constexpr size_type width() {
    return word<T>::width;
  }

  /// Constructs an empty bit sequence.
  bits() : data_{0}, size_{0} {
    // nop
  }

  /// Constructs a bit sequence from a block.
  /// @param x The blco kvalue of the sequence.
  explicit bits(value_type x) : data_{x}, size_{width()} {
    // nop
  }

  /// Constructs a variable-sized bit sequence.
  /// @param x The value of the sequence.
  /// @param n The length of the sequence.
  /// @pre `n < width() || all_or_none(x)`.
  // FIXME: we do we need value_type(...) around x & word<T>::lsb_mask(n)? Both
  // x and word<T>::lsb_mask(n) have the same type. The compiler complains
  // about narrowing?! --MV
  bits(value_type x, size_type n)
    : data_{n < width() ? value_type(x & word<T>::lsb_mask(n)) : x},
      size_{n} {
    TENZIR_ASSERT(n <= width() || word<T>::all_or_none(x));
  }

  /// @returns The data block of the bit sequence.
  [[nodiscard]] value_type data() const {
    return data_;
  }

  /// @returns The size of the bit sequence.
  [[nodiscard]] size_type size() const {
    return size_;
  }

  /// Checks whether a bit sequence has zero length.
  /// @returns `true` iff `size() == 0`.
  [[nodiscard]] bool empty() const {
    return size_ == 0;
  }

  /// Checks whether the bit sequence can be represented by a partial word.
  /// @returns `true` iff `size() == width()`.
  [[nodiscard]] bool is_partial_word() const {
    return size() < width();
  }

  /// Checks whether the bit sequence can be represented by a complete word.
  /// @returns `true` iff `size() == width()`.
  [[nodiscard]] bool is_complete_word() const {
    return size() == width();
  }

  /// Checks whether the bit sequence is a run.
  /// @returns `true` iff `size() > width()`.
  [[nodiscard]] bool is_run() const {
    return size_ > width();
  }

  /// Checks whether all bits have the same value.
  /// @returns `true` if the bits are either all 0 or all 1.
  [[nodiscard]] bool homogeneous() const {
    return size_ >= word<T>::width ? word<T>::all_or_none(data_)
                                   : word<T>::all_or_none(data_, size_);
  }

  /// Accesses the i-th bit in the bit sequence.
  /// @param i The bit position counting from the LSB.
  /// @returns The i-th bit value from the LSB.
  /// @pre `i < size`.
  bool operator[](size_type i) const {
    TENZIR_ASSERT(i < size_);
    return is_run() ? !!data_ : data_ & word<T>::mask(i);
  }

  /// Creates a slice of the bit sequence.
  /// @param offset The starting position of the new sequence.
  /// @returns A new bit sequence that starts at *offset*.
  /// @pre `offset < size()`
  [[nodiscard]] bits slice(size_type offset) const {
    TENZIR_ASSERT(offset < size());
    return slice(offset, size_ - offset);
  }

  /// Creates a slice of the bit sequence.
  /// @param offset The starting position of the new bit sequence.
  /// @param length The number of bits of the new bit sequence.
  /// @returns A new bit sequence of size *length* that starts at *offset*.
  /// @pre `offset + length <= size()`
  [[nodiscard]] bits slice(size_type offset, size_type length) const {
    TENZIR_ASSERT(offset + length <= size());
    return bits(is_run() ? data_ : data_ >> offset, length);
  }

  friend bool operator==(const bits& x, const bits& y) {
    return x.data() == y.data() && x.size() == y.size();
  }

  friend bool operator<(const bits& x, const bits& y) {
    return std::tie(x.data(), x.size()) < std::tie(y.data(), y.size());
  }

private:
  value_type data_;
  size_type size_;
};

// -- subsetting -------------------------------------------------------------

/// Removes elements from the beginning.
/// @param xs The sequence to manipulate.
/// @param n The number of elements to remove.
/// @returns A new sequence without the first *n* elements.
template <class T>
bits<T> drop(bits<T> xs, typename bits<T>::size_type n) {
  return n < xs.size() ? xs.slice(n) : bits<T>{};
}

/// Removes elements from the end.
/// @param xs The sequence to manipulate.
/// @param n The number of elements to remove.
/// @returns A new sequence without the last *n* elements.
template <class T>
bits<T> drop_right(bits<T> xs, typename bits<T>::size_type n) {
  return n < xs.size() ? xs.slice(0, xs.size() - n) : bits<T>{};
}

/// Takes elements from the beginning.
/// @param xs The sequence to manipulate.
/// @param n The number of elements to take.
/// @returns A new sequence with the first *n* elements.
template <class T>
bits<T> take(bits<T> xs, typename bits<T>::size_type n) {
  return n < xs.size() ? xs.slice(0, n) : xs;
}

/// Takes elements from the end.
/// @param xs The sequence to manipulate.
/// @param n The number of elements to take.
/// @returns A new sequence with the last *n* elements.
template <class T>
bits<T> take_right(bits<T> xs, typename bits<T>::size_type n) {
  return n < xs.size() ? xs.slice(xs.size() - n) : xs;
}

// -- searching --------------------------------------------------------------

/// Finds the first bit of a particular value.
/// @tparam Bit The bit value to look for.
/// @returns The position of the first bit having value *Bit*, or `npos` if
///          not such position exists..
template <bool Bit = true, class T>
auto find_first(const bits<T>& b) {
  if constexpr (Bit) {
    if (b.size() > word<T>::width)
      return b.data() == word<T>::all ? 0 : bits<T>::npos;
    return find_first<1>(b.data());
  } else {
    if (b.size() > word<T>::width)
      return b.data() == word<T>::none ? 0 : bits<T>::npos;
    T masked = b.data() | word<T>::msb_mask(word<T>::width - b.size());
    return find_first<0>(masked);
  }
}

/// Finds the next bit after at a particular offset.
/// @param i The offset after where to begin searching.
/// @returns The position *p*, where *p > i*, of the bit having value *Bit*,
///          or `npos` if no such *p* exists.
template <bool Bit = true, class T>
auto find_next(const bits<T>& b, typename bits<T>::size_type i) {
  if constexpr (Bit) {
    if (i >= b.size() - 1)
      return bits<T>::npos;
    if (b.size() > word<T>::width)
      return b.data() == word<T>::all ? i + 1 : bits<T>::npos;
    return find_next(b.data(), i);
  } else {
    if (i >= b.size() - 1)
      return bits<T>::npos;
    if (b.size() > word<T>::width)
      return b.data() == word<T>::none ? i + 1 : bits<T>::npos;
    T masked = ~b.data() & word<T>::lsb_fill(b.size());
    return find_next(masked, i);
  }
}

/// Finds the last bit of a particular value.
/// @tparam Bit The bit value to look for.
/// @returns The position of the last bit having value *Bit*.
template <bool Bit = true, class T>
auto find_last(const bits<T>& b) {
  if constexpr (Bit) {
    if (b.size() > word<T>::width)
      return b.data() == word<T>::all ? b.size() - 1 : bits<T>::npos;
    return find_last<1>(b.data());
  } else {
    if (b.size() > word<T>::width)
      return b.data() == word<T>::none ? b.size() - 1 : bits<T>::npos;
    T masked = ~b.data() & word<T>::lsb_fill(b.size());
    return find_last<1>(masked);
  }
}

// -- counting ---------------------------------------------------------------

/// Computes the number of occurrences of a bit value.
/// @tparam Bit The bit value to count.
/// @param b The bit sequence to count.
/// @returns The population count of *b*.
template <bool Bit = true, class T>
auto rank(const bits<T>& b) {
  if constexpr (Bit) {
    if (b.size() > word<T>::width)
      return b.data() == word<T>::all ? b.size() : 0;
    return rank<1>(b.data());
  } else {
    if (b.size() > word<T>::width)
      return b.data() == word<T>::none ? b.size() : 0;
    T masked = ~b.data() & word<T>::lsb_fill(b.size());
    return rank<1>(masked);
  }
}

/// Computes the number of occurrences of a bit value in *[0,i]*.
/// @tparam Bit The bit value to count.
/// @param b The bit sequence to count.
/// @param i The offset where to end counting.
/// @returns The population count of *b* up to and including position *i*.
/// @pre `i < b.size()`
template <bool Bit = true, class T>
auto rank(const bits<T>& b, typename bits<T>::size_type i) {
  TENZIR_ASSERT(i < b.size());
  T data = Bit ? b.data() : ~b.data();
  if (b.size() > word<T>::width)
    return data == word<T>::none ? 0 : i + 1;
  if (i == word<T>::width - 1)
    return word<T>::popcount(data);
  return rank(data, i);
}

/// Computes the position of the i-th occurrence of a bit.
/// @tparam Bit the bit value to locate.
/// @param b The bit sequence to select from.
/// @param i The position of the *i*-th occurrence of *Bit* in *b*.
/// @pre `i > 0 && i <= b.size()`
template <bool Bit = true, class T>
auto select(const bits<T>& b, typename bits<T>::size_type i) {
  TENZIR_ASSERT(i > 0);
  TENZIR_ASSERT(i <= b.size());
  T data = Bit ? b.data() : ~b.data();
  if (b.size() > word<T>::width)
    return data == word<T>::all ? i - 1 : bits<T>::npos;
  return select(data, i);
}

} // namespace tenzir
