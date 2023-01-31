# replace

Replaces the fields matching the configured extractors with fixed values.

#### Parameters

- `fields: {extractor: value, ...}`: The fields to replace with fixed values.

#### Example

```yaml
replace:
  fields:
    secret: xxx
    ints:
      - 1
      - 2
      - 3
```

## Pipeline Operator String Syntax (Experimental)

```
replace EXTRACTOR=VALUE[, …]
```

### Example

Replace all values of the field named `secret` with the string value `"xxx"`,
all values of the field named `ints` with the list of integers value
`[1, 2, 3]`, and all values of the field named `strs` with the list of strings
value `["a", "b", "c"]`:

```
replace secret="xxx", ints=[1,2,3], strs=["a","b","c"]
```
