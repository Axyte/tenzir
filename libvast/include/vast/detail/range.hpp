//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/config.hpp"
#include "vast/detail/assert.hpp"
#include "vast/detail/iterator.hpp"

namespace vast::detail {

template <class Derived>
class range {
public:
  explicit operator bool() const {
    return !empty();
  }

  [[nodiscard]] bool empty() const {
    auto d = static_cast<const Derived*>(this);
    return d->begin() == d->end();
  }
};

template <class Range>
class range_iterator
  : public iterator_facade<
      range_iterator<Range>,
      std::remove_reference_t<decltype(std::declval<Range>().dereference())>,
      std::forward_iterator_tag,
      decltype(std::declval<Range>().dereference())
    > {
  friend Range;
  friend iterator_access;

public:
  range_iterator() : rng_{nullptr} {
  }

private:
  explicit range_iterator(Range& rng) : rng_{&rng} {
  }

  [[nodiscard]] bool equals(const range_iterator&) const {
    return rng_->complete();
  }

  void increment() {
    TENZIR_ASSERT(rng_);
    TENZIR_ASSERT(!rng_->complete());
    rng_->increment();
  }

  [[nodiscard]] decltype(auto) dereference() const {
    TENZIR_ASSERT(rng_);
    return rng_->dereference();
  }

  Range* rng_;
};

template <class Derived>
class range_facade : public range<range_facade<Derived>> {
public:
  using iterator = range_iterator<range_facade<Derived>>;
  using const_iterator = iterator;

  [[nodiscard]] const_iterator begin() const {
    return const_iterator{const_cast<range_facade&>(*this)};
  }

  [[nodiscard]] const_iterator end() const {
    return const_iterator{};
  }

protected:
  friend iterator;

  [[nodiscard]] bool complete() const {
    return static_cast<const Derived*>(this)->done();
  }

  void increment() {
    static_cast<Derived*>(this)->next();
  }

// FIXME: Why doesn't GCC like the above friend declaration?
#if TENZIR_GCC
public:
#endif
  [[nodiscard]] decltype(auto) dereference() const {
    return static_cast<const Derived*>(this)->get();
  }
};

template <class ForwardIterator>
class iterator_range : public range<iterator_range<ForwardIterator>> {
public:
  template <class Iterator>
  iterator_range(Iterator begin, Iterator end)
    : begin_{begin}, end_{end} {
  }

  ForwardIterator begin() const {
    return begin_;
  }

  ForwardIterator end() const {
    return end_;
  }

private:
  ForwardIterator begin_;
  ForwardIterator end_;
};

template <class Iterator>
auto make_iterator_range(Iterator begin, Iterator end) {
  return iterator_range<Iterator>(begin, end);
}

} // namespace vast::detail

