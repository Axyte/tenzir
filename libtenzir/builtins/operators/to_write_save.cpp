//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/arrow_table_slice.hpp>
#include <tenzir/concept/convertible/data.hpp>
#include <tenzir/concept/convertible/to.hpp>
#include <tenzir/element_type.hpp>
#include <tenzir/error.hpp>
#include <tenzir/parser_interface.hpp>
#include <tenzir/pipeline.hpp>
#include <tenzir/plugin.hpp>
#include <tenzir/tql/parser.hpp>
#include <tenzir/type.hpp>

#include <arrow/type.h>
#include <caf/expected.hpp>

#include <algorithm>
#include <string>
#include <utility>

namespace tenzir::plugins::write_to_print_save {

namespace {

[[noreturn]] void throw_printer_not_found(const located<std::string>& x) {
  auto available = std::vector<std::string>{};
  for (auto const* p : plugins::get<printer_parser_plugin>()) {
    available.push_back(p->name());
  }
  diagnostic::error("printer `{}` could not be found", x.inner)
    .primary(x.source)
    .hint("must be one of {}", fmt::join(available, ", "))
    .docs("https://docs.tenzir.com/next/formats")
    .throw_();
}

[[noreturn]] void throw_saver_not_found(const located<std::string>& x) {
  auto available = std::vector<std::string>{};
  for (auto p : plugins::get<saver_parser_plugin>()) {
    available.push_back(p->name());
  }
  diagnostic::error("saver `{}` could not be found", x.inner)
    .primary(x.source)
    .hint("must be one of {}", fmt::join(available, ", "))
    .docs("https://docs.tenzir.com/next/connectors")
    .throw_();
}

struct write_and_save_state {
  std::unique_ptr<printer_instance> printer;
  std::function<void(chunk_ptr)> saver;
};

class write_operator final : public crtp_operator<write_operator> {
public:
  write_operator() = default;

  write_operator(std::unique_ptr<plugin_printer> printer) noexcept
    : printer_{std::move(printer)} {
  }

  auto operator()(generator<table_slice> input,
                  operator_control_plane& ctrl) const -> generator<chunk_ptr> {
    if (printer_->allows_joining()) {
      auto p = printer_->instantiate(type{}, ctrl);
      if (!p) {
        ctrl.abort(add_context(p.error(), "failed to instantiate printer"));
        co_return;
      }
      for (auto&& slice : input) {
        for (auto&& chunk : (*p)->process(std::move(slice))) {
          co_yield std::move(chunk);
        }
      }
      for (auto&& chunk : (*p)->finish()) {
        co_yield std::move(chunk);
      }
    } else {
      auto state
        = std::optional<std::pair<std::unique_ptr<printer_instance>, type>>{};
      for (auto&& slice : input) {
        if (slice.rows() == 0) {
          co_yield {};
          continue;
        }
        if (!state) {
          auto p = printer_->instantiate(slice.schema(), ctrl);
          if (!p) {
            ctrl.abort(add_context(p.error(), "failed to initialize printer"));
            co_return;
          }
          state = std::pair{std::move(*p), slice.schema()};
        } else if (state->second != slice.schema()) {
          ctrl.abort(caf::make_error(
            ec::logic_error,
            fmt::format("'{}' does not support heterogeneous outputs; cannot "
                        "initialize for '{}' after '{}'",
                        to_string(), printer_->name(), slice.schema(),
                        state->second)));
          co_return;
        }
        for (auto&& chunk : state->first->process(std::move(slice))) {
          co_yield std::move(chunk);
        }
      }
      if (state)
        for (auto&& chunk : state->first->finish()) {
          co_yield std::move(chunk);
        }
    }
  }

  auto name() const -> std::string override {
    return "write";
  }

  friend auto inspect(auto& f, write_operator& x) -> bool {
    return plugin_inspect(f, x.printer_);
  }

protected:
  auto infer_type_impl(operator_type input) const
    -> caf::expected<operator_type> override {
    if (input.is<table_slice>()) {
      return tag_v<chunk_ptr>;
    }
    // TODO: Fuse this check with crtp_operator::instantiate()
    return caf::make_error(ec::type_clash,
                           fmt::format("'{}' does not accept {} as input",
                                       to_string(), operator_type_name(input)));
  }

private:
  std::unique_ptr<plugin_printer> printer_;
};

class write_plugin final : public virtual operator_plugin<write_operator> {
public:
  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto usage = "write <printer> <args>...";
    auto docs = "https://docs.tenzir.com/next/operators/transformations/write";
    auto name = p.accept_shell_arg();
    if (!name) {
      diagnostic::error("expected printer name")
        .primary(p.current_span())
        .usage(usage)
        .docs(docs)
        .throw_();
    }
    auto plugin = plugins::find<printer_parser_plugin>(name->inner);
    if (!plugin) {
      throw_printer_not_found(*name);
    }
    auto printer = plugin->parse_printer(p);
    TENZIR_DIAG_ASSERT(printer);
    return std::make_unique<write_operator>(std::move(printer));
  }
};

/// The operator for saving data that will have to be joined later
/// during pipeline execution.
class save_operator final : public crtp_operator<save_operator> {
public:
  save_operator() = default;

  explicit save_operator(std::unique_ptr<plugin_saver> saver) noexcept
    : saver_{std::move(saver)} {
  }

  auto
  operator()(generator<chunk_ptr> input, operator_control_plane& ctrl) const
    -> generator<std::monostate> {
    // TODO: Extend API to allow schema-less make_saver().
    auto new_saver = saver_->instantiate(ctrl, std::nullopt);
    if (!new_saver) {
      ctrl.abort(new_saver.error());
      co_return;
    }
    for (auto&& x : input) {
      (*new_saver)(std::move(x));
      co_yield {};
    }
  }

  auto detached() const -> bool override {
    return true;
  }

  auto location() const -> operator_location override {
    return operator_location::local;
  }

  auto name() const -> std::string override {
    return "save";
  }

  friend auto inspect(auto& f, save_operator& x) -> bool {
    return plugin_inspect(f, x.saver_);
  }

protected:
  auto infer_type_impl(operator_type input) const
    -> caf::expected<operator_type> override {
    if (input.is<chunk_ptr>()) {
      return tag_v<void>;
    }
    // TODO: Fuse this check with crtp_operator::instantiate()
    return caf::make_error(ec::type_clash,
                           fmt::format("'{}' does not accept {} as input",
                                       to_string(), operator_type_name(input)));
  }

private:
  std::unique_ptr<plugin_saver> saver_;
};

class save_plugin final : public virtual operator_plugin<save_operator> {
public:
  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto usage = "save <saver> <args>...";
    auto docs = "https://docs.tenzir.com/next/operators/sinks/save";
    auto name = p.accept_shell_arg();
    if (!name) {
      diagnostic::error("expected saver name", p.current_span())
        .primary(p.current_span())
        .usage(usage)
        .docs(docs)
        .throw_();
    }
    auto plugin = plugins::find<saver_parser_plugin>(name->inner);
    if (!plugin) {
      throw_saver_not_found(*name);
    }
    auto saver = plugin->parse_saver(p);
    TENZIR_DIAG_ASSERT(saver);
    return std::make_unique<save_operator>(std::move(saver));
  }
};

/// The operator for printing and saving data without joining.
class write_and_save_operator final
  : public schematic_operator<write_and_save_operator, write_and_save_state,
                              std::monostate> {
public:
  write_and_save_operator() = default;

  explicit write_and_save_operator(std::unique_ptr<plugin_printer> printer,
                                   std::unique_ptr<plugin_saver> saver) noexcept
    : printer_{std::move(printer)}, saver_{std::move(saver)} {
  }

  auto initialize(const type& schema, operator_control_plane& ctrl) const
    -> caf::expected<state_type> override {
    auto p = printer_->instantiate(schema, ctrl);
    if (not p) {
      return std::move(p.error());
    }
    auto s = saver_->instantiate(
      ctrl, printer_info{.input_schema = schema, .format = printer_->name()});
    if (not s) {
      return std::move(s.error());
    }
    return write_and_save_state{
      .printer = std::move(*p),
      .saver = std::move(*s),
    };
  }

  auto process(table_slice slice, state_type& state) const
    -> output_type override {
    for (auto&& x : state.printer->process(std::move(slice))) {
      state.saver(std::move(x));
    }
    return {};
  }

  auto detached() const -> bool override {
    return true;
  }

  auto location() const -> operator_location override {
    return operator_location::local;
  }

  auto name() const -> std::string override {
    return "<write_and_save>";
  }

  friend auto inspect(auto& f, write_and_save_operator& x) -> bool {
    return plugin_inspect(f, x.printer_) && plugin_inspect(f, x.saver_);
  }

protected:
  auto infer_type_impl(operator_type input) const
    -> caf::expected<operator_type> override {
    if (input.is<table_slice>()) {
      return tag_v<void>;
    }
    // TODO: Fuse this check with crtp_operator::instantiate()
    return caf::make_error(ec::type_clash,
                           fmt::format("'{}' does not accept {} as input",
                                       to_string(), operator_type_name(input)));
  }

private:
  std::unique_ptr<plugin_printer> printer_;
  std::unique_ptr<plugin_saver> saver_;
};

/// @throws `diagnostic`
auto parse_default_printer(std::string definition)
  -> std::unique_ptr<plugin_printer> {
  // We discard all diagnostics emitted for the default parser because the
  // source has not been written by the user.
  auto diag = null_diagnostic_handler{};
  auto p = tql::make_parser_interface(std::move(definition), diag);
  auto p_name = p->accept_identifier();
  TENZIR_DIAG_ASSERT(p_name);
  auto const* p_plugin = plugins::find<printer_parser_plugin>(p_name->name);
  TENZIR_DIAG_ASSERT(p_plugin);
  auto printer = p_plugin->parse_printer(*p);
  TENZIR_DIAG_ASSERT(printer);
  return printer;
}

class to_plugin final : public virtual operator_parser_plugin {
public:
  auto name() const -> std::string override {
    return "to";
  };

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto usage = "to <saver> <args>... [write <printer> <args>...]";
    auto docs = "https://docs.tenzir.com/next/operators/sinks/to";
    auto l_name = p.accept_shell_arg();
    if (!l_name) {
      diagnostic::error("expected saver name")
        .primary(p.current_span())
        .usage(usage)
        .docs(docs)
        .throw_();
    }
    auto l_plugin = plugins::find<saver_parser_plugin>(l_name->inner);
    if (!l_plugin) {
      throw_saver_not_found(*l_name);
    }
    auto q = until_keyword_parser{"write", p};
    auto saver = l_plugin->parse_saver(q);
    TENZIR_DIAG_ASSERT(saver);
    TENZIR_DIAG_ASSERT(q.at_end());
    auto printer = std::unique_ptr<plugin_printer>{};
    if (p.at_end()) {
      printer = parse_default_printer(saver->default_printer());
    } else {
      auto read = p.accept_identifier();
      TENZIR_DIAG_ASSERT(read && read->name == "write");
      auto p_name = p.accept_shell_arg();
      if (!p_name) {
        diagnostic::error("expected printer name")
          .primary(p.current_span())
          .note(usage)
          .docs(docs)
          .throw_();
      }
      auto p_plugin = plugins::find<printer_parser_plugin>(p_name->inner);
      if (!p_plugin) {
        throw_printer_not_found(*p_name);
      }
      printer = p_plugin->parse_printer(p);
      TENZIR_DIAG_ASSERT(printer);
    }
    // If the saver does not want to join different schemas, we cannot use a
    // single `write_operator` here, because its output would be joined. Thus,
    // we use `write_and_save_operator`, which does printing and saving in one
    // go. Note that it could be that `printer->allows_joining()` returns false,
    // but `saver->is_joining()` is true. The implementation of `write_operator`
    // contains the necessary check that it is only passed one single schema in
    // that case, and it otherwise aborts the execution.
    if (not saver->is_joining()) {
      return std::make_unique<write_and_save_operator>(std::move(printer),
                                                       std::move(saver));
    }
    auto ops = std::vector<operator_ptr>{};
    ops.push_back(std::make_unique<write_operator>(std::move(printer)));
    ops.push_back(std::make_unique<save_operator>(std::move(saver)));
    return std::make_unique<pipeline>(std::move(ops));
  }
};

using write_and_save_plugin
  = operator_inspection_plugin<write_and_save_operator>;

} // namespace

} // namespace tenzir::plugins::write_to_print_save

TENZIR_REGISTER_PLUGIN(tenzir::plugins::write_to_print_save::to_plugin)
TENZIR_REGISTER_PLUGIN(
  tenzir::plugins::write_to_print_save::write_and_save_plugin)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::write_to_print_save::save_plugin)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::write_to_print_save::write_plugin)
