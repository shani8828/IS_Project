// src/components/layout/Navbar.jsx
export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-40
        w-full
        backdrop-blur-xl
        bg-gradient-to-r
        from-indigo-600/10
        via-purple-600/10
        to-sky-500/10
        border-b
        border-gray-200/30
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >
        {/* brand */}
        <div
          className="
            text-lg
            sm:text-xl
            font-semibold
            tracking-wide
            bg-gradient-to-r
            from-indigo-600
            via-purple-600
            to-sky-600
            bg-clip-text
            text-transparent
            transition-all
            duration-300
            hover:opacity-90
          "
        >
          Lobby Monitoring System
        </div>

        {/* subtle accent */}
        <div
          className="
            hidden
            sm:block
            h-2
            w-24
            rounded-full
            bg-gradient-to-r
            from-blue-500/40
            via-indigo-500/40
            to-purple-500/40
          "
        />
      </div>
    </header>
  );
}