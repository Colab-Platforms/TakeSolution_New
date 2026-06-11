import { Brain, HeartPulse, Microscope } from "lucide-react"
import Image from "next/image"

const OurImpact = () => {
  return (
    <section className="py-16 relative overflow-hidden text-[#121212]">
          <div className="container mx-auto flex flex-col gap-10">
            <div className="flex items-center justify-between gap-24">

              <div className="w-full flex flex-col items-center gap-5">
            <div className="bg-black px-5 py-2 rounded-full w-fit">
              <p className="text-white font-landing-title">Our Impact</p>
            </div>
                <h2 className="max-w-2xl font-semibold text-5xl mb-5 font-landing-title leading-16 high-title-center text-center">
                  Transforming Healthcare Through India's AI Revolution
                </h2>
                
                <div className="flex items-center justify-between mt-10 gap-10">
                  <Image src="/new-landing/impact/1.1.jpg" alt="impact" width={500} height={500} className="w-1/3 rounded-xl object-cover"/>
                  <div className="flex flex-col p-5 gap-5 w-1/3">
                    <div className="bg-landing-primary p-3 rounded-xl w-fit">
                        <HeartPulse className="text-white h-7 w-7" />
                    </div>
                    <h4 className="text-2xl font-semibold font-landing-title">AI-Powered Healthcare</h4>
                    <p className="text-md font-landing-body text-pretty">Leveraging advanced AI and healthcare data to deliver personalized insights, predictive analysis, and smarter health decisions.</p>
                  </div>
                  <Image src="/new-landing/impact/1.3.jpg" alt="impact" width={500} height={500} className="w-1/3 rounded-xl object-cover"/>
                </div>

                <div className="flex items-center justify-between mt-10 gap-10">

                  <div className="flex flex-col p-5 gap-5">
                    <div className="bg-landing-primary p-3 rounded-xl w-fit">
                        <Microscope className="text-white h-7 w-7" />
                    </div>
                    <h4 className="text-2xl font-semibold font-landing-title">Preventive Health Revolution</h4>
                    <p className="text-md font-landing-body text-pretty">Enabling proactive healthcare through early risk detection, continuous monitoring, and personalized wellness recommendations.</p>
                  </div>
                  <Image src="/new-landing/impact/2.2.jpg" alt="impact" width={500} height={500} className="w-1/3 rounded-xl object-cover"/>
                  <div className="flex flex-col p-5 gap-5">
                    <div className="bg-landing-primary p-3 rounded-xl w-fit">
                        <Brain className="text-white h-7 w-7" />
                    </div>
                    <h4 className="text-2xl font-semibold font-landing-title">Future Innovation</h4>
                    <p className="text-md font-landing-body text-pretty">Driving the development of next-generation healthcare solutions through technology, research, and strategic investments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
  )
}

export default OurImpact