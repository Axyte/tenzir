#!/usr/bin/env bash

# The tag on docker.io the database is created with
OLD_VERSION=$1
# A tag on ghcr.io to validate retro compatibility
NEW_VERSION=$2

set -euxo pipefail

pushd "$(git -C "$(dirname "$(readlink -f "${0}")")" rev-parse --show-toplevel)"

TENZIR_RUN_FLAGS="-d --pull=always --rm --name vast-regression -e TENZIR_CONSOLE_VERBOSITY=verbose -v vast-regression:/var/lib/vast/"

# Pull the old version to create a database.
docker run \
  $TENZIR_RUN_FLAGS \
  docker.io/tenzir/vast:$OLD_VERSION \
  start

sleep 3

docker exec -i vast-regression \
  vast import --blocking suricata \
  < vast/integration/data/suricata/eve.json

docker exec vast-regression \
  vast flush

docker exec vast-regression \
  vast export json 'where #schema == "suricata.alert"' \
  > old.json

docker rm -f vast-regression

# Change the volume mount point since the default database location changed from
# /var/lib/vast to /var/lib/tenzir.
TENZIR_RUN_FLAGS="-d --pull=always --rm --name vast-regression -e TENZIR_CONSOLE_VERBOSITY=verbose -v vast-regression:/var/lib/tenzir/"

# Pull the new version to verify database compatibility.
docker run \
  $TENZIR_RUN_FLAGS \
  ghcr.io/tenzir/tenzir-node:$NEW_VERSION

sleep 3

docker exec vast-regression \
  vast export json 'where #schema == "suricata.alert"' \
  > new.json

docker rm -f vast-regression
docker volume rm vast-regression

# Compare old and new
diff old.json new.json
