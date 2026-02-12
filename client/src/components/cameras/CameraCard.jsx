export default function CameraCard({ camera }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        p-5
        bg-gradient-to-br
        from-indigo-500/10
        via-purple-500/10
        to-sky-500/10
        backdrop-blur-xl
        border
        border-gray-200/20
        shadow-lg
        transition-all
        duration-500
        ease-out
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-indigo-500/30
      "
    >
      {/* soft animated glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-blue-500/20
          via-purple-500/20
          to-sky-500/20
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-700
          blur-2xl
        "
      />

      {/* content */}
      <div className="relative z-10">
        <h3
          className="
            text-lg
            font-semibold
            text-indigo-600
            tracking-wide
            transition-colors
            duration-300
            group-hover:text-purple-600
          "
        >
          {camera.name}
        </h3>

        <div
          className="
            mt-2
            h-1
            w-12
            rounded-full
            bg-gradient-to-r
            from-blue-500
            via-sky-500
            to-purple-500
            transition-all
            duration-500
            group-hover:w-20
          "
        />
      </div>
    </div>
  );
}