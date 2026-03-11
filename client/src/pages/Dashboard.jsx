import PageWrapper from "../components/layout/PageWrapper";
import LiveStats from "../components/dashboard/LiveStats";
import CameraGrid from "../components/dashboard/CameraGrid";
import EventTimeline from "../components/dashboard/EventTimeline";
import ConnectionStatus from "../components/dashboard/ConnectionStatus";

export default function Dashboard() {
  return (
    <PageWrapper>
      <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 tracking-wide">Dashboard</h2>
          <p className="text-gray-500 text-sm sm:text-base">Overview of cameras, live stats, and recent events</p>
        </div>
        <ConnectionStatus/>
      </header>

      <section className="mb-8 animate-fade-in">
        <LiveStats />
      </section>

      <section className="mb-8 animate-fade-in delay-100">
        <CameraGrid />
      </section>

      {/* <section className="animate-fade-in delay-200">
        <EventTimeline />
      </section> */}
    </PageWrapper>
  );
}