import Image from "next/image";
import Link from "next/link";
import Herosection from "@/components/hero/HeroSection";
import { Segments } from "@/components/Feature/FeatureSection";
import { Pillars } from "@/components/Pillar/Pillar";
import { FAQ } from "@/components/FAQ/FAQ";
import { CTA } from "@/components/CTA/CTA";
import TrustedSection from "@/components/hero/TrustedSection";
import FeaturedCarousel from "@/components/hero/FeaturedCarousel";
import ShowcaseSection from "@/components/hero/ShowcaseSection";
import Projects from "@/components/hero/Projects";
import VisionSection from "@/components/hero/VisionSection";
import TestimonialSection from "@/components/hero/TestimonialSection";




export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-transparent">
      <Herosection />
      <TrustedSection />
      <FeaturedCarousel />
      <ShowcaseSection />
      <Projects />
      <VisionSection />
      <TestimonialSection />
      {/* <Pillars />
      <Segments /> */}
      <FAQ />
      {/* <CTA /> */}

    </div>
  );
}
