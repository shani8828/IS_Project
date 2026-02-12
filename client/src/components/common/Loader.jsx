export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[40vh] px-4">
      <div
        className="
          relative
          flex
          flex-col
          items-center
          gap-5
          rounded-3xl
          px-8
          py-10
          bg-gradient-to-br
          from-indigo-500/10
          via-purple-500/10
          to-sky-500/10
          backdrop-blur-xl
          border
          border-gray-200/30
          shadow-xl
        "
      >
        {/* spinning ring */}
        <div
          className="
            relative
            h-14
            w-14
            rounded-full
            border-4
            border-gray-300/40
            border-t-indigo-500
            animate-spin
          "
        />

        {/* soft glow */}
        <div
          className="
            absolute
            h-24
            w-24
            rounded-full
            bg-gradient-to-r
            from-blue-500/20
            via-indigo-500/20
            to-purple-500/20
            blur-2xl
            opacity-70
            -z-10
          "
        />

        {/* text */}
        <span
          className="
            text-sm
            font-medium
            tracking-wide
            text-indigo-600
          "
        >
          Loading
        </span>
      </div>
    </div>
  );
}