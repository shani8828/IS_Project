// src/components/layout/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation(); // get current path
  const currentPath = location.pathname;

  return (
    <aside
      className="
        h-[calc(100vh-64px)]
        w-56
        sticky
        top-16
        bg-white/70
        backdrop-blur-xl
        border-r
        border-gray-200/50
        shadow-[10px_0_40px_-20px_rgba(79,70,229,0.25)]
        px-3
        py-6
        flex
        flex-col
        gap-1
        transition-all
        duration-300
      "
    >
      <div
        className="
          text-xs
          uppercase
          tracking-widest
          text-gray-400
          px-3
          mb-3
        "
      >
        Navigation
      </div>

      <SidebarLink
        to="/dashboard"
        label="Dashboard"
        active={currentPath === "/dashboard"}
      />
      <SidebarLink
        to="/cameras"
        label="Cameras"
        active={currentPath === "/cameras"}
      />
      <SidebarLink
        to="/people"
        label="Known People"
        active={currentPath === "/people"}
      />
      <SidebarLink
        to="/events"
        label="Events"
        active={currentPath === "/events"}
      />
      {/* <SidebarLink to="/settings" label="Settings" /> */}
    </aside>
  );
}

function SidebarLink({ to, label, active }) {
  return (
    <Link
      to={to}
      className={`
        group
        relative
        flex
        items-center
        px-4
        py-2.5
        rounded-xl
        text-sm
        font-medium
        transition-all
        duration-300
        ease-out
        ${
          active
            ? "bg-gradient-to-r from-sky-100 to-indigo-100 text-indigo-700 shadow-sm"
            : "text-gray-700 hover:bg-gradient-to-r hover:from-sky-100 hover:to-indigo-100 hover:text-indigo-700 hover:shadow-sm"
        }
      `}
    >
      {/* accent bar */}
      <span
        className={`
          absolute
          left-0
          top-1/2
          -translate-y-1/2
          h-0
          w-1
          rounded-full
          bg-indigo-500
          transition-all
          duration-300
          ${active ? "h-6" : ""}
        `}
      />

      <span className="relative z-10">{label}</span>
    </Link>
  );
}
