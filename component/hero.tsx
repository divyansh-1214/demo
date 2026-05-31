"use client";

import { CalendarDays, Flame, Target } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

export default function Hero() {
  return (
    <section
      aria-labelledby="welcome-heading"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <SpotlightCard 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.015,
          borderColor: "rgba(173, 198, 255, 0.25)",
          boxShadow: "0 20px 35px -15px rgba(0, 0, 0, 0.6), 0 0 15px 1px rgba(173, 198, 255, 0.08)"
        }}
        transition={{ 
          opacity: { duration: 0.4, delay: 0.05 },
          y: { type: "spring", stiffness: 300, damping: 20, delay: 0.05 },
          scale: { type: "spring", stiffness: 300, damping: 20 },
          borderColor: { type: "spring", stiffness: 300, damping: 20 },
          boxShadow: { type: "spring", stiffness: 300, damping: 20 }
        }}
        className="col-span-1 md:col-span-1 lg:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl cursor-pointer"
      >
        <header>
          <h1 id="welcome-heading" className="text-3xl font-bold">
            Welcome back, Divyansh
          </h1>

          <p className="mt-2 text-gray-400">
            You're in the top 5% of learners this week. Keep up the momentum.
          </p>
        </header>

        <section aria-labelledby="streak-heading" className="mt-8">
          <h2 id="streak-heading" className="sr-only">
            Learning Streak
          </h2>

          <div className="flex items-center gap-4">
            <Flame size={48} aria-hidden="true" className="text-orange-500" />

            <div>
              <p className="text-sm text-gray-400">Current Streak</p>

              <strong className="text-2xl font-bold">24 Days</strong>
            </div>
          </div>
        </section>
      </SpotlightCard>

      <SpotlightCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.015,
          borderColor: "rgba(173, 198, 255, 0.25)",
          boxShadow: "0 20px 35px -15px rgba(0, 0, 0, 0.6), 0 0 15px 1px rgba(173, 198, 255, 0.08)"
        }}
        transition={{ 
          opacity: { duration: 0.4, delay: 0.15 },
          y: { type: "spring", stiffness: 300, damping: 20, delay: 0.15 },
          scale: { type: "spring", stiffness: 300, damping: 20 },
          borderColor: { type: "spring", stiffness: 300, damping: 20 },
          boxShadow: { type: "spring", stiffness: 300, damping: 20 }
        }}
        className="col-span-1 md:col-span-1 lg:col-span-1 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl cursor-pointer"
        aria-label="Learning Insights"
      >
        <section
          aria-label="Learning statistics"
          className="grid grid-rows-2 gap-4"
        >
          <article className="rounded-xl bg-white/5 p-4">
            <header className="flex items-center gap-2">
              <Target size={18} aria-hidden="true" />
              <h3 className="text-sm text-gray-400 font-normal">Courses Finished</h3>
            </header>

            <p className="mt-2 text-2xl font-bold">12</p>
          </article>

          <article className="rounded-xl bg-white/5 p-4">
            <header className="flex items-center gap-2">
              <CalendarDays size={18} aria-hidden="true" />
              <h3 className="text-sm text-gray-400 font-normal">Study Hours</h3>
            </header>

            <p className="mt-2 text-2xl font-bold">128h</p>
          </article>
        </section>
      </SpotlightCard>
    </section>
  );
}
