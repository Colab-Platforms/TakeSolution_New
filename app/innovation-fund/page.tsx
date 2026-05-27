import React from 'react'
import HeroSection from '../../components/innovation-fund/HeroSection'
import IntroSection from '../../components/innovation-fund/IntroSection'
import FocusAreasSection from '../../components/innovation-fund/FocusAreaSection'
import InvestmentApproachSection from '../../components/innovation-fund/InvestmentApproachSection'
import EligibilitySection from '../../components/innovation-fund/EligibilitySection'
import ApplicationSection from '../../components/innovation-fund/ApplicationSection'
import CTASection from '../../components/innovation-fund/CTASection'

const InnovationFundPage = () => {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <FocusAreasSection />
      <InvestmentApproachSection />
      <EligibilitySection />
      <ApplicationSection />
      <CTASection />
    </main>
  )
}

export default InnovationFundPage