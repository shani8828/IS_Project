export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        group
        relative
        inline-flex
        items-center
        justify-center
        px-5
        py-2.5
        rounded-xl
        font-medium
        tracking-wide
        text-white
        bg-gradient-to-r
        from-indigo-600
        via-purple-600
        to-sky-600
        shadow-md
        shadow-indigo-500/30
        transition-all
        duration-300
        ease-out
        hover:-translate-y-0.5
        hover:shadow-xl
        hover:shadow-indigo-500/40
        active:translate-y-0
        active:shadow-sm
        focus:outline-none
        focus:ring-2
        focus:ring-indigo-400/50
        focus:ring-offset-2
        focus:ring-offset-gray-100
      "
    >
      {/* glow layer */}
      <span
        className="
          absolute
          inset-0
          rounded-xl
          bg-gradient-to-r
          from-blue-500/30
          via-indigo-500/30
          to-purple-500/30
          opacity-0
          blur-xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* label */}
      <span className="relative z-10">
        {label}
      </span>
    </button>
  );
}