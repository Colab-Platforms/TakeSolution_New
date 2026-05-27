"use client";

import SectionHeading from "./SectionHeading";

const criteria = [
  {
    num: "01",
    title: "Founding Team",
    desc: "Strength and depth of the founding team, domain expertise, and ability to execute.",
  },
  {
    num: "02",
    title: "Problem Clarity",
    desc: "How clearly the problem is defined and the validity of the pain point in the market.",
  },
  {
    num: "03",
    title: "Technology Differentiation",
    desc: "Unique product or technology advantage, defensibility, and innovation quotient.",
  },
  {
    num: "04",
    title: "Market Opportunity",
    desc: "Size, scalability, and growth trajectory of the addressable market.",
  },
  {
    num: "05",
    title: "Business Model Viability",
    desc: "Revenue model clarity, unit economics, and commercial sustainability.",
  },
  {
    num: "06",
    title: "Strategic Relevance",
    desc: "Alignment with Take Solutions' strategic priorities in healthcare, AI, and technology.",
  },
];

const selectionSteps = [
  {
    step: "1",
    title: "Application Screening",
    desc: "Initial review of submitted applications for completeness and fit.",
  },
  {
    step: "2",
    title: "Business & Market Review",
    desc: "Deep evaluation of the business model, market opportunity, and team.",
  },
  {
    step: "3",
    title: "Founder Interaction",
    desc: "Shortlisted applicants are invited for a detailed discussion and Q&A.",
  },
  {
    step: "4",
    title: "Due Diligence",
    desc: "Structured internal evaluation covering financials, product, and traction.",
  },
  {
    step: "5",
    title: "Investment Decision",
    desc: "Final decision communicated to selected applicants with next steps.",
  },
];

export default function InvestmentApproachSection() {
  return (
    <section className="relative bg-[#23262C] overflow-hidden border-t border-white/5">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-end mb-20">
          <SectionHeading
            label="Our Investment Approach"
            title="How we evaluate"
            highlight="ventures"
            dark
          />
          <p className="text-slate-400 text-[17px] leading-[1.8] max-w-md">
            Our goal is to support businesses that can build durable,
            future-ready solutions while benefiting from a strategic relationship
            with Take Solutions.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">

          {/* Left — evaluation criteria */}
          <div className="space-y-0 border border-white/8 rounded-[32px] overflow-hidden">
            {criteria.map(({ num, title, desc }, i) => (
              <div
                key={num}
                className={`flex gap-6 p-7 group hover:bg-white/5 transition-colors duration-300 ${
                  i < criteria.length - 1 ? "border-b border-white/8" : ""
                }`}
              >
                <span className="font-display text-[#3B82F6] text-[13px] font-semibold shrink-0 mt-0.5 w-6">
                  {num}
                </span>
                <div>
                  <h4 className="font-display text-white text-[16px] font-semibold tracking-tight mb-1">
                    {title}
                  </h4>
                  <p className="text-slate-400 text-[14px] leading-[1.6]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — selection process */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-indigo-400/20 bg-indigo-500/10 text-indigo-200 text-sm font-medium tracking-wide mb-8">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              Selection Process
            </div>

            <h3 className="font-display text-white text-[28px] font-semibold tracking-tight leading-[1.1] mb-10">
              Five-stage evaluation pipeline
            </h3>

            <div className="space-y-0">
              {selectionSteps.map(({ step, title, desc }, i) => (
                <div key={step} className="flex items-start gap-5 pb-8 relative">
                  {i < selectionSteps.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-white/10" />
                  )}
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white text-[13px] font-semibold shrink-0 z-10">
                    {step}
                  </div>
                  <div>
                    <h4 className="font-display text-white text-[16px] font-semibold tracking-tight mb-1">
                      {title}
                    </h4>
                    <p className="text-white/50 text-[13px] leading-[1.6]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 p-5 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-white/40 text-[13px] leading-relaxed">
                Only shortlisted applicants will be contacted for the next stage of discussions.
                Applications are reviewed on a rolling basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}