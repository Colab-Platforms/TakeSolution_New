"use client";

import SectionHeading from "./SectionHeading";
import ApplicationForm from "./ApplicationForm";
import { Check } from "lucide-react";

const requiredDocs = [
  "Company overview & founder profiles",
  "Problem statement and solution summary",
  "Product or service details",
  "Market opportunity and business model",
  "Current stage & traction / customers",
  "Funding requirement and use of funds",
  "Pitch deck or supporting documents",
];

export default function ApplicationSection() {
  return (
    <section id="apply" className="relative bg-[#f5f7fb] overflow-hidden">
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <SectionHeading
            label="Apply Now"
            title="Submit your"
            highlight="application"
            description="To help us evaluate your business effectively, please include the following in your application."
          />
        </div>

        <div className="rounded-[40px] border border-black/5 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* Left — what to include */}
            <div className="relative p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-black/8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.04),transparent_50%)]" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-700 text-sm font-medium tracking-wide mb-8">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Required Information
                </div>

                <h2 className="font-display text-[42px] font-semibold text-[#111111] tracking-tight leading-[1.0] mb-8">
                  Apply For
                  <br />
                  <em className="italic font-light text-black/40">Funding</em>
                </h2>

                <p className="text-[#111111]/55 text-[16px] leading-[1.8] mb-10">
                  We partner with ambitious founders solving meaningful problems
                  across healthcare, AI, and technology — combining strategic
                  capital with long-term partnership.
                </p>

                <ul className="space-y-4 mb-10">
                  {requiredDocs.map((doc) => (
                    <li key={doc} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-[#111111]/65 text-[15px] leading-relaxed">{doc}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-6 rounded-[24px] border border-black/5 bg-[#f5f7fb]">
                  <p className="text-[13px] text-[#111111]/40 leading-relaxed">
                    Shortlisted applicants will be contacted for the next stage
                    of discussions. Applications are reviewed on a rolling
                    basis. For queries, reach us at{" "}
                    <a
                      href="mailto:innovationfund@takesolutions.com"
                      className="text-[#111111]/65 underline underline-offset-2"
                    >
                      innovationfund@takesolutions.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Application Form */}
            <ApplicationForm />
          </div>
        </div>
      </div>
    </section>
  );
}