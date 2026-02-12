export default function Modal({ children }) {
  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        px-4
        bg-gradient-to-br
        from-indigo-900/20
        via-purple-900/20
        to-sky-900/20
        backdrop-blur-sm
      "
    >
      <div
        className="
          relative
          w-full
          max-w-lg
          rounded-3xl
          p-8
          bg-gradient-to-br
          from-white/70
          via-white/60
          to-white/50
          backdrop-blur-xl
          border
          border-gray-200/40
          shadow-2xl
          transition-all
          duration-500
          ease-out
          animate-[fadeIn_0.4s_ease-out]
        "
      >
        {/* soft glow */}
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
            opacity-70
            -z-10
          "
        />

        {/* content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}