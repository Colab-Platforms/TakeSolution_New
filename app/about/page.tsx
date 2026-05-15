import React from 'react'
import { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import Vision from '@/components/about/Vision'
import Mission from '@/components/about/Mission'
import WhatWeDo from '@/components/about/WhatWeDo'
import TestimonialSection from "@/components/hero/TestimonialSection";

export const metadata: Metadata = {
  title: "About Us | Take Solutions Limited",
  description: "Learn about Take Solutions Limited — a 20+ year old global leader specializing in Life Sciences, Supply Chain Management, and AI-driven Analytics.",
}

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <Mission />
      <Vision />
      <WhatWeDo />
      <TestimonialSection />
    </div>
  )
}

export default AboutPage