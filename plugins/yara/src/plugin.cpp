//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/argument_parser.hpp>
#include <tenzir/die.hpp>
#include <tenzir/logger.hpp>
#include <tenzir/plugin.hpp>

#include <yara.h>

namespace tenzir::plugins::yara {

namespace {

/// A type that represents an description of a NIC.
auto yara_type() -> type {
  TENZIR_TODO();
  return type{
    "tenzir.yara",
    record_type{
      {"rule_id", string_type{}},
    },
  };
}

/// Arguments to the operator.
struct operator_args {
  bool compiled_rules;
  bool fast_scan;
  std::vector<std::string> rules;

  friend auto inspect(auto& f, operator_args& x) -> bool {
    return f.object(x)
      .pretty_name("operator_args")
      .fields(f.field("compiled_rules", x.compiled_rules),
              f.field("fast_scan", x.fast_scan), f.field("rules", x.rules));
  }
};

/// Options to pass to rules::scan() that affect the scanning behavior.
struct scan_options {
  bool fast_scan{false};
  std::chrono::seconds timeout{1'000'000};
};

/// A set of Yara rules.
class rules {
  friend class compiler;

public:
  /// Loads a compiled rule.
  /// @param filename The path to the rule file.
  static auto load(const std::string& filename) -> caf::expected<rules> {
    auto result = rules{};
    switch (yr_rules_load(filename.c_str(), &result.rules_)) {
      default:
        die("unhandled return value of yr_rules_load");
      case ERROR_SUCCESS:
        break;
      case ERROR_INSUFFICIENT_MEMORY:
        return caf::make_error(ec::unspecified,
                               "insufficient memory to load rule");
      case ERROR_COULD_NOT_OPEN_FILE:
        return caf::make_error(ec::unspecified, "failed to open Yara rule");
      case ERROR_INVALID_FILE:
        return caf::make_error(ec::unspecified, "invalid Yara rule");
      case ERROR_CORRUPT_FILE:
        return caf::make_error(ec::unspecified, "corrupt Yara rule");
      case ERROR_UNSUPPORTED_FILE_VERSION:
        return caf::make_error(ec::unspecified,
                               "unsupported Yara file version");
    }
    return result;
  }

  rules(const rules&) = delete;
  auto operator=(const rules&) -> rules& = delete;
  rules(rules&&) = default;
  auto operator=(rules&&) -> rules& = default;

  ~rules() {
    yr_rules_destroy(rules_);
  }

  /// Scans a buffer of bytes.
  auto scan(std::span<const std::byte> bytes, scan_options opts) -> caf::error {
    auto flags = 0;
    if (opts.fast_scan)
      flags |= SCAN_FLAGS_FAST_MODE;
    auto buffer = reinterpret_cast<const uint8_t*>(bytes.data());
    auto buffer_size = bytes.size();
    auto user_data = nullptr;
    auto timeout = detail::narrow_cast<int>(opts.timeout.count());
    auto result = yr_rules_scan_mem(rules_, buffer, buffer_size, flags,
                                    callback, user_data, timeout);
    switch (result) {
      default:
        die("unhandled result value for yr_rules_scan_mem");
      case ERROR_SUCCESS:
        break;
      case ERROR_INSUFFICIENT_MEMORY:
        return caf::make_error(ec::unspecified,
                               "insufficient memory to scan bytes");
      case ERROR_TOO_MANY_SCAN_THREADS:
        return caf::make_error(ec::unspecified, "too many scan threads");
      case ERROR_SCAN_TIMEOUT:
        return caf::make_error(ec::unspecified, "scan timeout");
      case ERROR_CALLBACK_ERROR:
        return caf::make_error(ec::unspecified, "callback error");
      case ERROR_TOO_MANY_MATCHES:
        return caf::make_error(ec::unspecified, "too many matches");
    }
    return {};
  }

private:
  static auto callback(YR_SCAN_CONTEXT* context, int message,
                       void* message_data, void* user_data) -> int {
    if (message == CALLBACK_MSG_RULE_MATCHING) {
      auto* rule = reinterpret_cast<YR_RULE*>(message_data);
      TENZIR_INFO("got a match for rule {}", rule->identifier);
      // TODO: handle match
    } else if (message == CALLBACK_MSG_RULE_NOT_MATCHING) {
      auto* rule = reinterpret_cast<YR_RULE*>(message_data);
      TENZIR_INFO("got no match for rule {}", rule->identifier);
      // TODO: handle not match
    } else if (message == CALLBACK_MSG_IMPORT_MODULE) {
      auto* module = reinterpret_cast<YR_MODULE_IMPORT*>(message_data);
      TENZIR_INFO("importing module: {}", module->module_name);
    } else if (message == CALLBACK_MSG_MODULE_IMPORTED) {
      auto* object = reinterpret_cast<YR_OBJECT_STRUCTURE*>(message_data);
      TENZIR_INFO("imported module: {}", object->identifier);
    } else if (message == CALLBACK_MSG_TOO_MANY_MATCHES) {
      auto* yr_string = reinterpret_cast<YR_STRING*>(message_data);
      auto string = std::string_view{
        reinterpret_cast<char*>(yr_string->string),
        detail::narrow_cast<std::string_view::size_type>(yr_string->length)};
      TENZIR_WARN("too many matches for string: {}", string);
    } else if (message == CALLBACK_MSG_CONSOLE_LOG) {
      auto* str = reinterpret_cast<char*>(message_data);
      TENZIR_INFO("{}", str);
    } else if (message == CALLBACK_MSG_SCAN_FINISHED) {
      TENZIR_INFO("completed scan");
    } else {
      die("unhandled message type in Yara callback");
    }
    return CALLBACK_CONTINUE;
  }

  rules() = default;
  YR_RULES* rules_ = nullptr;
};

/// Compiles Yara rules.
class compiler {
public:
  /// Constructs a compiler.
  static auto make() -> std::optional<compiler> {
    auto result = compiler{};
    auto status = yr_compiler_create(&result.compiler_);
    if (status == ERROR_INSUFICIENT_MEMORY)
      return std::nullopt;
    TENZIR_ASSERT(status == ERROR_SUCCESS);
    return result;
  }

  ~compiler() {
    yr_compiler_destroy(compiler_);
  }

  compiler(const compiler&) = delete;
  auto operator=(const compiler&) -> compiler& = delete;
  compiler(compiler&&) = default;
  auto operator=(compiler&&) -> compiler& = default;

  /// Adds a file as Yara rule.
  /// @param str The rule.
  /// @returns An error upon failure.
  auto add(const std::filesystem::path& filename) -> caf::error {
    // TODO: who is responsible for closing?!
    auto file = std::fopen(filename.string().c_str(), "r");
    auto name_space = nullptr;
    auto num_errors = yr_compiler_add_file(compiler_, file, name_space,
                                           filename.string().c_str());
    if (num_errors > 0)
      return caf::make_error(ec::unspecified,
                             fmt::format("got {} error(s) while compiling Yara "
                                         "rule: {}",
                                         num_errors, filename));
    return {};
  }

  /// Adds a string representation of a Yara rule.
  /// @param str The rule.
  /// @returns An error upon failure.
  auto add(const std::string& str) -> caf::error {
    auto name_space = nullptr;
    auto num_errors
      = yr_compiler_add_string(compiler_, str.c_str(), name_space);
    if (num_errors > 0)
      return caf::make_error(ec::unspecified,
                             fmt::format("got {} error(s) while compiling Yara "
                                         "rule: '{}'",
                                         num_errors, str));
    return {};
  }

  /// Compiles the added set of rules.
  /// @warning You cannot add rules afterwards.
  /// @returns The set of compiled rules.
  auto compile() -> caf::expected<rules> {
    YR_RULES* yr_rules = nullptr;
    auto status = yr_compiler_get_rules(compiler_, &yr_rules);
    if (status == ERROR_INSUFFICIENT_MEMORY)
      return caf::make_error(ec::unspecified,
                             "insufficent memory to compile rules");
    TENZIR_ASSERT(status == ERROR_SUCCESS);
    auto result = rules{};
    result.rules_ = yr_rules;
    return result;
  }

private:
  compiler() = default;

  YR_COMPILER* compiler_ = nullptr;
};

/// The `yara` operator implementation.
class yara_operator final : public crtp_operator<yara_operator> {
public:
  yara_operator() = default;

  explicit yara_operator(operator_args args) : args_{std::move(args)} {
  }

  auto
  operator()(generator<chunk_ptr> input, operator_control_plane& ctrl) const
    -> generator<table_slice> {
    auto rules = caf::expected<class rules>{caf::error{}};
    auto compiler = compiler::make();
    if (not compiler) {
      diagnostic::error("insufficient memory to create Yara compiler")
        .emit(ctrl.diagnostics());
      co_return;
    }
    if (args_.compiled_rules) {
      TENZIR_ASSERT(args_.rules.size() == 1);
      rules = rules::load(args_.rules[0]);
      if (not rules) {
        diagnostic::error("failed to load compiled Yara rules")
          .note("{}", rules.error())
          .emit(ctrl.diagnostics());
        co_return;
      }
    } else {
      for (const auto& rule : args_.rules) {
        if (auto err = compiler->add(std::filesystem::path{rule})) {
          diagnostic::error("failed to add Yara rule to compiler")
            .note("rule: {}", rule)
            .note("error: {}", err)
            .emit(ctrl.diagnostics());
          co_return;
        }
      }
      rules = compiler->compile();
    }
    for (auto&& chunk : input) {
      if (not chunk) {
        co_yield {};
        continue;
      }
      auto opts = scan_options{
        .fast_scan = args_.fast_scan,
      };
      if (auto err = rules->scan(as_bytes(chunk), opts))
        diagnostic::warning("failed to scan bytes with Yara rules")
          .emit(ctrl.diagnostics());
      // TODO: yield scan result as structured data.
      co_yield {};
    }
  }

  auto name() const -> std::string override {
    return "yara";
  }

  auto optimize(expression const& filter, event_order order) const
    -> optimize_result override {
    (void)filter;
    (void)order;
    return do_not_optimize(*this);
  }

  friend auto inspect(auto& f, yara_operator& x) -> bool {
    return f.object(x)
      .pretty_name("yara_operator")
      .fields(f.field("args", x.args_));
  }

private:
  operator_args args_ = {};
};

/// The `yara` plugin.
class plugin final : public virtual operator_plugin<yara_operator> {
public:
  plugin() {
    if (yr_initialize() != ERROR_SUCCESS)
      die("failed to initialize yara");
  }

  ~plugin() final {
    yr_finalize();
  }

  auto signature() const -> operator_signature override {
    return {.transformation = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto args = operator_args{};
    while (auto arg = p.accept_shell_arg()) {
      if (arg) {
        if (arg->inner == "-C" || arg->inner == "--compiled-rules")
          args.compiled_rules = true;
        else if (arg->inner == "-f" || arg->inner == "--fast-scan")
          args.fast_scan = true;
        else
          args.rules.push_back(std::move(arg->inner));
      }
    }
    if (args.rules.empty())
      diagnostic::error("no rules provided").throw_();
    if (args.compiled_rules && args.rules.size() != 1)
      diagnostic::error("can't accept multiple rules in compiled form")
        .hint("provide exactly one rule argument")
        .throw_();
    return std::make_unique<yara_operator>(std::move(args));
  }
};

} // namespace

} // namespace tenzir::plugins::yara

TENZIR_REGISTER_PLUGIN(tenzir::plugins::yara::plugin)
