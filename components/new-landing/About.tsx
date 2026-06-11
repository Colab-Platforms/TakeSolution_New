import Image from "next/image";

const About = () => {
  return (
    <section className="py-16 relative overflow-hidden text-[#121212]">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="bg-black px-5 py-2 rounded-full w-fit">
          <p className="text-white font-landing-title">About Us</p>
        </div>
        <div className="flex items-center justify-between gap-24">
          <div className="flex flex-col gap-5 w-1/2">
            <Image
              src="/new-landing/about.jpg"
              alt="about-img"
              width={700}
              height={700}
              className="rounded-md"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            <h2 className="max-w-xl font-semibold text-5xl mb-5 font-landing-title leading-16 high-title-left">
              A Trusted Name in Integrated Healthcare
            </h2>
            <p className="text-lg font-landing-body text-pretty">
              TAKE Solutions has strategically expanded into the rapidly growing
              longevity and healthy ageing market, leveraging its deep
              healthcare expertise and clinical heritage. The company is focused
              on developing science-backed nutraceuticals, advanced wellness
              solutions, and innovative digital health products designed to
              support preventive care and long-term well-being. <br /> <br />
              This strategic initiative strengthens TAKE's position in emerging
              healthcare segments while creating a diversified and sustainable
              growth platform.
            </p>

            <div className="flex items-center justify-between mt-10">
              <div className="flex flex-col">
                <h3 className="text-6xl font-semibold">BSE</h3>
                <p className="text-xl font-landing-body">Publicly Listed</p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-6xl font-semibold">NSE</h3>
                <p className="text-xl font-landing-body">Publicly Listed</p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-6xl font-semibold">20+</h3>
                <p className="text-xl font-landing-body">Years in Healthcare</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/new-landing/about-bg.svg"
        alt="about-img"
        width={300}
        height={300}
        className="absolute -top-12 -right-12 z-0"
      />
    </section>
  );
};

export default About;
