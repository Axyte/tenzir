# SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
# SPDX-License-Identifier: BSD-3-Clause

setup_state_dir() {
  export BATS_TEST_STATE_DIR="tenzir-functional-test-state/$BATS_TEST_NAME"
  rm -rf "$BATS_TEST_STATE_DIR"
  mkdir -p "$BATS_TEST_STATE_DIR"
  export TENZIR_DB_DIRECTORY="${BATS_TEST_STATE_DIR}/db"
}
teardown_state_dir() {
  if [ -n  "$BATS_TEST_COMPLETED" ] && [  "$BATS_TEST_COMPLETED" -eq 1 ]; then
    rm -rf "$BATS_TEST_STATE_DIR"
  fi
}

setup_node() {
  export TENZIR_BARE_MODE=true
  # The inner exec is needed so that signals to $NODE_PID actually reach the
  # node.
  exec {NODE_OUT}< <(exec tenzir-node -e ":0" --print-endpoint)
  NODE_PID=$!
  read -r -u "$NODE_OUT" TENZIR_ENDPOINT
  export TENZIR_ENDPOINT
}
teardown_node() {
  kill "$NODE_PID"
  # Hard kill the node after a bit of time.
  local seconds=5
  { sleep ${seconds} && { debug 0 "killing the node after ${seconds} second shutdown timeout"; kill -9 "$NODE_PID"; }; } &
  local killerPid=$!
  wait "$NODE_PID"
  # Some FS writes may still be buffered, and they would lead the subsequent
  # cleanup logic astray, so we flush them out here.
  sync
  # The sleep is a child process of the killer shell, so we have to use
  # `pkill -P`.
  pkill -P "$killerPid"
  # This closes the fd attached to stdout on the reading side for good measure.
  exec {NODE_OUT}<&-
}

try_remove_state_dir() {
  if [ -d tenzir-functional-test-state ]; then
    # Remove the state dir if all tests cleaned up after themselves.
    if [ "$(ls -A tenzir-functional-test-state)" == "" ]; then
      rmdir tenzir-functional-test-state
    else
      debug 0 "Keeping tenzir-functional-test-state directory."
    fi
  fi
}
