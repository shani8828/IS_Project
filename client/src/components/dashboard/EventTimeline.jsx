import { useLiveStats } from "../../hooks/useLiveStats";

export default function EventTimeline() {
  const { recentEvents } = useLiveStats();

  return (
    <div className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-xl font-semibold tracking-wide text-indigo-600">Recent Events</h3>
        <span className="text-xs font-medium text-gray-500">Last activity</span>
      </div>

      <div className="relative rounded-2xl p-6 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-sky-500/10 backdrop-blur-xl border border-gray-200/30 shadow-lg">
        <div className="absolute left-8 top-6 bottom-6 w-px bg-gradient-to-b from-indigo-400/40 via-purple-400/40 to-sky-400/40" />

        <ul className="space-y-6">
          {recentEvents.length === 0 && (
            <p className="ml-10 text-gray-400 text-sm italic">Waiting for events...</p>
          )}
          {recentEvents.map((e) => (
            <li key={e.event_id} className="group relative flex items-start gap-6 transition-all duration-300 ease-out hover:translate-x-1">
              <div className={`relative z-10 mt-1 h-3 w-3 rounded-full shadow-md ${e.is_known ? 'bg-green-500' : 'bg-red-500'}`} />
              
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-400 tracking-wide">
                  {new Date(e.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </span>
                <p className="text-sm text-gray-600 group-hover:text-indigo-600">
                  {e.is_known ? `Known Person Detected: ${e.person_id}` : `Unknown Person at ${e.camera_id}`}
                </p>
                <span className="text-[10px] text-gray-400 uppercase tracking-tighter">Track ID: {e.track_id}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}