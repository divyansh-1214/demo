import { Code, Code2 } from "lucide-react";

export default function Active() {
  const data = [
    {
      logo: <Code className="text-[#ADC6FF]" aria-hidden="true" />,
      heading: "React Mastery Class",
      description: "heyyyyyyyyyyyyyyyyyyyyyyyyyyy",
      progress: 10,
    },
    {
      logo: <Code2 className="text-[#ADC6FF]" aria-hidden="true" />,
      heading: "React Mastery Class",
      description: "heyyyyyyyyyyyyyyyyyyyyyyyyyyy",
      progress: 10,
    },
    {
      logo: <Code className="text-[#ADC6FF]" aria-hidden="true" />,
      heading: "React Mastery Class",
      description: "heyyyyyyyyyyyyyyyyyyyyyyyyyyy",
      progress: 10,
    },
    {
      logo: <Code className="text-[#ADC6FF]" aria-hidden="true" />,
      heading: "React Mastery Class",
      description: "heyyyyyyyyyyyyyyyyyyyyyyyyyyy",
      progress: 10,
    },
  ];
  return (
    <section className="mt-8" aria-label="Active Courses">
      <h2 className="text-xl font-semibold mb-4">Active Courses</h2>
      <div className="grid gap-6 md:grid-cols-3 xl:grid-cols-4">
        {data.map((value, index) => {
          return (
            <article
              className="rounded-2xl border border-white/10 bg-[#1A1A1D] p-4 flex flex-col gap-2"
              key={index}
            >
              <div className="flex items-center justify-between">
                {value.logo}
                <span className="text-xs text-[#ADC6FF] bg-[#ADC6FF]/10 px-2 py-0.5 rounded-full font-medium">
                  {value.progress}% Progress
                </span>
              </div>
              <div className="mt-1">
                <h3 className="font-semibold text-white text-base">{value.heading}</h3>
                <p className="text-sm text-gray-400 mt-1"> {value.description}</p>
              </div>
              {/* Progress bar visual aid */}
              <div className="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden">
                <div 
                  className="bg-indigo-500 h-1.5 rounded-full" 
                  style={{ width: `${value.progress}%` }} 
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
