"use client"
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
        }, [Autoplay({
    delay: 5000,
  })])

  const slides = [
    {
        title: "TAKE Solutions Runs India's Smartest Health Tech Platform.",
        subTitle: "An NSE & BSE listed company running an AI health platform, a Rs. 50M startup fund, and a clinically validated wellness range all built on 20+ years of life sciences expertise.",
        slideImg: "/new-landing/slide1.jpg"
        
    }
  ]

  return (
    <section className="-mt-20">
        <div ref={emblaRef} className="overflow-hidden w-full">
            <div className="flex">
                {slides.map((slide, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 h-[85vh] bg-cover bg-center relative flex items-center" style={{backgroundImage: `url('${slide.slideImg}')`}}>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="container mx-auto z-50 relative ">
                            <h1 className="text-5xl font-semibold mb-8 text-white max-w-3xl leading-16">{slide.title}</h1>
                            <p className="text-lg text-white max-w-3xl font-landing-body">{slide.subTitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Hero