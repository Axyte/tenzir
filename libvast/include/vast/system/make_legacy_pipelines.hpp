//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

#include "vast/legacy_pipeline.hpp"

#include <caf/expected.hpp>
#include <caf/typed_actor.hpp>

#include <vector>

namespace vast::system {

/// Validates the passed `caf::settings` and creates the named pipeline defined
/// in the passed pipelines configuration.
/// @param name The name of the created pipeline
/// @param event_types The event types to be operated on by the pipeline. An
///        empty vector implies all possible event types.
/// @param pipelines The converted YAML configuration containing the pipeline
/// definitions.
caf::expected<pipeline_ptr>
make_pipeline(const std::string& name,
              const std::vector<std::string>& event_types,
              const caf::settings& pipelines);

/// Parse and validate a series of pipeline operators, and add them to the given
/// pipeline.
caf::error parse_pipeline_operators(legacy_pipeline& pipeline,
                                    const caf::config_value::list& operators);

} // namespace vast::system
