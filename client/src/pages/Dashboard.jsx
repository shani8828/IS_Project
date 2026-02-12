import PageWrapper from "../components/layout/PageWrapper";
import LiveStats from "../components/dashboard/LiveStats";
import CameraGrid from "../components/dashboard/CameraGrid";
import EventTimeline from "../components/dashboard/EventTimeline";
import { useLiveStats } from "../hooks/useLiveStats";
import KnownPeople from "./KnownPeople";

export default function Dashboard() {
  const { totalKnown, totalUnknown } = useLiveStats();
  return (
    <PageWrapper>
      {/* Page Header */}
      <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 tracking-wide">
          Dashboard
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Overview of cameras, live stats, and recent events
        </p>
      </header>

      {/* Live Stats */}
      <section className="mb-8 animate-fade-in">
        <LiveStats />
      </section>
      {/* <div style={{ padding: 24 }}>
        <h2>Live Manpower Count</h2>

        <div style={{ marginTop: 20 }}>
          <h3>Known People: {totalKnown}</h3>
          <h3>Unknown People: {totalUnknown}</h3>
        </div>
      </div> */}
      {/* Camera Grid */}
      <section className="mb-8 animate-fade-in delay-100">
        <CameraGrid />
        {/* <KnownPeople/> */}
      </section>

      {/* Event Timeline */}
      <section className="animate-fade-in delay-200">
        <EventTimeline />
      </section>
    </PageWrapper>
  );
}
