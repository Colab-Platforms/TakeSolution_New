"use client"
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OurProjects = () => {

      const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
            }, [Autoplay({
        delay: 5000,
      })])

  const projects = [
    {
      id: 1,
      img: "/new-landing/projects/1.jpg",
      title: "Take.Health",
      desc: "Empowering individuals with intelligent health insights, predictive analytics, and personalized wellness recommendations that support proactive healthcare decisions.",
      year: "2026",
      tags: [
        " AI Health Analysis",
        "Predictive Health Insights",
        "Personalised Wellness",
      ],
    },
    {
      id: 2,
      img: "/new-landing/projects/1.jpg",
      title: "Take.Health",
      desc: "Empowering individuals with intelligent health insights, predictive analytics, and personalized wellness recommendations that support proactive healthcare decisions.",
      year: "2026",
      tags: [
        " AI Health Analysis",
        "Predictive Health Insights",
        "Personalised Wellness",
      ],
    },
    {
      id: 3,
      img: "/new-landing/projects/1.jpg",
      title: "Take.Health",
      desc: "Empowering individuals with intelligent health insights, predictive analytics, and personalized wellness recommendations that support proactive healthcare decisions.",
      year: "2026",
      tags: [
        " AI Health Analysis",
        "Predictive Health Insights",
        "Personalised Wellness",
      ],
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-[#121212] text-[#f4f4f4]">
      <div className="container mx-auto flex flex-col gap-5">
        <div className="w-fit">
          <p className="text-white font-landing-title">Our Projects</p>
        </div>
        <div className=" flex items-end justify-between w-full gap-5">
          <h2 className="max-w-xl font-semibold text-5xl font-landing-title leading-16 high-title-left text-balance">
            Building the Future of Health
          </h2>

          <Link
            href="/new-landing/our-projects"
            className="  text-black font-landing-body  flex gap-0 items-center"
          >
            <span className="bg-landing-primary border-2 border-landing-primary h-fit px-6 py-3 rounded-l-md">
              View all Projects
            </span>
            <span className="border-2 border-inset border-white/70 text-white h-fit px-3 py-3 rounded-r-md">
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div ref={emblaRef} className="overflow-hidden w-full mt-10">
          <div className="flex gap-6">
            {/* slider part */}
            {projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className="bg-[#c2dcff] flex p-3 rounded-lg text-[#121212] gap-3 flex-[0_0_100%] min-w-0"
                >
                  <div className="relative flex-1">
                    <Image
                      src={project.img}
                      alt="project"
                      width={1000}
                      height={600}
                      className="rounded-md object-cover w-full h-full"
                    />
                  </div>

                  <div
                    className="bg-white p-10 rounded-md w-2/5 flex flex-col justify-between"
                    style={{ height: "-webkit-fill-available" }}
                  >
                    <div>
                      <h3 className="max-w-xl font-semibold text-[42px] font-landing-title leading-16  text-balance mb-5">
                        {project.title}
                      </h3>
                      <p className="text-lg font-landing-body text-pretty">
                        {project.desc}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <h3 className="max-w-xl font-medium text-4xl font-landing-title leading-16 text-balance text-landing-primary">
                        {project.year}
                      </h3>

                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag, i) => (
                          <p className="bg-landing-primary px-4 py-2 rounded-full text-white" key={i}>
                            {tag}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

       
      </div>
      <Image
              src="/new-landing/project-bg.png"
              alt="about-img"
              width={500}
              height={500}
              className="absolute -top-5 -right-5 z-0"
            />
    </section>
  );
};

export default OurProjects;
