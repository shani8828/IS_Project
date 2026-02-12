// src/components/dashboard/CountCard.jsx
export default function CountCard({ title, count }) {
  return (
    <div
      className="
        group
        relative
        min-w-[160px]
        rounded-2xl
        p-6
        bg-gradient-to-br
        from-indigo-500/10
        via-purple-500/10
        to-sky-500/10
        backdrop-blur-xl
        border
        border-gray-200/30
        shadow-lg
        transition-all
        duration-500
        ease-out
        hover:-translate-y-1.5
        hover:shadow-2xl
        hover:shadow-indigo-500/30
      "
    >
      {/* ambient glow */}
      <div
        className="
          absolute
          inset-0
          rounded-2xl
          bg-gradient-to-r
          from-blue-500/20
          via-indigo-500/20
          to-purple-500/20
          opacity-0
          blur-2xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* content */}
      <div className="relative z-10">
        <h4
          className="
            text-sm
            font-medium
            tracking-wide
            text-gray-500
            uppercase
          "
        >
          {title}
        </h4>

        <h1
          className="
            mt-3
            text-4xl
            font-bold
            leading-none
            bg-gradient-to-r
            from-indigo-600
            via-purple-600
            to-sky-600
            bg-clip-text
            text-transparent
            transition-transform
            duration-300
            group-hover:scale-[1.03]
          "
        >
          {count}
        </h1>
      </div>
    </div>
  );
}