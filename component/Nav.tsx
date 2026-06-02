"use client";

import { Bell, CircleQuestionMark, Search, Menu } from "lucide-react";
import { useSidebar } from "./SidebarContext";
import Image from "next/image";
export default function Nav() {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <div
      role="toolbar"
      aria-label="Dashboard Toolbar"
      className="flex items-center justify-between px-4 md:px-8 py-4 md:py-5 gap-3 md:gap-4"
    >
      <div className="flex items-center gap-3 md:gap-4 flex-1">
        <button
          onClick={toggleSidebar}
          className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition hidden md:flex items-center justify-center cursor-pointer"
          aria-label="Toggle sidebar"
          aria-expanded={!isCollapsed}
        >
          <Menu size={20} aria-hidden="true" />
        </button>
        <form role="search" className="relative w-full max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          />

          <input
            type="search"
            aria-label="Search courses"
            placeholder="Search courses..."
            className="w-full rounded-xl border border-white/10 bg-[#1A1A1D] py-2.5 md:py-3 pl-10 pr-4 outline-none transition focus:border-indigo-500 text-white placeholder-gray-500 text-sm"
          />
        </form>
      </div>

      <div className="flex items-center gap-1.5 md:gap-3">
        <button
          aria-label="Notifications"
          className="rounded-xl p-2 md:p-3 hover:bg-white/5 transition cursor-pointer"
        >
          <Bell size={18} aria-hidden="true" />
        </button>

        <button
          aria-label="Help"
          className="rounded-xl p-2 md:p-3 hover:bg-white/5 transition cursor-pointer"
        >
          <CircleQuestionMark size={18} aria-hidden="true" />
        </button>
        <Image
          src="/profile.png"
          alt="User Avatar"
          width={40}
          height={40}
          className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover shrink-0"
        />
      </div>
    </div>
  );
}
