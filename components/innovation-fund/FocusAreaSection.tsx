"use client";

import {
  BrainCircuit,
  HeartPulse,
  LayoutGrid,
  LineChart,
  Microscope,
  Rocket,
  Zap,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const cards = [
  {
    badge: "Healthcare",
    badgeClass: "bg-blue-500/10 text-blue-700 border-blue-400/20",
    title: "Digital Health Platforms",
    desc: "Digital health platforms and healthcare delivery solutions that modernise patient care and access.",
    icon: HeartPulse,
  },
  {
    badge: "Healthcare",
    badgeClass: "bg-blue-500/10 text-blue-700 border-blue-400/20",
    title: "AI-Driven Healthcare",
    desc: "AI-driven applications improving clinical outcomes, diagnostics, and patient management.",
    icon: BrainCircuit,
  },
  {
    badge: "Healthcare",
    badgeClass: "bg-blue-500/10 text-blue-700 border-blue-400/20",
    title: "Health Data & Diagnostics",
    desc: "Health data, diagnostics, and clinical intelligence tools that turn data into actionable insight.",
    icon: Microscope,
  },
  {
    badge: "Artificial Intelligence",
    badgeClass: "bg-indigo-500/10 text-indigo-700 border-indigo-400/20",
    title: "Enterprise AI Solutions",
    desc: "Enterprise artificial intelligence solutions that drive efficiency and intelligence at scale.",
    icon: LayoutGrid,
  },
  {
    badge: "Technology",
    badgeClass: "bg-cyan-500/10 text-cyan-700 border-cyan-400/20",
    title: "Differentiated Software",
    desc: "Software products with strong technology differentiation and defensible IP.",
    icon: Rocket,
  },
  {
    badge: "Technology",
    badgeClass: "bg-cyan-500/10 text-cyan-700 border-cyan-400/20",
    title: "Deep-Tech & Automation",
    desc: "Deep-tech, automation, analytics, and platform-based innovations redefining industry verticals.",
    icon: Zap,
  },
  {
    badge: "Technology",
    badgeClass: "bg-cyan-500/10 text-cyan-700 border-cyan-400/20",
    title: "Scalable Tech Solutions",
    desc: "Scalable technology solutions addressing real market needs with proven demand signals.",
    icon: LineChart,
  },
];

export default function FocusAreasSection() {
  return (
    <section className="relative bg-[#f5f7fb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <SectionHeading
            label="Focus Areas"
            title="What we are"
            highlight="looking for"
          />
          <p className="text-[#111111]/55 leading-relaxed max-w-sm md:text-right text-[15px]">
            We invite applications from startups and businesses working across
            healthcare, artificial intelligence, and technology.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-black/5 border border-black/5 rounded-[32px] overflow-hidden">
          {cards.map(({ badge, badgeClass, title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group bg-white p-8 hover:bg-[#111111] transition-colors duration-500 cursor-default flex flex-col gap-5"
            >
              <div className={`inline-flex items-center px-4 py-2 rounded-full border text-[11px] font-semibold tracking-wide w-fit group-hover:border-white/15 group-hover:bg-white/10 group-hover:text-white/70 transition-all duration-500 ${badgeClass}`}>
                {badge}
              </div>

              <div className="w-10 h-10 rounded-xl border border-black/8 flex items-center justify-center text-[#111111] group-hover:text-white group-hover:border-white/15 transition-all duration-500">
                <Icon className="w-5 h-5" />
              </div>

              <div>
                <h3 className="font-display text-[18px] font-semibold text-[#111111] group-hover:text-white tracking-tight leading-[1.2] transition-colors duration-500 mb-2">
                  {title}
                </h3>
                <p className="text-[13px] leading-[1.7] text-[#111111]/50 group-hover:text-white/55 transition-colors duration-500">
                  {desc}
                </p>
              </div>
            </div>
          ))}

          {/* Summary filler card */}
          <div className="bg-[#111111] p-8 flex flex-col justify-end">
            <p className="text-white/50 leading-relaxed text-[14px]">
              We are especially interested in businesses that combine{" "}
              <span className="text-white font-medium">innovation with measurable impact</span>,{" "}
              <span className="text-white font-medium">strong leadership</span>, and{" "}
              <span className="text-white font-medium">clear commercial potential</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}