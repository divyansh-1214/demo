"use client";

import { Check, Clock, Flame } from "lucide-react";
import PuzzleCard from "./PuzzleCard";

export default function HeroSkeleton() {
  return (
    <section
      aria-labelledby="welcome-heading"
      className="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-4 xl:gap-0"
    >
      {/* Main Hero Card Skeleton */}
      <PuzzleCard
        rightEdge={{ type: "cutout", position: 155, radius: 30 }}
        className="rounded-4xl flex flex-col justify-between relative overflow-hidden pointer-events-none"
        style={{
          height: "310px",
          background:
            "linear-gradient(135deg, #1a1b2e 0%, #141520 40%, #0e0f1a 100%)",
        }}
      >
        {/* Violet shimmer blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-indigo-600/30 blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 right-32 w-48 h-48 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />

        <header className="relative flex flex-col gap-3 z-10 p-5">
          <h1
            id="welcome-heading"
            className="text-3xl xl:text-4xl font-extrabold tracking-tight text-white/40 mb-2.5 leading-tight flex flex-wrap items-center gap-x-2 gap-y-1"
          >
            Welcome back,
            <span className="inline-block w-48 h-8 bg-white/10 rounded-md animate-pulse" />
            .
          </h1>

          <div className="space-y-2 max-w-md">
            <div className="h-4 bg-white/5 rounded-md w-11/12 animate-pulse" />
            <div className="h-4 bg-white/5 rounded-md w-2/3 animate-pulse" />
          </div>

          <div className="flex gap-2 mt-2">
            <div className="rounded-full border border-white/5 bg-white/5 px-3 py-1.5 h-[26px] w-14 animate-pulse" />
            <div className="rounded-full border border-white/5 bg-white/5 px-3 py-1.5 h-[26px] w-16 animate-pulse" />
          </div>
        </header>

        <div className="relative z-20 px-8 pb-8 flex items-end justify-between">
          {/* Current Streak Badge Skeleton */}
          <section
            aria-labelledby="streak-heading"
            className="flex items-center gap-3 bg-white/5 border border-white/9 rounded-2xl px-4 py-3 backdrop-blur-sm"
          >
            <h2 id="streak-heading" className="sr-only">
              Learning Streak Loading
            </h2>
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center ring-1 ring-orange-500/15 animate-pulse">
              <Flame size={19} aria-hidden="true" className="text-orange-400/40" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-0.5">
                Current Streak
              </span>
              <div className="flex items-baseline gap-1">
                <div className="h-6 w-8 bg-white/10 rounded animate-pulse" />
                <span className="text-xs text-gray-400 font-medium">Days</span>
              </div>
            </div>
          </section>

          {/* Weekly Goal Skeleton */}
          <div className="flex-col items-center pointer-events-none mb-1 gap-5 hidden md:flex lg:flex">
            <svg
              width="148"
              height="60"
              viewBox="0 0 148 60"
              fill="none"
              className="opacity-30 animate-pulse"
            >
              {/* Track arc */}
              <path
                d="M 8 8 A 70 55 0 0 0 140 8"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Progress arc (slightly drawn track) */}
              <path
                d="M 8 8 A 70 55 0 0 0 140 8"
                stroke="rgba(173,198,255,0.15)"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              {/* End-cap dots */}
              <circle cx="8" cy="8" r="3" fill="rgba(173,198,255,0.15)" />
              <circle cx="140" cy="8" r="3" fill="rgba(173,198,255,0.15)" />
            </svg>
            <span className="text-[9px] uppercase tracking-[0.18em] text-gray-600 font-bold whitespace-nowrap -mt-2 animate-pulse">
              Weekly Goal: -- / -- hrs
            </span>
          </div>
        </div>
      </PuzzleCard>

      {/* Right Column Skeletons (xl+ only) */}
      <div className="hidden xl:flex flex-col">
        {/* Courses Completed Skeleton */}
        <PuzzleCard
          leftEdge={{ type: "tab", position: "center", radius: 30 }}
          bottomEdge={{ type: "cutout", position: "center", radius: 22 }}
          className="rounded-4xl flex flex-col items-center justify-center text-center pointer-events-none"
          style={{
            height: "155px",
            background: "linear-gradient(180deg, #16172a 0%, #0e0f1a 100%)",
          }}
          aria-label="Courses Completed Loading"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 ring-1 ring-white/9 flex items-center justify-center mb-2 relative left-3 top-3 animate-pulse">
            <Check size={15} aria-hidden="true" className="text-gray-500" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-[44px] w-12 bg-white/10 rounded-lg animate-pulse" />
            <h3 className="text-[8px] uppercase tracking-[0.25em] font-bold text-gray-500">
              Courses Completed
            </h3>
          </div>
        </PuzzleCard>

        {/* Hours Learned Skeleton */}
        <PuzzleCard
          topEdge={{ type: "tab", position: "center", radius: 22 }}
          className="rounded-4xl flex flex-col items-center justify-center text-center pointer-events-none"
          style={{
            height: "155px",
            background: "linear-gradient(180deg, #16172a 0%, #0e0f1a 100%)",
          }}
          aria-label="Hours Learned Loading"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 ring-1 ring-white/9 flex items-center justify-center mb-2 relative left-3 top-3 animate-pulse">
            <Clock size={15} aria-hidden="true" className="text-gray-500" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-[44px] w-16 bg-white/10 rounded-lg animate-pulse" />
            <h3 className="text-[8px] uppercase tracking-[0.25em] font-bold text-gray-500">
              Hours Learned
            </h3>
          </div>
        </PuzzleCard>
      </div>

      {/* Mobile Stat Skeletons (below xl) */}
      <div className="flex xl:hidden gap-4">
        <div className="flex-1 rounded-2xl border border-white/[0.07] bg-white/2 p-5 flex flex-col items-center text-center animate-pulse">
          <div className="h-9 w-12 bg-white/10 rounded-lg mb-2" />
          <span className="text-[9px] uppercase tracking-wider font-bold text-gray-500">
            Courses Completed
          </span>
        </div>
        <div className="flex-1 rounded-2xl border border-white/[0.07] bg-white/2 p-5 flex flex-col items-center text-center animate-pulse">
          <div className="h-9 w-16 bg-white/10 rounded-lg mb-2" />
          <span className="text-[9px] uppercase tracking-wider font-bold text-gray-500">
            Hours Learned
          </span>
        </div>
      </div>
    </section>
  );
}
