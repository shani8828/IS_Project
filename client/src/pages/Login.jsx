export default function Login() {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-indigo-50
        via-purple-50
        to-sky-50
        p-4
      "
    >
      {/* Login card */}
      <div
        className="
          w-full
          max-w-md
          bg-white/80
          backdrop-blur-xl
          rounded-3xl
          shadow-2xl
          p-8
          flex
          flex-col
          items-center
          gap-6
          animate-fade-in
          transition-all
          duration-500
          hover:scale-105
        "
      >
        {/* Logo / Icon */}
        <div
          className="
            w-20
            h-20
            rounded-full
            bg-gradient-to-tr
            from-indigo-500
            via-purple-500
            to-sky-400
            flex
            items-center
            justify-center
            text-white
            text-3xl
            font-bold
            shadow-lg
            animate-bounce
          "
        >
          🔒
        </div>

        {/* Page Title */}
        <h2 className="text-indigo-700 text-2xl sm:text-3xl font-bold tracking-wide text-center">
          Welcome Back
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm text-center">
          Login to access the Lobby Monitoring System
        </p>

        {/* Mock login button */}
        <button
          className="
            w-full
            py-3
            rounded-xl
            bg-gradient-to-r
            from-indigo-500
            via-purple-500
            to-sky-500
            text-white
            font-semibold
            text-lg
            shadow-md
            transition-all
            duration-300
            hover:shadow-xl
            hover:scale-105
          "
        >
          Login (Mock)
        </button>

        {/* Footer hint */}
        <p className="text-gray-400 text-xs text-center italic mt-2">
          This is a placeholder login page. Real authentication will be added later.
        </p>
      </div>
    </div>
  );
}