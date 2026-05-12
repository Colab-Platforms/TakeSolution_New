"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        q: "How are we building the future of healthcare intelligence?",
        a: "We build AI-powered digital platforms that bring together clinical, research and real-world health data in one secure system. Using machine learning and automation, our technology helps organizations find patterns, predict outcomes and make better decisions faster.",
        category: "Technology"
    },
    {
        q: "How do we transform complexity into clarity?",
        a: "Healthcare data comes from many sources and formats. We organize, clean and analyze large datasets using advanced tooling, turning raw data into clear reports, dashboards and insights that reduce risk and support evidence-based decisions.",
        category: "Data Strategy"
    },
    {
        q: "How do we transform biotech with AI?",
        a: "Our AI-native architecture is purpose-built for the regulatory, scientific and operational realities of life sciences and healthcare, helping organizations move from reactive to predictive drug development.",
        category: "Innovation"
    },
    {
        q: "Where do we focus next?",
        a: "Preventive healthcare, AI-driven diagnostics, and scalable platforms for clinical research — three high-growth segments where data + intelligence creates outsized impact.",
        category: "Vision"
    },
];

const FAQItem = ({ faq, isOpen, onClick, index }: { faq: typeof faqs[0], isOpen: boolean, onClick: () => void, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
                "group mb-4 rounded-2xl border transition-all duration-300 overflow-hidden",
                isOpen 
                    ? "bg-card border-primary/20 shadow-soft" 
                    : "bg-background/50 border-border/40 hover:border-primary/20 hover:bg-card/50"
            )}
        >
            <button
                onClick={onClick}
                className="w-full flex items-start justify-between p-6 text-left gap-4"
            >
                <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-widest text-primary/60 font-semibold">
                        {faq.category}
                    </span>
                    <h3 className={cn(
                        "font-display text-xl sm:text-2xl transition-colors duration-300",
                        isOpen ? "text-primary" : "text-primary/80 group-hover:text-primary"
                    )}>
                        {faq.q}
                    </h3>
                </div>
                <div className={cn(
                    "mt-1 p-2 rounded-full transition-all duration-300 flex-shrink-0",
                    isOpen ? "bg-primary text-primary-foreground" : "bg-secondary text-primary/40 group-hover:bg-primary/10 group-hover:text-primary"
                )}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-8 text-muted-foreground leading-relaxed text-base sm:text-lg max-w-2xl">
                            {faq.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="innovation" className="relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px]" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Sticky Left Content */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                Knowledge Hub
                            </span>
                            
                            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.1] mb-8">
                                Transforming healthcare through <span className="italic text-primary/70">intelligence.</span>
                            </h2>
                            
                            <p className="text-lg text-muted-foreground mb-10 max-w-md">
                                Explore how we're reshaping the medical landscape with advanced AI, data integrity, and human-centric design.
                            </p>

                            <div className="relative group rounded-3xl overflow-hidden shadow-soft mb-10">
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                    className="aspect-[4/3] w-full"
                                >
                                    <img
                                        src="/assets/cta-collab.jpg"
                                        alt="Researchers collaborating on health analytics"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
                            </div>

                            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/60 flex items-center gap-6 group hover:bg-secondary transition-colors cursor-pointer">
                                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">Still have questions?</h4>
                                    <p className="text-sm text-muted-foreground">Our team of experts is ready to help you.</p>
                                </div>
                                <ArrowRight className="ml-auto text-primary/40 group-hover:text-primary transition-colors" size={20} />
                            </div>
                        </motion.div>
                    </div>

                    {/* FAQ Items */}
                    <div className="lg:col-span-7">
                        <div className="flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mb-12"
                            >
                                <h3 className="font-display text-3xl text-primary mb-4">
                                    Common Enquiries
                                </h3>
                                <div className="h-1 w-20 bg-primary/20 rounded-full" />
                            </motion.div>

                            <div className="space-y-2">
                                {faqs.map((f, i) => (
                                    <FAQItem
                                        key={i}
                                        index={i}
                                        faq={f}
                                        isOpen={openIndex === i}
                                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    />
                                ))}
                            </div>
                            
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="mt-12 p-8 rounded-3xl border border-dashed border-primary/20 flex flex-col items-center text-center"
                            >
                                <p className="text-muted-foreground mb-4">
                                    Looking for something specific that's not listed here?
                                </p>
                                <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
                                    View Documentation
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
