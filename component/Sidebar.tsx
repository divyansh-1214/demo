"use client";

import {
  GraduationCap,
  LayoutDashboard,
  ChartBarIncreasing,
  Settings,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useSidebar } from "./SidebarContext";

export default function Sidebar() {
  const { isCollapsed, toggleSidebar } = useSidebar();

  const links = [
    { name: "Dashboard", href: "#", icon: <LayoutDashboard size={18} className="flex-shrink-0" /> },
    { name: "Courses", href: "#", icon: <GraduationCap size={18} className="flex-shrink-0" /> },
    { name: "Analytics", href: "#", icon: <ChartBarIncreasing size={18} className="flex-shrink-0" /> },
    { name: "Settings", href: "#", icon: <Settings size={18} className="flex-shrink-0" /> },
    { name: "Profile", href: "#", icon: <User size={18} className="flex-shrink-0" /> },
  ];

  return (
    <aside 
      className={`min-h-screen bg-[#201F1F] flex-shrink-0 transition-all duration-300 ease-in-out flex flex-col overflow-hidden ${
        isCollapsed 
          ? "w-0 p-0 border-r-0 opacity-0 pointer-events-none" 
          : "w-64 p-8 border-r border-white/5 opacity-100"
      }`} 
      aria-label="Sidebar"
    >
      <header className="flex items-center justify-between gap-3 mb-8">
        <div className="flex items-center gap-3 overflow-hidden">
          <GraduationCap size={28} className="flex-shrink-0 text-indigo-400" />
          <div className="text-lg font-bold leading-tight transition-all duration-300 overflow-hidden whitespace-nowrap">
            Next - <span className="text-[#ADC6FF]">Gen</span>
            <br />
            Learning
          </div>
        </div>
      </header>

      <nav aria-label="Main Navigation" className="flex-1">
        <ul className="space-y-2">
          {links.map((link) => {
            const active = link.name === "Dashboard";

            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center rounded-lg transition-colors gap-3 px-3 py-2 ${
                    active
                      ? "bg-indigo-600/20 text-indigo-200 ring-1 ring-indigo-600"
                      : "text-gray-300 hover:bg-gray-800/60"
                  }`}
                >
                  {link.icon}
                  <span className="transition-all duration-300 overflow-hidden whitespace-nowrap">
                    {link.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-white/5 flex justify-end">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Collapse sidebar"
        >
          <ChevronLeft size={18} />
        </button>
      </div>
    </aside>
  );
}
