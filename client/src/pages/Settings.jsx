import PageWrapper from "../components/layout/PageWrapper";

export default function Settings() {
  return (
    <PageWrapper>
      {/* Page Header */}
      <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 tracking-wide">
          Settings
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Configure system preferences and manage options
        </p>
      </header>

      {/* Settings Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in delay-100">
        {/* Placeholder cards for different settings */}
        {["System Configuration", "User Management", "Notifications"].map((setting, i) => (
          <div
            key={i}
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
              p-6
              flex
              flex-col
              gap-3
              transition-all
              duration-300
              hover:-translate-y-1.5
              hover:shadow-2xl
              hover:bg-gradient-to-br
              hover:from-indigo-100
              hover:via-purple-100
              hover:to-sky-100
            "
          >
            <h3 className="text-indigo-600 font-semibold text-lg">
              {setting}
            </h3>
            <p className="text-gray-500 text-sm">
              This is a placeholder for {setting.toLowerCase()} options.
            </p>
          </div>
        ))}
      </section>

      {/* Footer hint */}
      <p className="text-gray-400 text-xs text-center mt-6 italic animate-fade-in delay-200">
        Hover over each card for more options and settings details.
      </p>
    </PageWrapper>
  );
}