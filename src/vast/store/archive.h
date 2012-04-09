#ifndef VAST_STORE_ARCHIVE_H
#define VAST_STORE_ARCHIVE_H

#include <memory>
#include <ze/uuid.h>
#include "vast/fs/path.h"
#include "vast/comm/forward.h"
#include "vast/store/forward.h"
#include "vast/store/emitter.h"
#include "vast/store/segment_cache.h"
#include "vast/store/segmentizer.h"

namespace vast {
namespace store {

/// The event archive. It stores events in the form of segments.
class archive : public ze::component
{
    archive(archive const&) = delete;
    archive& operator=(archive const&) = delete;

public:
    /// Constructs the archive.
    ///
    /// @param io A reference to the 0event I/O object.
    ///
    /// @param ingestor_source The event soure of the ingestor.
    ///
    /// @todo The archive should actually not receive a reference to the
    /// ingestor_source, but rather a string endpoint description of the
    /// ingestor, since the ingestor will run as a separate component and
    /// potentially not in the same address space.
    archive(ze::io& io, comm::event_source& ingestor_source);

    /// Initializes the archive.
    /// @param directory The root directory of the archive.
    /// @param max_events_per_chunk The maximum number of events per chunk.
    /// @param max_segment_size The maximum segment size in bytes.
    /// @param max_segments The maximum number of segments to keep in memory.
    void init(fs::path const& directory,
              size_t max_events_per_chunk,
              size_t max_segment_size,
              size_t max_segments);

    /// Signals the archive to finish outstanding operations.
    void stop();

    /// Creates an event emitter for a specific set of segments.
    ///
    /// @param i The time interval to restrict the search to.
    ///
    /// @param names An optional list of event names that further refine the
    /// search.
    ///
    /// @return An emitter that can be used to stream the matching segments to
    /// an arbitrary sink.
    // TODO: implement a basic index and support time plus event-based
    // filtering.
    //emitter get(time_interval i, std::vector<std::string> events = {});
    std::unique_ptr<emitter> get();

private:
    /// Scans through a directory for segments and records their path.
    /// @param directory The directory to scan.
    void scan(fs::path const& directory);

    /// Processes a rotated output segment from the writer.
    void on_rotate(ze::intrusive_ptr<osegment> os);

    /// Loads a segment into memory after a cache miss.
    std::shared_ptr<isegment> load(ze::uuid id);

    fs::path archive_root_;
    std::unordered_map<ze::uuid, fs::path> segments_;
    std::shared_ptr<segment_cache> cache_;

    segmentizer segmentizer_;
    ze::core_sink<osegment> writer_;
};

} // namespace store
} // namespace vast

#endif
