import CountCard from "./CountCard";
import { useLiveStats } from "../../hooks/useLiveStats";

export default function LiveStats() {
  const { totalKnown, totalUnknown, totalCount } = useLiveStats();

  return (
    <div className="relative mb-8 rounded-3xl p-6 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-sky-500/5 backdrop-blur-xl border border-gray-200/30">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-wide text-indigo-600">Live Statistics</h2>
        <span className="flex items-center gap-2 text-xs font-medium text-gray-500">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          Real-time overview
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CountCard title="Total Count" count={totalCount} />
        <CountCard title="Known People" count={totalKnown} />
        <CountCard title="Unknown People" count={totalUnknown} />
      </div>
    </div>
  );
}