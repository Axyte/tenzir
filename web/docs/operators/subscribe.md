---
sidebar_custom_props:
  operator:
    source: true
---

# subscribe

Subscribes to events at a Tenzir Node. The dual to [`publish`](publish.md).

## Synopsis

```
subscribe [<topic>]
```
## Description

The `subscribe` operator subscribes to events at a Tenzir Node from a channel
with the specified topic. Multiple `subscribe` operators with the same topic
receive the same events.

### `<topic>`

An optional topic identifying the channel events are published under.

## Examples

Subscribe to the events under the topic `zeek-conn`:

```
subscribe zeek-conn
```
