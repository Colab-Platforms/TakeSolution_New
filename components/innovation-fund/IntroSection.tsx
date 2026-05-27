"use client";

import SectionHeading from "./SectionHeading";

const pillars = [
  {
    badge: "Capital",
    badgeClass: "bg-blue-500/10 text-blue-700 border-blue-400/20",
    title: "Strategic Growth Capital",
    desc: "Funding from the Rs. 5 crore Innovation Fund to accelerate product development, market expansion, or capability building.",
  },
  {
    badge: "Mentorship",
    badgeClass: "bg-indigo-500/10 text-indigo-700 border-indigo-400/20",
    title: "Industry Guidance",
    desc: "Access to mentorship from Take Solutions' leadership and healthcare domain experts with two decades of experience.",
  },
  {
    badge: "Network",
    badgeClass: "bg-cyan-500/10 text-cyan-700 border-cyan-400/20",
    title: "Enterprise Ecosystem",
    desc: "Tap into Take Solutions' enterprise network across clinical research, healthcare, and technology verticals.",
  },
  {
    badge: "Partnership",
    badgeClass: "bg-purple-500/10 text-purple-700 border-purple-400/20",
    title: "Long-Term Partnership",
    desc: "More than a transaction — we look for ventures aligned with our strategic direction for long-term value creation.",
  },
];

export default function IntroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-end mb-20">
          <div>
            <SectionHeading
              label="About the Fund"
              title="More than capital."
              highlight="A strategic partnership."
            />
          </div>
          <p className="text-[17px] leading-[1.8] text-[#111111]/60 max-w-md">
            Innovation begins with a strong idea, but scaling it requires the
            right capital, guidance, and strategic support. We are interested in
            working with ventures that bring innovation, execution capability,
            and a clear roadmap for scale.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border border-black/5 rounded-[32px] overflow-hidden">
          {pillars.map(({ badge, badgeClass, title, desc }) => (
            <div
              key={title}
              className="group bg-white p-10 hover:bg-[#f5f7fb] transition-colors duration-500 flex flex-col gap-6"
            >
              <div className={`inline-flex items-center px-4 py-2 rounded-full border text-[11px] font-semibold tracking-wide w-fit ${badgeClass}`}>
                {badge}
              </div>
              <div>
                <h3 className="font-display text-[22px] font-semibold text-[#111111] leading-[1.2] tracking-tight mb-3">
                  {title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[#111111]/55">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}