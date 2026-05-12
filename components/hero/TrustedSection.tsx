'use client'
import { motion } from "framer-motion";

function ArrowIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition-transform duration-300"
        >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
        </svg>
    );
}

function SparklesIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.937A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"></path>
        </svg>
    );
}

export default function TrustedSection() {
    const stats = [
        {
            label: "Years Experience",
            value: "25+",
            description: "Driving digital transformation in life sciences",
        },
        {
            label: "Global Clients",
            value: "150+",
            description: "Healthcare and pharmaceutical organizations",
        },
        {
            label: "Industry Experts",
            value: "1500+",
            description: "Scientists, engineers and strategic consultants",
        },
        {
            label: "Enterprise Reach",
            value: "9/10",
            description: "Top pharma companies served globally",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#23262C] py-28 px-4">
            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-3xl rounded-full"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* GLASS CARD */}
                        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-14 shadow-[0_0_80px_rgba(79,70,229,0.15)]">

                            {/* MINI BADGE */}
                            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-indigo-400/20 bg-indigo-500/10 text-indigo-200 text-sm tracking-wide mb-8">
                                <SparklesIcon />
                                Trusted Healthcare Intelligence Partner
                            </div>

                            {/* HEADING */}
                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-white max-w-3xl">
                                    Building the
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-white">
                                        Future of Life Sciences.
                                    </span>
                                </h2>

                                <p className="text-lg text-slate-300 leading-8 max-w-2xl">
                                    We combine scientific expertise, AI-driven platforms, and enterprise-grade digital solutions to help healthcare organizations innovate faster, operate smarter, and deliver better patient outcomes globally.
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="mt-12 flex flex-wrap items-center gap-5">
                                <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-white text-slate-900 font-medium transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_10px_50px_rgba(255,255,255,0.2)]">
                                    <span className="relative z-10 flex items-center gap-3">
                                        Explore Our Impact
                                        <ArrowIcon />
                                    </span>

                                    <div className="absolute inset-0 bg-gradient-to-r from-white via-cyan-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </button>

                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
                                            className="w-12 h-12 rounded-full border-2 border-[#050816] object-cover"
                                            alt="team"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200"
                                            className="w-12 h-12 rounded-full border-2 border-[#050816] object-cover"
                                            alt="team"
                                        />
                                        <img
                                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                                            className="w-12 h-12 rounded-full border-2 border-[#050816] object-cover"
                                            alt="team"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-white font-medium">Global Teams</p>
                                        <p className="text-slate-400 text-sm">
                                            Collaborating across 20+ countries.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* IMAGE */}
                        <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(14,165,233,0.15)]">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/trustedfeature.png?v=1777460665"
                                alt="Healthcare Innovation"
                                className="w-full h-[700px] object-cover"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent"></div>

                            {/* FLOATING STATS */}
                            <div className="absolute inset-x-6 bottom-6 grid grid-cols-2 gap-4">
                                {stats.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-5 hover:bg-white/15 transition-all duration-500"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200 mb-3">
                                                    {item.label}
                                                </p>

                                                <h3 className="text-4xl font-semibold text-white mb-2 group-hover:scale-105 origin-left transition-transform duration-300">
                                                    {item.value}
                                                </h3>
                                            </div>

                                            <div className="w-3 h-3 rounded-full bg-cyan-300 mt-2 animate-pulse"></div>
                                        </div>

                                        <p className="text-sm text-slate-300 leading-6 max-w-xs">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
