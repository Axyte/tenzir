---
sidebar_position: 5
---

# Tune

This section describes tuning knobs that have a notable effect on system
performance.

## Batching

Tenzir processes events in batches. Because the structured data has the shape of
a table, we call these batches *table slices*. The following options control
their shape and behavior.

### Size

Most components in Tenzir operate on table slices, which makes the table slice
size a fundamental tuning knob on the spectrum of throughput and latency. Small
table slices allow for shorter processing times, resulting in more scheduler
context switches and a more balanced workload. But the increased pressure on the
scheduler comes at the cost of throughput. Conversely, a large table slice size
creates more work for each actor invocation and makes them yield less frequently
to the scheduler. As a result, other actors scheduled on the same thread may
have to wait a little longer.

The option `tenzir.import.batch-size` sets an upper bound for the number of
events per table slice. It defaults to 65,536.

The option controls the maximum number of events per table slice, but
not necessarily the number of events until a component forwards a batch to the
next stage in a stream. The CAF streaming framework uses a credit-based
flow-control mechanism to determine buffering of tables slices.

:::caution
Setting `tenzir.import.batch-size` to `0` causes the table slice size to be
unbounded and leaves it to `tenzir.import.batch-timeout` to produce table slices.
This can lead to very large table slices for sources with high data rates, and
is not recommended.
:::

### Import Timeout

The `tenzir.import.batch-timeout` option sets a timeout for forwarding buffered
table slices to the remote Tenzir node. If the timeout fires before a table
slice reaches `tenzir.import.batch-size`, then the table slice will contain fewer
events and ship immediately.

The `tenzir.import.read-timeout` option determines how long a call to read data
from the input will block. After the read timeout elapses, Tenzir tries again at
a later. The default value is 10 seconds.

## Storage Engine

The central component of Tenzir's storage engine is the *catalog*. It owns the
partitions, keeps metadata about them, and maintains a set of sparse secondary
indexes to identify relevant partitions for a given query. In addition, a
partition can have a set of dense secondary indexes in addition to the raw data
stored.

![Multi-Tier Indexing](multi-tier-indexing.excalidraw.svg)

The catalog's secondary indexes are space-efficient sketch data structures
(e.g., Bloom filters, min-max summaries) that have a low memory footprint but
may yield false positives. Tenzir keeps all sketches in memory.

The amount of memory that the storage engine can consume is not explicitly
configurable, but there exist various options that have a direct impact.

### Control the partition size

Tenzir groups table slices with the same schema in a partition. There exist
mutable *active partitions* that Tenzir writes to during ingestion, and
immutable *passive partitions* that Tenzir reads from during query execution.

When constructing a partition, the parameter `tenzir.max-partition-size`
(default: 4Mi / 2^22) sets an upper bound on the number of records in a
partition, across all table slices. The parameter
`tenzir.active-partition-timeout` (default: 10 seconds) provides a time-based
upper bound: once reached, Tenzir considers the partition as complete,
regardless of the number of records.

The two parameters are decoupled to allow for independent control of throughput
and freshness. Tenzir also merges undersized partitions asynchronously in the
background, which counter-acts the fragmentation effect from choosing a low
partition timeout.

### Tune partition caching

Tenzir maintains a LRU cache of partitions to accelerate queries involving
recent partitions. The parameter `tenzir.max-resident-partitions` controls the
number of partitions in the LRU cache.

:::note
Run `tenzir flush` to force Tenzir to write all active partitions to disk
immediately. The command returns only after all active partitions were flushed
to disk.
:::

### Tune catalog fragmentation

The catalog keeps state that grows linear in the number of partitions. The
configuration option `tenzir.max-partition-size` determines an upper bound of
the number of records per partition, which is inversely linked to the number of
partitions. For example, a large value yields fewer partitions whereas a small
value creates more partitions.

In other words, increasing `tenzir.max-partition-size` is an effective method to
reduce the memory footprint of the catalog, at the cost of creating larger
partitions.

### Configure catalog and partition indexes

You can configure catalog and partition indexes under the key `tenzir.index`.
The configuration `tenzir.index.rules` is an array of indexing rules, each of
which configures the indexing behavior of a set of extractors. A rule has the
following keys:

- `targets`: a list of extractors to describe the set of fields whose values to
  add to the sketch.
- `fp-rate`: an optional value to control the false-positive rate of the sketch.
- `partition-index`: a boolean flag to disable partition indexes

#### Tune catalog index parameters

Catalog indexes may produce false positives that can have a noticeable impact on
the query latency by materializing irrelevant partitions. Based on the cost of
I/O, this penalty may be substantial. Conversely, reducing the false positive
rate increases the memory consumption, leading to a higher resident set size and
larger RAM requirements. You can control the false positive probability with the
`fp-rate` key in an index rule.

By default, Tenzir creates one sketch per type, but not additional field-level
sketches unless a dedicated rule with a matching target configuration exists.
Here is an example configuration that adds extra field-level sketches:

```yaml
tenzir:
  index:
    # Set the default false-positive rate for type-level sketches
    default-fp-rate: 0.001
    rules:
      - targets:
          # field sketches require a fully qualified field name
          - suricata.http.http.url
        fp-rate: 0.005
      - targets:
          - :ip
        fp-rate: 0.1
```

This configuration includes two rules (= two catalog indexes) where the first
rule includes a field extractor and the second a type extractor. The first rule
applies to a single field, `suricata.http.http.url`, and has false-positive rate
of 0.5%. The second rule creates one sketch for all fields of type `ip` that has
a false-positive rate of 10%.

#### Disable partition indexes

Every partition has an optional set of dense indexes to further accelerate
specific queries. These indexes only reside in memory if the corresponding
partition is loaded.

By default, Tenzir creates indexes for all fields in a partition. You can
disable the index creation for specific fields or types in the configuration
section `tenzir.index`. This reduces both the memory footprint of a loaded
partition, as well as the size of the persisted partition.

Here is an example that disables partition indexes:

```yaml
tenzir:
  index:
    rules:
        # Don't create partition indexes the suricata.http.http.url field.
      - targets:
          - suricata.http.http.url
        partition-index: false
        # Don't create partition indexes for fields of type ip.
      - targets:
          - :ip
        partition-index: false
```

### Select the store format

Tenzir arranges data in horizontal partitions for sharding. Each partition has a
unique schema and is effectively a concatenation of batches. The *store* inside
a partition holds this data and can have multiple formats:

1. **Feather**: writes Apache Feather V2 files
2. **Parquet**: writes [Apache Parquet](https://parquet.apache.org/) files

Tenzir defaults to the `feather` store. To use the Parquet store, adjust
`tenzir.store-backend`:

```yaml
tenzir:
  plugins:
    - parquet
  store-backend: parquet
```

There's an inherent space-time tradeoff between the stores that affects CPU,
memory, and storage characteristics. Compared to the Feather store, Parquet
differs as follows:

1. Parquet files occupy ~40% less space, which also reduces I/O pressure during
   querying.
2. Parquet utilizes more CPU cycles during ingest (~10%) and querying.

Parquet has the major advantage that it's the de-facto standard for encoding
columnar data in modern data architectures. This allows other applications that
support reading from Parquet *native* access to the data.

:::tip Recommendation

Use Parquet when:

1. Storage is scarce, and you want to increase data retention
2. Workloads are I/O-bound and you have available CPU
3. Reading data with with off-the-shelf data science tools is a use case

For an in-depth comparison, take a look at our [blog post on Feather and
Parquet](/blog/parquet-and-feather-writing-security-telemetry).

One final word of caution: a query over a Parquet store is currently not
interruptible and executes over the entire store. This is a deficiency in our
implementation that we aim to fix in the future. We recommend Feather when tail
latencies are an issue.
:::

Tenzir supports [rebuilding the entire database](#rebuild-partitions) in case
you want to switch to a different store format. However, Tenzir works perfectly
fine with a mixed-storage configuration, so a full rebuild is not required.

### Adjust the store compression

Tenzir compresses partitions using Zstd for partitions at rest. To fine-tune the
space-time trade-off, Tenzir offers a setting, `tenzir.zstd-compression-level`
to allow fine-tuning the compression level:

```yaml
tenzir:
  zstd-compression-level: 1
```

Currently, the default value is taken from Apache Arrow itself.

:::tip
We have a [blog post][parquet-and-feather-2] that does an in-depth
comparison of various compression levels and storage formats.
:::

[parquet-and-feather-2]: /blog/parquet-and-feather-writing-security-telemetry/

### Rebuild partitions

The `rebuild` command re-ingests events from existing partitions and replaces
them with new partitions. This makes it possible to upgrade persistent state to
a newer version, or recreate persistent state after changing configuration
parameters, e.g., switching from the Feather to the Parquet store backend. The
following diagram illustrates this "defragmentation" process:

![Rebuild](rebuild.excalidraw.svg)

Rebuilding partitions also recreates their sketches. The process takes place
asynchronously in the background. Control this behavior in your `tenzir.yaml`
configuration file, to disable or adjust the resources to spend on automatic
rebuilding:

```yaml
tenzir:
  # Automatically rebuild undersized and outdated partitions in the background.
  # The given number controls how much resources to spend on it. Set to 0 to
  # disable. Defaults to 1.
  automatic-rebuild: 1
```

:::info Upgrade from Tenzir v1.x partitions
You can use the `rebuild` command to upgrade your Tenzir v1.x partitions to
v2.x, which yield better compression and have a streamlined representation. We
recommend this to be able to use newer features that do not work with v1.x
partitions.
:::

This is how you run it manually:

```bash
tenzirctl rebuild start [--all] [--undersized] [--parallel=<number>] [--max-partitions=<number>] [--detached] [<expression>]
```

A rebuild is not only useful when upgrading outdated partitions, but also when
changing parameters of up-to-date partitions. (Internally, Tenzir versions the
partition state via FlatBuffers. An outdated partition is one whose version
number is not the newest.)

The `--undersized` flag causes Tenzir to rebuild partitions that are under the
configured partition size limit `tenzir.max-partition-size`.

The `--all` flag causes Tenzir to rebuild all partitions.

The `--parallel` options is a performance tuning knob. The parallelism level
controls how many sets of partitions to rebuild in parallel. This value defaults
to 1 to limit the CPU and memory requirements of the rebuilding process, which
grow linearly with the selected parallelism level.

The `--max-partitions` option allows for setting an upper bound to the number of
partitions to rebuild.

An optional expression allows for restricting the set of partitions to rebuild.
Tenzir performs a catalog lookup with the expression to identify the set of
candidate partitions. This process may yield false positives, as with regular
queries, which may cause unaffected partitions to undergo a rebuild. For
example, to rebuild outdated partitions containing `suricata.flow` events
older than 2 weeks, run the following command:

```bash
tenzirctl rebuild start '#schema == "suricata.flow" && #import_time < 2 weeks ago'
```

To stop an ongoing rebuild, use `tenzirctl rebuild stop`.

## Logging

The Tenzir server writes log files into a file named `server.log` in the
database directory by default. Set the option `tenzir.log-file` to change the
location of the log file.

Tenzir client processes do not write logs by default. Set the option
`tenzir.client-log-file` to enable logging. Note that relative paths are
interpreted relative to the current working directory of the client process.

Server log files rotate automatically after 10 MiB. The option
`tenzir.disable-log-rotation` allows for disabling log rotation entirely, and
the option `tenzir.log-rotation-threshold` sets the size limit when a log file
should be rotated.

Tenzir processes log messages in a dedicated thread, which by default buffers up
to 1M messages for servers, and 100 for clients. The option
`tenzir.log-queue-size` controls this setting.
