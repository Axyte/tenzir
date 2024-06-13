//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/tql2/eval.hpp"

#include "tenzir/detail/assert.hpp"
#include "tenzir/detail/enumerate.hpp"
#include "tenzir/diagnostics.hpp"
#include "tenzir/series_builder.hpp"
#include "tenzir/tql2/ast.hpp"
#include "tenzir/tql2/eval_impl.hpp"
#include "tenzir/tql2/plugin.hpp"
#include "tenzir/try.hpp"

#include <arrow/compute/api_scalar.h>

#include <ranges>

/// TODO:
/// - Reduce series expansion. For example, `src_ip in [1.2.3.4, 1.2.3.5]`
///   currently creates `length` copies of the list.
/// - Optimize expressions, e.g., constant folding, compute offsets.
/// - Short circuiting, active rows.
/// - Stricter behavior for const-eval, or same behavior? For example, overflow.
/// - Modes for "must be constant", "prefer constant", "prefer runtime", "must
///   be runtime".
/// - Integrate type checker?

namespace tenzir {

auto resolve(const ast::simple_selector& sel, const table_slice& slice)
  -> variant<series, resolve_error> {
  TRY(auto offset, resolve(sel, slice.schema()));
  auto [ty, array] = offset.get(slice);
  return series{ty, array};
}

auto resolve(const ast::simple_selector& sel, type ty)
  -> variant<offset, resolve_error> {
  // TODO: Write this properly.
  auto sel_index = size_t{0};
  auto result = offset{};
  auto&& path = sel.path();
  result.reserve(path.size());
  while (sel_index < path.size()) {
    auto rty = caf::get_if<record_type>(&ty);
    if (not rty) {
      return resolve_error{path[sel_index],
                           resolve_error::field_of_non_record{ty}};
    }
    auto found = false;
    auto field_index = size_t{0};
    for (auto&& field : rty->fields()) {
      if (field.name == path[sel_index].name) {
        ty = field.type;
        found = true;
        sel_index += 1;
        break;
      }
      ++field_index;
    }
    if (not found) {
      return resolve_error{path[sel_index], resolve_error::field_not_found{}};
    }
    result.push_back(field_index);
  }
  return result;
}

auto function_use::evaluator::length() const -> int64_t {
  return static_cast<tenzir::evaluator*>(self_)->length();
}

auto function_use::evaluator::operator()(const ast::expression& expr) const
  -> series {
  return static_cast<tenzir::evaluator*>(self_)->eval(expr);
}

namespace {

// TODO: not good.
template <class T>
concept Addable = requires(T x, T y) {
  { x + y } -> std::same_as<T>;
};

} // namespace

auto eval(const ast::expression& expr, const table_slice& input,
          diagnostic_handler& dh) -> series {
  return evaluator{&input, dh}.eval(expr);
}

auto const_eval(const ast::expression& expr, diagnostic_handler& dh)
  -> std::optional<data> {
  try {
    auto result = evaluator{nullptr, dh}.eval(expr);
    TENZIR_ASSERT(result.length() == 1);
    return materialize(value_at(result.type, *result.array, 0));
  } catch (std::monostate) {
    return std::nullopt;
  }
}

auto evaluator::eval(const ast::record& x) -> series {
  // TODO: Soooo bad.
  auto fields = detail::stable_map<std::string, series>{};
  for (auto& item : x.content) {
    item.match(
      [&](const ast::record::field& field) {
        auto val = eval(field.expr);
        auto [_, inserted] = fields.emplace(field.name.name, std::move(val));
        if (not inserted) {
          diagnostic::warning("todo: overwrite existing?")
            .primary(field.name)
            .emit(dh_);
        }
      },
      [](const ast::record::spread&) {
        TENZIR_TODO();
      });
  }
  auto field_names = fields | std::ranges::views::transform([](auto& x) {
                       return x.first;
                     });
  auto field_arrays = fields | std::ranges::views::transform([](auto& x) {
                        return x.second.array;
                      });
  auto field_types = fields | std::ranges::views::transform([](auto& x) {
                       return record_type::field_view{x.first, x.second.type};
                     });
  auto result
    = make_struct_array(length_, nullptr,
                        std::vector(field_names.begin(), field_names.end()),
                        std::vector(field_arrays.begin(), field_arrays.end()));
  return series{
    type{record_type{std::vector(field_types.begin(), field_types.end())}},
    std::move(result),
  };
}

auto evaluator::eval(const ast::list& x) -> series {
  // [a, b]
  //
  // {a: 1, b: 2}
  // {a: 3, b: 4}
  //
  // <1, 2, 3, 4>
  // |^^^^|
  //       |^^^^|
  auto arrays = std::vector<series>{};
  auto item_ty = type{null_type{}};
  for (auto& item : x.items) {
    auto array = eval(item);
    // TODO: Rewrite this and handle record extension.
    if (array.type.kind().is_not<null_type>() && item_ty != array.type) {
      if (item_ty.kind().is<null_type>()) {
        item_ty = array.type;
      } else {
        diagnostic::warning("type clash in list, using `null` instead")
          .primary(item)
          .note("expected `{}` but got `{}`", item_ty.kind(), array.type.kind())
          .emit(dh_);
        arrays.push_back(series::null(null_type{}, length_));
        continue;
      }
    }
    arrays.push_back(std::move(array));
  }
  // arrays = [<1, 3>, <2, 4>]
  // TODO: Rewrite this, `series_builder` is probably not the right tool.
  auto b = series_builder{type{list_type{item_ty}}};
  for (auto row = int64_t{0}; row < length_; ++row) {
    auto l = b.list();
    for (auto& array : arrays) {
      // TODO: This is not very good.
      l.data(value_at(array.type, *array.array, row));
    }
  }
  return b.finish_assert_one_array();
}

// auto evaluator::eval(const ast::data_selector& x) -> series {
//   auto result = resolve(x, input_or_throw(x.get_location()));
//   return result.match(
//     [](series& x) -> series {
//       return std::move(x);
//     },
//     [&](resolve_error& err) -> series {
//       err.reason.match(
//         [&](resolve_error::field_of_non_record& reason) {
//           diagnostic::warning("type `{}` does not have a field `{}`",
//                               reason.type.kind(), err.ident.name)
//             .primary(err.ident.location)
//             .emit(dh_);
//         },
//         [&](resolve_error::field_not_found&) {
//           diagnostic::warning("field `{}` not found", err.ident.name)
//             .primary(err.ident.location)
//             .emit(dh_);
//         });
//       return null();
//     });
// }

auto evaluator::eval(const ast::field_access& x) -> series {
  // TODO: Unify with selector?
  auto l = eval(x.left);
  auto rec_ty = caf::get_if<record_type>(&l.type);
  if (not rec_ty) {
    diagnostic::warning("cannot access field of non-record type")
      .primary(x.dot.combine(x.name))
      .secondary(x.left.get_location(), "type `{}`", l.type.kind())
      .emit(dh_);
    return null();
  }
  auto& s = caf::get<arrow::StructArray>(*l.array);
  for (auto [i, field] : detail::enumerate<int>(rec_ty->fields())) {
    if (field.name == x.name.name) {
      return series{field.type, s.field(i)};
    }
  }
  diagnostic::warning("record does not have this field")
    .primary(x.name)
    .emit(dh_);
  return null();
}

auto evaluator::eval(const ast::function_call& x) -> series {
  // TODO: This is very hacky.
  TENZIR_ASSERT(x.fn.ref.resolved());
  auto segments = x.fn.ref.segments();
  TENZIR_ASSERT(segments.size() == 1);
  auto fn = plugins::find<function_plugin>("tql2." + segments[0]);
  TENZIR_ASSERT(fn);
  auto func = fn->make_function(function_plugin::invocation{x}, session{dh_});
  if (not func) {
    return series::null(null_type{}, length_);
  }
  auto result = func->run(function_use::evaluator{this}, session{dh_});
  TENZIR_ASSERT(result.length() == length_);
  return result;
}

auto evaluator::eval(const ast::this_& x) -> series {
  auto& input = input_or_throw(x.get_location());
  return {input.schema(), to_record_batch(input)->ToStructArray().ValueOrDie()};
}

auto evaluator::eval(const ast::root_field& x) -> series {
  auto& input = input_or_throw(x.get_location());
  auto& rec_ty = caf::get<record_type>(input.schema());
  for (auto [i, field] : detail::enumerate<int>(rec_ty.fields())) {
    if (field.name == x.ident.name) {
      // TODO: Is this correct?
      return series{field.type, to_record_batch(input)->column(i)};
    }
  }
  diagnostic::warning("field `{}` not found", x.ident.name)
    .primary(x.ident)
    .emit(dh_);
  return null();
}

} // namespace tenzir
