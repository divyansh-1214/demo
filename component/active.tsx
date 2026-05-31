"use client";

import { Code, Code2 } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

interface CourseData {
  id?: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at?: string;
}

interface ActiveProps {
  courses?: CourseData[];
  error?: boolean;
}

const DEFAULT_COURSES: CourseData[] = [
  {
    id: "1",
    title: "React Mastery Class",
    progress: 10,
    icon_name: "Code",
  },
  {
    id: "2",
    title: "Next.js Core Concepts",
    progress: 45,
    icon_name: "Code2",
  },
  {
    id: "3",
    title: "TailwindCSS Design Systems",
    progress: 80,
    icon_name: "Code",
  },
  {
    id: "4",
    title: "TypeScript Fundamentals",
    progress: 5,
    icon_name: "Code",
  },
];

export default function Active({ courses = DEFAULT_COURSES, error = false }: ActiveProps) {
  // Gracefully filter out any invalid or empty courses
  const displayCourses = courses && courses.length > 0 ? courses : DEFAULT_COURSES;

  const getIcon = (type?: string) => {
    switch (type) {
      case "Code2":
        return <Code2 className="text-[#ADC6FF]" aria-hidden="true" />;
      default:
        return <Code className="text-[#ADC6FF]" aria-hidden="true" />;
    }
  };

  // Safe date formatting helper to prevent invalid date crashes
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "recent date";
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? "recent date" : date.toLocaleDateString();
  };

  return (
    <section className="mt-8" aria-label="Active Courses">
      <h2 className="text-xl font-semibold mb-4">Active Courses</h2>
      
      {error && (
        <aside className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-left gap-4 transition-all animate-fade-in" role="alert">
          <header>
            <h3 className="text-red-400 font-semibold text-sm">Database Connection Error</h3>
            <p className="text-xs text-gray-400 mt-0.5">Failed to fetch the latest course updates from Supabase. Displaying cached local workspace instead.</p>
          </header>
          <span className="text-[10px] uppercase tracking-wider font-bold text-red-400 bg-red-400/10 px-2.5 py-1 rounded-md">
            Offline Mode
          </span>
        </aside>
      )}

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayCourses.map((value, index) => {
          return (
            <SpotlightCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.015,
                borderColor: "rgba(173, 198, 255, 0.25)",
                boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.5), 0 0 12px 1px rgba(173, 198, 255, 0.06)"
              }}
              transition={{ 
                opacity: { duration: 0.4, delay: index * 0.08 },
                y: { type: "spring", stiffness: 300, damping: 20, delay: index * 0.08 },
                scale: { type: "spring", stiffness: 300, damping: 20 },
                borderColor: { type: "spring", stiffness: 300, damping: 20 },
                boxShadow: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="rounded-2xl border border-white/10 bg-[#1A1A1D] p-4 flex flex-col justify-between min-h-[160px] gap-2 cursor-pointer"
              key={value.id}
            >
              <section className="flex flex-col gap-2">
                <header className="flex items-center justify-between">
                  {getIcon(value.icon_name)}
                  <span className="text-xs text-[#ADC6FF] bg-[#ADC6FF]/10 px-2 py-0.5 rounded-full font-medium">
                    {value.progress}% Progress
                  </span>
                </header>
                <div className="mt-1">
                  <h3 className="font-semibold text-white text-base leading-snug">{value.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Ongoing learning track. Started on {formatDate(value.created_at)}.
                  </p>
                </div>
              </section>
              
              {/* Progress bar visual aid */}
              <div 
                className="w-full bg-white/10 rounded-full h-1.5 mt-4 overflow-hidden"
                role="progressbar"
                aria-valuenow={value.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${value.title} progress`}
              >
                <div 
                  className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500" 
                  style={{ width: `${value.progress}%` }} 
                />
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
