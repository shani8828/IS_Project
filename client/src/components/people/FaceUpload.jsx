export default function FaceUpload() {
  return (
    <div
      className="
        max-w-md
        mx-auto
        mt-6
        p-6
        rounded-2xl
        bg-gradient-to-br
        from-indigo-50
        via-purple-50
        to-sky-50
        backdrop-blur-xl
        border
        border-gray-200/30
        shadow-lg
        flex
        flex-col
        items-center
        justify-center
        gap-4
        transition-transform
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      "
    >
      {/* upload icon & label */}
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          gap-2
        "
      >
        <svg
          className="w-10 h-10 text-indigo-400 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12v9M12 12l3-3m-3 3l-3-3M12 3v9"
          />
        </svg>
        <p className="text-gray-500 text-sm">
          Upload face image
        </p>
      </div>

      {/* actual file input */}
      <label
        className="
          cursor-pointer
          inline-block
          px-5
          py-2.5
          rounded-xl
          bg-gradient-to-r
          from-indigo-500
          via-purple-500
          to-sky-500
          text-white
          font-medium
          text-sm
          transition-all
          duration-300
          hover:shadow-lg
          hover:scale-105
        "
      >
        Choose File
        <input type="file" className="hidden" />
      </label>

      {/* hint text */}
      <p className="text-gray-400 text-xs text-center">
        Accepted formats: JPG, PNG. Max size: 5MB.
      </p>
    </div>
  );
}