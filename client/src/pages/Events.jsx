import PageWrapper from "../components/layout/PageWrapper";

export default function Events() {
  const events = [
    { time: "10:01", text: "Unknown person entered" },
    { time: "10:03", text: "Known person: John Doe" },
    { time: "10:05", text: "Unknown person entered" },
  ];
  return (
    <PageWrapper>
      {/* Page Header */}
      <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 tracking-wide">
          Events
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Monitor all recent activity and logs
        </p>
      </header>

      {/* Event Logs Placeholder */}
      <section className="grid gap-6">
        {events.map((event, index) => (
          <div
            key={`${event.time}-${index}`}
            className="
              bg-gradient-to-br
              from-indigo-50
              via-purple-50
              to-sky-50
              backdrop-blur-xl
              border
              border-gray-200/30
              rounded-2xl
              shadow-lg
              p-4
              flex
              flex-col
              gap-2
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
              animate-pulse
            "
          >
            <div className="flex justify-between items-center">
              <span className="text-indigo-600 font-semibold text-sm">
                Event #{index + 1}
              </span>
              <span className="text-gray-400 text-xs">Time: {event.time}</span>
            </div>
            <p className="text-gray-500 text-sm">{event.text}</p>
          </div>
        ))}
      </section>

      {/* Footer hint */}
      <p className="text-gray-400 text-xs text-center mt-6 italic animate-fade-in delay-100">
        Events will populate in real-time. Hover for more details.
      </p>
    </PageWrapper>
  );
}
