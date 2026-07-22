import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

type SidebarItemProps = {
  icon: LucideIcon;
  label: string;
  path: string;
};

export default function SidebarItem({
  icon: Icon,
  label,
  path,
}: SidebarItemProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `
        group
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        transition-all
        duration-200
        ${
          isActive
            ? "bg-slate-800 text-white"
            : "text-slate-400 hover:bg-slate-800/60 hover:text-white"
        }
      `
      }
    >
      {({ isActive }) => (
        <>
          <div
            className={`h-5 w-1 rounded-full transition-all ${
              isActive
                ? "bg-blue-500"
                : "bg-transparent group-hover:bg-slate-600"
            }`}
          />

          <Icon
            size={19}
            className={`shrink-0 transition-colors ${
              isActive
                ? "text-blue-400"
                : "group-hover:text-white"
            }`}
          />

          <span className="flex-1 font-medium select-none">
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
}