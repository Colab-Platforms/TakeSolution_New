

"use client";

import Image from "next/image";

const features = [
    {
        title: "Life Sciences Domain Expertise",
        description:
            "Deep scientific and clinical research capabilities enabling specialized healthcare solutions.",
        image:
            "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/dna-img.png?v=1777540449",
        bg: "bg-[#edf1f7]",
    },
    {
        title: "Advanced Data Science Platforms",
        description:
            "Robust AI-driven platforms transforming healthcare data into actionable intelligence.",
        image:
            "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ai_detection.svg?v=1777544604",
        bg: "bg-[#eef4ff]",
    },
    {
        title: "Focus on High-Growth Healthcare Segments",
        description:
            "Strategic alignment with rapidly expanding sectors including biotechnology and preventive healthcare.",
        image:
            "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/atom.png?v=1777548622",
        bg: "bg-[#edf6f8]",
    },
    {
        title: "Scalable AI-Driven Business Model",
        description:
            "Flexible technology-led architecture designed to scale across global healthcare ecosystems.",
        image:
            "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/map.png?v=1777547345",
        bg: "bg-[#edf1f7]",
    },
];

export default function ShowcaseSection() {
    return (
        <section className="w-full bg-[#f5f5f3] py-24 px-4 overflow-hidden">

            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <div className="hidden md:block text-center mb-20">

                    <p className="text-[11px] tracking-[0.35em] uppercase text-[#2c2f7c] font-semibold mb-3">
                        Features
                    </p>

                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#b3b3b3]">
                        Creating Long Term Value through
                    </h2>

                    <h3 className="text-4xl md:text-5xl font-black tracking-tight text-[#1f2167] mt-1">
                        Technology & Intelligence
                    </h3>
                </div>

                {/* Desktop */}
                <div className="hidden md:grid relative grid-cols-2 gap-5">

                    {/* CARD 1 */}
                    <div className="relative min-h-[340px] rounded-[2.2rem] bg-[#edf1f7] overflow-hidden p-8 md:p-10 group border border-white/70">

                        {/* BG IMAGE */}
                        <img
                            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/layer-bg-img.png?v=1777539772"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* DNA */}
                        <img
                            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/dna-img.png?v=1777540449"
                            alt=""
                            className="absolute right-6 top-4 w-40 md:w-48 object-contain transition-transform duration-700 group-hover:rotate-6 group-hover:scale-105"
                        />

                        {/* CONTENT */}
                        <div className="relative z-10 max-w-[250px] pt-8">

                            <h3 className="font-display text-3xl font-bold leading-tight text-[#1e2167] mb-5">
                                Life Sciences Domain Expertise
                            </h3>

                            <p className="text-[#3f3f3f] leading-8 text-[15px]">
                                Deep scientific and clinical research capabilities enabling specialized, high-impact healthcare solutions.
                            </p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="relative min-h-[340px] rounded-[2.2rem] bg-[#edf1f7] overflow-hidden p-8 md:p-10 border border-white/70">

                        {/* TOP CONTENT */}
                        <div className="flex items-start justify-between gap-6 relative z-10">

                            <div className="max-w-[260px] pt-8">

                                <h3 className="font-display text-3xl font-bold leading-tight text-[#1e2167] mb-5">
                                    Advanced Data Science Platforms
                                </h3>

                                <p className="text-[#3f3f3f] leading-8 text-[15px]">
                                    Robust digital and AI-driven platforms transforming complex healthcare data into actionable intelligence.
                                </p>
                            </div>

                            {/* FLOATING BOX */}
                            <div className="bg-white rounded-3xl shadow-xl px-5 py-4 min-w-[140px] border border-[#f1f1f1] mt-2">

                                <p className="text-[14px] font-semibold text-[#222] mb-2">
                                    AI Detection
                                </p>

                                <p className="text-[10px] text-[#999] leading-relaxed mb-4">
                                    High risk detected — adjust dosage
                                </p>

                                <div className="flex justify-end">
                                    <img
                                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ai_detection.svg?v=1777544604"
                                        alt=""
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* GRAPH */}
                        <div className="absolute bottom-0 left-0 w-full px-6 pb-5">

                            {/* GRID */}
                            <div className="absolute inset-0 flex flex-col justify-between px-6 pb-5 opacity-40 pointer-events-none">
                                <div className="border-b border-[#d7dbe5]" />
                                <div className="border-b border-[#d7dbe5]" />
                                <div className="border-b border-[#d7dbe5]" />
                            </div>

                            <img
                                src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ai_detection_random_line.svg?v=1777545385"
                                alt=""
                                className="relative z-10 w-full h-28 object-contain"
                            />
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="relative min-h-[340px] rounded-[2.2rem] bg-[#edf6f8] overflow-hidden p-8 md:p-10 group border border-white/70">

                        {/* BG */}
                        <img
                            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/card3_bg.png?v=1777547907"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover opacity-20"
                        />

                        {/* ATOM */}
                        <img
                            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/atom.png?v=1777548622"
                            alt=""
                            className="absolute right-8 top-6 w-44 object-contain transition-transform duration-700 group-hover:rotate-12 group-hover:scale-105"
                        />

                        {/* CONTENT */}
                        <div className="relative z-10 max-w-[280px] pt-20">

                            <h3 className="font-display text-3xl font-bold leading-tight text-[#1e2167] mb-5">
                                Focus on High-Growth Healthcare Segments
                            </h3>

                            <p className="text-[#3f3f3f] leading-8 text-[15px]">
                                Strategic alignment with rapidly expanding sectors including biotechnology, clinical research, and preventive healthcare.
                            </p>
                        </div>
                    </div>

                    {/* CARD 4 */}
                    <div className="relative min-h-[340px] rounded-[2.2rem] bg-[#edf1f7] overflow-hidden p-8 md:p-10 border border-white/70">

                        {/* MAP */}
                        <img
                            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/map.png?v=1777547345"
                            alt=""
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-[65%] opacity-70"
                        />

                        {/* CONTENT */}
                        <div className="relative z-10 max-w-[270px] pt-20">

                            <h3 className="font-display text-3xl font-bold leading-tight text-[#1e2167] mb-5">
                                Scalable AI-Driven Business Model
                            </h3>

                            <p className="text-[#3f3f3f] leading-8 text-[15px]">
                                Flexible, technology-led architecture designed to scale efficiently across global healthcare ecosystems.
                            </p>
                        </div>
                    </div>

                    {/* CENTER LOGO */}
                    <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-20">

                        <div className="w-44 h-44 rounded-full bg-[#f5f5f3] flex items-center justify-center shadow-[0_0_0_18px_rgba(255,255,255,0.65)]">

                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#dcecff] to-[#c6daf5] flex items-center justify-center shadow-lg">

                                <img
                                    src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Untitled-1_2.png?v=1772196422"
                                    alt="logo"
                                    className="w-14 h-14 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* MOBILE LAYOUT */}
                <div className="md:hidden flex flex-col gap-10 mt-10">
                    {/* HEADER */}
                    <div className=" text-center mb-14">

                        <p className="text-[11px] tracking-[0.35em] uppercase text-[#2c2f7c] font-semibold mb-4">
                            Features
                        </p>

                        <h2 className="
                    text-[38px]
                    leading-[0.95]
                    tracking-[-0.05em]
                    font-black
                    text-[#b5b5b5]
                    ">
                            Creating Long Term Value
                        </h2>

                        <h3 className="
                    text-[38px]
                    leading-[0.95]
                    tracking-[-0.05em]
                    font-black
                    text-[#1f2167]
                    mt-1
                    ">
                            Through Technology
                        </h3>
                    </div>

                    {/* CARDS */}
                    <div className="space-y-6">

                        {features.map((item, index) => (
                            <div
                                key={index}
                                className={`
                            relative
                            overflow-hidden
                            rounded-[30px]
                            border border-white/60
                            ${item.bg}
                            backdrop-blur-sm
                            px-7
                            py-8
                            shadow-[0_8px_30px_rgba(31,33,103,0.08)]
                            active:scale-[0.985]
                            transition-all
                            duration-300
                            `}
                            >

                                {/* SOFT GRADIENT */}
                                <div className="
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-white/40
                            to-transparent
                            pointer-events-none
                            " />

                                {/* IMAGE */}
                                <div className="relative z-10 mb-8">

                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                        className="
                                    w-20
                                    h-20
                                    object-contain
                                    opacity-80
                                    "
                                    />

                                </div>

                                {/* CONTENT */}
                                <div className="relative z-10">

                                    <h3 className="
                                text-[30px]
                                leading-[1]
                                tracking-[-0.04em]
                                font-black
                                text-[#1f2167]
                                mb-5
                                max-w-[95%]
                                ">
                                        {item.title}
                                    </h3>

                                    <p className="
                                text-[15px]
                                leading-7
                                text-[#4a4a4a]
                                max-w-[95%]
                                ">
                                        {item.description}
                                    </p>

                                </div>

                                {/* SUBTLE DECORATIVE BLUR */}
                                <div className="
                            absolute
                            -right-10
                            -bottom-10
                            w-40
                            h-40
                            rounded-full
                            bg-white/20
                            blur-3xl
                            pointer-events-none
                            " />

                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}


