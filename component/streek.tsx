
import { useMemo } from "react";

interface StreakProps {
  weeks?: number;
  data?: number[];
  max?: number;
  title?: string;
}

export default function Streak({
  weeks = 60,
  data,
  max = 10,
  title = "Learning Activity",
}: StreakProps) {
  const cols = Math.max(6, weeks);

  const cells = useMemo(() => {
    const total = cols * 7;

    if (data && data.length >= total) {
      return data.slice(0, total);
    }

    return Array.from({ length: total }, (_, i) => {
      const weekend = i % 7 === 0 || i % 7 === 6;
      return weekend
        ? Math.floor(Math.random() * 5)
        : Math.floor(Math.random() * max);
    });
  }, [data, cols, max]);

  const maxVal = Math.max(...cells, 1);

  const levelClass = (value: number) => {
    const level = Math.min(4, Math.floor((value / maxVal) * 4));

    switch (level) {
      case 0:
        return "bg-[#141416]";
      case 1:
        return "bg-blue-200/60";
      case 2:
        return "bg-blue-300/80";
      case 3:
        return "bg-blue-400";
      default:
        return "bg-blue-500";
    }
  };

  const deadlines = [
    {
      id: 1,
      title: "Complete React Hooks Module",
      due: "2026-06-02",
      priority: "High",
    },
    {
      id: 2,
      title: "Submit DSA Assignment 4",
      due: "2026-06-05",
      priority: "Medium",
    },
    {
      id: 3,
      title: "System Design Quiz",
      due: "2026-06-09",
      priority: "Low",
    },
  ];

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  return (
    <article className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b0b0c] to-[#111113] p-6 text-white shadow-xl">
      <header className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>

          <div
            aria-label="Activity intensity legend"
            className="flex items-center gap-2 text-xs text-gray-400"
          >
            <span>Less</span>

            {[0, 1, 2, 3, 4].map((level) => (
              <span
                key={level}
                className={`h-3 w-3 rounded-sm ${[
                  "bg-[#141416]",
                  "bg-blue-200/60",
                  "bg-blue-300/80",
                  "bg-blue-400",
                  "bg-blue-500",
                ][level]
                  }`}
              />
            ))}

            <span>More</span>
          </div>
        </div>
      </header>

      <div className="mt-6 grid gap-5 grid-cols-1 lg:grid-cols-[1fr_320px]">
        <figure className="rounded-2xl bg-white/[0.03] p-4 overflow-x-auto min-w-0 scrollbar-thin">
          <div className="min-w-[800px] pr-2">
            <figcaption className="mb-4 text-sm text-gray-400">
              Learning consistency over the last {weeks} weeks
            </figcaption>

            <div className="mb-3 flex justify-between text-xs text-gray-500">
              {months.map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>

            <div
              role="grid"
              aria-label="Learning activity heatmap"
              className="grid grid-flow-col grid-rows-7 auto-cols-[12px] gap-1.5 relative"
              style={{
                gridTemplateColumns: `repeat(${cols}, 12px)`,
              }}
            >
              {cells.map((value, index) => (
                <div
                  key={index}
                  role="gridcell"
                  aria-label={`${value} learning activities`}
                  className={`group  h-3 w-3 rounded-sm transition-all hover:scale-125 ${levelClass(
                    value
                  )}`}
                >
                  <span className="absolute top-5 left-1/2 hidden -translate-x-1/2 rounded-md bg-black px-2 py-1 text-xs group-hover:block z-20">
                    {value} activities
                  </span>
                </div>
              ))}
            </div>
          </div>
        </figure>
        <section
          aria-labelledby="deadlines-heading"
          className="rounded-2xl bg-white/[0.03] p-4"
        >
          <h3
            id="deadlines-heading"
            className="mb-4 text-lg font-semibold"
          >
            Upcoming Deadlines
          </h3>

          <ul className="space-y-3">
            {deadlines.map((task) => (
              <li
                key={task.id}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:bg-white/[0.05]"
              >
                <article>
                  <header className="flex items-start justify-between">
                    <h4 className="font-medium">{task.title}</h4>

                    <span
                      className={`rounded-full px-2 py-1 text-xs ${task.priority === "High"
                        ? "bg-red-500/20 text-red-400"
                        : task.priority === "Medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-green-500/20 text-green-400"
                        }`}
                    >
                      {task.priority}
                    </span>
                  </header>

                  <time
                    dateTime={task.due}
                    className="mt-3 block text-sm text-gray-400"
                  >
                    Due: {task.due}
                  </time>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
