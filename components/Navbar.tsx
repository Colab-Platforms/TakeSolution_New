"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

import { X, ArrowRight, Mail, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Investors", href: "/investor" },
    { label: "Innovation Fund", href: "/innovation-fund" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "#", icon: FaInstagram },
    { name: "LinkedIn", href: "#", icon: FaLinkedinIn },
    { name: "YouTube", href: "#", icon: FaYoutube },
    { name: "Twitter", href: "#", icon: FaTwitter },
  ];

  return (
    <>
      <header className="sticky top-1 z-50">
        <div
          className={`mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-350 ${
            isScrolled
              ? "top-2 max-w-[1320px] bg-background/90 backdrop-blur-md border border-border/50 rounded-full shadow-lg px-6"
              : "container"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-50">
            <Image
              src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/take_logo.png?v=1776679632"
              alt="Take Solutions"
              width={140}
              height={40}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="default"
              className="hidden sm:flex rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 h-auto"
              asChild
            >
              <Link href="/about">Contact Us</Link>
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] z-[60] focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-[2px] bg-foreground rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-[2px] bg-foreground rounded-full transition-all duration-300 origin-center ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[55] md:hidden transition-opacity duration-350 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile menu drawer */}
      <nav
        className={`fixed top-0 right-0 w-[280px] max-w-[85vw] h-full bg-background z-[60] shadow-2xl md:hidden flex flex-col transition-transform duration-350 border-l border-border ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2 relative z-50">
            <Image
              src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/take_logo.png?v=1776679632"
              alt="Take Solutions"
              width={140}
              height={40}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={closeMenu}
            className="w-10 h-10 flex items-center justify-center text-foreground/75 hover:bg-muted rounded-full transition"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <Link
              href="/innovation-fund"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-5 py-3 rounded-full transition w-full"
            >
              Book A Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground mb-3">Get in touch</p>
            <a
              href="mailto:contact@takesolutions.com"
              className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors mb-2"
            >
              <Mail className="w-4 h-4" /> contact@takesolutions.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" /> +1 (234) 567-890
            </a>
          </div>

          <div className="mt-6 flex gap-3">
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent hover:bg-accent/5 transition-all"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
