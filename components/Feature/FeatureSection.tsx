const segments = [
    {
        tag: "Software",
        title: "Preventive Healthcare",
        body: "Take.Health — a smart digital companion targeting India's $197B health opportunity.",
        img: "/assets/segment-preventive.jpg",
    },
    {
        tag: "Hardware",
        title: "One-Minute Clinic",
        body: "AI-enabled diagnostic kiosks bringing instant primary care to underserved communities.",
        img: "/assets/segment-clinic.jpg",
    },
    {
        tag: "Platform",
        title: "Life Sciences & Research",
        body: "Domain-intensive platforms accelerating clinical development and biotechnology.",
        img: "/assets/segment-life-sciences.jpg",
    },
];

export const Segments = () => (
    <section id="segments" className="bg-secondary/40">
        <div className="container">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
                <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                        Upcoming projects
                    </span>
                    <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-primary max-w-2xl">
                        Creating change that truly matters.
                    </h2>
                </div>
                <p className="max-w-md text-muted-foreground">
                    Three focused bets across software, hardware and life-sciences —
                    all powered by a single AI fabric.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
                {segments.map((s) => (
                    <article
                        key={s.title}
                        className="group rounded-3xl bg-card overflow-hidden shadow-card hover:shadow-soft transition-all duration-500"
                    >
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src={s.img}
                                alt={s.title}
                                width={1024}
                                height={768}
                                loading="lazy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-7">
                            <span className="text-xs uppercase tracking-widest text-muted-foreground">
                                {s.tag}
                            </span>
                            <h3 className="mt-3 font-display text-3xl text-primary">
                                {s.title}
                            </h3>
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                {s.body}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Segments;