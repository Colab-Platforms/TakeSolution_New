"use client";

const testimonials = [
    {
        name: "Olivia Brown",
        role: "Enviro Lead",
        company: "Eco Supply",
        avatar: "https://i.pravatar.cc/100?img=1",
        text: "It’s inspiring to work with a logistics partner that shares our mission and passion for a cleaner and greener planet.",
    },
    {
        name: "David Lee",
        role: "Supply Chain Head",
        company: "Eco Supply",
        avatar: "https://i.pravatar.cc/100?img=2",
        text: "Eco-Supply delivers efficiency and sustainability together, ensuring performance that aligns with our green vision.",
    },
    {
        name: "Noah Brooks",
        role: "Operations Director",
        company: "GreenFlow",
        avatar: "https://i.pravatar.cc/100?img=3",
        text: "They helped us transition to cleaner logistics without compromising speed or reliability.",
    },
    {
        name: "Emma Carter",
        role: "Logistics Manager",
        company: "Eco Supply",
        avatar: "https://i.pravatar.cc/100?img=4",
        text: "Eco-Supply cut our logistics emissions while keeping delivery times consistent.",
    },
    {
        name: "Ethan Wilson",
        role: "Supply Head",
        company: "GreenChain",
        avatar: "https://i.pravatar.cc/100?img=5",
        text: "Highly recommend Eco-Supply for businesses focused on cutting emissions and driving true sustainability.",
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
                <div className="text-center justify-center">
                    <span className="text-gray-400 text-3xl md:text-5xl font-medium font-['Oswald'] leading-tight md:leading-10">Driving Success Across</span>
                    <span className="text-white text-3xl md:text-5xl font-medium font-['Oswald'] leading-tight md:leading-10"> Life Sciences</span>
                </div>
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