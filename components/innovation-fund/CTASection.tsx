"use client";

import { ArrowRight } from "lucide-react";

const ctaLinks = [
  {
    title: "Submit Your Application",
    desc: "Start the application process — rolling review, no deadlines.",
    href: "#apply",
    badgeClass: "bg-blue-500/10 text-blue-200 border-blue-400/20",
    badge: "Open Now",
  },
  {
    title: "Speak to Our Team",
    desc: "Have questions? Reach us at innovationfund@takesolutions.com",
    href: "mailto:innovationfund@takesolutions.com",
    badgeClass: "bg-indigo-500/10 text-indigo-200 border-indigo-400/20",
    badge: "Get in Touch",
  },
  {
    title: "Download Application Form",
    desc: "Prefer to apply offline? Download and submit via email.",
    href: "#",
    badgeClass: "bg-cyan-500/10 text-cyan-200 border-cyan-400/20",
    badge: "PDF Available",
  },
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#23262C] border-t border-white/5">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/15 blur-3xl rounded-full" />
        <div className="absolute bottom-[-20%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-end mb-20">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-200 text-sm font-medium tracking-wide mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Build the Future With Us
            </div>

            <h2 className="font-display text-[clamp(38px,5vw,64px)] font-semibold text-white leading-[1.05] tracking-tight max-w-2xl">
              Ready to build something{" "}
              <em className="italic font-light text-white/40">that matters?</em>
            </h2>
          </div>

          <p className="text-slate-400 text-[17px] leading-[1.8] max-w-md lg:pl-8 lg:border-l border-white/10">
            Apply to the Take Solutions Innovation Fund and partner with a
            company committed to supporting innovation with both strategic intent
            and growth capital.
          </p>
        </div>

        {/* CTA link cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {ctaLinks.map(({ title, desc, href, badge, badgeClass }) => (
            <a
              key={title}
              href={href}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-between gap-8 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1"
            >
              <div>
                <div className={`inline-flex items-center px-4 py-2 rounded-full border text-[11px] font-semibold tracking-wide w-fit mb-6 ${badgeClass}`}>
                  {badge}
                </div>

                <h3 className="font-display text-white text-[22px] font-semibold tracking-tight leading-[1.2] mb-3">
                  {title}
                </h3>

                <p className="text-white/50 text-[14px] leading-[1.6]">{desc}</p>
              </div>

              <div className="w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white self-end group-hover:bg-white group-hover:text-[#23262C] transition-all duration-500">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center pb-4">
          <p className="text-white/30 text-[13px]">
            Applications are reviewed on a rolling basis ·{" "}
            <a href="mailto:innovationfund@takesolutions.com" className="text-white/50 hover:text-white/70 transition-colors underline underline-offset-2">
              innovationfund@takesolutions.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}