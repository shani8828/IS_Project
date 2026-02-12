// src/components/dashboard/LiveStats.jsx
import CountCard from "./CountCard";

export default function LiveStats() {
  const stats = {
    total: 124,
    known: 38,
    unknown: 86,
  };

  return (
    <div
      className="
        relative
        mb-8
        rounded-3xl
        p-6
        bg-gradient-to-br
        from-indigo-500/5
        via-purple-500/5
        to-sky-500/5
        backdrop-blur-xl
        border
        border-gray-200/30
      "
    >
      {/* section header */}
      <div className="mb-5 flex items-center justify-between">
        <h2
          className="
            text-xl
            font-semibold
            tracking-wide
            text-indigo-600
          "
        >
          Live Statistics
        </h2>

        <span
          className="
            text-xs
            font-medium
            text-gray-500
          "
        >
          Real-time overview
        </span>
      </div>

      {/* stats grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        "
      >
        <CountCard title="Total Count" count={stats.total} />
        <CountCard title="Known People" count={stats.known} />
        <CountCard title="Unknown People" count={stats.unknown} />
      </div>
    </div>
  );
}