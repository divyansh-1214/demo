export default function ActiveCoursesSkeleton() {
    return (
        <section className="mt-8" aria-label="Loading Active Courses">
            <h2 className="text-xl font-semibold mb-4 text-white/50">Active Courses</h2>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <article
                        key={index}
                        className="rounded-2xl border border-white/10 bg-[#1A1A1D] p-4 flex flex-col justify-between min-h-[160px] gap-2 animate-pulse"
                    >
                        <section className="flex flex-col gap-2">
                            <header className="flex items-center justify-between">
                                <span className="w-6 h-6 rounded-md bg-white/5" />
                                <span className="w-16 h-5 rounded-full bg-white/5" />
                            </header>
                            <div className="mt-1 space-y-2">
                                <div className="h-5 bg-white/5 rounded w-3/4" />
                                <div className="h-3 bg-white/5 rounded w-1/2" />
                            </div>
                        </section>
                        <div className="w-full bg-white/5 rounded-full h-1.5 mt-4" />
                    </article>
                ))}
            </div>
        </section>
    );
}