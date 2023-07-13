//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/detail/operators.hpp"

#include <memory>

namespace vast::detail {

template <class, class, class, class, class>
class iterator_facade;

// Provides clean access to iterator internals.
class iterator_access {
  template <class, class, class, class, class>
  friend class iterator_facade;

public:
  template <class Facade>
  static decltype(auto) dereference(const Facade& f) {
    return f.dereference();
  }

  template <class Facade>
  static void increment(Facade& f) {
    f.increment();
  }

  template <class Facade>
  static void decrement(Facade& f) {
    f.decrement();
  }

  template <class Facade, class Distance>
  static void advance(Facade& f, Distance n) {
    f.advance(n);
  }

  template <class Facade1, class Facade2>
  static bool equals(const Facade1& f1, const Facade2& f2) {
    return f1.equals(f2);
  }

  template <class Facade1, class Facade2>
  static auto distance_from(const Facade1& f1, const Facade2& f2) {
    return f2.distance_to(f1);
  }

private:
  iterator_access() = default;
};

/// A simple version of `boost::iterator_facade`.
template <
  class Derived,
  class Value,
  class Category,
  class Reference  = Value&,
  class Difference = std::ptrdiff_t
>
class iterator_facade : totally_ordered<
                          iterator_facade<
                            Derived, Value, Category, Reference, Difference
                          >
                        > {
private:
  template <class R, class P>
  struct operator_arrow_dispatch {
    struct proxy {
      explicit proxy(const R& x) : ref(x) {
      }

      R* operator->() {
        return std::addressof(ref);
      }

      R ref;
    };

    using result_type = proxy;

    static result_type apply(const R& x) {
      return result_type{x};
    }
  };

  template <class T, class P>
  struct operator_arrow_dispatch<T&, P> {
    using result_type = P;

    static result_type apply(T& x) {
      return std::addressof(x);
    }
  };

  Derived& derived() {
    return *static_cast<Derived*>(this);
  }

  [[nodiscard]] const Derived& derived() const {
    return *static_cast<const Derived*>(this);
  }

public:
  using iterator_category = Category;
  using value_type = std::remove_cv_t<Value>;
  using reference = Reference;
  using difference_type = Difference;
  using arrow_dispatcher =
    operator_arrow_dispatch<
      reference,
      std::add_pointer_t<
        std::conditional_t<
          std::is_const_v<Value>,
          value_type const,
          value_type
        >
      >
    >;

  struct postfix_increment_proxy {
    explicit postfix_increment_proxy(const Derived& x) : value(*x) {
    }

    value_type& operator*() const {
      return value;
    }

    mutable value_type value;
  };

  using postfix_increment_result =
    std::conditional_t<
      std::is_convertible_v<reference,
                            std::add_lvalue_reference_t<Value const>>,
      postfix_increment_proxy,
      Derived
    >;

  using pointer = typename arrow_dispatcher::result_type;

  // TODO: operator[]

  reference operator*() const {
    return iterator_access::dereference(derived());
  }

  pointer operator->() const {
    return arrow_dispatcher::apply(*derived());
  }

  Derived& operator++() {
    iterator_access::increment(derived());
    return derived();
  }

  postfix_increment_result operator++(int) {
    postfix_increment_result tmp{derived()};
    ++*this;
    return tmp;
  }

  Derived& operator--() {
    iterator_access::decrement(derived());
    return derived();
  }

  Derived operator--(int) {
    Derived tmp{derived()};
    --*this;
    return tmp;
  }

  Derived& operator+=(difference_type n) {
    iterator_access::advance(derived(), n);
    return derived();
  }

  Derived& operator-=(difference_type n) {
    iterator_access::advance(derived(), -n);
    return derived();
  }

  Derived operator-(difference_type x) const {
    Derived result(derived());
    return result -= x;
  }

  friend bool operator==(const iterator_facade& x, const iterator_facade& y) {
    return iterator_access::equals(static_cast<const Derived&>(x),
                                   static_cast<const Derived&>(y));
  }

  friend bool operator<(const iterator_facade& x, const iterator_facade& y) {
    return 0 > iterator_access::distance_from(static_cast<const Derived&>(x),
                                              static_cast<const Derived&>(y));
  }

  friend Derived operator+(const iterator_facade& x, difference_type n) {
    Derived tmp{static_cast<const Derived&>(x)};
    return tmp += n;
  }

  friend Derived operator+(difference_type n, const iterator_facade& x) {
    Derived tmp{static_cast<const Derived&>(x)};
    return tmp += n;
  }

  friend auto operator-(const iterator_facade& x, const iterator_facade& y) {
    return iterator_access::distance_from(static_cast<const Derived&>(x),
                                          static_cast<const Derived&>(y));
  }

protected:
  using iterator_facade_type =
    iterator_facade<Derived, Value, Category, Reference, Difference>;
};

/// A simple version of `boost::iterator_adaptor`.
template <
  class Derived,
  class Base,
  class Value,
  class Category,
  class Reference = Value&,
  class Difference = std::ptrdiff_t
>
class iterator_adaptor
  : public iterator_facade<
             Derived, Value, Category, Reference, Difference
           > {
 public:
    using base_iterator = Base;
    using super = iterator_adaptor<
      Derived, Base, Value, Category, Reference, Difference
    >;

    iterator_adaptor() = default;

    explicit iterator_adaptor(const Base& b)
      : iterator_{b} {
    }

    [[nodiscard]] const Base& base() const {
      return iterator_;
    }

 protected:
    Base& base() {
      return iterator_;
    }

 private:
    friend iterator_access;

    [[nodiscard]] Reference dereference() const {
      return *iterator_;
    }

    [[nodiscard]] bool equals(const iterator_adaptor& other) const {
      return iterator_ == other.base();
    }

    void advance(Difference n) {
      iterator_ += n;
    }

    void increment() {
      ++iterator_;
    }

    void decrement() {
      --iterator_;
    }

    [[nodiscard]] Difference distance_to(const iterator_adaptor& other) const {
      return other.base() - iterator_;
    }

 private:
    Base iterator_;
};

} // namespace vast::detail

