"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const slides = [
  {
    title: "Innovation Fund",
    subtitle:
      "Accelerating breakthrough healthcare startups with AI-driven infrastructure and strategic capital.",
    image:
      "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Hero_Container_1.png?v=1777978953",
  },
  {
    title: "Clinical Research",
    subtitle:
      "Transforming research workflows with real-time patient intelligence and automation.",
    image:
      "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/clinicalResearch.png?v=1777980135",
  },
  {
    title: "Preventive Healthcare",
    subtitle:
      "Building predictive systems that shift healthcare from reactive to proactive care.",
    image:
      "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/preventiveHealthcare.jpg?v=1777980355",
  },
];

/* -------------------------------------------------------------------------- */
/*                               Custom SVG Icons                             */
/* -------------------------------------------------------------------------- */

function ArrowRightIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function PlayIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ChevronLeftIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 600], [1, 1.08]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f7fb] px-4 py-4 md:px-6 lg:px-8">
      <div className="relative mx-auto flex min-h-[85vh] w-full flex-col overflow-hidden rounded-[40px] border border-black/5 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-100 blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-100 blur-3xl opacity-40" />



        {/* Main Hero */}
        <div className="relative flex-1 ">
          

            {/* Background Image */}
            <AnimatePresence>
              <motion.img
                key={slides[activeSlide].image}
                src={slides[activeSlide].image}
                alt={slides[activeSlide].title}
                style={{ scale }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10" />

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute bottom-10 left-1/2 z-10 mb-8 w-[90%] rounded-[32px] border border-white/20 bg-white/10 p-6 backdrop-blur-2xl md:w-[40%]"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/60">
                    Featured Initiative
                  </p>

                  <h2 className="text-3xl font-semibold text-white md:text-4xl">
                    {slides[activeSlide].title}
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                    {slides[activeSlide].subtitle}
                  </p>
                </div>

                <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-white text-black md:flex">
                  <ArrowRightIcon className="h-5 w-5" />
                </div>
              </div>

              {/* Slider Controls */}
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeSlide === index
                          ? "w-12 bg-white"
                          : "w-2 bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prevSlide}
                    aria-label="Previous Slide"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20"
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next Slide"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/20"
                  >
                    <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      
    </section>
  );
}
