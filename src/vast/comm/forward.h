#ifndef VAST_COMM_FORWARD_H
#define VAST_COMM_FORWARD_H

#include <functional>
#include <memory>
#include <ze/forward.h>

namespace vast {
namespace comm {

class connection;
typedef std::shared_ptr<connection> connection_ptr;
typedef std::function<void(connection_ptr const&)> conn_handler;

class event_source;

typedef std::function<void(ze::event_ptr&& event)> event_ptr_handler;
typedef std::function<void(ze::event&& event)> event_handler;

} // namespace comm
} // namespace vast

#endif
