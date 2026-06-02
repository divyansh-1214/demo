"use client";

import PuzzleCard from "./PuzzleCard";

const ACCENT_COLORS = [
  { bgFrom: "#1a3a3a", bar: "#4BC0C8", glow: "rgba(75,192,200,0.35)" },
  { bgFrom: "#1a2a4a", bar: "#89CFF0", glow: "rgba(137,207,240,0.35)" },
  { bgFrom: "#321a3f", bar: "#D8B4E2", glow: "rgba(216,180,226,0.35)" },
  { bgFrom: "#1e1a4a", bar: "#7B68EE", glow: "rgba(123,104,238,0.35)" },
];

export default function ActiveCoursesSkeleton() {
  return (
    <section className="mt-0" aria-label="Loading Active Courses">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-white/40">Active Courses</h2>
        <span className="text-sm font-semibold text-gray-700 select-none">
          View All →
        </span>
      </div>

      {/* Desktop (xl): 4-col puzzle row, gap-0 */}
      <div className="hidden xl:grid xl:grid-cols-4 xl:gap-0">
        {ACCENT_COLORS.map((accent, index) => {
          return (
            <PuzzleCard
              key={index}
              leftEdge={index > 0 ? { type: "cutout", position: "center", radius: 26 } : undefined}
              rightEdge={index < ACCENT_COLORS.length - 1 ? { type: "tab", position: "center", radius: 26 } : undefined}
              className="rounded-[1.5rem] relative flex flex-col justify-between overflow-hidden pointer-events-none"
              style={{ height: "200px" }}
            >
              {/* Colored accent gradient */}
              <div
                className="absolute inset-0 pointer-events-none z-0 animate-pulse"
                style={{ background: `linear-gradient(160deg, ${accent.bgFrom}55 0%, transparent 55%)` }}
              />
              <div className="relative z-10 p-5 flex flex-col h-full justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-3 animate-pulse">
                    <div className="w-4 h-4 bg-white/10 rounded-sm" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/10 rounded w-11/12 animate-pulse" />
                    <div className="h-3 bg-white/5 rounded w-7/12 animate-pulse" />
                  </div>
                </div>
                <div>
                  <div className="h-3 bg-white/10 rounded w-8 mb-2 animate-pulse" />
                  <div className="w-full bg-white/[0.04] h-[3px] rounded-full" />
                </div>
              </div>
            </PuzzleCard>
          );
        })}
      </div>

      {/* Tablet / Mobile: standard rounded cards with gaps */}
      <div className="grid xl:hidden grid-cols-1 sm:grid-cols-2 gap-4">
        {ACCENT_COLORS.map((accent, index) => {
          return (
            <article
              key={index}
              className="rounded-2xl border border-white/[0.07] relative overflow-hidden flex flex-col justify-between pointer-events-none"
              style={{
                background: `linear-gradient(160deg, ${accent.bgFrom}44 0%, #0e0e14 55%)`,
                minHeight: "180px",
              }}
            >
              <div className="p-5 flex flex-col h-full justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-3 animate-pulse">
                    <div className="w-4 h-4 bg-white/10 rounded-sm" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/10 rounded w-10/12 animate-pulse" />
                    <div className="h-3 bg-white/5 rounded w-1/2 animate-pulse" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-3 bg-white/10 rounded w-8 mb-2 animate-pulse" />
                  <div className="w-full bg-white/[0.04] h-[3px] rounded-full" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}