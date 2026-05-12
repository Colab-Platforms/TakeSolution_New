"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Investors", href: "/investor" },
  { label: "Innovation Fund", href: "/innovation-fund" },
];

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 relative z-50">
          <Image
            src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/take_logo.png?v=1776679632"
            alt="Take Solutions"
            width={140}
            height={40}
            className="h-16 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button variant="default" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-5 h-auto">
            Book a Demo
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden animate-in fade-in duration-300">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <Button
                variant="default"
                className="rounded-full bg-primary text-primary-foreground px-8 py-6 text-lg"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;