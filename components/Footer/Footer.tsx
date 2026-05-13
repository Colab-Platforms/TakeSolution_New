"use client";

import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    ArrowUpRight,
    Share2 as Linkedin,
    X as Twitter,
    Camera as Instagram,
    Video as Youtube,
    Globe
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
    {
        title: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Innovation Fund", href: "/innovation-fund" },
            { label: "Our Story", href: "#" },
            { label: "Careers", href: "#" },
        ]
    },
    {
        title: "Services",
        links: [
            { label: "Clinical Trials", href: "#" },
            { label: "Data Analytics", href: "#" },
            { label: "Regulatory Affairs", href: "#" },
            { label: "Pharmacovigilance", href: "#" },
        ]
    },
    {
        title: "Resources",
        links: [
            { label: "Investor Relations", href: "/investor" },
            { label: "White Papers", href: "#" },
            { label: "Case Studies", href: "#" },
            { label: "News & Events", href: "#" },
        ]
    }
];

const SOCIAL_LINKS = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
    return (
        <footer className="relative bg-primary text-primary-foreground pt-24 pb-12 overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,210,255,0.08),transparent)] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="container relative z-10">
                {/* Top Section: CTA / Branding */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8">
                            Empowering <span className="text-accent italic"> Innovation.</span>
                        </h2>

                    </motion.div>


                </div>

                {/* Middle Section: Links & Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 pb-20 border-b border-primary-foreground/10">
                    {/* Navigation Columns */}
                    {FOOTER_LINKS.map((group, idx) => (
                        <div key={idx} className="col-span-1">
                            <h4 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-6">
                                {group.title}
                            </h4>
                            <ul className="space-y-4">
                                {group.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <Link
                                            href={link.href}
                                            className="text-primary-foreground/60 hover:text-accent transition-colors text-sm inline-block group"
                                        >
                                            <span className="relative">
                                                {link.label}
                                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Info Column */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-2">
                        <h4 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-6">
                            Connect with us
                        </h4>
                        <div className="space-y-6">
                            <a href="mailto:contact@takesolutions.com" className="group flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-primary-foreground/40 uppercase font-bold tracking-tighter">Email</p>
                                    <p className="text-sm font-medium">contact@takesolutions.com</p>
                                </div>
                            </a>
                            <a href="tel:+1234567890" className="group flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-primary-foreground/40 uppercase font-bold tracking-tighter">Phone</p>
                                    <p className="text-sm font-medium">+1 (234) 567-890</p>
                                </div>
                            </a>
                            <div className="group flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-primary-foreground/40 uppercase font-bold tracking-tighter">Headquarters</p>
                                    <p className="text-sm font-medium leading-relaxed">
                                        No: 59 A East Madison Street<br />
                                        Baltimore, MD, USA, 4508
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card Section */}

                    <div className="flex flex-col gap-6">
                        <div className="p-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md max-w-sm">
                            <p className="text-primary-foreground/70 text-sm leading-relaxed ">
                                "Redefining the intersection of data science and life sciences to create a healthier future for everyone."
                            </p>
                        </div>
                            <Image
                                src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/take_logo.png?v=1776679632"
                                alt="Take Solutions"
                                width={180}
                                height={50}
                                className="h-10 w-auto object-contain brightness-0 invert opacity-40 grayscale"
                            />
                        </div>
                

                </div>



                {/* Bottom Section: Copyright & Socials */}
                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-8 text-xs text-primary-foreground/40">
                        <p>© {new Date().getFullYear()} TAKE Solutions. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        {SOCIAL_LINKS.map((social, idx) => (
                            <Link
                                key={idx}
                                href={social.href}
                                aria-label={social.label}
                                className="w-10 h-10 rounded-full border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:border-accent hover:text-accent hover:bg-accent/5 transition-all"
                            >
                                <social.icon size={18} />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-primary-foreground/60">
                        <Globe size={12} className="text-accent" />
                        <span>ENG (US)</span>
                    </div>
                </div>
            </div>

            {/* Huge Decorative Text */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-display font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
                TAKE SOLUTIONS
            </div>
        </footer>
    );
};

export default Footer;