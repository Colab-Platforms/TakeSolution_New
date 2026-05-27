"use client";

import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";

const eligibilityGroups = [
  {
    badge: "By Stage",
    badgeClass: "bg-blue-500/10 text-blue-700 border-blue-400/20",
    title: "Early-Stage Startups",
    items: [
      "Validated ideas or working prototypes",
      "MVP with early user feedback",
      "Pre-seed or seed stage companies",
      "Clear problem-solution fit demonstrated",
    ],
  },
  {
    badge: "By Stage",
    badgeClass: "bg-indigo-500/10 text-indigo-700 border-indigo-400/20",
    title: "Growth-Stage Businesses",
    items: [
      "Companies seeking capital for expansion",
      "Businesses with established revenue or traction",
      "Teams scaling product, market, or operations",
      "Prior funding not a disqualifier",
    ],
  },
  {
    badge: "By Sector",
    badgeClass: "bg-cyan-500/10 text-cyan-700 border-cyan-400/20",
    title: "Sector & Geography",
    items: [
      "Healthcare, AI, or technology-led segments",
      "Indian startups and businesses preferred",
      "Other geographies considered on strategic merit",
      "Products, platforms, or service models welcome",
    ],
  },
  {
    badge: "What We Expect",
    badgeClass: "bg-purple-500/10 text-purple-700 border-purple-400/20",
    title: "Baseline Requirements",
    items: [
      "Clear use case with defined business direction",
      "Ability to execute on growth plans",
      "Accurate and complete application materials",
      "Pitch deck or supporting documents available",
    ],
  },
];

export default function EligibilitySection() {
  return (
    <section id="eligibility" className="relative bg-white overflow-hidden">
      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-cyan-50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-end mb-16">
          <SectionHeading
            label="Eligibility"
            title="Who can"
            highlight="apply"
            description="Applications are welcome from a broad range of ventures. Here is what we look for."
          />
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {eligibilityGroups.map(({ badge, badgeClass, title, items }) => (
            <div
              key={title}
              className="rounded-[32px] border border-black/5 bg-[#f5f7fb] p-10 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500"
            >
              <div className={`inline-flex items-center px-4 py-2 rounded-full border text-[11px] font-semibold tracking-wide w-fit mb-6 ${badgeClass}`}>
                {badge}
              </div>

              <h3 className="font-display text-[24px] font-semibold text-[#111111] tracking-tight leading-[1.2] mb-7">
                {title}
              </h3>

              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-[#111111]/65 text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer note */}
        <div className="mt-8 rounded-[24px] border border-black/5 bg-[#f5f7fb] p-7">
          <p className="text-[#111111]/45 text-[14px] leading-relaxed text-center">
            Applicants should demonstrate a clear use case, a defined business direction, and the
            ability to execute on growth plans. All information submitted must be accurate and
            up to date.
          </p>
        </div>
      </div>
    </section>
  );
}