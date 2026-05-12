const pillars = [
    {
        title: "Life Sciences Domain Expertise",
        body: "Deep scientific and clinical research capabilities enabling specialized, high-impact healthcare solutions.",
    },
    {
        title: "Advanced Data Science Platforms",
        body: "Robust digital and AI-driven platforms transforming complex healthcare data into actionable intelligence.",
    },
    {
        title: "Focus on High-Growth Segments",
        body: "Strategic alignment with biotechnology, clinical research and preventive healthcare.",
    },
    {
        title: "Scalable AI-Driven Model",
        body: "Flexible, technology-led architecture designed to scale across global healthcare ecosystems.",
    },
];

export const Pillars = () => (
    <section id="about" className="container text-foreground">
        <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                About company
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-primary">
                Transforming healthcare through intelligence & innovation.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                For over two decades, Take Solutions has delivered domain-intensive
                technology across life sciences, clinical research and biosciences.
                Today we are entering a new era — integrating AI across our core
                businesses while expanding into AI-driven diagnostics and preventive
                healthcare.
            </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
                <article
                    key={p.title}
                    className="rounded-3xl bg-card p-7 shadow-card border border-border/50 hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
                >
                    <div className="font-display text-3xl text-accent-foreground/40">
                        {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-6 font-display text-2xl text-primary leading-tight">
                        {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {p.body}
                    </p>
                </article>
            ))}
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
            {[
                { k: "20+", v: "years of domain expertise" },
                { k: "$2B+", v: "in healthcare data processed" },
                { k: "40M+", v: "clinical records managed" },
                { k: "30+", v: "countries served" },
            ].map((s) => (
                <div key={s.k}>
                    <div className="font-display text-5xl lg:text-6xl text-primary">{s.k}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
                </div>
            ))}
        </div>
    </section>
);
