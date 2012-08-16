#include "vast/logger.h"

#include <iomanip>
#include <thread>
#include <chrono>

namespace vast {

// The global logger instance.
logger* LOGGER = nullptr;

static char const* const facilities[] =
{
  "core",
  "broccoli",
  "comm",
  "meta",
  "query",
  "ingest",
  "emit",
  "archive",
  "index"
};

/// Computes the number of characters that align the facility string with the
/// largest facility string.
// FIXME: compute at compile time.
size_t pad(logger::facility f)
{
  static size_t const max_len = 8ul;
  typedef std::underlying_type<logger::facility>::type underlying;
  auto str = facilities[static_cast<underlying>(f)];
  return max_len - std::strlen(str) + 1;
}

static char const* const levels[] =
{
  "quiet",
  "fatal",
  "error",
  "warning",
  "info",
  "verbose",
  "debug"
};

logger::sink::sink(level lvl, std::ostream& out)
  : level_(lvl)
  , out_(out)
{
}

bool logger::sink::takes(level lvl)
{
  return lvl <= level_;
}

logger::file_sink::file_sink(level lvl, fs::path file)
  : sink(lvl, file_)
  , file_(file, std::ios::app)
{
}

logger::file_sink::~file_sink()
{
  if (file_.good())
    file_ << std::endl;
}

logger::record::record(logger& log, level lvl, facility fac)
  : logger_(log)
  , level_(lvl)
{
  stream_
    << std::chrono::system_clock::now().time_since_epoch().count()
    << " " << '[';
  
  stream_ 
    << std::setw(14) 
    << std::this_thread::get_id();

  stream_ 
    << '|' << fac << ']' 
    << std::setfill(' ') << std::setw(pad(fac)) << ' ';
}

logger::record::~record()
{
  logger_.write(*this);
}

void logger::init(level console_verbosity,
                  level logfile_verbosity,
                  fs::path const& logfile)
{
  LOGGER = new logger(console_verbosity, logfile_verbosity, logfile);
}

logger* logger::get()
{
  return LOGGER;
}

bool logger::takes(level lvl)
{
  return console_.takes(lvl) || logfile_.takes(lvl);
}

void logger::write(record const& rec)
{
  if (console_.takes(rec.level_))
    console_.write(rec.stream_.rdbuf());

  if (logfile_.takes(rec.level_))
    logfile_.write(rec.stream_.str());
}

logger::logger(level console_verbosity,
               level logfile_verbosity,
               fs::path const& logfile)
  : console_(console_verbosity, std::cerr)
  , logfile_(logfile_verbosity, logfile)
{
}

std::ostream& logger::console() const
{
  return console_.out_;
}

bool operator<(logger::level x, logger::level y)
{
  typedef std::underlying_type<logger::level>::type underlying;
  return static_cast<underlying>(x) < static_cast<underlying>(y);
}

bool operator<=(logger::level x, logger::level y)
{
  return ! (y < x);
}

bool operator>=(logger::level x, logger::level y)
{
  return ! (x < y);
}

bool operator>(logger::level x, logger::level y)
{
  return y < x;
}

std::ostream& operator<<(std::ostream& out, logger::facility f)
{
  typedef std::underlying_type<logger::facility>::type underlying;
  out << facilities[static_cast<underlying>(f)];
  return out;
}

std::ostream& operator<<(std::ostream& out, logger::level l)
{
  typedef std::underlying_type<logger::level>::type underlying;
  out << levels[static_cast<underlying>(l)];
  return out;
}

} // namespace vast
