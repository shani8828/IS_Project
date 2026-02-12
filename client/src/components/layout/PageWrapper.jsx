// src/components/layout/PageWrapper.jsx
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function PageWrapper({ children }) {
  return (
    <div
      className="
        min-h-screen
        w-full
        bg-gradient-to-br
        from-gray-50
        via-sky-50
        to-indigo-50
      "
    >
      {/* top navigation */}
      <Navbar />

      {/* main layout */}
      <div
        className="
          flex
          w-full
          max-w-[1600px]
          mx-auto
        "
      >
        {/* sidebar */}
        <div
          className="
            shrink-0
            transition-all
            duration-300
            ease-in-out
          "
        >
          <Sidebar />
        </div>

        {/* content area */}
        <main
          className="
            flex-1
            px-4
            sm:px-6
            lg:px-8
            py-6
            transition-all
            duration-300
            ease-in-out
          "
        >
          <div
            className="
              h-full
              rounded-2xl
              bg-white/70
              backdrop-blur-xl
              border
              border-gray-200/40
              shadow-[0_20px_60px_-20px_rgba(79,70,229,0.25)]
              p-4
              sm:p-6
              lg:p-8
              animate-fade-in
            "
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}