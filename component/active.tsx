"use client";

import PuzzleCard from "./PuzzleCard";
import type { CourseData } from "@/lib/api/course/get";

interface ActiveProps {
  courses?: CourseData[];
  error?: boolean;
}

const DEFAULT_COURSES: CourseData[] = [
  { id: "1", title: "React Dev Masterclass", progress: 85, icon_name: "Code" },
  { id: "2", title: "Data Structures", progress: 60, icon_name: "Code2" },
  { id: "3", title: "System Design", progress: 30, icon_name: "Code" },
  { id: "4", title: "Machine Learning", progress: 15, icon_name: "Code" },
];

const ACCENT_COLORS = [
  { bgFrom: "#1a3a3a", bar: "#4BC0C8", glow: "rgba(75,192,200,0.35)" },
  { bgFrom: "#1a2a4a", bar: "#89CFF0", glow: "rgba(137,207,240,0.35)" },
  { bgFrom: "#321a3f", bar: "#D8B4E2", glow: "rgba(216,180,226,0.35)" },
  { bgFrom: "#1e1a4a", bar: "#7B68EE", glow: "rgba(123,104,238,0.35)" },
];

const SUBTITLES = [
  "Advanced Hooks &...",
  "Trees & Graph Algorithms",
  "Scalability & Microservices",
  "Neural Networks Basis",
];

const ICONS = [
  // React / Angular / Vue
  <svg key="react" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ADC6FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  // Curly braces
  <svg key="code2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ADC6FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"/><path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"/></svg>,
  // Person / user with circuit (system design)
  <svg key="system" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ADC6FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
  // Brain / ML
  <svg key="ml" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ADC6FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>,
];

export default function Active({ courses = DEFAULT_COURSES, error = false }: ActiveProps) {
  const displayCourses = courses && courses.length > 0 ? courses : DEFAULT_COURSES;

  return (
    <section className="mt-0" aria-labelledby="active-courses-heading">
      <div className="flex items-center justify-between mb-5">
        <h2 id="active-courses-heading" className="text-2xl font-bold text-white">Active Courses</h2>
        <a
          href="#"
          className="text-sm font-semibold text-gray-500 hover:text-white transition-colors flex items-center gap-1"
        >
          View All <span aria-hidden="true">→</span>
        </a>
      </div>

      {error && (
        <div
          className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          role="alert"
        >
          <div>
            <h3 className="text-red-400 font-semibold text-sm">Database Connection Error</h3>
            <p className="text-xs text-gray-400 mt-0.5">Displaying cached data.</p>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-bold text-red-400 bg-red-400/10 px-2.5 py-1 rounded-md">
            Offline
          </span>
        </div>
      )}

      {/* Desktop (xl): 4-col puzzle row, gap-0 */}
      <div className="hidden xl:grid xl:grid-cols-4 xl:gap-0">
        {displayCourses.map((value, index) => {
          const accent = ACCENT_COLORS[index] ?? ACCENT_COLORS[0];
          const subtitle = SUBTITLES[index] ?? SUBTITLES[0];
          const icon = ICONS[index] ?? ICONS[0];
          return (
            <PuzzleCard
              key={value.id}
              leftEdge={index > 0 ? { type: "cutout", position: "center", radius: 26 } : undefined}
              rightEdge={index < displayCourses.length - 1 ? { type: "tab", position: "center", radius: 26 } : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ opacity: { duration: 0.4, delay: index * 0.08 }, y: { type: "spring", stiffness: 300, damping: 20, delay: index * 0.08 } }}
              className="rounded-[1.5rem] cursor-pointer relative flex flex-col justify-between overflow-hidden"
              style={{ height: "200px" }}
            >
              {/* Colored accent gradient */}
              <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{ background: `linear-gradient(160deg, ${accent.bgFrom}55 0%, transparent 55%)` }}
              />
              <div className="relative z-10 p-5 flex flex-col h-full justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-3">
                    {icon}
                  </div>
                  <h3 className="font-bold text-white text-sm leading-snug">{value.title}</h3>
                  <p className="text-[11px] text-gray-500 mt-0.5 font-medium">{subtitle}</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-gray-400 block mb-1.5">{value.progress}%</span>
                  <div
                    className="w-full bg-white/[0.04] h-[3px] rounded-full relative overflow-hidden"
                    role="progressbar"
                    aria-valuenow={value.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${value.title} progress`}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${value.progress}%`,
                        backgroundColor: accent.bar,
                        boxShadow: `0 0 8px ${accent.glow}`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </PuzzleCard>
          );
        })}
      </div>

      {/* Tablet / Mobile: standard rounded cards with gaps */}
      <div className="grid xl:hidden grid-cols-1 sm:grid-cols-2 gap-4">
        {displayCourses.map((value, index) => {
          const accent = ACCENT_COLORS[index] ?? ACCENT_COLORS[0];
          const subtitle = SUBTITLES[index] ?? SUBTITLES[0];
          const icon = ICONS[index] ?? ICONS[0];
          return (
            <article
              key={value.id}
              className="rounded-2xl border border-white/[0.07] cursor-pointer relative overflow-hidden flex flex-col justify-between"
              style={{
                background: `linear-gradient(160deg, ${accent.bgFrom}44 0%, #0e0e14 55%)`,
                minHeight: "180px",
              }}
            >
              <div className="p-5 flex flex-col h-full justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-3">
                    {icon}
                  </div>
                  <h3 className="font-bold text-white text-sm leading-snug">{value.title}</h3>
                  <p className="text-[11px] text-gray-500 mt-0.5 font-medium">{subtitle}</p>
                </div>
                <div className="mt-4">
                  <span className="text-[11px] font-bold text-gray-400 block mb-1.5">{value.progress}%</span>
                  <div
                    className="w-full bg-white/[0.04] h-[3px] rounded-full relative overflow-hidden"
                    role="progressbar"
                    aria-valuenow={value.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${value.title} progress`}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${value.progress}%`,
                        backgroundColor: accent.bar,
                        boxShadow: `0 0 8px ${accent.glow}`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
