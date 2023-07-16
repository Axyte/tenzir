//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2019 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once
#include "tenzir/fwd.hpp"

#include "tenzir/defaults.hpp"
#include "tenzir/format/reader.hpp"
#include "tenzir/format/writer.hpp"
#include "tenzir/module.hpp"
#include "tenzir/table_slice_builder.hpp"
#include "tenzir/type.hpp"

#include <arrow/io/api.h>
#include <arrow/ipc/reader.h>
#include <arrow/ipc/writer.h>
#include <caf/error.hpp>
#include <caf/expected.hpp>

#include <memory>
#include <vector>

namespace tenzir::format::arrow {

/// An Arrow writer.
class writer : public format::writer {
public:
  using output_stream_ptr = std::shared_ptr<::arrow::io::OutputStream>;

  using batch_writer_ptr = std::shared_ptr<::arrow::ipc::RecordBatchWriter>;

  writer();
  writer(writer&&) = default;
  writer(const writer&) = delete;
  writer& operator=(writer&&) = default;
  writer& operator=(const writer&) = delete;
  ~writer() override = default;

  explicit writer(const caf::settings& options);

  caf::error write(const table_slice& slice) override;

  [[nodiscard]] const char* name() const override;

  void out(output_stream_ptr ptr) {
    out_ = std::move(ptr);
  }

  bool schema(const std::shared_ptr<::arrow::Schema>& schema);

private:
  output_stream_ptr out_;
  type current_schema_;
  batch_writer_ptr current_batch_writer_;
};

/// Arrow InputStream API implementation over `std::istream`.
/// Implemented by adapting `arrow::io::StdinStream adapted to use `std::istream`.
class arrow_istream_wrapper : public ::arrow::io::InputStream {
public:
  explicit arrow_istream_wrapper(std::shared_ptr<std::istream> input);
  ~arrow_istream_wrapper() override = default;

  ::arrow::Status Close() override;

  bool closed() const override;

  ::arrow::Result<int64_t> Tell() const override;

  ::arrow::Result<int64_t> Read(int64_t nbytes, void* out) override;

  ::arrow::Result<std::shared_ptr<::arrow::Buffer>>

  Read(int64_t nbytes) override;

private:
  std::shared_ptr<std::istream> input_;
  int64_t pos_;
};

class reader final : public tenzir::format::reader {
public:
  /// Constructs an Arrow IPC reader.
  /// @param options Additional options.
  /// @param in Input stream containing the IPC data.
  reader(const caf::settings& options, std::unique_ptr<std::istream> in);

  /// Replace input stream.
  /// @param in new input stream.
  void reset(std::unique_ptr<std::istream> in) override;

  caf::error module(tenzir::module x) override;

  [[nodiscard]] tenzir::module module() const override;

  [[nodiscard]] const char* name() const override;

private:
  caf::error
  read_impl(size_t max_events, size_t max_slice_size, consumer& f) override;

  tenzir::module module_;
  std::unique_ptr<arrow_istream_wrapper> input_;
  std::shared_ptr<::arrow::ipc::RecordBatchReader> reader_;
};

} // namespace tenzir::format::arrow
