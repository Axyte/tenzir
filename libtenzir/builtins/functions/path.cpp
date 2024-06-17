//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/argument_parser2.hpp>
#include <tenzir/tql2/arrow_utils.hpp>
#include <tenzir/tql2/plugin.hpp>

namespace tenzir::plugins::path {

namespace {

class file_name final : public function_plugin {
public:
  auto name() const -> std::string override {
    return "tql2.file_name";
  }

  auto make_function(invocation inv, session ctx) const
    -> std::unique_ptr<function_use> override {
    auto expr = ast::expression{};
    argument_parser2::fn("file_name").add(expr, "<path>").parse(inv, ctx);
    return function_use::make(
      [expr = std::move(expr)](evaluator eval, session ctx) -> series {
        auto arg = eval(expr);
        auto f = detail::overload{
          [&](const arrow::NullArray& arg) {
            return series::null(string_type{}, arg.length());
          },
          [](const arrow::StringArray& arg) {
            auto b = arrow::StringBuilder{};
            check(b.Reserve(arg.length()));
            for (auto row = int64_t{0}; row < arg.length(); ++row) {
              if (arg.IsNull(row)) {
                check(b.AppendNull());
                continue;
              }
              auto path = arg.GetView(row);
              // TODO: We don't know whether this is a windows/posix path.
              // TODO: Also, btw, string might not be a good type for paths.
              auto pos = path.find_last_of("/\\");
              // TODO: Trailing sep.
              if (pos == std::string::npos) {
                check(b.Append(path));
              } else {
                check(b.Append(path.substr(pos + 1)));
              }
            }
            return series{string_type{}, finish(b)};
          },
          [&](const auto&) {
            diagnostic::warning("`file_name` expected `string`, but got `{}`",
                                arg.type.kind())
              .primary(expr.get_location())
              .emit(ctx);
            return series::null(string_type{}, arg.length());
          },
        };
        return caf::visit(f, *arg.array);
      });
  }

  // auto eval(invocation inv, diagnostic_handler& dh) const -> series override {
  //   auto arg = basic_series<string_type>{};
  //   auto success
  //     = function_argument_parser{"file_name"}.add(arg, "<path>").parse(inv,
  //     dh);
  //   if (not success) {
  //     return series::null(string_type{}, inv.length);
  //   }
  //   auto b = arrow::StringBuilder{};
  //   check(b.Reserve(inv.length));
  //   for (auto row = int64_t{0}; row < inv.length; ++row) {
  //     if (arg.array->IsNull(row)) {
  //       check(b.AppendNull());
  //       continue;
  //     }
  //     auto path = arg.array->GetView(row);
  //     // TODO: We don't know whether this is a windows/posix path.
  //     // TODO: Also, btw, string might not be a good type for paths.
  //     auto pos = path.find_last_of("/\\");
  //     // TODO: Trailing sep.
  //     if (pos == std::string::npos) {
  //       check(b.Append(path));
  //     } else {
  //       check(b.Append(path.substr(pos + 1)));
  //     }
  //   }
  //   return series{string_type{}, finish(b)};
  // }
};

class parent_dir final : public function_plugin {
public:
  auto name() const -> std::string override {
    return "tql2.parent_dir";
  }

  auto make_function(invocation inv, session ctx) const
    -> std::unique_ptr<function_use> override {
    auto expr = ast::expression{};
    argument_parser2::fn("file_name").add(expr, "<path>").parse(inv, ctx);
    return function_use::make(
      [expr = std::move(expr)](evaluator eval, session ctx) -> series {
        auto arg = eval(expr);
        auto f = detail::overload{
          [&](const arrow::NullArray& arg) {
            return series::null(string_type{}, arg.length());
          },
          [](const arrow::StringArray& arg) {
            auto b = arrow::StringBuilder{};
            check(b.Reserve(arg.length()));
            for (auto row = int64_t{0}; row < arg.length(); ++row) {
              if (arg.IsNull(row)) {
                check(b.AppendNull());
                continue;
              }
              auto path = arg.GetView(row);
              // TODO: We don't know whether this is a windows/posix path.
              // TODO: Also, btw, string might not be a good type for paths.
              auto pos = path.find_last_of("/\\");
              // TODO: Trailing sep.
              if (pos == std::string::npos) {
                // TODO: Or what?
                check(b.Append(path));
              } else {
                check(b.Append(path.substr(0, pos)));
              }
            }
            return series{string_type{}, finish(b)};
          },
          [&](const auto&) {
            diagnostic::warning("`file_name` expected `string`, but got `{}`",
                                arg.type.kind())
              .primary(expr.get_location())
              .emit(ctx);
            return series::null(string_type{}, arg.length());
          },
        };
        return caf::visit(f, *arg.array);
      });
  }
};

} // namespace

} // namespace tenzir::plugins::path

TENZIR_REGISTER_PLUGIN(tenzir::plugins::path::file_name)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::path::parent_dir)
