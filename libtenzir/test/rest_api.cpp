//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2022 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/node.hpp>
#include <tenzir/plugin.hpp>
#include <tenzir/test/fixtures/node.hpp>
#include <tenzir/test/test.hpp>

#include <regex>
#include <simdjson.h>

namespace {

// "/query/{id}/next" -> "/query/:id/next"
std::string to_express_format(const std::string& openapi_path) {
  static const auto path_param = std::regex{"\\{(.+?)\\}"};
  return std::regex_replace(openapi_path, path_param, ":$1");
}

std::string method_to_string(const tenzir::http_method method) {
  std::string result;
  switch (method) {
    case tenzir::http_method::get:
      result = "get";
      break;
    case tenzir::http_method::post:
      result = "post";
      break;
    default:
      result = "not handled in unit tests; please extend this switch";
      break;
  }
  return result;
}

struct fixture : public fixtures::node {
  fixture() : fixtures::node(TENZIR_PP_STRINGIFY(SUITE)) {
  }

  ~fixture() override = default;
};

} // namespace

TEST(OpenAPI specs) {
  auto version = tenzir::api_version::v0;
  for (auto const* rest_plugin :
       tenzir::plugins::get<tenzir::rest_endpoint_plugin>()) {
    MESSAGE("verifying spec for plugin " << rest_plugin->name());
    auto endpoints = rest_plugin->rest_endpoints();
    auto spec = rest_plugin->openapi_endpoints(version);
    REQUIRE(caf::holds_alternative<tenzir::record>(spec));
    auto spec_record = caf::get<tenzir::record>(spec);
    auto endpoint_methods = size_t{0ull};
    for (auto const& [key, value] : spec_record) {
      auto path = to_express_format(key);
      auto endpoints_it = std::find_if(endpoints.begin(), endpoints.end(),
                                       [&](auto const& endpoint) {
                                         return endpoint.path == path;
                                       });
      REQUIRE(endpoints_it != endpoints.end());
      auto& endpoint = *endpoints_it;
      CHECK_EQUAL(endpoint.version, version);
      REQUIRE(caf::holds_alternative<tenzir::record>(value));
      auto const& as_record = caf::get<tenzir::record>(value);
      auto method = method_to_string(endpoint.method);
      CHECK(as_record.contains(method));
      endpoint_methods += as_record.size();
      // TODO: Implement a a more convenient accessor API into `tenzir::data`,
      // so we can also check things like number of parameters and content type.
    }
    CHECK_EQUAL(endpoints.size(), endpoint_methods);
  }
}

FIXTURE_SCOPE(rest_api_tests, fixture)

TEST(status endpoint) {
  auto const* plugin
    = tenzir::plugins::find<tenzir::rest_endpoint_plugin>("api-status");
  REQUIRE(plugin);
  auto endpoints = plugin->rest_endpoints();
  REQUIRE_EQUAL(endpoints.size(), 1ull);
  auto const& status_endpoint = endpoints[0];
  auto handler = plugin->handler(self->system(), test_node);
  auto params = tenzir::record{{"component", "system"}};
  auto rp = self->request(handler, caf::infinite, tenzir::atom::http_request_v,
                          status_endpoint.endpoint_id, std::move(params));
  run();
  rp.receive(
    [](tenzir::rest_response& response) {
      CHECK_EQUAL(response.code(), size_t{200});
      auto body = std::move(response).release();
      CHECK(!body.empty());
      auto padded_string = simdjson::padded_string{body};
      simdjson::dom::parser parser;
      simdjson::dom::element doc;
      auto error = parser.parse(padded_string).get(doc);
      REQUIRE(!error);
    },
    [](caf::error& e) {
      FAIL(e);
    });
}

FIXTURE_SCOPE_END()
