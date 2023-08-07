# Metrics

Tenzir collects various metrics during execution. This reference describes what
metrics are available and what they mean. We describe how to [collect
metrics](setup-guides/collect-metrics.md) in the corresponding user guide.

For the reference table below, these symbols indicate presense of additional
metadata:

|Symbol|Key|Value|
|-:|-|-|
|🔎|`query`|A UUID to identify the query.|
|🪪|`issuer`|A human-readable identifier of the query issuer.|
|💽|`partition-type`|One of "active" or "passive".|
|#️⃣|`partition-version`|The internal partition version.|
|💾|`store-type`|One of "parquet" or "feather".|
|🗂️|`schema`|The schema name.|

For all keys that show throughput rates in #events/second, e.g.,
`<component>.rate`, the keys `<component>.events` and `<component>.duration` are
dividend and divisor, respectively. They are not listed explicitly in the below
table.

Generally, counts are reset after a component sends out a telemetry report.
E.g., the total number of invalid lines the JSON parser encountered is reflected
by the sum of all `json-reader.invalid-line` events.

## Reference

|Key|Description|Unit|Metadata|
|-:|-|-|-|
|`accountant.startup`|The first event in the lifetime of Tenzir.|constant `0`||
|`accountant.shutdown`|The last event in the lifetime of Tenzir.|constant `0`||
|`archive.rate`|The rate of events processed by the archive component.|#events/second||
|`arrow-writer.rate`|The rate of events processed by the Arrow sink.|#events/second||
|`ascii-writer.rate`|The rate of events processed by the ascii sink.|#events/second||
|`csv-reader.rate`|The rate of events processed by the CSV source.|#events/second||
|`csv-writer.rate`|The rate of events processed by the CSV sink.|#events/second||
|`importer.rate`|The rate of events processed by the importer component.|#events/second||
|`index.memory-usage`|The rough estimate of memory used by the index|#bytes||
|`ingest.rate`|The ingest rate keyed by the schema name.|#events/second|🗂️|
|`ingest-total.rate`|The total ingest rate of all schemas.|#events/second||
|`json-reader.invalid-line`|The number of invalid NDJSON lines.|#events||
|`json-reader.rate`|The rate of events processed by the JSON source.|#events/second||
|`json-reader.unknown-layout`|The number if NDJSON lines with an unknown layout.|#event||
|`json-writer.rate`|The rate of events processed by the JSON sink.|#events/second||
|`catalog.lookup.candidates`|The number of candidate partitions considered for a query.|#partitions|🔎🪪|
|`catalog.lookup.runtime`|The duration of a query evaluation in the catalog.|#milliseconds|🔎🪪|
|`catalog.lookup.hits`|The number of results of a query in the catalog.|#events|🔎🪪|
|`catalog.memory-usage`|The rough estimate of memory used by the catalog|#bytes||
|`catalog.num-partitions`|The number of partitions registered in the catalog per schema.|#partitions|🗂️#️⃣|
|`catalog.num-events`|The number of events registered in the catalog per schema.|#events|🗂️#️⃣|
|`catalog.num-partitions-total`|The sum of all partitions registered in the catalog.|#partitions||
|`catalog.num-events-total`|The sum of all events registered in the catalog.|#events||
|`node_throughput.rate`|The rate of events processed by the node component.|#events/second||
|`null-writer.rate`|The rate of events processed by the null sink.|#events/second||
|`partition.events-written`|The number of events written in one partition.|#events|🗂|
|`partition.lookup.runtime`|The duration of a query evaluation in one partition.|#milliseconds|🔎🪪💽|
|`partition.lookup.hits`|The number of results of a query in one partition.|#events|🔎🪪💽|
|`pcap-reader.discard-rate`|The rate of packets discarded.|#events-dropped/#events-received||
|`pcap-reader.discard`|The number of packets discarded by the reader.|#events||
|`pcap-reader.drop-rate`|The rate of packets dropped.|#events-dropped/#events-received||
|`pcap-reader.drop`|The number of packets dropped by the reader.|#events||
|`pcap-reader.ifdrop`|The number of packets dropped by the network interface.|#events||
|`pcap-reader.rate`|The rate of events processed by the PCAP source.|#events/second||
|`pcap-reader.recv`|The number of packets received.|#events||
|`pcap-writer.rate`|The rate of events processed by the PCAP sink.|#events/second||
|`rebuilder.partitions.remaining`|The number of partitions scheduled for rebuilding.|#partitions||
|`rebuilder.partitions.rebuilding`|The number of partitions currently being rebuilt.|#partitions||
|`rebuilder.partitions.completed`|The number of partitions rebuilt in the current run.|#partitions||
|`scheduler.backlog.custom`|The number of custom priority queries in the backlog.|#queries||
|`scheduler.backlog.low`|The number of low priority queries in the backlog.|#queries||
|`scheduler.backlog.normal`|The number of normal priority queries in the backlog.|#queries||
|`scheduler.backlog.high`|The number of high priority queries in the backlog.|#queries||
|`scheduler.partition.current-lookups`|The number of partition lookups that are currently running.|#workers||
|`scheduler.partition.lookups`|Query lookups executed on individual partitions.|#partition-lookups||
|`scheduler.partition.materializations`|Partitions loaded from disk.|#partitions||
|`scheduler.partition.pending`|The number of queued partitions.|#partitions||
|`scheduler.partition.remaining-capacity`|The number of partition lookups that could be scheduled immediately.|#workers||
|`scheduler.partition.scheduled`|The number of scheduled partitions.|#partitions||
|`active-store.lookup.runtime`|The number of results of a query in an active store.|#events|🔎🪪💾|
|`active-store.lookup.hits`|The number of results of a query in an active store.|#events|🔎🪪💾|
|`passive-store.lookup.runtime`|The number of results of a query in a passive store.|#events|🔎🪪💾|
|`passive-store.lookup.hits`|The number of results of a query in a passive store.|#events|🔎🪪💾|
|`passive-store.init.runtime`|Time until the store is ready serve queries.|nanoseconds|💾|
|`posix-filesystem.checks.failed`|The number of failed file checks since process start.|||
|`posix-filesystem.checks.successful`|The number of successful file checks since process start.|||
|`posix-filesystem.erases.bytes`|The number of bytes erased since process start.|#bytes||
|`posix-filesystem.erases.failed`|The number of failed file erasures since process start.|||
|`posix-filesystem.erases.successful`|The number of successful file erasures since process start.|||
|`posix-filesystem.mmaps.bytes`|The number of bytes memory-mapped since process start.|#bytes||
|`posix-filesystem.mmaps.failed`|The number of failed file memory-maps since process start.|||
|`posix-filesystem.mmaps.successful`|The number of successful file memory-maps since process start.|||
|`posix-filesystem.moves.failed`|The number of failed file moves since process start.|||
|`posix-filesystem.moves.successful`|The number of successful file moves since process start.|||
|`posix-filesystem.reads.bytes`|The number of bytes read since process start.|#bytes||
|`posix-filesystem.reads.failed`|The number of success file reads since process start.|||
|`posix-filesystem.reads.successful`|The number of success file reads since process start.|||
|`posix-filesystem.writes.bytes`|The number of bytes written since process start.|#bytes||
|`posix-filesystem.writes.failed`|The number of failed file writes since process start.|||
|`posix-filesystem.writes.successful`|The number of successful file writes since process start.|||
|`source.start`|Timepoint when the source started.|nanoseconds since epoch||
|`source.stop`|Timepoint when the source stopped.|nanoseconds since epoch||
|`syslog-reader.rate`|The rate of events processed by the syslog source.|#events/second||
|`test-reader.rate`|The rate of events processed by the test source.|#events/second||
|`zeek-reader.rate`|The rate of events processed by the Zeek source.|#events/second||
