"use client";

import Active from "@/component/active";
import Hero from "@/component/hero";
import Nav from "@/component/Nav";
import Sidebar from "@/component/Sidebar";
import Streek from "@/component/streek";
import { SidebarProvider } from "@/component/SidebarContext";

function DashboardContent() {
  return (
    <div className="min-h-screen bg-[#0F0F11] text-white flex">
      <Sidebar />
      
      <div className="flex flex-col flex-1 min-w-0">
        <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0F0F11]/80 backdrop-blur-md">
          <Nav />
        </header>

        <main className="flex-1 p-8 space-y-8 overflow-y-auto">
          <Hero />

          {/* Dashboard Cards */}
          <Active />
          <Streek />
        </main>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <SidebarProvider>
      <DashboardContent />
    </SidebarProvider>
  );
}
