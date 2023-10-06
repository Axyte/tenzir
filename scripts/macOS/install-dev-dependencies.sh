#! /usr/bin/env bash

set -euo pipefail

brew --version
brew install \
    apache-arrow \
    bash \
    boost \
    ccache \
    coreutils \
    cppzmq \
    flatbuffers \
    fluent-bit \
    fmt \
    gnu-sed \
    http-parser \
    libpcap \
    librdkafka \
    libunwind-headers \
    llvm \
    ninja \
    openssl \
    pandoc \
    poetry \
    pkg-config \
    rsync \
    simdjson \
    spdlog \
    tcpdump \
    xxhash \
    yaml-cpp \
    yarn
