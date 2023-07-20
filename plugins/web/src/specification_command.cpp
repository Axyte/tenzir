//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2022 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "web/server_command.hpp"

namespace tenzir::plugins::web {

auto openapi_record() -> record {
  auto paths = record{};
  for (auto const* plugin : plugins::get<rest_endpoint_plugin>()) {
    auto spec = plugin->openapi_specification();
    TENZIR_ASSERT_CHEAP(caf::holds_alternative<record>(spec));
    for (auto& [key, value] : caf::get<record>(spec))
      paths.emplace(key, value);
  }
  std::sort(paths.begin(), paths.end(), [](const auto& lhs, const auto& rhs) {
    return lhs.first < rhs.first;
  });
  auto schemas = from_yaml(R"_(
Metrics:
  type: object
  description: Information about pipeline data ingress and egress.
  properties:
    total:
      type: object
      description: Information about total pipeline metrics (e.g. total ingress/egress)
      properties:
        in:
          type: object
          description: Information about the total ingress. Contains no values when the source operator has not run.
          properties:
            unit:
              type: string
              description: The unit of the input data (bytes/events).
            elements:
              type: integer
              description: The total amount of elements that entered the pipeline source.
            avg_rate:
              type: number
              description: The average rate of input elements per second.
        out:
          type: object
          description: Information about the total egress. Contains no values when the sink operator has not run.
          properties:
            unit:
              type: string
              description: The unit of the output data (bytes/events).
            elements:
              type: integer
              description: The total amount of elements that entered the pipeline sink.
            avg_rate:
              type: number
              description: The average rate of output elements per second.
Diagnostics:
  type: array
  items:
    $ref: '#/components/schemas/Diagnostic'
Diagnostic:
  type: object
  properties:
    severity:
      type: string
      enum: ["error", "warning", "note"]
    message:
      type: string
      example: "unknown option `--frobnify`"
    annotation:
      type: array
      items:
        $ref: '#/components/schemas/Annotation'
    notes:
      type: array
      items:
        $ref: '#/components/schemas/Note'
Annotation:
  type: object
  properties:
    primary:
      type: boolean
    text:
      type: string
      example: "this option does not exist"
      description: A potentially empty label.
    source:
      $ref: '#/components/schemas/Location'
Note:
  type: object
  properties:
    kind:
      type: string
      enum: ["note", "usage", "hint", "docs"]
      example: "usage"
    message:
      type: string
      example: "file <path> [-f|--follow] [-m|--mmap] [-t|--timeout <duration>]"
Location:
  type: object
  description: A region in the source code, defined by byte offsets.
  properties:
    begin:
      type: number
      example: 42
    end:
      type: number
      example: 48
PipelineInfo:
  type: object
  properties:
    id:
      type: string
      description: The pipeline ID.
    name:
      type: string
      description: The human-readable name of the pipeline.
    definition:
      type: string
      description: The pipeline definition.
    state:
      type: string
      enum:
        - starting
        - running
        - stopping
        - stopped
    error:
      type: string
      description: The error that the pipeline may have encountered during running.
    restart_with_node:
      type: boolean
      description: A flag specifying whether this pipeline should start upon launching the parent node.
      default: false
    operators:
      type: array
      items:
        type: object
        properties:
          id:
            type: string
            description: The pipeline operator ID.
          definition:
            type: string
            description: The pipeline operator definition.
          instrumented:
            type: boolean
            description: Flag that enables subscribing to this operator's metrics and warnings under /pipeline/(pipeline-id)/(operator-id).
    diagnostics:
      $ref: '#/components/schemas/Diagnostics'
    metrics:
      $ref: '#/components/schemas/Metrics'
  )_");
  TENZIR_ASSERT_CHEAP(schemas);
  // clang-format off
  auto openapi = record{
    {"openapi", "3.0.0"},
    {"info",
     record{
       {"title", "Tenzir Rest API"},
       {"version", "\"0.1\""},
       {"description", R"_(
This API can be used to interact with a Tenzir Node in a RESTful manner.

All API requests must be authenticated with a valid token, which must be
supplied in the `X-Tenzir-Token` request header. The token can be generated
on the command-line using the `tenzir rest generate-token` command.)_"},
     }},
    {"servers", list{{
      record{{"url", "https://tenzir.example.com/api/v0"}},
    }}},
    {"security", list {{
      record {{"VastToken", list{}}},
    }}},
    {"components", record{
      {"schemas", std::move(*schemas)},
      {"securitySchemes",
        record{{"VastToken", record {
            {"type", "apiKey"},
            {"in", "header"},
            {"name", "X-Tenzir-Token"}
        }}}},
    }},
    {"paths", std::move(paths)},
  };
  // clang-format on
  return openapi;
}

std::string generate_openapi_json() noexcept {
  auto record = openapi_record();
  auto json = to_json(record);
  TENZIR_ASSERT_CHEAP(json);
  return *json;
}

std::string generate_openapi_yaml() noexcept {
  auto record = openapi_record();
  auto yaml = to_yaml(record);
  TENZIR_ASSERT_CHEAP(yaml);
  return *yaml;
}

auto specification_command(const tenzir::invocation&, caf::actor_system&)
  -> caf::message {
  auto yaml = generate_openapi_yaml();
  fmt::print("---\n{}\n", yaml);
  return {};
}

} // namespace tenzir::plugins::web
