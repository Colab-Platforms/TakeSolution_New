"use client";

import React from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  Microscope,
  Rocket,
  Sparkles,
} from "lucide-react";

const focusAreas = [
  {
    title: "AI Discovery",
    desc: "Machine learning systems accelerating molecule discovery and trial intelligence.",
    icon: <BrainCircuit className="w-6 h-6" />,
  },
  {
    title: "Precision Medicine",
    desc: "Genomic-driven therapies and highly personalized treatment ecosystems.",
    icon: <Microscope className="w-6 h-6" />,
  },
  {
    title: "Digital Health",
    desc: "Modern patient engagement, decentralized care, and remote monitoring platforms.",
    icon: <Rocket className="w-6 h-6" />,
  },
];

export default function InnovationFundContent() {
  return (
    <section className="relative bg-[white] overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-[10%] h-full w-px bg-white/5" />
        <div className="absolute top-0 right-[10%] h-full w-px bg-white/5" />

        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-[#3B82F6]/10 blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-[#8B5CF6]/10 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HERO */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl mb-8">
              <Sparkles className="w-4 h-4 text-black/80" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-black/60">
                $50M Strategic Capital
              </span>
            </div>

            <h1 className="text-[3.8rem] md:text-[6.5rem] leading-[0.9] tracking-[-0.08em] font-semibold text-black">
              Backing The
              <br />
              <span className="text-black/30 italic font-light">
                Future Of
              </span>
              <br />
              Healthcare.
            </h1>
          </div>

          <p className="text-lg leading-relaxed text-black/50 max-w-xl">
            The TAKE Innovation Fund partners with visionary founders building
            transformative biotech and health-tech companies powered by AI,
            precision medicine, and next-generation patient infrastructure.
          </p>
        </div>

        {/* FOCUS AREAS */}
        <div className="grid md:grid-cols-3 gap-px bg-black/10 mt-28 border border-black/10">
          {focusAreas.map((item, i) => (
            <div
              key={i}
              className="group bg-[black] p-10 hover:bg-white hover:text-black transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl border border-black/10 flex items-center justify-center text-white group-hover:text-black group-hover:border-black/10 transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="mt-12 text-3xl tracking-[-0.05em] font-semibold text-white group-hover:text-black transition-colors duration-500">
                {item.title}
              </h3>

              <p className="mt-5 text-white/45 leading-relaxed group-hover:text-black/60 transition-colors duration-500">
                {item.desc}
              </p>

              <div className="mt-10 flex items-center gap-3 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-sm tracking-wide">
                  Learn More
                </span>

                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* MAIN PANEL */}
        <div className="mt-28 rounded-[40px] border border-black/10 bg-black/[0.03] backdrop-blur-2xl overflow-hidden">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT */}
            <div className="relative p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-black/10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_40%)]" />

              <div className="relative z-10">
                <span className="text-[11px] tracking-[0.25em] uppercase text-black/40">
                  Founder Access
                </span>

                <h2 className="mt-6 text-5xl md:text-6xl leading-[0.95] tracking-[-0.06em] font-semibold text-black">
                  Apply For
                  <br />
                  Funding
                </h2>

                <p className="mt-8 text-black/50 leading-relaxed text-lg max-w-md">
                  We partner with ambitious founders solving meaningful healthcare
                  challenges through deep technology and scientific innovation.
                </p>

                <div className="mt-14 space-y-6">
                  {[
                    "Strategic mentorship from healthcare veterans",
                    "Access to enterprise clinical infrastructure",
                    "$500K – $5M capital allocation",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4"
                    >
                      <div className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>

                      <span className="text-black/70 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-16 p-6 rounded-3xl border border-black/10 bg-white/[0.03]">
                  <p className="text-sm text-black/40 leading-relaxed">
                    Shortlisted founders may be requested to submit a detailed
                    pitch deck, scientific validation documents, and market
                    strategy overview.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="p-10 md:p-16">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input label="Full Name" placeholder="John Doe" />
                  <Input label="Email Address" placeholder="john@company.com" />
                </div>

                <Input
                  label="Company Name"
                  placeholder="Biotech Solutions Inc."
                />

                <Input
                  label="Company Website"
                  placeholder="https://yourcompany.com"
                />

                <div>
                  <label className="text-sm text-black/40 mb-3 block">
                    Focus Area
                  </label>

                  <select className="w-full bg-transparent border-b border-black/15 pb-4 text-black placeholder:text-black outline-none focus:border-black transition-colors">
                    <option className="bg-white text-black">AI Discovery</option>
                    <option className="bg-white text-black">Precision Medicine</option>
                    <option className="bg-white text-black">Digital Health</option>
                    <option className="bg-white text-black">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-black/40 mb-3 block">
                    Your Innovation
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Describe your technology, scientific breakthrough, and impact..."
                    className="w-full bg-transparent border-b border-black/15 pb-4 text-black placeholder:text-white/25 outline-none resize-none focus:border-black transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-8 inline-flex items-center gap-4 rounded-full bg-white text-black px-8 py-4 text-sm font-medium hover:pl-10 transition-all duration-300"
                >
                  Submit Application

                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="text-sm text-black/40 mb-3 block">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-black/15 pb-4 text-black outline-none focus:border-black transition-colors"
      />
    </div>
  );
}