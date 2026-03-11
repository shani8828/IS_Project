import { useLiveStats } from "../../hooks/useLiveStats";

export default function ConnectionStatus() {
  const { isConnected } = useLiveStats();

  return (
    <div className={`
      flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold transition-all duration-500
      ${isConnected 
        ? "bg-green-500/10 border-green-500/50 text-green-600" 
        : "bg-red-500/10 border-red-500/50 text-red-600 animate-pulse"}
    `}>
      <span className={`h-2 w-2 rounded-full ${isConnected ? "bg-green-500" : "bg-red-500"}`} />
      {isConnected ? "LIVE" : "DISCONNECTED"}
    </div>
  );
}