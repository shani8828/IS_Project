// src/components/dashboard/EventTimeline.jsx
export default function EventTimeline() {
  const events = [
    { time: "10:01", text: "Unknown person entered" },
    { time: "10:03", text: "Known person: John Doe" },
    { time: "10:05", text: "Unknown person entered" },
  ];

  return (
    <div className="mt-10">
      {/* header */}
      <div className="mb-5 flex items-center justify-between">
        <h3
          className="
            text-xl
            font-semibold
            tracking-wide
            text-indigo-600
          "
        >
          Recent Events
        </h3>

        <span
          className="
            text-xs
            font-medium
            text-gray-500
          "
        >
          Last activity
        </span>
      </div>

      {/* timeline */}
      <div
        className="
          relative
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
        "
      >
        {/* vertical line */}
        <div
          className="
            absolute
            left-8
            top-6
            bottom-6
            w-px
            bg-gradient-to-b
            from-indigo-400/40
            via-purple-400/40
            to-sky-400/40
          "
        />

        <ul className="space-y-6">
          {events.map((e, i) => (
            <li
              key={i}
              className="
                group
                relative
                flex
                items-start
                gap-6
                transition-all
                duration-300
                ease-out
                hover:translate-x-1
              "
            >
              {/* dot */}
              <div
                className="
                  relative
                  z-10
                  mt-1
                  h-3
                  w-3
                  rounded-full
                  bg-gradient-to-r
                  from-indigo-500
                  via-purple-500
                  to-sky-500
                  shadow-md
                "
              />

              {/* content */}
              <div className="flex flex-col gap-1">
                <span
                  className="
                    text-xs
                    font-medium
                    text-gray-400
                    tracking-wide
                  "
                >
                  {e.time}
                </span>

                <p
                  className="
                    text-sm
                    text-gray-600
                    transition-colors
                    duration-300
                    group-hover:text-indigo-600
                  "
                >
                  {e.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}