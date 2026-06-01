"use client";

import { Check, Clock, Flame } from "lucide-react";
import PuzzleCard from "./PuzzleCard";

export default function Hero() {
  return (
    <section
      aria-labelledby="welcome-heading"
      className="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-4 xl:gap-0"
    >
      {/* Main Hero Card */}
      <PuzzleCard
        rightEdge={{ type: "cutout", position: 155, radius: 30 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="rounded-4xl cursor-pointer flex flex-col justify-between relative overflow-hidden"
        style={{
          height: "310px",
          background: "linear-gradient(135deg, #1a1b2e 0%, #141520 40%, #0e0f1a 100%)",
        }}
      >
        {/* Violet shimmer blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-indigo-600/60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-32 w-48 h-48 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

        <header className="relative flex flex-col gap-3 z-10 p-8 pb-10">
          <h1
            id="welcome-heading"
            className="text-3xl xl:text-4xl font-extrabold tracking-tight text-white mb-2.5 leading-tight"
          >
            Welcome back, Divyansh.
          </h1>
          <p className="text-gray-400 font-medium text-sm xl:text-base max-w-md">
            You&apos;re in the top{" "}
            <span className="text-[#ADC6FF] font-bold">5%</span> of learners
            this week. Keep up the momentum.
          </p>
        </header>

        <div className="relative z-20 px-8 pb-8 flex items-end justify-between">
          {/* Current Streak Badge */}
          <section
            aria-labelledby="streak-heading"
            className="flex items-center gap-3 bg-white/5 border border-white/9 rounded-2xl px-4 py-3 backdrop-blur-sm"
          >
            <h2 id="streak-heading" className="sr-only">Learning Streak</h2>
            <div className="w-10 h-10 rounded-full bg-orange-500/15 flex items-center justify-center ring-1 ring-orange-500/25">
              <Flame size={19} aria-hidden="true" className="text-orange-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-0.5">
                Current Streak
              </span>
              <div className="flex items-baseline gap-1">
                <strong className="text-2xl font-extrabold text-white leading-none">24</strong>
                <span className="text-xs text-gray-400 font-medium">Days</span>
              </div>
            </div>
          </section>

          {/* Weekly Goal — proper concave SVG arc */}
          <div className="flex flex-col items-center pointer-events-none mb-1 gap-5">
            <svg width="148" height="60" viewBox="0 0 148 60" fill="none" className="">
              {/* Track arc — simple elliptical arc from left to right dipping down */}
              <path
                d="M 8 8 A 70 55 0 0 0 140 8"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Progress arc — 90% of the same arc */}
              <path
                d="M 8 8 A 70 55 0 0 0 140 8"
                stroke="rgba(173,198,255,0.6)"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="147 163"
              />
              {/* End-cap dots */}
              <circle cx="8" cy="8" r="3" fill="rgba(173,198,255,0.35)" />
              <circle cx="140" cy="8" r="3" fill="rgba(173,198,255,0.35)" />
            </svg>
            <span className="text-[9px] uppercase tracking-[0.18em] text-gray-500 font-bold whitespace-nowrap -mt-2">
              Weekly Goal: 18 / 20 hrs
            </span>
          </div>
        </div>
      </PuzzleCard>

      {/* Right Column */}
      <div className="hidden xl:flex flex-col">
        {/* Courses Completed */}
        <PuzzleCard
          leftEdge={{ type: "tab", position: "center", radius: 30 }}
          bottomEdge={{ type: "cutout", position: "center", radius: 22 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-[2rem] cursor-pointer flex flex-col items-center justify-center text-center"
          style={{ height: "155px", background: "linear-gradient(180deg, #16172a 0%, #0e0f1a 100%)" }}
          aria-label="Courses Completed"
        >
          <div className="w-8 h-8 rounded-full bg-white/[0.05] ring-1 ring-white/[0.09] flex items-center justify-center mb-2 relative left-3 top-3">
            <Check size={15} aria-hidden="true" className="text-gray-400" />
          </div>
          <p className="text-[44px] font-black text-white leading-none tracking-tight mb-1">12</p>
          <h3 className="text-[8px] uppercase tracking-[0.25em] font-bold text-gray-500">Courses Completed</h3>
        </PuzzleCard>

        {/* Hours Learned */}
        <PuzzleCard
          topEdge={{ type: "tab", position: "center", radius: 22 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="rounded-[2rem] cursor-pointer flex flex-col items-center justify-center text-center"
          style={{ height: "155px", background: "linear-gradient(180deg, #16172a 0%, #0e0f1a 100%)" }}
          aria-label="Hours Learned"
        >
          <div className="w-8 h-8 rounded-full bg-white/[0.05] ring-1 ring-white/[0.09] flex items-center justify-center mb-2 relative left-3 top-3">
            <Clock size={15} aria-hidden="true" className="text-gray-400" />
          </div>
          <p className="text-[44px] font-black text-white leading-none tracking-tight mb-1">148</p>
          <h3 className="text-[8px] uppercase tracking-[0.25em] font-bold text-gray-500">Hours Learned</h3>
        </PuzzleCard>
      </div>

      {/* Mobile stat cards */}
      <div className="flex xl:hidden gap-4">
        <div className="flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 flex flex-col items-center text-center">
          <p className="text-4xl font-black text-white leading-none mb-1">12</p>
          <span className="text-[9px] uppercase tracking-wider font-bold text-gray-500">Courses Completed</span>
        </div>
        <div className="flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 flex flex-col items-center text-center">
          <p className="text-4xl font-black text-white leading-none mb-1">148</p>
          <span className="text-[9px] uppercase tracking-wider font-bold text-gray-500">Hours Learned</span>
        </div>
      </div>
    </section>
  );
}
