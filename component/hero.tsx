import { CalendarDays, Flame, Target } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-labelledby="welcome-heading"
      className="grid grid-cols-3 gap-6"
    >
      <article className="col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl">
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

          <article className="flex items-center gap-4">
            <Flame size={48} aria-hidden="true" className="text-orange-500" />

            <div>
              <p className="text-sm text-gray-400">Current Streak</p>

              <strong className="text-2xl font-bold">24 Days</strong>
            </div>
          </article>
        </section>
      </article>

      <aside
        className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-xl"
        aria-label="Learning Insights"
      >
        <section
          aria-label="Learning statistics"
          className="grid grid-rows-2 gap-4"
        >

          <article className="rounded-xl bg-white/5 p-4">
            <div className="flex items-center gap-2">
              <Target size={18} aria-hidden="true" />
              <span className="text-sm text-gray-400">Courses Finished</span>
            </div>

            <p className="mt-2 text-2xl font-bold">12</p>
          </article>

          <article className="rounded-xl bg-white/5 p-4">
            <div className="flex items-center gap-2">
              <CalendarDays size={18} aria-hidden="true" />
              <span className="text-sm text-gray-400">Study Hours</span>
            </div>

            <p className="mt-2 text-2xl font-bold">128h</p>
          </article>
        </section>
      </aside>
    </section>
  );
}
