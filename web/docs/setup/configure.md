---
sidebar_position: 4
---

# Configure

Tenzir offers several mechanisms to adjust configuration options on startup.

1. Command-line arguments
2. Environment variables
3. Configuration files
4. Compile-time defaults

These mechanisms are sorted by precedence, i.e., command-line arguments override
environment variables, which override configuration file settings.

Compile-time defaults can only be changed by [rebuilding Tenzir from
source](build.md).

## Command Line

Tenzir has a hierarchical command structure of this form:

```
tenzir [opts] <pipeline>
tenzir-node [opts]
tenzir-ctl [opts] cmd1 [opts1] cmd2 [opts2] ...
```

Both long `--long=X` and short `-s X` exist. Boolean options do not require
explicit specification of a value, and it suffices to write `--long` and `-s`
to set an option to true.

:::info Hierarchical Options
Each command has its own dedicated set of options. Options are not global and
only valid for their respective command. Consider this example:

```bash
tenzir-ctl --option foo # option applies to command 'tenzir'
tenzir-ctl foo --option # option applies to command 'foo'
```
:::

### Get help

You get short usage instructions for every command by adding the `help`
sub-command or providing the option `--help` (which has the shorthand `-h`):

```bash
tenzir-ctl help
tenzir-ctl --help
tenzir-ctl -h
```

The same help pattern applies to (sub-)commands:

```bash
tenzir-ctl export help
tenzir-ctl export --help
tenzir-ctl export -h
```

## Environment Variables

In addition to the command line, Tenzir offers environment variables as an
equivalent mechanism to provide options. This comes in handy when working with
non-interactive deployments where the command line is hard-coded, such as in
Docker containers.

An environment variable has the form `KEY=VALUE`, and we discuss the format of
`KEY` and `VALUE` below. Tenzir processes only environment variables having the
form `TENZIR_{KEY}=VALUE`. For example, `TENZIR_ENDPOINT=1.2.3.4` translates to
the the command line option `--endpoint=1.2.3.4` and YAML configuration
`tenzir.endpoint: 1.2.3.4`.

Regarding precedence, environment variables override configuration file
settings, and command line arguments override environment variables.

### Keys

There exists a one-to-one mapping from configuration file keys to environment
variable names. Here are two examples:

- `tenzir.import.batch-size` 👈 configuration file key
- `TENZIR_IMPORT__BATCH_SIZE` 👈 environment variable

A hierarchical key of the form `tenzir.x.y.z` maps to the environment variable
`TENZIR_X__Y__Z`. More generally, the `KEY` in `TENZIR_{KEY}=VALUE` adheres to
the following rules:

1. Double underscores map to the `.` separator of YAML dictionaries.

2. Single underscores `_` map to a `-` in the corresponding configuration file
   key. This is unambiguous because Tenzir does not have any options that
   include a literal underscore.

From the perspective of the command line, the environment variable key
`TENZIR_X__Y__Z` maps to `tenzir x y --z`. Here are two examples with identical
semantics:

```bash
TENZIR_IMPORT__BATCH_SIZE=42 tenzir import json < data
tenzir import --batch-size=42 json < data
```

:::caution CAF and plugin Settings
To provide CAF and plugin settings, which have the form `caf.x.y.z` and
`plugins.name.x.y.z` in the configuration file, the environment variable must
have the form `TENZIR_CAF__X__Y__Z` and `TENZIR_PLUGINS__NAME__X__Y__Z`
respectively.

The configuration file is an exception in this regard: `tenzir.caf.` and
`tenzir.plugins.` are invalid key prefixes. Instead, CAF and plugin
configuration file keys have the prefixes `caf.` and `plugins.`, i.e., they are
hoisted into the global scope.
:::

### Values

While all environment variables are strings on the shell, Tenzir parses them
into a typed value internally. In general, parsing values from the environment
follows the same syntactical rules as command line parsing.

In particular, this applies to lists. For example, `TENZIR_PLUGINS="sigma,pcap"`
is equivalent to `--plugins=foo,bar`.

Tenzir ignores environment variables with an empty value because the type cannot
be inferred. For example, `TENZIR_PLUGINS=` will not be considered.

## Configuration files

Tenzir's configuration file is in YAML format. On startup, Tenzir attempts to
read configuration files from the following places, in order:

1. `<sysconfdir>/tenzir/tenzir.yaml` for system-wide configuration, where
   `sysconfdir` is the platform-specific directory for configuration files,
   e.g., `<install-prefix>/etc`.

2. `~/.config/tenzir/tenzir.yaml` for user-specific configuration. Tenzir
   respects the XDG base directory specification and its environment variables.

3. A path to a configuration file passed via `--config=/path/to/tenzir.yaml`.

If there exist configuration files in multiple locations, options from all
configuration files are merged in order, with the latter files receiving a
higher precedence than former ones. For lists, merging means concatenating the
list elements.

### Plugin Configuration Files

In addition to `tenzir/tenzir.yaml`, Tenzir loads `tenzir/plugin/<plugin>.yaml`
for plugin-specific configuration for a given plugin named `<plugin>`. The same
rules apply as for the regular configuration file directory lookup.

### Bare Mode

Sometimes, users may wish to run Tenzir without side effects, e.g., when
wrapping Tenzir in their own scripts. Run with `--bare-mode` to disable looking
at all system- and user-specified configuration paths.

## Plugins

Tenzir's [plugin architecture](../architecture/plugins.md) allows for
flexible replacement and enhancement of functionality at various pre-defined
customization points. There exist **dynamic plugins** that ship as shared
libraries and **static plugins** that are compiled into libtenzir.

### Install plugins

Dynamic plugins are just shared libraries and can be placed at a location of
your choice. We recommend putting them into a single directory and add the path
to the `tenzir.plugin-dirs` configuration option..

Static plugins do not require installation since they are compiled into Tenzir.

### Load plugins

The onfiguration key `tenzir.plugins` specifies the list of plugins that should
load at startup. The `all` plugin name is reserved. When `all` is specified
Tenzir loads all available plugins in the configured plugin directories. If no
`tenzir.plugins` key is specified, Tenzir will load `all` plugins by default.
To load no plugins at all, specify a `tenzir.plugins` configuration key with no
plugin values, e.g. the configuration file entry `plugins: []` or launch
parameter `--plugins=`.

Since dynamic plugins are shared libraries, they must be loaded first into the
running Tenzir process. At startup, Tenzir looks for the `tenzir.plugins` inside
the `tenzir.plugin-dirs` directories configured in `tenzir.yaml`. For example:

```yaml
tenzir:
  plugin-dirs:
    - .
    - /opt/foo/lib
  plugins:
    - example
    - /opt/bar/lib/libtenzir-plugin-example.so
```

Before executing plugin code, Tenzir loads the specified plugins via `dlopen(3)`
and attempts to initialize them as plugins. Part of the initilization is passing
configuration options to the plugin. To this end, Tenzir looks for a YAML
dictionary under `plugins.<name>` in the `tenzir.yaml` file. For example:

```yaml
# <configdir>/tenzir/tenzir.yaml
plugins:
  example:
    option: 42
```

Alternatively, you can specify a `plugin/<plugin>.yaml` file. The example
configurations above and below are equivalent. This makes plugin deployments
easier, as plugins can be installed and uninstalled alongside their respective
configuration.

```yaml
# <configdir>/tenzir/plugin/example.yaml
option: 42
```

After initialization with the configuration options, the plugin is fully
operational and Tenzir will call its functions at the plugin-specific
customization points.

### Show plugins

You can get a list of all plugins and their respective version by running
`tenzir version`:

```json
{
  "Tenzir": "v1.4.1-97-gced115d91-dirty",
  "CAF": "0.17.6",
  "Apache Arrow": "2.0.0",
  "PCAP": "libpcap version 1.9.1",
  "jemalloc": null,
  "plugins": {
    "example": "v0.4.1-g14cee3e48-dirty"
  }
}
```

The version of a plugin consists of three optional parts, separated by dashes:

1. The CMake project version of the plugin
2. The Git revision of the last commit that touched the plugin
3. A `dirty` suffix for uncommited changes to the plugin

Plugins created with the recommended scaffolding use the above version number
format.
