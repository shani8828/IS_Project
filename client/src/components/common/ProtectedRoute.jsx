export default function ProtectedRoute({ children }) {
  return (
    <div
      className="
        relative
        min-h-screen
        w-full
        bg-gradient-to-br
        from-gray-50
        via-sky-50
        to-indigo-50
        transition-colors
        duration-500
        ease-out
      "
    >
      {/* ambient background wash */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-tr
          from-indigo-500/5
          via-purple-500/5
          to-sky-500/5
        "
      />

      {/* content container */}
      <div
        className="
          relative
          z-10
          animate-[fadeIn_0.3s_ease-out]
        "
      >
        {children}
      </div>
    </div>
  );
}