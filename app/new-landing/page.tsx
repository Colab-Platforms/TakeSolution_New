import About from "@/components/new-landing/About"
import Hero from "@/components/new-landing/Hero"
import Navbar from "@/components/new-landing/Navbar"
import OurImpact from "@/components/new-landing/OurImpact"
import OurProjects from "@/components/new-landing/OurProjects"

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <OurProjects />
        <OurImpact />
    </>
  )
}

export default page