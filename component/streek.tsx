"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Sparkles } from "lucide-react";
import PuzzleCard from "./PuzzleCard";

interface StreakProps {
  weeks?: number;
  data?: number[];
  max?: number;
  title?: string;
}

export default function Streak({
  weeks = 52,
  data,
  max = 10,
  title = "Learning Activity",
}: StreakProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cols = Math.max(6, weeks);

  const cells = useMemo(() => {
    const total = cols * 7;
    if (data && data.length >= total) return data.slice(0, total);
    return Array.from({ length: total }, (_, i) => {
      const weekend = i % 7 === 0 || i % 7 === 6;
      return weekend
        ? Math.floor(Math.random() * 4)
        : Math.floor(Math.random() * max);
    });
  }, [data, cols, max]);

  const maxVal = Math.max(...cells, 1);

  const levelClass = (value: number) => {
    const level = Math.min(4, Math.floor((value / maxVal) * 4));
    return [
      "bg-[#1c1c2e]",
      "bg-[#4BC0C8]/25",
      "bg-[#4BC0C8]/50",
      "bg-[#4BC0C8]/75",
      "bg-[#4BC0C8]",
    ][level];
  };

  const deadlines = [
    { id: 1, title: "Complete React Hooks module", due: "Tomorrow, 11:59 PM" },
    { id: 2, title: "Submit DSA Assignment 4", due: "Friday, 5:00 PM" },
    { id: 3, title: "System Design Quiz", due: "Next Mon, 10:00 AM" },
  ];

  return (
    <section aria-label="Learning activity and deadlines">
      {/* Desktop puzzle (xl+): side-by-side with interlocking right/left edges */}
      <div className="hidden xl:grid xl:grid-cols-[1fr_320px] xl:gap-0">
        {/* Learning Activity Card */}
        <PuzzleCard
          rightEdge={{ type: "cutout", position: "center", radius: 26 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ opacity: { duration: 0.4, delay: 0.2 }, y: { type: "spring", stiffness: 300, damping: 20, delay: 0.2 } }}
          className="rounded-4xl bg-linear-to- from-[#141420] to-[#0d0d18] text-white cursor-pointer"
          style={{ minHeight: "340px" }}
        >
          <div className="p-8 flex flex-col h-full">
            <header className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">{title}</h2>
              <div
                aria-label="Activity intensity legend"
                className="flex items-center gap-1.5 text-[10px] text-gray-500 font-bold uppercase tracking-[0.15em]"
              >
                <span>Less</span>
                {[0, 1, 2, 3, 4].map((level) => (
                  <span
                    key={level}
                    className={`h-3 w-3 rounded-[3px] ${levelClass(level * Math.floor(maxVal / 4))}`}
                  />
                ))}
                <span>More</span>
              </div>
            </header>

            {/* overflow-x-auto but overflow-y-visible so tooltips show above */}
            <div className="overflow-x-auto pb-2" style={{ overflowY: "visible" }}>
              <div className="min-w-175">
                <div
                  role="grid"
                  aria-label="Learning activity heatmap"
                  className="relative isolate grid grid-flow-col grid-rows-7 gap-1.25"
                  style={{ gridTemplateColumns: `repeat(${cols}, 13px)`, paddingTop: "40px", marginTop: "-40px" }}
                >
                  {cells.map((value, index) => (
                    <div
                      key={index}
                      role="gridcell"
                      aria-label={`${value} activities`}
                      className={`group relative z-0 h-3.25 w-3.25 rounded-[3px] transition-all duration-150 hover:z-30 hover:scale-150 hover:ring-1 hover:ring-white/25 ${levelClass(value)}`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Tooltip rendered above the cell */}
                      {hoveredIndex === index && (
                        <div className="pointer-events-none absolute bottom-[calc(100%+6px)] left-1/2 z-50 flex -translate-x-1/2 flex-col items-center">
                          <div className="whitespace-nowrap rounded-lg border border-white/10 bg-[#1a1a2e] px-2.5 py-1 text-[11px] font-semibold text-white shadow-xl">
                            {value} {value === 1 ? "activity" : "activities"}
                          </div>
                          <div className="w-2 h-2 bg-[#1a1a2e] border-r border-b border-white/10 rotate-45 -mt-1" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </PuzzleCard>

        {/* Upcoming Deadlines Card */}
        <PuzzleCard
          leftEdge={{ type: "tab", position: "center", radius: 26 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ opacity: { duration: 0.4, delay: 0.3 }, y: { type: "spring", stiffness: 300, damping: 20, delay: 0.3 } }}
          className="rounded-4xl bg-linear-to-b from-[#141420] to-[#0d0d18] cursor-pointer"
          style={{ minHeight: "340px" }}
          aria-labelledby="deadlines-heading"
        >
          <div className="p-8 flex flex-col h-full">
            <h3
              id="deadlines-heading"
              className="mb-6 text-2xl font-bold text-white"
            >
              Upcoming Deadlines
            </h3>

            <ul className="space-y-4 flex-1">
              {deadlines.map((task) => (
                <li
                  key={task.id}
                  className="rounded-2xl border border-white/6 bg-white/2 p-4 transition hover:bg-white/4 hover:border-white/1 group"
                >
                  <article className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-sm border-2 border-white/15 bg-white/[0.02] flex-shrink-0 mt-0.5 group-hover:border-white/30 transition-colors" />
                    <div>
                      <h4 className="font-semibold text-white/90 text-[13px] leading-snug">
                        {task.title}
                      </h4>
                      <time className="mt-1 flex items-center gap-1 text-[11px] font-bold text-orange-400/80">
                        <CalendarDays size={11} />
                        {task.due}
                      </time>
                    </div>
                  </article>
                </li>
              ))}
            </ul>

            <div className="flex justify-end mt-4">
              <Sparkles size={26} className="text-white/8" />
            </div>
          </div>
        </PuzzleCard>
      </div>

      {/* Mobile / Tablet fallback: stacked cards with gaps */}
      <div className="xl:hidden space-y-4">
        {/* Learning Activity */}
        <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#141420] to-[#0d0d18] p-6 text-white overflow-hidden">
          <header className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">{title}</h2>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((l) => (
                <span key={l} className={`h-2.5 w-2.5 rounded-[2px] ${levelClass(l * Math.floor(maxVal / 4))}`} />
              ))}
              <span>More</span>
            </div>
          </header>
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[600px]">
              <div
                role="grid"
                aria-label="Learning activity heatmap"
                className="grid grid-flow-col grid-rows-7 gap-[4px]"
                style={{ gridTemplateColumns: `repeat(${Math.min(cols, 40)}, 11px)` }}
              >
                {cells.slice(0, Math.min(cols, 40) * 7).map((value, index) => (
                  <div
                    key={index}
                    role="gridcell"
                    className={`h-[11px] w-[11px] rounded-[2px] ${levelClass(value)}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#141420] to-[#0d0d18] p-6">
          <h3 className="text-xl font-bold text-white mb-5">Upcoming Deadlines</h3>
          <ul className="space-y-3">
            {deadlines.map((task) => (
              <li key={task.id} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                <article className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-[3px] border-2 border-white/15 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white/90 text-[13px]">{task.title}</h4>
                    <time className="mt-1 flex items-center gap-1 text-[11px] font-bold text-orange-400/80">
                      <CalendarDays size={11} />
                      {task.due}
                    </time>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
