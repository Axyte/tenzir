# -- bundled dependencies ------------------------------------------------------

# TODO: Tenzir bundles robin-map in its aux directory, because we need at least
# 0.6.2, which is not widely available on package managers. We should
# investigate switching to a different map, e.g., from folly or abseil.

option(TENZIR_ENABLE_BUNDLED_ROBIN_MAP "Always use the bundled tsl-robin-map"
       OFF)
add_feature_info(
  "TENZIR_ENABLE_BUNDLED_ROBIN_MAP" TENZIR_ENABLE_BUNDLED_ROBIN_MAP
  "always use the bundled tsl-robin-map.")
if (NOT TENZIR_ENABLE_BUNDLED_ROBIN_MAP)
  find_package(tsl-robin-map QUIET)
  if (tsl-robin-map_FOUND)
    string(APPEND TENZIR_FIND_DEPENDENCY_LIST
           "\nfind_package(tsl-robin-map REQUIRED)")
    dependency_summary("robin-map" tsl::robin_map "Dependencies")
  endif ()
endif ()
if (NOT tsl-robin-map_FOUND)
  if (NOT TENZIR_ENABLE_BUNDLED_ROBIN_MAP)
    message(
      STATUS
        "Cannot find installed tsl-robin-map; falling back to bundled version")
  endif ()
  add_subdirectory(aux/robin-map)
  dependency_summary("robin-map" "${CMAKE_CURRENT_SOURCE_DIR}/aux/robin-map"
                     "Dependencies")
  export(
    EXPORT tsl-robin-mapTargets
    FILE tsl-robin-mapTargets.cmake
    NAMESPACE tsl::)
  add_custom_target(
    tsl-robin-map-targets-link
    COMMAND
      ${CMAKE_COMMAND} -E create_symlink
      "${CMAKE_CURRENT_BINARY_DIR}/tsl-robin-mapTargets.cmake"
      "${CMAKE_BINARY_DIR}/tsl-robin-mapTargets.cmake"
    COMMENT "Linking tsl-robin-map targets")
  install(
    EXPORT tsl-robin-mapTargets
    DESTINATION "${CMAKE_INSTALL_LIBDIR}/cmake/tenzir"
    NAMESPACE tsl::
    COMPONENT Development)
  string(APPEND TENZIR_EXTRA_TARGETS_FILES
         "\ninclude(\"\${CMAKE_CURRENT_LIST_DIR}/tsl-robin-mapTargets.cmake\")")
  add_dependencies(robin_map tsl-robin-map-targets-link)
endif ()

# -- flatbuffers ---------------------------------------------------------------

file(GLOB flatbuffers_schemas CONFIGURE_DEPENDS
     "${CMAKE_CURRENT_SOURCE_DIR}/fbs/*.fbs"
     "${CMAKE_CURRENT_SOURCE_DIR}/fbs/legacy/*.fbs")
list(SORT flatbuffers_schemas)

TenzirCompileFlatBuffers(
  TARGET libtenzir-fbs
  SCHEMAS ${flatbuffers_schemas}
  INCLUDE_DIRECTORY "tenzir/fbs/")

# -- arrow ---------------------------------------------------------------------

find_package(Arrow REQUIRED CONFIG)
if (Arrow_VERSION_MAJOR LESS 8)
  message(
    FATAL_ERROR
      "Tenzir requires at least Arrow version 8.0, but found ${ARROW_VERSION}")
endif ()
mark_as_advanced(
  BROTLI_COMMON_LIBRARY
  BROTLI_DEC_LIBRARY
  BROTLI_ENC_LIBRARY
  LZ4_LIB
  Snappy_INCLUDE_DIR
  Snappy_LIB
  ZSTD_LIB)
string(
  APPEND
  TENZIR_FIND_DEPENDENCY_LIST
  "\nfind_package(Arrow REQUIRED CONFIG)"
  "\nmark_as_advanced("
  "\n BROTLI_COMMON_LIBRARY"
  "\n BROTLI_DEC_LIBRARY"
  "\n BROTLI_ENC_LIBRARY"
  "\n LZ4_LIB"
  "\n Snappy_INCLUDE_DIR"
  "\n Snappy_LIB"
  "\n ZSTD_LIB)")
if (BUILD_SHARED_LIBS)
  set(ARROW_LIBRARY arrow_shared)
else ()
  set(ARROW_LIBRARY arrow_static)
endif ()

# -- boost --------------------------------------------------------------------

find_package(Boost REQUIRED COMPONENTS headers filesystem)

# -- re2 ----------------------------------------------------------------------

find_package(re2 REQUIRED)

# -- libsystemd ----------------------------------------------------------------

option(TENZIR_ENABLE_JOURNALD_LOGGING
       "Build with support for native journald log output" OFF)
add_feature_info(
  "TENZIR_ENABLE_JOURNALD_LOGGING" TENZIR_ENABLE_JOURNALD_LOGGING
  "build with support for native journald log output.")

# -- log level -----------------------------------------------------------------

# Choose a deafult log level based on build type.
if (CMAKE_BUILD_TYPE STREQUAL Release)
  set(TENZIR_LOG_LEVEL_DEFAULT "DEBUG")
elseif (CMAKE_BUILD_TYPE STREQUAL MinSizeRel)
  set(TENZIR_LOG_LEVEL_DEFAULT "DEBUG")
elseif (CMAKE_BUILD_TYPE STREQUAL RelWithDebInfo)
  set(TENZIR_LOG_LEVEL_DEFAULT "DEBUG")
else ()
  set(TENZIR_LOG_LEVEL_DEFAULT "TRACE")
endif ()

# Make sure log level is defined and all-uppercase.
set(TENZIR_LOG_LEVEL_DOC "maximum log level available at runtime")
if (NOT TENZIR_LOG_LEVEL)
  set(TENZIR_LOG_LEVEL
      "${TENZIR_LOG_LEVEL_DEFAULT}"
      CACHE STRING "${TENZIR_LOG_LEVEL_DOC}")
elseif (NOT TENZIR_LOG_LEVEL STREQUAL "$CACHE{TENZIR_LOG_LEVEL}")
  # Override cached variable when re-running CMake.
  string(TOUPPER "${TENZIR_LOG_LEVEL}" TENZIR_LOG_LEVEL)
  set(TENZIR_LOG_LEVEL
      "${TENZIR_LOG_LEVEL}"
      CACHE STRING "${TENZIR_LOG_LEVEL_DOC}" FORCE)
endif ()

set(TENZIR_CAF_LOG_LEVEL
    "WARNING"
    CACHE STRING ${TENZIR_LOG_LEVEL_DOC})

# Raise an error for invalid log levels.
set(validLogLevels
    QUIET
    ERROR
    WARNING
    INFO
    VERBOSE
    DEBUG
    TRACE)
list(FIND validLogLevels "${TENZIR_LOG_LEVEL}" logLevelIndex)
if (logLevelIndex LESS 0)
  message(FATAL_ERROR "Invalid log level: \"${TENZIR_LOG_LEVEL}\"")
endif ()

# -- libtenzir -------------------------------------------------------------------

# The builtins. These special plugins are essentially part of the libtenzir
# library, but always loaded when linking against the libtenzir_builtins library.
file(GLOB_RECURSE libtenzir_builtins_sources CONFIGURE_DEPENDS
     "${CMAKE_CURRENT_SOURCE_DIR}/builtins/*.cpp")
foreach (source IN LISTS libtenzir_builtins_sources)
  file(READ "${source}" lines)
  if (NOT "${lines}" MATCHES "\n *TENZIR_REGISTER_PLUGIN *\\(.+\\) *[\n$]")
    message(FATAL_ERROR "builtin ${source} does not register as a plugin")
  endif ()
endforeach ()

file(GLOB_RECURSE libtenzir_sources CONFIGURE_DEPENDS
     "${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp"
     "${CMAKE_CURRENT_SOURCE_DIR}/include/tenzir/*.hpp")

add_library(libtenzir ${libtenzir_sources})
TenzirTargetEnableTooling(libtenzir)
add_library(tenzir::libtenzir ALIAS libtenzir)

add_library(libtenzir_builtins STATIC ${libtenzir_builtins_sources})
TenzirTargetEnableTooling(libtenzir_builtins)
target_compile_definitions(libtenzir_builtins PRIVATE TENZIR_ENABLE_BUILTINS)
set_target_properties(libtenzir_builtins PROPERTIES OUTPUT_NAME tenzir_builtins)
add_library(tenzir::libtenzir_builtins ALIAS libtenzir_builtins)

target_link_libraries(libtenzir PRIVATE libtenzir_internal)
target_link_libraries(libtenzir_builtins PRIVATE libtenzir libtenzir_internal)

set_target_properties(libtenzir PROPERTIES INTERPROCEDURAL_OPTIMIZATION_RELEASE
                                         ON)

# Set the libtenzir SOVERSION to '<256 * (major + 7) + minor>.<patch>' to indicate
# that libtenzir is considered to have an unstable API and ABI. The +7 is a
# remnant of Tenzir using CalVer before 2022, with the last CalVer release having
# the SOVERSION 2022.12, and it enforces that v1.0.0 has a larger SOVERSION than
# the last CalVer release.
math(EXPR TENZIR_SOVERSION_MAJOR
     "256 * (${TENZIR_VERSION_MAJOR} + 7) + ${TENZIR_VERSION_MINOR}")
set(TENZIR_SOVERSION_MINOR "${TENZIR_VERSION_PATCH}")
set_target_properties(
  libtenzir
  PROPERTIES SOVERSION "${TENZIR_SOVERSION_MAJOR}.${TENZIR_SOVERSION_MINOR}"
             OUTPUT_NAME tenzir)

target_include_directories(
  libtenzir
  PUBLIC $<BUILD_INTERFACE:${CMAKE_CURRENT_BINARY_DIR}/include>
         $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
         $<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>)

# Make dlopen and dlclose available if we're building a shared library.
if (BUILD_SHARED_LIBS)
  target_link_libraries(libtenzir PUBLIC ${CMAKE_DL_LIBS})
endif ()

# Link against CAF.
target_link_libraries(libtenzir PUBLIC CAF::core CAF::io CAF::openssl)

# Link against libtenzir-fbs.
target_link_libraries(libtenzir PUBLIC libtenzir-fbs)

# Link against OpenSSL
target_link_libraries(libtenzir PUBLIC OpenSSL::SSL)
string(APPEND TENZIR_FIND_DEPENDENCY_LIST "\nfind_package(OpenSSL REQUIRED)")
dependency_summary("OpenSSL" OpenSSL::SSL "Dependencies")

# Link against yaml-cpp.
find_package(yaml-cpp 0.6.2 REQUIRED)
target_link_libraries(libtenzir PRIVATE yaml-cpp)
dependency_summary("yaml-cpp" yaml-cpp "Dependencies")

# Link against xxHash.
target_compile_definitions(
  libtenzir
  PUBLIC # Allow null pointer input when hashing data of length greater 0.
         # TODO: Remove this when requiring xxHash >= 0.8.1.
         XXH_ACCEPT_NULL_INPUT_POINTER=1)
find_package(xxhash REQUIRED)
provide_find_module(xxhash)
string(APPEND TENZIR_FIND_DEPENDENCY_LIST "\nfind_package(xxhash REQUIRED)")
target_link_libraries(libtenzir PUBLIC xxhash::xxhash_header_only)
dependency_summary("xxHash" xxhash::xxhash_header_only "Dependencies")

# Link against libsystemd.
if (TENZIR_ENABLE_JOURNALD_LOGGING)
  find_package(systemd REQUIRED)
  target_link_libraries(libtenzir PRIVATE systemd::systemd)
  dependency_summary("libsystemd" systemd::systemd "Dependencies")
endif ()

# Link against fmt.
find_package(fmt 7.1.3 REQUIRED)
string(APPEND TENZIR_FIND_DEPENDENCY_LIST "\nfind_package(fmt 7.1.3 REQUIRED)")
target_link_libraries(libtenzir PUBLIC fmt::fmt)
dependency_summary("fmt" fmt::fmt "Dependencies")

target_compile_definitions(libtenzir PUBLIC SPDLOG_FMT_EXTERNAL)
find_package(spdlog 1.5.0 REQUIRED)
string(APPEND TENZIR_FIND_DEPENDENCY_LIST
       "\nfind_package(spdlog 1.5.0 REQUIRED)")
target_link_libraries(libtenzir PUBLIC spdlog::spdlog)
dependency_summary("spdlog" spdlog::spdlog "Dependencies")

# Link against simdjson
option(TENZIR_ENABLE_BUNDLED_SIMDJSON "Use the simdjson submodule" OFF)
add_feature_info("TENZIR_ENABLE_BUNDLED_SIMDJSON"
                 TENZIR_ENABLE_BUNDLED_SIMDJSON "use the simdjson submodule.")

unset(_tenzir_bundled_simdjson)
if (NOT TENZIR_ENABLE_BUNDLED_SIMDJSON)
  find_package(simdjson QUIET)
  if (simdjson_FOUND AND simdjson_VERSION VERSION_LESS 3.1)
    message(FATAL_ERROR "simdjson >= 3.1 required; found ${simdjson_VERSION}")
  endif ()
  dependency_summary("simdjson" simdjson::simdjson "Dependencies")
endif ()
if (NOT simdjson_FOUND)
  if (NOT EXISTS "${CMAKE_CURRENT_SOURCE_DIR}/aux/simdjson/CMakeLists.txt")
    message(
      FATAL_ERROR
        "simdjson library not found. Initialize the libtenzir/aux/simdjson submodule"
    )
  endif ()
  # This parallelizes lookahead for structure validation in one additional
  # thread, which is generally a good thing to have.
  set(SIMDJSON_ENABLE_THREADS
      ON
      CACHE BOOL "")
  set(SIMDJSON_GOOGLE_BENCHMARKS
      OFF
      CACHE BOOL "")
  set(SIMDJSON_COMPETITION
      OFF
      CACHE BOOL "")
  set(SIMDJSON_ALLOW_DOWNLOADS
      OFF
      CACHE BOOL "")
  set(SIMDJSON_ENABLE_FUZZING
      OFF
      CACHE BOOL "")
  set(SIMDJSON_ENABLE_DEVELOPER_MODE
      OFF
      CACHE BOOL "")
  add_subdirectory(aux/simdjson)
  set(_tenzir_bundled_simdjson "simdjson")
  add_custom_target(
    simdjson-targets-link
    COMMAND
      "${CMAKE_COMMAND}" -E create_symlink
      "${CMAKE_CURRENT_BINARY_DIR}/simdjsonTargets.cmake"
      "${CMAKE_BINARY_DIR}/simdjsonTargets.cmake"
    COMMENT "Linking simdjson targets")
  TenzirSystemizeTarget(simdjson)
  add_dependencies(simdjson simdjson-targets-link)
  dependency_summary("simdjson" "${CMAKE_CURRENT_SOURCE_DIR}/aux/simdjson"
                     "Dependencies")
endif ()
target_link_libraries(libtenzir PUBLIC simdjson::simdjson)
string(APPEND TENZIR_FIND_DEPENDENCY_LIST "\nfind_package(simdjson REQUIRED)")

# Link against robin-map.
target_link_libraries(libtenzir PUBLIC tsl::robin_map)
# This is broken for the bundled robin-map, so we special-case it above.
# dependency_summary("robin-map" tsl::robin_map "Dependencies")

# Link against Apache Arrow.
target_link_libraries(libtenzir PUBLIC ${ARROW_LIBRARY})
dependency_summary("Apache Arrow" ${ARROW_LIBRARY} "Dependencies")

# Link against Boost.
target_link_libraries(libtenzir PUBLIC Boost::headers Boost::filesystem)
string(APPEND TENZIR_FIND_DEPENDENCY_LIST
       "\nfind_package(Boost REQUIRED COMPONENTS headers filesystem)")
dependency_summary("Boost" Boost::headers "Dependencies")

# Link against re2.
target_link_libraries(libtenzir PRIVATE re2::re2)
dependency_summary("re2" re2::re2 "Dependencies")

# Link against fast_float
option(TENZIR_ENABLE_BUNDLED_FASTFLOAT "Use the fast_float submodule" OFF)
add_feature_info(
  "TENZIR_ENABLE_BUNDLED_FASTFLOAT" TENZIR_ENABLE_BUNDLED_FASTFLOAT
  "use the fast_float submodule.")
if (NOT TENZIR_ENABLE_BUNDLED_FASTFLOAT)
  find_package(FastFloat 3.4.0 CONFIG)
endif ()
if (NOT FastFloat_FOUND)
  # Use bundled fast_float.
  if (NOT EXISTS "${CMAKE_CURRENT_SOURCE_DIR}/aux/fast_float/CMakeLists.txt")
    message(
      FATAL_ERROR
        "fast_float library not found, either use -FastFloat_DIR=... or"
        " initialize the libtenzir/aux/fast_float submodule")
  endif ()
  add_subdirectory(aux/fast_float)
  add_library(FastFloat::fast_float ALIAS fast_float)
  dependency_summary("fast_float" "${CMAKE_CURRENT_SOURCE_DIR}/aux/fast_float"
                     "Dependencies")
else ()
  dependency_summary("fast_float" FastFloat::fast_float "Dependencies")
endif ()
target_link_libraries(libtenzir PRIVATE FastFloat::fast_float)

# Link against a backtrace library.
option(TENZIR_ENABLE_BACKTRACE "Print a backtrace on unexpected termination" ON)
add_feature_info("TENZIR_ENABLE_BACKTRACE" TENZIR_ENABLE_BACKTRACE
                 "print a backtrace on unexpected termination.")
unset(TENZIR_ENABLE_LIBUNWIND)
unset(TENZIR_ENABLE_LIBBACKTRACE)
if (TENZIR_ENABLE_BACKTRACE)
  find_package(libunwind)
  if (libunwind_FOUND)
    target_link_libraries(libtenzir PRIVATE unwind::unwind)
    dependency_summary("libunwind" unwind::unwind "Dependencies")
    set(TENZIR_ENABLE_LIBUNWIND ON)
  else ()
    find_package(Backtrace)
    if (Backtrace_FOUND)
      target_include_directories(libtenzir
                                 PRIVATE ${Backtrace_INCLUDE_DIRECTORIES})
      target_link_libraries(libtenzir PRIVATE ${Backtrace_LIBRARIES})
      if ("${Backtrace_HEADER}" STREQUAL "backtrace.h")
        dependency_summary("libbacktrace" "${Backtrace_INCLUDE_DIR}"
                           "Dependencies")
        set(TENZIR_ENABLE_LIBBACKTRACE ON)
      elseif ("${Backtrace_HEADER}" STREQUAL "execinfo.h")
        dependency_summary("libexecinfo" "${Backtrace_INCLUDE_DIR}"
                           "Dependencies")
        set(TENZIR_ENABLE_LIBEXECINFO ON)
      else ()
        message(
          FATAL_ERROR "Found unexpected backtrace header ${Backtrace_HEADER}")
      endif ()
    endif ()
  endif ()
endif ()

# Configure options-dependent code files.
if (TENZIR_ENABLE_RELOCATABLE_INSTALLATIONS)
  configure_file(
    "${CMAKE_CURRENT_SOURCE_DIR}/src/detail/installdirs_relocatable.cpp.in"
    "${CMAKE_CURRENT_BINARY_DIR}/src/detail/installdirs.cpp" @ONLY)
else ()
  configure_file("${CMAKE_CURRENT_SOURCE_DIR}/src/detail/installdirs.cpp.in"
                 "${CMAKE_CURRENT_BINARY_DIR}/src/detail/installdirs.cpp" @ONLY)
endif ()

configure_file("${CMAKE_CURRENT_SOURCE_DIR}/include/tenzir/config.hpp.in"
               "${CMAKE_CURRENT_BINARY_DIR}/include/tenzir/config.hpp")

if (CMAKE_BUILD_TYPE)
  set(TENZIR_BUILD_TYPE "${CMAKE_BUILD_TYPE}")
elseif (CMAKE_CONFIGURATION_TYPES)
  list(JOIN CMAKE_CONFIGURATION_TYPES " " TENZIR_BUILD_TYPE)
  string(PREPEND TENZIR_BUILD_TYPE "Multi-Config: ")
else ()
  message(FATAL_ERROR "Failed to detect build or configuration types")
endif ()

file(
  WRITE "${CMAKE_CURRENT_BINARY_DIR}/update-config.cmake"
  "\
  get_filename_component(CMAKE_MODULE_PATH
    \"${CMAKE_CURRENT_SOURCE_DIR}/../cmake\" ABSOLUTE)
  set(TENZIR_VERSION_TAG \"${TENZIR_VERSION_TAG_BACKUP}\")
  set(TENZIR_BUILD_TYPE \"${TENZIR_BUILD_TYPE}\")
  set(TENZIR_ENABLE_ASSERTIONS \"${TENZIR_ENABLE_ASSERTIONS}\")
  set(TENZIR_ENABLE_ASAN \"${TENZIR_ENABLE_ASAN}\")
  set(TENZIR_ENABLE_UBSAN \"${TENZIR_ENABLE_UBSAN}\")
  include(TenzirVersion)
  configure_file(\"${CMAKE_CURRENT_SOURCE_DIR}/src/config.cpp.in\"
                 \"${CMAKE_CURRENT_BINARY_DIR}/src/config.cpp\")")

# We generate config.cpp as a byproduct of a custom target so we can re-generate
# the version string and build tree hash on every build. Note that this must not
# be added to the ALL target. The dependency is inferred from the byproduct
# automatically.
add_custom_target(
  libtenzir_update_config
  BYPRODUCTS "${CMAKE_CURRENT_BINARY_DIR}/src/config.cpp"
  COMMAND ${CMAKE_COMMAND} -P "${CMAKE_CURRENT_BINARY_DIR}/update-config.cmake")

target_sources(
  libtenzir
  PRIVATE "${CMAKE_CURRENT_BINARY_DIR}/include/tenzir/config.hpp"
          "${CMAKE_CURRENT_BINARY_DIR}/src/config.cpp"
          "${CMAKE_CURRENT_BINARY_DIR}/src/detail/installdirs.cpp")

# TODO: Should we move the bundled schemas to libtenzir?
if (TARGET tenzir-schema)
  add_dependencies(libtenzir tenzir-schema)
endif ()

# Install libtenzir in PREFIX/lib and headers in PREFIX/include/tenzir. We also
# install the static libtenzir_builtins archive for development targets because
# the plugin unit test binaries need to be able to link against it.
install(
  TARGETS libtenzir libtenzir_builtins ${_tenzir_bundled_simdjson}
  EXPORT TenzirTargets
  ARCHIVE DESTINATION "${CMAKE_INSTALL_LIBDIR}" COMPONENT Development
  LIBRARY DESTINATION "${CMAKE_INSTALL_LIBDIR}" COMPONENT Runtime
  RUNTIME DESTINATION "${CMAKE_INSTALL_BINDIR}" COMPONENT Runtime)

install(
  DIRECTORY include/tenzir
  COMPONENT Development
  DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}"
  FILES_MATCHING
  PATTERN "*.hpp")

# Install generated config headers.
install(
  DIRECTORY "${CMAKE_CURRENT_BINARY_DIR}/include/tenzir"
  COMPONENT Development
  DESTINATION "${CMAKE_INSTALL_INCLUDEDIR}"
  FILES_MATCHING
  PATTERN "*.hpp")

add_subdirectory(test)

set(TENZIR_FIND_DEPENDENCY_LIST
    "${TENZIR_FIND_DEPENDENCY_LIST}"
    PARENT_SCOPE)
set(TENZIR_EXTRA_TARGETS_FILES
    "${TENZIR_EXTRA_TARGETS_FILES}"
    PARENT_SCOPE)