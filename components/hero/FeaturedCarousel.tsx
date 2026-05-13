"use client";
import { useState } from "react";

const FeaturedCarousel = () => {
    // Array of objects to include specific text for each slide
    const slides = [
        { src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Hero_Container.png?v=1777455108", title: "Smart Logistics", tag: "Process" },
        { src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/bio.png?v=1777980136", title: "Molecular Research", tag: "Research" },
        { src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/preventiveHealthcare.jpg?v=1777980355", title: "One minute Clinic", tag: "Healthcare" },
        { src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/clinicalResearch.png?v=17779801358", title: "Lab Analysis", tag: "Science" },
        { src: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Hero_Container_1.png?v=1777978953", title: "Distribution", tag: "Supply" },
    ];

    const [hovered, setHovered] = useState<number | null>(null);
    const activeIndex = hovered !== null ? hovered : 2;

    return (
        <section className="w-full px-4 md:px-10 py-10 md:py-20 bg-[#f8f8f4]"> 
            <div className="max-w-[1400px] mx-auto h-[500px] md:h-[550px] flex flex-col md:flex-row gap-3 md:gap-5 overflow-hidden">
                {slides.map((slide, index) => {
                    const isActive = activeIndex === index;

                    // Mobile: vertical stacking with height changes
                    // Desktop: horizontal flex distribution
                    let flexValue = "flex-1";
                    if (isActive) {
                        flexValue = "flex-[4] md:flex-[6]";
                    } else if (index === 0 || index === 4) {
                        flexValue = "flex-[0.5] md:flex-[0.4]"; 
                    } else {
                        flexValue = "flex-[1] md:flex-[1.5]";
                    }

                    return (
                        <div
                            key={index}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                            onClick={() => setHovered(index)}
                            className={`
                                relative w-full h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden cursor-pointer
                                transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
                                ${flexValue}
                                ${index === 0 || index === 4 ? 'bg-blue-50/10' : ''} 
                            `}
                        >
                            <img
                                src={slide.src}
                                alt={slide.title}
                                className={`
                                    absolute inset-0 w-full h-full object-cover transition-transform duration-700
                                    ${isActive ? 'scale-105' : 'scale-100'}
                                `}
                            />

                            {/* Overlay for inactive states */}
                            <div className={`
                                absolute inset-0 bg-black/20 transition-opacity duration-500
                                ${isActive ? 'opacity-0' : 'opacity-40'}
                            `} />

                            {/* Content matching the image typography */}
                            <div className={`
                                absolute bottom-0 left-0 w-full p-6 md:p-12 text-white
                                transition-all duration-500 transform
                                ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                            `}>
                                <h3 className="text-xl sm:text-2xl md:text-5xl font-light leading-tight max-w-xs">
                                    {slide.title.split(' ').map((word, i) => (
                                        <span key={i} className="md:block inline-block mr-1">{word}</span>
                                    ))}
                                </h3>
                            </div>

                            {/* Tint for outer strips */}
                            {(index === 0 || index === 4) && !isActive && (
                                <div className="absolute inset-0 bg-blue-100/10 backdrop-blur-[1px] md:backdrop-blur-[2px]" />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FeaturedCarousel;
