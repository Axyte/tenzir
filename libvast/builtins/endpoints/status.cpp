//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2022 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/builtin_rest_endpoints.hpp>
#include <vast/node.hpp>
#include <vast/plugin.hpp>

#include <caf/typed_event_based_actor.hpp>

namespace vast::plugins::rest_api::status {

static auto const* SPEC_V0 = R"_(
/status:
  post:
    summary: Return current status
    description: Returns the current status of the whole node.
    requestBody:
      description: Body for the status endpoint
      required: false
      content:
        application/json:
          schema:
            type: object
            properties:
              component:
                type: string
                description: If specified, return the status for that component only.
                example: "index"
              verbosity:
                type: string
                enum: [info, detailed, debug]
                default: info
    responses:
      200:
        description: OK.
        content:
          application/json:
            schema:
              type: object
            example:
              catalog:
                num-partitions: 7092
                memory-usage: 52781901584
              version:
                VAST: v2.3.0-rc3-32-g8529a6c43f
      401:
        description: Not authenticated.
    )_";

using status_handler_actor
  = typed_actor_fwd<>::extend_with<rest_handler_actor>::unwrap;

struct status_handler_state {
  static constexpr auto name = "status-handler";
  status_handler_state() = default;
  node_actor node_;
};

auto status_handler(
  status_handler_actor::stateful_pointer<status_handler_state> self,
  node_actor node) -> status_handler_actor::behavior_type {
  self->state.node_ = std::move(node);
  return {
    [self](atom::http_request, uint64_t,
           const vast::record& params) -> caf::result<rest_response> {
      TENZIR_VERBOSE("{} handles /status request", *self);
      auto arguments = std::vector<std::string>{};
      if (params.contains("component")) {
        auto const& component = params.at("component");
        // The server should have already type-checked this.
        TENZIR_ASSERT(caf::holds_alternative<std::string>(component));
        arguments.push_back(caf::get<std::string>(component));
      }
      auto options = caf::settings{};
      if (params.contains("verbosity")) {
        auto verbosity = caf::get<std::string>(params.at("verbosity"));
        if (verbosity == "info")
          /* nop */;
        else if (verbosity == "detailed")
          caf::put(options, "tenzir.status.detailed", true);
        else if (verbosity == "debug")
          caf::put(options, "tenzir.status.debug", true);
        else
          return rest_response::make_error(422, "invalid verbosity\n",
                                           caf::error{});
      }
      auto inv = vast::invocation{
        .options = options,
        .full_name = "status",
        .arguments = arguments,
      };
      auto rp = self->make_response_promise<rest_response>();
      self
        ->request(self->state.node_, caf::infinite, atom::run_v, std::move(inv))
        .then(
          [rp](const caf::message&) mutable {
            rp.deliver(rest_response::make_error(500, "unexpected response\n",
                                                 caf::error{}));
          },
          [rp](caf::error& e) mutable {
            // The NODE uses some black magic to respond to the request with
            // a `std::string`, which is not what its type signature says. This
            // will arrive as an "unexpected_response" error here.
            if (caf::sec{e.code()} != caf::sec::unexpected_response) {
              TENZIR_ERROR("node error {}", e);
              rp.deliver(rest_response::make_error(500, "internal error\n",
                                                   caf::error{}));
              return;
            }
            std::string result;
            auto ctx = e.context();
            caf::message_handler{[&](caf::message& msg) {
              caf::message_handler{[&](std::string& str) {
                result = std::move(str);
              }}(msg);
            }}(ctx);
            rp.deliver(rest_response::from_json_string(result));
          });
      return rp;
    },
  };
}

class plugin final : public virtual rest_endpoint_plugin {
  auto initialize([[maybe_unused]] const record& plugin_config,
                  [[maybe_unused]] const record& global_config)
    -> caf::error override {
    return {};
  }

  [[nodiscard]] auto name() const -> std::string override {
    return "api-status";
  };

  [[nodiscard]] auto openapi_specification(api_version version) const
    -> data override {
    if (version != api_version::v0)
      return vast::record{};
    auto result = from_yaml(SPEC_V0);
    TENZIR_ASSERT(result);
    return *result;
  }

  /// List of API endpoints provided by this plugin.
  [[nodiscard]] auto rest_endpoints() const
    -> const std::vector<rest_endpoint>& override {
    static const auto endpoints = std::vector<rest_endpoint>{
      {
        .endpoint_id = static_cast<uint64_t>(status_endpoints::status),
        .method = http_method::post,
        .path = "/status",
        .params = record_type{
          {"component", string_type{}},
          // TODO: Add direct support for `enumeration_type` to the server.
          {"verbosity", string_type{}},
        },
        .version = api_version::v0,
        .content_type = http_content_type::json,
      },
    };
    return endpoints;
  }

  auto handler(caf::actor_system& system, node_actor node) const
    -> rest_handler_actor override {
    return system.spawn(status_handler, node);
  }
};

} // namespace vast::plugins::rest_api::status

TENZIR_REGISTER_PLUGIN(vast::plugins::rest_api::status::plugin)
