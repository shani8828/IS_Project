import useLiveCounts from "../hooks/useLiveCounts";
import CounterCard from "../components/dashboard/CounterCard";

export default function Dashboard1() {
  const { known, unknown, total } = useLiveCounts();

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-semibold mb-8">
        Manpower Dashboard
      </h1>

      <div className="flex gap-6">
        <CounterCard title="Known People" value={known} />
        <CounterCard title="Unknown People" value={unknown} />
        <CounterCard title="Total Count" value={total} />
      </div>
    </div>
  );
}