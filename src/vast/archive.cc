#include "vast/archive.h"

#include <ze/event.h>
#include "vast/exception.h"
#include "vast/logger.h"
#include "vast/segment.h"
#include "vast/segment_manager.h"
#include "vast/fs/operations.h"

namespace vast {

archive::archive(std::string const& directory, size_t max_segments)
{
  LOG(verbose, archive) << "spawning archive @" << id();
  using namespace cppa;
  init_state = (
      on(atom("load")) >> [=]
      {
        if (! fs::exists(directory))
        {
          LOG(info, archive)
            << "archive @" << id() << " creates new directory " << directory;
          fs::mkdir(directory);
        }
        segment_manager_ = spawn<segment_manager>(max_segments, directory);
        forward_to(segment_manager_);
      },
      on(atom("get"), atom("ids")) >> [=]
      {
        forward_to(segment_manager_);
      },
      on(atom("get"), arg_match) >> [=](ze::uuid const& /* id */)
      {
        forward_to(segment_manager_);
      },
      on(atom("put"), arg_match) >> [=](segment const& /* s */)
      {
        forward_to(segment_manager_);
      },
      on(atom("shutdown")) >> [=]()
      {
        // TODO: wait for a signal from the ingestor that all segments have
        // been shipped.
        segment_manager_ << last_dequeued();

        quit();
        LOG(verbose, archive) << "archive @" << id() << " terminated";
      });
}

} // namespace vast
