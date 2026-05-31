import { Suspense } from "react";
import Active from "@/component/active";
import Hero from "@/component/hero";
import Nav from "@/component/Nav";
import Sidebar from "@/component/Sidebar";
import Streek from "@/component/streek";
import { SidebarProvider } from "@/component/SidebarContext";
import { getCoursesData } from "@/lib/api/get";

function ActiveCoursesSkeleton() {
  return (
    <div className="mt-8" aria-label="Loading Active Courses">
      <h2 className="text-xl font-semibold mb-4 text-white/50">Active Courses</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-[#1A1A1D] p-4 flex flex-col justify-between min-h-[160px] gap-2 animate-pulse"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-6 h-6 rounded-md bg-white/5" />
                <div className="w-16 h-5 rounded-full bg-white/5" />
              </div>
              <div className="mt-3 space-y-2">
                <div className="h-5 bg-white/5 rounded w-3/4" />
                <div className="h-3 bg-white/5 rounded w-1/2" />
              </div>
            </div>
            <div className="w-full bg-white/5 rounded-full h-1.5 mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

async function ActiveCoursesSection() {
  let coursesData = null;
  let hasError = false;

  try {
    coursesData = await getCoursesData();
  } catch (error) {
    console.error("Failed to load courses from Supabase:", error);
    hasError = true;
  }

  return <Active courses={coursesData || undefined} error={hasError} />;
}

function DashboardContent() {
  return (
    <div className="min-h-screen bg-[#0F0F11] text-white flex flex-col md:flex-row pb-16 md:pb-0">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0F0F11]/80 backdrop-blur-md">
          <Nav />
        </header>

        <main className="flex-1 p-4 md:p-8 space-y-8 overflow-y-auto">
          <Hero />
          <Suspense fallback={<ActiveCoursesSkeleton />}>
            <ActiveCoursesSection />
          </Suspense>
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
