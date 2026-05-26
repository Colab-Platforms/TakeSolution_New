import { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import AboutStory from '@/components/about/AboutStory'
import AboutMissionVision from '@/components/about/AboutMissionVision'
import WhatWeDo from '@/components/about/WhatWeDo'
import AISection from '@/components/about/AISection'
import AboutCTA from '@/components/about/Aboutcta'

export const metadata: Metadata = {
  title: "About Us | Take Solutions Limited",
  description: "Learn about Take Solutions Limited — a 20+ year old global leader specializing in Life Sciences, Supply Chain Management, and AI-driven Analytics.",
}

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full">
      <AboutHero />
      <AboutStory />
      <AboutMissionVision />
      {/* <WhatWeDo /> */}
      <AISection />   
      <AboutCTA />
    </div>
  )
}

export default AboutPage