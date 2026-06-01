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
    <>
      <aside
        className={`min-h-screen bg-[#201F1F] border-r border-white/5 transition-all duration-300 ease-in-out hidden md:flex flex-col overflow-hidden ${isCollapsed
          ? "w-20 px-3 py-8"
          : "w-20 px-3 py-8 lg:w-64 lg:p-8"
          }`}
        aria-label="Sidebar"
      >
        <header className="flex items-center justify-between gap-3 mb-8">
          <span className="flex items-center gap-3 overflow-hidden">
            <GraduationCap size={28} className="flex-shrink-0 text-indigo-400" />
            <span className={`text-lg font-bold leading-tight transition-all duration-300 overflow-hidden whitespace-nowrap ${isCollapsed ? "w-0 opacity-0 pointer-events-none" : "w-0 opacity-0 pointer-events-none lg:w-auto lg:opacity-100"
              }`}>
              Next - <span className="text-[#ADC6FF]">Gen</span>
              <br />
              Learning
            </span>
          </span>
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
                    className={`group relative flex items-center rounded-lg transition-colors gap-3 px-3 py-2 ${isCollapsed ? "justify-center" : "justify-center lg:justify-start"
                      } ${active
                        ? "bg-indigo-600/20 text-indigo-200 ring-1 ring-indigo-600"
                        : "text-gray-300 hover:bg-gray-800/60"
                      }`}
                  >
                    {link.icon}
                    <span className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${isCollapsed ? "w-0 opacity-0 pointer-events-none" : "w-0 opacity-0 pointer-events-none lg:w-auto lg:opacity-100"
                      }`}>
                      {link.name}
                    </span>
                    <span role="tooltip" className={`absolute left-full ml-4 px-3 py-1.5 bg-[#1A1A1D] border border-white/10 text-xs font-medium text-white rounded-lg opacity-0 scale-95 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1 z-50 shadow-xl whitespace-nowrap ${isCollapsed ? "block" : "block lg:hidden"
                      }`}>
                      {link.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={`mt-auto pt-4 border-t border-white/5 hidden lg:flex ${isCollapsed ? "justify-center" : "justify-end"}`}>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
      </aside>

      <nav
        className="fixed bottom-0 left-0 right-0 h-16 bg-[#201F1F] border-t border-white/10 flex items-center justify-around px-4 z-50 md:hidden"
        aria-label="Mobile Navigation"
      >
        {links.map((link) => {
          const active = link.name === "Dashboard";
          return (
            <a
              key={link.name}
              href={link.href}
              className={`flex flex-col items-center justify-center transition-colors ${active ? "text-[#ADC6FF]" : "text-gray-400 hover:text-white"
                }`}
            >
              {link.icon}
              <span className="text-[10px] mt-1 font-medium">{link.name}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
