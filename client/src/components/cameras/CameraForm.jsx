export default function CameraForm() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div
        className="
          relative
          w-full
          max-w-xl
          rounded-3xl
          p-8
          bg-gradient-to-br
          from-indigo-500/10
          via-purple-500/10
          to-sky-500/10
          backdrop-blur-xl
          border
          border-gray-200/30
          shadow-xl
          transition-all
          duration-700
          ease-out
          hover:shadow-2xl
          hover:shadow-indigo-500/30
        "
      >
        {/* ambient glow */}
        <div
          className="
            absolute
            -inset-1
            rounded-3xl
            bg-gradient-to-r
            from-blue-500/20
            via-indigo-500/20
            to-purple-500/20
            blur-2xl
            opacity-60
            -z-10
          "
        />

        {/* header */}
        <div className="mb-6 text-center">
          <h2
            className="
              text-2xl
              font-semibold
              text-indigo-600
              tracking-wide
            "
          >
            Add New Camera
          </h2>

          <p
            className="
              mt-2
              text-sm
              text-gray-500
            "
          >
            Configure and register a new camera into the system
          </p>

          <div
            className="
              mx-auto
              mt-4
              h-1
              w-16
              rounded-full
              bg-gradient-to-r
              from-blue-500
              via-sky-500
              to-purple-500
            "
          />
        </div>

        {/* placeholder body */}
        <div
          className="
            flex
            items-center
            justify-center
            rounded-2xl
            border
            border-dashed
            border-indigo-300/40
            bg-white/40
            py-16
            text-center
            transition-all
            duration-500
            hover:bg-white/60
          "
        >
          <span
            className="
              text-sm
              font-medium
              text-indigo-500
              tracking-wide
            "
          >
            Add Camera Form (placeholder)
          </span>
        </div>
      </div>
    </div>
  );
}