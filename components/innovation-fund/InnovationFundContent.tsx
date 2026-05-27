"use client";

import React from "react";
import {
  BrainCircuit,
  Check,
  HeartPulse,
  LayoutGrid,
  LineChart,
  Microscope,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";
import ApplicationForm from "./ApplicationForm";

const focusAreas = [
  {
    title: "Digital Health Platforms",
    desc: "Digital health platforms and healthcare delivery solutions that modernise patient care and access.",
    icon: <HeartPulse className="w-5 h-5" />,
  },
  {
    title: "AI-Driven Healthcare",
    desc: "AI-driven healthcare applications that improve clinical outcomes, diagnostics, and patient management.",
    icon: <BrainCircuit className="w-5 h-5" />,
  },
  {
    title: "Health Data & Diagnostics",
    desc: "Health data, diagnostics, and clinical intelligence tools that turn data into actionable insight.",
    icon: <Microscope className="w-5 h-5" />,
  },
  {
    title: "Enterprise AI Solutions",
    desc: "Enterprise artificial intelligence solutions that drive efficiency and intelligence at scale.",
    icon: <LayoutGrid className="w-5 h-5" />,
  },
  {
    title: "Differentiated Software",
    desc: "Software products with strong technology differentiation and defensible IP.",
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    title: "Deep-Tech & Automation",
    desc: "Deep-tech, automation, analytics, and platform-based innovations redefining industry verticals.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Scalable Tech Solutions",
    desc: "Scalable technology solutions addressing real market needs with proven demand signals.",
    icon: <LineChart className="w-5 h-5" />,
  },
];

export default function InnovationFundContent() {
  return (
    <section className="relative bg-white overflow-hidden py-32">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[10%] h-full w-px bg-black/5" />
        <div className="absolute top-0 right-[10%] h-full w-px bg-black/5" />
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-[#3B82F6]/8 blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-[#8B5CF6]/8 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── HERO ── */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-black/[0.03] backdrop-blur-xl mb-8">
              <Sparkles className="w-4 h-4 text-black/70" />
              <span className="text-[11px] tracking-[0.28em] uppercase text-black/50">
                Rs. 5 Crore Strategic Capital
              </span>
            </div>

            <h1 className="text-[3.8rem] md:text-[6.5rem] leading-[0.9] tracking-[-0.08em] font-semibold text-black">
              Backing The
              <br />
              <span className="text-black/25 italic font-light">Future Of</span>
              <br />
              Innovation.
            </h1>
          </div>

          <p className="text-lg leading-relaxed text-black/50 max-w-xl">
            Take Solutions has committed Rs. 5 crores towards an Innovation Fund
            to support promising businesses and startups building transformative
            solutions in healthcare, artificial intelligence, and technology. We
            are looking to partner with founders solving meaningful problems,
            building scalable products, and creating long-term strategic value.
          </p>
        </div>

        {/* ── FOCUS AREAS ── */}
        <div className="mt-28">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] tracking-[0.25em] uppercase text-black/35">
                Focus Areas
              </span>
              <h2 className="mt-4 text-4xl md:text-[3.2rem] tracking-[-0.05em] font-semibold text-black leading-[1.05]">
                What We Are{" "}
                <span className="text-black/25 italic font-light">
                  Looking For
                </span>
              </h2>
            </div>
            <p className="text-black/45 leading-relaxed max-w-sm md:text-right text-sm">
              We invite applications from startups and businesses working in
              areas such as:
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-black/8 border border-black/8">
            {focusAreas.map((item, i) => (
              <div
                key={i}
                className="group bg-white p-8 hover:bg-black transition-colors duration-500 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl border border-black/10 flex items-center justify-center text-black group-hover:text-white group-hover:border-white/15 transition-all duration-500">
                  {item.icon}
                </div>

                <h3 className="mt-8 text-base tracking-[-0.02em] font-semibold text-black group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>

                <p className="mt-3 text-black/45 leading-relaxed text-sm group-hover:text-white/55 transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Filler / summary card */}
            <div className="bg-black p-8 flex flex-col justify-end">
              <p className="text-white/50 leading-relaxed text-sm">
                We are especially interested in businesses that combine{" "}
                <span className="text-white font-medium">
                  innovation with measurable impact
                </span>
                ,{" "}
                <span className="text-white font-medium">
                  strong leadership
                </span>
                , and{" "}
                <span className="text-white font-medium">
                  clear commercial potential
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        {/* ── APPLY PANEL ── */}
        <div className="mt-28 rounded-[40px] border border-black/10 bg-black/[0.03] backdrop-blur-2xl overflow-hidden">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* Left */}
            <div className="relative p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-black/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_40%)]" />

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
                  We partner with ambitious founders solving real problems across
                  healthcare, AI, and technology — combining strategic capital
                  with long-term partnership.
                </p>

                <div className="mt-14 space-y-6">
                  {[
                    "Strategic mentorship and guidance from industry veterans",
                    "Access to Take Solutions' enterprise network and ecosystem",
                    "Growth capital from the Rs. 5 crore Innovation Fund",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-black/70 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-16 p-6 rounded-3xl border border-black/10 bg-black/[0.02]">
                  <p className="text-sm text-black/40 leading-relaxed">
                    Shortlisted applicants will be contacted for the next stage
                    of discussions. Applications are reviewed on a rolling basis.
                    For queries, reach us at{" "}
                    <a
                      href="mailto:innovationfund@takesolutions.com"
                      className="text-black/60 underline underline-offset-2"
                    >
                      innovationfund@takesolutions.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Right – Application Form */}
            <ApplicationForm />
          </div>
        </div>

      </div>
    </section>
  );
}