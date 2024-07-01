//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once
#include "tenzir/fwd.hpp"

#include "tenzir/aliases.hpp"
#include "tenzir/detail/assert.hpp"
#include "tenzir/detail/flat_map.hpp"
#include "tenzir/series_builder.hpp"

#include <caf/detail/type_list.hpp>
#include <caf/error.hpp>
#include <caf/expected.hpp>

#include <cstddef>
#include <string>
#include <utility>
#include <variant>
#include <vector>

namespace tenzir {

class record_builder;
namespace detail::record_builder {

// A function used to parse "std::string -> tenzir::data". Used for late parsing
// raw fields in the record_builder. The string is moved from the record
// builders internal structure into the parser
template <typename P>
concept data_parsing_function
  = requires(P parser, std::string str, const tenzir::type* seed) {
      { parser(str, seed) } -> std::same_as<caf::expected<tenzir::data>>;
    };

class node_record;
class node_field;
class node_list;

struct map_dummy {};
struct pattern_dummy {};
struct enriched_dummy {};
// The indices in this MUST line up with the tenzir type indices, hence the
// dummies
// clang-format off
using field_type_list = caf::detail::type_list<
  caf::none_t, 
  bool, 
  int64_t, 
  uint64_t,
  double, 
  duration, 
  time, 
  std::string,
  pattern_dummy,
  ip, 
  subnet, 
  enumeration, 
  node_list,
  map_dummy, 
  node_record, 
  enriched_dummy,
  blob
>;
// clang-format on

template <typename T>
concept non_structured_data_type
  = caf::detail::tl_contains<field_type_list, T>::value
    and not caf::detail::tl_contains<
      caf::detail::type_list<node_record, node_list, pattern_dummy, map_dummy,
                             enriched_dummy>,
      T>::value;

template <typename T>
concept numeric_type
  = non_structured_data_type<T>
    and (std::same_as<T, uint64_type> or std::same_as<T, int64_type>
         or std::same_as<T, double_type>);

using signature_type = std::vector<std::byte>;

constexpr static size_t type_index_empty
  = caf::detail::tl_size<field_type_list>::value;
constexpr static size_t type_index_numeric_mismatch
  = caf::detail::tl_size<field_type_list>::value + 1;
constexpr static size_t type_index_generic_mismatch
  = caf::detail::tl_size<field_type_list>::value + 2;
constexpr static size_t type_index_string
  = caf::detail::tl_index_of<field_type_list, std::string>::value;
constexpr static size_t type_index_double
  = caf::detail::tl_index_of<field_type_list, double>::value;
constexpr static size_t type_index_list
  = caf::detail::tl_index_of<field_type_list, node_list>::value;
constexpr static size_t type_index_record
  = caf::detail::tl_index_of<field_type_list, node_record>::value;

static inline constexpr auto is_structural(size_t idx) -> bool {
  switch (idx) {
    case caf::detail::tl_index_of<field_type_list, node_list>::value:
    case caf::detail::tl_index_of<field_type_list, node_record>::value:
      return true;
    default:
      return false;
  }
}

static inline constexpr auto is_numeric(size_t idx) -> bool {
  switch (idx) {
    case caf::detail::tl_index_of<field_type_list, int64_t>::value:
    case caf::detail::tl_index_of<field_type_list, uint64_t>::value:
    case caf::detail::tl_index_of<field_type_list, double>::value:
      return true;
    default:
      return false;
  }
}

static inline auto is_null(size_t idx) -> bool {
  return idx == caf::detail::tl_index_of<field_type_list, caf::none_t>::value;
}

static inline auto
update_type_index(size_t& old_index, size_t new_index) -> void {
  if (old_index == type_index_generic_mismatch) {
    return;
  }
  if (old_index == new_index) {
    return;
  }
  if (is_null(new_index)) {
    return;
  }
  if (old_index == type_index_empty) {
    old_index = new_index;
    return;
  }
  if (is_null(old_index)) {
    old_index = new_index;
    return;
  }
  if ((old_index == type_index_numeric_mismatch or is_numeric(old_index))
      and is_numeric(new_index)) {
    old_index = type_index_numeric_mismatch;
    return;
  }
  old_index = type_index_generic_mismatch;
}

enum class state { alive, sentinel, dead };

class node_base {
  friend class node_record;
  friend class node_field;
  friend class node_list;
  friend class ::tenzir::record_builder;

private:
  auto mark_this_relevant() -> void {
    if (state_ != state::alive) {
      state_ = state::sentinel;
    }
  }
  auto mark_this_dead() -> void {
    state_ = state::dead;
  }
  auto mark_this_alive() -> void {
    state_ = state::alive;
  }
  auto is_dead() const -> bool;
  auto is_alive() const -> bool;
  auto affects_signature() const -> bool;
  state state_ = state::alive;
};

class node_record : public node_base {
  friend class node_list;
  friend class node_field;
  friend class ::tenzir::record_builder;

public:
  /// reserves storage for at least N elements in the record.
  /// this function can be used to get temporary pointer stability on the
  /// records elements
  auto reserve(size_t N) -> void;
  /// adds a field to the record.
  /// @note the returned pointer is not permanently stable. If the underlying
  /// vector reallocates, the pointer becomes invalid
  /// @ref reserve can be used to ensure stability for a given number of elements
  [[nodiscard]] auto field(std::string_view name) -> node_field*;

  /// parses any unparsed fields using `parser`, potentially providing a
  /// seed/schema to the parser
  template <data_parsing_function Parser>
  auto parse(Parser& parser, const tenzir::record_type* seed,
             bool schema_only) -> caf::error;

private:
  // tries to get a field with the given name. Does not affect any field state
  auto try_field(std::string_view name) -> node_field*;
  // (re-)seeds the field to match the given type. If the field is alive, this
  // has no effect
  auto reseed(const tenzir::record_type& t) -> void;
  // does lookup of a (nested( key
  auto at(std::string_view key) -> node_field*;
  // writes the record into a series builder
  auto commit_to(tenzir::record_ref r, bool mark_dead = true) -> void;
  auto commit_to(tenzir::record& r, bool mark_dead = true) -> void;
  // append the signature of this record to `sig`.
  // including sentinels is important for signature computation
  template <data_parsing_function Parser>
  auto append_to_signature(signature_type& sig, Parser& p,
                           const tenzir::record_type* seed,
                           bool schema_only) -> caf::error;
  // clears the record by marking everything as dead
  auto clear() -> void;

  // record entry. contains a string for the key and a field
  // its defined out of line because node_field cannot be defined at this point
  struct entry_type;
  // this stores added fields in order of their appearance
  // this order is used for committing to the series builder
  // Using the appearance order to commit, ensures that fields outside of a
  // possible seed schema retain their order from first appearance The order of
  // fields in a seed/selector on the other hand is then practically ensured
  // because the multi_series_builder first seeds the respective series_builder
  std::vector<entry_type> data_;
  // this is a SORTED key -> index map. this is used for signature computation
  // if this map is not sorted, the signature computation algorithm breaks
  flat_map<std::string, size_t> lookup_;
};

class node_list : public node_base {
  friend class node_record;
  friend class node_field;

public:
  /// reserves storage for at least N elements in the record.
  /// this function can be used to get temporary pointer stability on the
  /// records elements
  auto reserve(size_t N) -> void;
  /// appends a new typed value to this list
  /// if its type mismatches with the seed during the later parsing/signature
  /// computation, an error is returned
  template <non_structured_data_type T>
  auto data(T data) -> void;
  /// unpacks the tenzir::data into a new element at the end of th list
  auto data(tenzir::data) -> void;
  /// adds an unparsed data value to this field. It is later parsed during the
  /// signature computation step
  auto data_unparsed(std::string) -> void;
  /// adds a null value to the list
  auto null() -> void;
  /// adds a new record to the list
  /// @note the returned pointer is not permanently stable. If the underlying
  /// vector reallocates, the pointer becomes invalid
  /// @ref reserve can be used to ensure stability for a given number of elements
  [[nodiscard]] auto record() -> node_record*;
  /// adds a new list to the list
  /// @note the returned pointer is not permanently stable. If the underlying
  /// vector reallocates, the pointer becomes invalid
  /// @ref reserve can be used to ensure stability for a given number of elements
  [[nodiscard]] auto list() -> node_list*;

  /// parses any unparsed fields using `parser`, potentially providing a
  /// seed/schema to the parser
  template <data_parsing_function Parser>
  auto parse(Parser& parser, const tenzir::list_type* seed,
             bool schema_only) -> caf::error;

  auto combined_index() const -> size_t {
    return type_index_;
  }

private:
  /// finds an element marked as dead. This is part of the reallocation
  /// optimization.
  auto find_free() -> node_field*;
  auto back() -> node_field&;

  auto update_new_structural_signature() -> void;

  // (re-)seeds the field to match the given type. If the field is alive, this
  // has no effect
  auto reseed(const tenzir::list_type&) -> void;
  // writes the list into a series builder
  auto commit_to(tenzir::builder_ref r, bool mark_dead = true) -> void;
  auto commit_to(tenzir::list& r, bool mark_dead = true) -> void;
  // append the signature of this list to `sig`.
  // including sentinels is important for signature computation
  template <data_parsing_function Parser>
  auto append_to_signature(signature_type& sig, Parser& p,
                           const tenzir::list_type* seed,
                           bool schema_only) -> caf::error;
  auto clear() -> void;

  size_t type_index_ = type_index_empty;
  signature_type current_structural_signature_;
  signature_type new_structural_signature_;
  std::vector<node_field> data_;
};

class node_field : public node_base {
  friend class node_record;
  friend class node_list;
  friend struct node_record::entry_type;
  friend class ::tenzir::record_builder;

public:
  /// sets this field to a parsed, typed data value
  /// if its type mismatches with the seed during the later parsing/signature
  /// computation, an error is returned
  template <non_structured_data_type T>
  auto data(T data) -> void;
  /// unpacks the tenzir::data into this field
  auto data(tenzir::data) -> void;
  /// adds an unparsed data value to this field. It is later parsed during the
  /// signature computation step
  auto data_unparsed(std::string raw_text) -> void;
  auto null() -> void;
  [[nodiscard]] auto record() -> node_record*;
  [[nodiscard]] auto list() -> node_list*;

  node_field() : data_{std::in_place_type<caf::none_t>} {
  }
  template <non_structured_data_type T>
  node_field(T data) : data_{std::in_place_type<T>, data} {
  }

private:
  auto current_index() const -> size_t {
    return data_.index();
  }
  template <typename T>
  auto get_if() -> T* {
    return std::get_if<T>(&data_);
  }
  /// tries to static_cast the held value to T.
  /// @returns whether the cast was performed
  template <typename T>
  auto cast_to() -> bool {
    const auto visitor = detail::overload{
      [this]<typename Current>(const Current& v) -> bool
        requires requires(Current c) { static_cast<T>(c); }
      {
        data(static_cast<T>(v));
        return true;
      },
      [](const auto&) -> bool {
        return false;
      },
      };
    return std::visit(visitor, data_);
  }
  // (re-)seeds the field to match the given type. If the field is alive, this
  // has no effect
  auto reseed(const tenzir::type&) -> void;
  /// parses any unparsed fields using `parser`, potentially providing a
  /// seed/schema to the parser
  template <data_parsing_function Parser>
  auto parse(Parser& parser, const tenzir::type* seed,
             bool schema_only) -> caf::error;
  // append the signature of this field to `sig`.
  // including sentinels is important for signature computation
  template <data_parsing_function Parser>
  auto
  append_to_signature(signature_type& sig, Parser& p, const tenzir::type* seed,
                      bool schema_only) -> caf::error;
  // writes the field into a series builder
  auto commit_to(tenzir::builder_ref r, bool mark_dead = true) -> void;
  auto commit_to(tenzir::data& r, bool mark_dead = true) -> void;
  auto clear() -> void;

  // clang-format off
  using field_variant_type = caf::detail::tl_apply_t<
   field_type_list,
    std::variant
  >;
  // clang-format on

  field_variant_type data_;
  bool is_raw_ = false;
};

struct node_record::entry_type {
  std::string key;
  node_field value;

  entry_type(std::string_view name) : key{name} {
  }
};

constexpr static std::byte record_start_marker{0xfa};
constexpr static std::byte record_end_marker{0xfb};

constexpr static std::byte list_start_marker{0xfc};
constexpr static std::byte list_end_marker{0xfd};

} // namespace detail::record_builder

class record_builder {
public:
  record_builder() {
    root_.mark_this_dead();
  }
  // accesses the currently building record
  [[nodiscard]] auto record() -> detail::record_builder::node_record*;

  [[nodiscard]] auto has_elements() -> bool {
    return root_.is_alive();
  }

  [[nodiscard]] auto type() -> tenzir::type; // TODO implement this. Maybe.

  // (re-)seeds the record builder with a given type. Already existant fields
  // are not removed, only possible conflict resolved towards string
  auto reseed(std::optional<tenzir::type> seed) -> void;

  /// tries to find a field with the given (nested) key
  [[nodiscard]] auto
  find_field_raw(std::string_view key) -> detail::record_builder::node_field*;

  /// tries to find a field with the given (nested) key for a data type
  template <detail::record_builder::non_structured_data_type T>
  [[nodiscard]] auto find_value_typed(std::string_view key) -> T*;

  using signature_type = typename detail::record_builder::signature_type;
  /// computes the "signature" of the currently built record.
  template <detail::record_builder::data_parsing_function Parser>
  auto append_signature_to(signature_type&, Parser&& p,
                           const tenzir::type* seed = nullptr,
                           bool schema_only = false) -> caf::error;

  /// clears the builder
  void clear();
  /// clears the builder and frees all memory
  void free();

  /// materializes the currently build record
  /// @param mark_dead whether to mark nodes in the record builder as dead
  [[nodiscard]] auto materialize(bool mark_dead = true) -> tenzir::record;
  /// commits the current record into the series builder
  /// @param mark_dead whether to mark nodes in the record builder as dead
  auto commit_to(series_builder&, bool mark_dead = true) -> void;

  /// a very basic parser that simply uses `tenzir::parsers` under the hood
  /// this parser does not support the seed pointing to a structural type
  static auto
  basic_parser(std::string s,
               const tenzir::type* seed) -> caf::expected<tenzir::data>;

  /// parses any unparsed fields using `parser`, potentially providing a
  /// seed/schema to the parser
  template <detail::record_builder::data_parsing_function Parser>
  auto parse(Parser&& parser, const tenzir::type* seed,
             bool schema_only) -> caf::error;

private:
  detail::record_builder::node_record root_;
};

template <detail::record_builder::non_structured_data_type T>
auto record_builder::find_value_typed(std::string_view key) -> T* {
  if (auto p = find_field_raw(key)) {
    return p->get_if<T>();
  }
  return nullptr;
}

template <detail::record_builder::data_parsing_function Parser>
auto record_builder::append_signature_to(signature_type& sig, Parser&& p,
                                         const tenzir::type* seed,
                                         bool schema_only) -> caf::error {
  auto seed_error = caf::error{};
  auto* seed_as_record_type = caf::get_if<tenzir::record_type>(&*seed);
  if (seed) {
    if (seed_as_record_type) {
      return root_.append_to_signature(sig, p, seed_as_record_type,
                                       schema_only);
    } else {
      seed_error = caf::make_error(
        ec::parse_error, "selected schema is not a record and will be ignored");
    }
  }
  auto plain_error = root_.append_to_signature(sig, p, nullptr, schema_only);
  if (not plain_error and seed_error) {
    if (seed_error) {
      return seed_error;
    }
  }
  return plain_error;
}

template <detail::record_builder::data_parsing_function Parser>
auto record_builder::parse(Parser&& p, const tenzir::type* seed,
                           bool schema_only) -> caf::error {
  auto err = caf::error{};
  if (seed) {
    if (auto seed_as_record = caf::get_if<tenzir::record_type>(&*seed)) {
      return root_.parse(p, seed_as_record, schema_only);
    } else {
      err = caf::make_error(ec::type_clash, "schema is not a record");
    }
  }
  auto res = root_.parse(p, seed, schema_only);
  if (res) {
    return res;
  }
  return err;
}

namespace detail::record_builder {

template <data_parsing_function Parser>
auto node_record::append_to_signature(signature_type& sig, Parser& p,
                                      const tenzir::record_type* seed,
                                      bool schema_only) -> caf::error {
  sig.push_back(record_start_marker);
  // if we have a seed, we need too ensure that all fields exist first
  if (seed) {
    for (const auto& [k, v] : seed->fields()) {
      auto* ptr = try_field(k);
      ptr->mark_this_relevant();
    }
  }
  auto err = caf::error{};
  // we are intentionally traversing `lookup_` here, because that is sorted by
  // name. this ensures that the signature computation will be the same
  for (const auto& [k, index] : lookup_) {
    auto& field = data_[index].value;
    if (field.affects_signature()) {
      if (seed) {
        bool handled_by_seed = false;
        // TODO is this a good idea????? I dont see any other way to
        // find the type for a field with a given name
        // a non-generator based API to get these would be ideal, so
        // we dont have to iterate for every key
        for (const auto& [seed_key, seed_type] : seed->fields()) {
          if (seed_key == k) {
            handled_by_seed = true;
            const auto key_bytes = as_bytes(k);
            sig.insert(sig.end(), key_bytes.begin(), key_bytes.end());
            auto e = field.append_to_signature(sig, p, &seed_type, schema_only);
            if (e and not err) {
              err = std::move(e);
            }
            break;
          }
        }
        if (handled_by_seed) {
          continue;
        }
        if (schema_only) {
          field.mark_this_dead();
          continue;
        }
      }
      const auto key_bytes = as_bytes(k);
      sig.insert(sig.end(), key_bytes.begin(), key_bytes.end());
      auto e = field.append_to_signature(sig, p, nullptr, schema_only);
      if (e and not err) {
        err = std::move(e);
      }
    }
  }
  sig.push_back(record_end_marker);
  return err;
}

template <data_parsing_function Parser>
auto node_record::parse(Parser& p, const tenzir::record_type* seed,
                        bool schema_only) -> caf::error {
  auto err = caf::error{};
  for (auto& [key, value] : data_) {
    if (value.is_alive()) {
      bool handled_by_seed = false;
      if (seed) {
        for (auto [seed_key, seed_type] : seed->fields()) {
          if (seed_key == key) {
            handled_by_seed = true;
            auto e = value.parse(p, &seed_type);
            if (e and not err) {
              err = std::move(e);
            }
            break;
          }
        }
        if (schema_only) {
          value.state_ = state::sentinel;
          handled_by_seed = true;
        }
      }
      if (not handled_by_seed) {
        auto e = value.parse(p, nullptr);
        if (e and not err) {
          err = std::move(e);
        }
      }
    }
  }
  return err;
}

template <non_structured_data_type T>
auto node_field::data(T data) -> void {
  mark_this_alive();
  is_raw_ = false;
  data_.emplace<T>(std::move(data));
}

template <data_parsing_function Parser>
auto node_field::parse(Parser& p, const tenzir::type* seed,
                       bool schema_only) -> caf::error {
  if (not is_raw_) {
    return {};
  }
  if (not is_alive()) {
    return {};
  }
  TENZIR_ASSERT(std::holds_alternative<std::string>(data_));
  std::string& raw = std::get<std::string>(data_);
  auto res = p(std::move(raw), seed);
  if (res) {
    if (schema_only and seed
        and res->get_data().index() != seed->type_index()) {
      // if schema only is enabled, and the parsed field does not match the
      // schema, we discard its value
      return caf::make_error(ec::type_clash, "late parsed fields type does not "
                                             "match the provided schema. This "
                                             "is a shortcoming of the parser.");
    }
    data(std::move(*res));
    return {};
  }
  return res.error();
}

template <data_parsing_function Parser>
auto node_field::append_to_signature(signature_type& sig, Parser& p,
                                     const tenzir::type* seed,
                                     bool schema_only) -> caf::error {
  auto res = caf::error{};
  if (is_raw_) {
    res = parse(p, seed, schema_only);
  }
  if (state_ == state::sentinel) {
    if (not seed) {
      return {};
    }
    const auto seed_idx = seed->type_index();
    if (not is_structural(seed_idx)) {
      sig.push_back(static_cast<std::byte>(seed_idx));

      return {};
    }
    // sentinel structural types get handled by the regular visit below
  }
  const auto visitor = detail::overload{
    [&sig, &p, seed, schema_only](node_list& v) {
      const auto* ls = caf::get_if<list_type>(seed);
      auto seed_error = caf::error{};
      if (seed and not ls) {
        seed_error
          = caf::make_error(ec::type_clash, "event field is a list, but the "
                                            "schema does not expect a list");
      }
      if (v.affects_signature() or ls) {
        auto sig_error = v.append_to_signature(sig, p, ls, schema_only);
        if (sig_error) {
          return sig_error;
        }
      }
      return seed_error;
    },
    [&sig, &p, seed, schema_only](node_record& v) {
      const auto* rs = caf::get_if<record_type>(seed);
      auto seed_error = caf::error{};
      if (seed and not rs) {
        seed_error
          = caf::make_error(ec::type_clash, "event field is a record, but the "
                                            "schema does not expect a record");
      }
      if (v.affects_signature() or rs) {
        auto sig_error = v.append_to_signature(sig, p, rs, schema_only);
        if (sig_error) {
          return sig_error;
        }
      }
      return seed_error;
    },
    [&sig, p, seed, this, schema_only](caf::none_t&) {
      // none could be the result of pre-seeding or being built with a true null
      // via the API for the first case we need to ensure we continue doing
      // seeding if we have a seed
      if (seed) {
        if (auto sr = caf::get_if<tenzir::record_type>(seed)) {
          return record()->append_to_signature(sig, p, sr, schema_only);
        }
        if (auto sl = caf::get_if<tenzir::list_type>(seed)) {
          return list()->append_to_signature(sig, p, sl, schema_only);
        }
        sig.push_back(static_cast<std::byte>(seed->type_index()));
        return caf::error{};
      } else {
        constexpr static auto type_idx
          = caf::detail::tl_index_of<field_type_list, caf::none_t>::value;
        sig.push_back(static_cast<std::byte>(type_idx));
        return caf::error{};
      }
    },
    [&sig, seed, this]<non_structured_data_type T>(T& v) {
      constexpr static auto type_idx
        = caf::detail::tl_index_of<field_type_list, T>::value;
      auto result_index = type_idx;
      auto seed_error = caf::error{};
      if (seed and type_idx != seed->type_index()) {
        const auto seed_idx = seed->type_index();
        if constexpr (is_numeric(type_idx)) {
          // numeric conversion if possible
          if (is_numeric(seed_idx)) {
            switch (seed_idx) {
              case caf::detail::tl_index_of<field_type_list, int64_t>::value:
                data(static_cast<int64_t>(v));
                result_index
                  = caf::detail::tl_index_of<field_type_list, int64_t>::value;
                goto done;
              case caf::detail::tl_index_of<field_type_list, uint64_t>::value:
                data(static_cast<uint64_t>(v));
                result_index
                  = caf::detail::tl_index_of<field_type_list, uint64_t>::value;
                goto done;
              case caf::detail::tl_index_of<field_type_list, double>::value:
                data(static_cast<double>(v));
                result_index
                  = caf::detail::tl_index_of<field_type_list, double>::value;
                goto done;
              default:
                TENZIR_UNREACHABLE();
            }
          }
        }
        if (seed_idx == type_index_string) {
          // stringify if possible
          if constexpr (fmt::is_formattable<T>{}) {
            data(fmt::format("{}", v));
            result_index = type_index_string;
            seed_error = caf::make_error(
              ec::type_clash,
              "The provided schema requested a string, but the parsed field "
              "was typed data"
              "This is most likely a shortcoming of the parser");
          }
        }

        seed_error
          = caf::make_error(ec::type_clash,
                            "parsed field type (id: {}), does not match the "
                            "type from the schema (id: {}). This is most "
                            "likely a shortcoming of the parser",
                            type_idx, seed_idx);
      }
    [[maybe_unused]] done:
      sig.push_back(static_cast<std::byte>(result_index));
      return seed_error;
    },
    [](auto&) {
      TENZIR_UNREACHABLE();
      return caf::make_error(ec::unimplemented);
    },
  };
  auto sig_error = std::visit(visitor, data_);
  if (sig_error and not res) {
    return sig_error;
  }
  return res;
}

template <non_structured_data_type T>
auto node_list::data(T data) -> void {
  mark_this_alive();
  if (auto* free = find_free()) {
    free->data(std::move(data));
    update_type_index(type_index_, free->current_index());
  } else {
    TENZIR_ASSERT(data_.size() <= 20'000, "Upper limit on list size reached.");
    data_.emplace_back(std::move(data));
    update_type_index(type_index_, data_.back().current_index());
  }
}

template <data_parsing_function Parser>
auto node_list::append_to_signature(signature_type& sig, Parser& p,
                                    const tenzir::list_type* seed,
                                    bool schema_only) -> caf::error {
  auto err = caf::error{};
  sig.push_back(list_start_marker);
  if (is_numeric(type_index_) or type_index_ == type_index_numeric_mismatch) {
    // first, we handle the case where the current index is numeric
    // this has special handling, as it will try to convert to the seed type or
    // to double.
    size_t result_index = type_index_;
    if (seed) {
      auto seed_idx = seed->value_type().type_index();
      if (seed_idx != type_index_) {
        if (seed_idx == type_index_double) {
          err = caf::make_error(ec::type_clash,
                                "numeric type mismatch between list elements "
                                "and the selected schema. A conversion to "
                                "'double' will be performed");
          goto numeric_mismatch_handling;
        } else {
          goto generic_mismatch_handling;
        }
      }
    } else if (type_index_ == type_index_numeric_mismatch) {
    numeric_mismatch_handling:
      for (auto& e : data_) {
        e.cast_to<double>();
      }
      result_index = type_index_double;
    }
    sig.push_back(static_cast<std::byte>(result_index));
  } else if (is_structural(type_index_)
             or type_index_ == type_index_generic_mismatch) {
  generic_mismatch_handling:
    // this  case also applies when there is any unparsed fields
    // in the generic "mismatch" handling, we need to iterate every element of
    // the list we first append an elements signature, and then check if its
    // identical to the last one we already appended this ensures that if all
    // elements truly have the same signature, the element count of the list no
    // longer matters.
    // Since we need to iterate all elements in the structural case anyways, its
    // equivalent to the generic mismatch case.
    tenzir::type seed_type;
    tenzir::type* seed_type_ptr = nullptr;
    if (seed) {
      seed_type = seed->value_type();
      seed_type_ptr = &seed_type;
    }
    auto last_sig_index = 0;
    for (auto& v : data_) {
      auto next_sig_index = sig.size();
      auto element_error
        = v.append_to_signature(sig, p, seed_type_ptr, schema_only);
      if (element_error and not err) {
        // we can only catch one error here, so we catch the first one.
        // all subsequent errors are most likely going to be repeats of the same
        // type mismatch - if any
        err = std::move(element_error);
      }
      if (last_sig_index != 0) {
        const auto last_signatures_match = std::ranges::equal(
          std::span{sig.begin() + last_sig_index, sig.begin() + next_sig_index},
          std::span{sig.begin() + next_sig_index, sig.end()});
        if (last_signatures_match) {
          // drop the last appended signature
          sig.erase(sig.begin() + last_sig_index, sig.end());
        }
        last_sig_index = next_sig_index;
      }
    }
    // err = caf::make_error(ec::type_clash, "list element type mismatch");
    // if (seed) {

    // }
  } else {
    // finally the happy case where our predetermined index is usable (its not
    // structural and not a mismatch index)
    sig.push_back(static_cast<std::byte>(type_index_));
  }
  // done:
  sig.push_back(list_end_marker);
  return err;
}

template <data_parsing_function Parser>
auto node_list::parse(Parser& p, const tenzir::list_type* seed,
                      bool schema_only) -> caf::error {
  auto err = caf::error{};
  auto seed_type = tenzir::type{};
  if (seed) {
    auto seed_type = seed->value_type();
  }
  for (auto& element : data_) {
    if (element.is_alive()) {
      auto e = element.parse(p, seed ? &seed_type : nullptr, schema_only);
      if (e and not err) {
        err = std::move(e);
      }
    }
  }
  return err;
}
} // namespace detail::record_builder
} // namespace tenzir
