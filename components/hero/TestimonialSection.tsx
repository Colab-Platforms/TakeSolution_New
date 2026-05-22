"use client";

const testimonials = [
    {
        name: "Olivia Brown",
        role: "Clinical Operations Director",
        company: "Astra Genomics",
        avatar: "https://i.pravatar.cc/100?img=1",
        text: "It’s inspiring to work with a technology partner that shares our mission of accelerating breakthrough clinical trials using AI.",
    },
    {
        name: "David Lee",
        role: "Data Science Lead",
        company: "BioPharma Solutions",
        avatar: "https://i.pravatar.cc/100?img=2",
        text: "Their platform delivers safety and analytical power together, ensuring research tracking that aligns with our scientific vision.",
    },
    {
        name: "Noah Brooks",
        role: "Head of Preventive Care",
        company: "GreenHealth Group",
        avatar: "https://i.pravatar.cc/100?img=3",
        text: "They helped us transition to automated patient screening systems without compromising security or regulatory integrity.",
    },
    {
        name: "Emma Carter",
        role: "Pharmacovigilance Manager",
        company: "Nova Therapeutics",
        avatar: "https://i.pravatar.cc/100?img=4",
        text: "Their digital intelligence cut our safety signal detection timeline while keeping compliance perfectly consistent.",
    },
    {
        name: "Ethan Wilson",
        role: "Chief Scientific Officer",
        company: "GenTech Labs",
        avatar: "https://i.pravatar.cc/100?img=5",
        text: "Highly recommend their clinical analytics suite for any life science organization focused on reducing drug discovery cycles.",
    },
];

const loopedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

export default function TestimonialSection() {
    return (
        <section className="relative w-full min-h-[600px]  py-24 overflow-hidden">
            {/* Background Image  */}
            <div className="absolute inset-0">
                <img
                    src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Overlay.png?v=1777956569"
                    alt="Testimonials Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute inset-0 self-stretch inline-flex flex-col justify-start items-center pt-24 md:pt-40 px-4">
                <h2 className="text-center font-display text-3xl md:text-5xl font-medium leading-tight md:leading-10">
                    <span className="text-gray-400">Driving Success Across</span>
                    <span className="text-white"> Life Sciences</span>
                </h2>
            </div>

            {/* Testimonials Row */}
            <div className="relative pt-48 md:pt-64 pb-4 overflow-hidden w-full">
                <div className="flex w-max animate-marquee pause-on-hover">
                    {loopedTestimonials.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 min-w-[280px] w-[320px] bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition mr-6"
                        >

                            {/* TOP NOTCH */}
                            <img src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Component_1.svg?v=1777962176" alt="" 
                            className="absolute inset-0 -left-7 mt-19 pointer-events-none"/>

                            {/* User Info */}
                            <div className="flex items-center gap-3 mb-4 relative z-10">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {item.role} • {item.company}
                                    </p>
                                </div>
                            </div>

                            {/* Text */}
                            <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}