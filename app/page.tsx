import { Suspense } from "react";

export const dynamic = "force-dynamic";
import Active from "@/component/active";
import Hero from "@/component/hero";
import Nav from "@/component/Nav";
import Sidebar from "@/component/Sidebar";
import Streek from "@/component/streek";
import { SidebarProvider } from "@/component/SidebarContext";
import { getCoursesData } from "@/lib/api/course/get";
import { getUserData } from "@/lib/api/profile/get";
import ActiveCoursesSkeleton from "@/component/activeCoursesSkeleton";
import HeroSkeleton from "@/component/heroSkeleton";

async function HeroSection() {
  let userData = null;
  try {
    userData = await getUserData();
  } catch (error) {
    console.error("Failed to load user profile data:", error);
  }

  return <Hero userData={userData} />;
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
    <div className="min-h-screen bg-[#0F0F11] overflow-x-hidden text-white flex flex-col md:flex-row pb-16 md:pb-0">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0F0F11]/80 backdrop-blur-md">
          <Nav />
        </header>

        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 p-4 md:p-8 space-y-8 focus:outline-none"
        >
          <Suspense fallback={<HeroSkeleton />}>
            <HeroSection />
          </Suspense>
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
