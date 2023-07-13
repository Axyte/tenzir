//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/node.hpp>
#include <vast/test/fixtures/node.hpp>
#include <vast/test/test.hpp>

namespace {

struct fixture : public fixtures::node {
  fixture() : fixtures::node(TENZIR_PP_STRINGIFY(SUITE)) {
  }

  ~fixture() override = default;
};

} // namespace

TEST(parameter parsing) {
  auto endpoint = vast::rest_endpoint {
    .method = vast::http_method::post,
    .path = "/dummy",
    .params = vast::record_type{
      {"id", vast::int64_type{}},
      {"uid", vast::uint64_type{}},
      {"timeout", vast::duration_type{}},
      {"value", vast::string_type{}},
      {"li", vast::list_type{vast::ip_type{}}},
      {"ls", vast::list_type{vast::string_type{}}},
    },
    .version = vast::api_version::v0,
    .content_type = vast::http_content_type::json,
  };
  auto params = vast::detail::stable_map<std::string, vast::data>{
    {"id", std::string{"+0"}},
    {"uid", std::string{"0"}},
    {"timeout", std::string{"1m"}},
    {"value", std::string{"1"}},
    {"li", vast::list{std::string{"12.34.1.2"}}},
    {"ls", vast::list{std::string{"1"}, std::string{"2"}}},
  };
  vast::http_parameter_map pmap;
  pmap.get_unsafe() = params;
  auto result = parse_endpoint_parameters(endpoint, pmap);
  REQUIRE_NOERROR(result);
}

FIXTURE_SCOPE(rest_api_tests, fixture)

TEST(proxy requests) {
  // /status
  auto desc = vast::http_request_description{
    .canonical_path = "POST /status (v0)",
    .json_body
    = R"_({"verbosity": "detailed", "components": ["catalog", "index"]})_",
  };
  auto rp = self->request(test_node, caf::infinite, vast::atom::proxy_v, desc);
  run();
  rp.receive(
    [](vast::rest_response& response) {
      CHECK_EQUAL(response.code(), size_t{200});
      auto body = std::move(response).release();
      auto parsed = vast::from_json(body);
      CHECK(parsed);
      CHECK(caf::holds_alternative<vast::record>(*parsed));
      CHECK(caf::get<vast::record>(*parsed).contains("catalog"));
      CHECK(caf::get<vast::record>(*parsed).contains("index"));
    },
    [](const caf::error& e) {
      FAIL(e);
    });

  // TODO: Enable this test once the node test fixture includes a
  // "serve-manager".
  // auto desc2 = vast::http_request_description{
  //   .canonical_path = "POST /serve (v0)",
  //   .json_body = R"_({"serve_id": "foo", "max_events", "1"})_",
  //   },
  // };
  // auto rp2 = self->request(test_node, caf::infinite, vast::atom::proxy_v,
  //                          desc2);
  // run();
  // rp2.receive(
  //   [](vast::rest_response& response) {
  //     // We expect an "Unknown serve id" error.
  //     CHECK_EQUAL(response.code(), size_t{400});
  //     auto body = std::move(response).release();
  //     auto parsed = vast::from_json(body);
  //     CHECK(parsed);
  //     CHECK(caf::holds_alternative<vast::record>(*parsed));
  //     CHECK(caf::get<vast::record>(*parsed).contains("error"));
  //   },
  //   [](const caf::error& e) {
  //     FAIL(e);
  //   });
}

TEST(invalid request) {
  MESSAGE("invalid path");
  auto desc = vast::http_request_description{
    .canonical_path = "foo",
    .json_body = {},
  };
  auto rp = self->request(test_node, caf::infinite, vast::atom::proxy_v, desc);
  run();
  rp.receive(
    [](vast::rest_response& response) {
      CHECK(response.is_error());
    },
    [](const caf::error& e) {
      FAIL(e);
    });

  MESSAGE("invalid params");
  auto desc2 = vast::http_request_description{
    .canonical_path = "POST /status (v0)",
    .json_body = R"_({"verbosity": "jklo"})_",
  };
  auto rp2
    = self->request(test_node, caf::infinite, vast::atom::proxy_v, desc2);
  run();
  rp2.receive(
    [](vast::rest_response& response) {
      CHECK(response.is_error());
    },
    [](const caf::error& e) {
      FAIL(e);
    });
}

FIXTURE_SCOPE_END()
