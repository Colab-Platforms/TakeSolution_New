export default function ShowcaseSection() {
    return (
        <section className="w-full py-20 px-4 flex flex-col items-center bg-[#f8f8f4]">

            {/* HEADER */}
            <div className="text-center mb-16">
                <p className="text-sm tracking-widest text-gray-400 mb-2">FEATURES</p>

                <h2 className="text-3xl md:text-4xl font-semibold text-gray-400">
                    Creating Long Term Value through
                </h2>

                <h3 className="text-3xl md:text-4xl font-bold text-indigo-900">
                    Technology & Intelligence
                </h3>
            </div>

            {/* GRID */}
            <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* CARD 1: LIFE SCIENCES */}
                <div className="relative bg-[#f8fbff] rounded-[2.5rem] p-8 md:p-10 min-h-[340px] overflow-hidden border border-blue-50/50 group">
                    {/* Content on top */}
                    <div className="relative z-10 max-w-[280px] ">
                        <h3 className="text-xl font-bold text-indigo-950 mb-5 leading-tight">
                            Life Sciences Domain Expertise
                        </h3>
                        <p className="text-gray-500 text-sm max-w-[190px] leading-relaxed">
                            Deep scientific and clinical research capabilities enabling specialized,
                            high-impact healthcare solutions.
                        </p>
                    </div>

                    {/* Background Image (Scientist) */}
                    <div className="absolute top-0 right-0 w-full h-full pointer-events-none mix-blend-multiply opacity-40 transition-transform duration-700 group-hover:scale-105">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/layer-bg-img.png?v=1777539772"
                            alt=""
                            className="h-full w-full object-cover object-left"
                        />
                    </div>

                    {/* DNA Helix Element */}
                    <div className="absolute -top-2 -right-9 w-48 md:w-64 h-48 md:h-64 pointer-events-none transition-all duration-1000 group-hover:scale-110 group-hover:rotate-6">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/dna-img.png?v=1777540449"
                            alt="DNA"
                            className="w-full h-full object-contain"
                        />
                    </div>

                </div>

                {/* CARD 2: DATA SCIENCE */}
                <div className="relative bg-[#f8fbff] rounded-[2.5rem] p-8 md:p-10 min-h-[340px] border border-blue-50 group flex flex-col justify-between overflow-hidden">

                    {/* TEXT */}
                    <div className="max-w-[260px] z-10">
                        <h3 className="text-xl font-bold text-indigo-950 mb-4 leading-tight">
                            Advanced Data Science Platforms
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Robust digital and AI-driven platforms transforming complex healthcare
                            data into actionable intelligence.
                        </p>
                    </div>

                    {/* GRAPH (REAL POSITION, NOT HACKED) */}
                    <div className="relative w-full h-24 md:h-28 mt-6">

                        {/* GRID LINES */}
                        <div className="absolute inset-0 flex flex-col justify-between opacity-40">
                            <div className="border-b border-gray-200 w-full" />
                            <div className="border-b border-gray-200 w-full" />
                            <div className="border-b border-gray-200 w-full" />
                        </div>

                        {/* GRAPH IMAGE */}
                        <img
                            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ai_detection_random_line.svg?v=1777545385"
                            alt=""
                            className="relative z-10 w-full h-full object-contain opacity-80"
                        />
                    </div>

                    {/* FLOATING POPUP */}
                    <div className="absolute top-4 md:top-6 right-4 md:right-6 w-28 md:w-36 bg-white rounded-2xl shadow-lg p-3 md:p-4 border border-gray-100 z-20 transition-all duration-500 group-hover:-translate-y-1">

                        <h4 className="text-[10px] md:text-xs font-semibold text-gray-800 mb-1">
                            AI Detection
                        </h4>

                        <p className="text-[8px] md:text-[10px] text-gray-400 leading-tight mb-2 md:mb-3">
                            High risk detected – <br /> adjust dosage
                        </p>

                        {/* ICON */}
                        <div className="flex justify-end">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ai_detection.svg?v=1777544604"
                                alt=""
                                className="w-8 md:w-12 h-8 md:h-12 object-contain"
                            />
                        </div>
                    </div>

                </div>

                {/* CARD 3: High-Growth Healthcare Segments */}
                <div className="relative bg-gray-50 rounded-[2.5rem] p-8 md:p-10 min-h-[340px] overflow-hidden group border border-transparent hover:border-blue-100 transition-all">
                    <div className="relative z-10 max-w-[280px] mt-8 md:mt-16">
                        <h3 className="text-xl font-bold text-indigo-950 mb-5 leading-tight">
                            Focus on High-Growth Healthcare Segments
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Strategic alignment with rapidly expanding sectors including biotechnology,
                            clinical research, and preventive healthcare.
                        </p>
                    </div>

                    <div className="absolute top-0 right-0 w-full h-full pointer-events-none mix-blend-multiply opacity-40 transition-transform duration-700 group-hover:scale-105">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/card3_bg.png?v=1777547907"
                            alt=""
                            className="h-full w-full object-cover object-left"
                        />
                    </div>

                    {/* Atom Image (Floating Foreground) */}
                    <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-48 md:w-60 h-48 md:h-60 pointer-events-none transition-all duration-1000 group-hover:scale-110 group-hover:rotate-12">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/atom.png?v=1777548622"
                            alt="atom"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* CARD 4: Scalable AI-Driven Business Model */}
                <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-[2.5rem] p-8 md:p-10 min-h-[340px] overflow-hidden group border border-blue-50">

                    {/* TEXT (LEFT SIDE) */}
                    <div className="relative z-10 max-w-[260px] mt-8 md:mt-16">
                        <h3 className="text-xl font-bold text-indigo-950 mb-4 leading-tight">
                            Scalable AI-Driven Business Model
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Flexible, technology-led architecture designed to scale efficiently
                            across global healthcare ecosystems.
                        </p>
                    </div>

                    {/* IMAGE (RIGHT SIDE - BACKGROUND STYLE) */}
                    <img
                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/map.png?v=1777547345"
                        alt=""
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] max-w-[420px] opacity-90 pointer-events-none transition-transform duration-700 group-hover:translate-x-2"
                    />

                </div>

                {/* CENTER CIRCLE */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
                    <div className="bg-white w-40 h-40 rounded-full flex items-center justify-center">
                        <div className="w-26 h-26 bg-gradient-to-r from-[#EBF4FF] to-[#DAEBFF] rounded-full shadow-lg flex items-center justify-center">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Untitled-1_2.png?v=1772196422"
                                className="w-12 h-12 object-contain"
                                alt="logo"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}