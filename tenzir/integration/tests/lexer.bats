: "${BATS_TEST_TIMEOUT:=10}"

setup() {
  export TENZIR_EXEC__DUMP_TOKENS=true
  export TENZIR_EXEC__TQL2=true
  bats_load_library bats-support
  bats_load_library bats-assert
  bats_load_library bats-tenzir
}

@test "null byte" {
  check tenzir -f /dev/stdin < <(echo -ne '\0')
}

@test "invalid utf-8" {
  # TODO: This should be rejected.
  check tenzir -f /dev/stdin < <(echo -ne '"a\xFFb" + 42')
}

@test "valid utf-8" {
  check tenzir -f /dev/stdin < <(echo -ne '"a\xF0\x9F\xA4\xA8b"')
}

@test "non-terminated string" {
  check tenzir -f /dev/stdin < <(echo -ne '"bar')
}

@test "non-terminated line comment" {
  check tenzir -f /dev/stdin < <(echo -ne '//')
}

@test "non-terminated delim comment" {
  check tenzir -f /dev/stdin < <(echo -ne '/*')
}

@test "tokens" {
  SOURCE=$(cat <<-END
foo42_bar
42
-0
31.0
-3.5
cafe::cafe
1234::5678
bad:c0ff:ee::
c0f:fee::
::f00d:cafe:
::
::1
f::
127.0.0.1
::1.2.3.4
foo::bar.2.3.4.5
0.0.0.0/42
/* hi */
/* // */
// test /*
+-*/
"foo"
"foo\"bar"
"\{foo}"
"\xFF"
f""
foo""
42kb
4h
42foo
foo'bar
foo'\$bar
END
)
  check tenzir "$SOURCE"
}