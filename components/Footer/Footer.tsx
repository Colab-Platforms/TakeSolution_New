"use client";

import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Globe
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const FOOTER_LINKS = [
    {
        title: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Innovation Fund", href: "/innovation-fund" },
             { label: "Investor Relations", href: "/investor" },
            { label: "Careers", href: "#" },
        ]
    },
    // {
    //     title: "Services",
    //     links: [
    //         { label: "Clinical Trials", href: "#" },
    //         { label: "Data Analytics", href: "#" },
    //         { label: "Regulatory Affairs", href: "#" },
    //         { label: "Pharmacovigilance", href: "#" },
    //     ]
    // },
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

const socialLinks = [

  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { name: "YouTube", href: "#", icon: FaYoutube },
  { name: "Twitter", href: "#", icon: FaTwitter },
];

export const Footer = () => {
    return (
        <footer className="relative bg-primary text-primary-foreground pt-24 pb-12 overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,210,255,0.08),transparent)] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="container relative z-10">
                {/* Top Section: CTA / Branding */}
                <div className="mb-20">
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
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
                    {/* Navigation Columns */}
                    {FOOTER_LINKS.map((group, index) => (
                        <div key={index} className="col-span-1 md:col-span-1 lg:col-span-2">
                            <h4 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-6">
                                {group.title}
                            </h4>
                            <ul className="space-y-4">
                                {group.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <Link
                                            href={link.href}
                                            className="text-white/60 hover:text-accent transition-colors text-sm inline-block group"
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
                    <div className="col-span-2 md:col-span-2 lg:col-span-3">
                        <h4 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-6">
                            Connect with us
                        </h4>
                        <div className="space-y-6">
                            <a href="mailto:contact@takesolutions.com" className="group flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300 flex-shrink-0">
                                    <Mail size={18} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Email</p>
                                    <p className="text-sm md:text-base font-semibold text-white break-all">contact@takesolutions.com</p>
                                </div>
                            </a>
                            <a href="tel:+1234567890" className="group flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300 flex-shrink-0">
                                    <Phone size={18} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Phone</p>
                                    <p className="text-sm md:text-base font-semibold text-white">+1 (234) 567-890</p>
                                </div>
                            </a>
                            <div className="group flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                                    <MapPin size={18} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Headquarters</p>
                                    <p className="text-sm md:text-base font-semibold text-white leading-relaxed">
                                        No: 59 A East Madison Street<br />
                                        Baltimore, MD, USA, 4508
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider for mobile view only */}
                    <div className="block md:hidden col-span-2 border-t border-white/10 my-2"></div>

                    {/* Card Section Column */}
                    <div className="col-span-2 md:col-span-2 lg:col-span-3 flex flex-col items-center lg:items-end justify-between gap-6">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md w-full max-w-sm">
                            <p className="text-white/70 text-sm leading-relaxed text-center lg:text-left">
                                "Redefining the intersection of data science and life sciences to create a healthier future for everyone."
                            </p>
                        </div>
                        <div className="w-full flex justify-center lg:justify-end">
                            <Image
                                src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/take_logo.png?v=1776679632"
                                alt="Take Solutions"
                                width={140}
                                height={40}
                                className="h-8 w-auto object-contain brightness-0 invert opacity-40 grayscale"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Socials */}
                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-white/40 w-full md:w-auto text-center md:text-left">
                        <p>© {new Date().getFullYear()} TAKE Solutions. All rights reserved.</p>
                        <div className="flex gap-6 justify-center">
                            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-4 w-full md:w-auto">
                        {socialLinks.map((social, idx) => (
                            <Link
                                key={idx}
                                href={social.href}
                                aria-label={social.name}
                                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                                    social.isSpecial
                                        ? "bg-black border-white/20 text-white hover:bg-neutral-900 hover:border-white/40"
                                        : "bg-white/5 border-white/10 text-white/60 hover:text-accent hover:border-accent hover:bg-accent/5"
                                }`}
                            >
                                {typeof social.icon === "function" ? <social.icon /> : <social.icon size={18} />}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/60">
                        <Globe size={12} className="text-accent" />
                        <span>ENG (US)</span>
                    </div>
                </div>
            </div>

            {/* Huge Decorative Text */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[12vw] font-display font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
                TAKE SOLUTIONS
            </div>
        </footer>
    );
};

export default Footer;