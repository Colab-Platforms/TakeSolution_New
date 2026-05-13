export default function ProjectsRevamp() {
  const projects = [
    {
      title: 'Preventive Healthcare',
      category: 'Software',
      year: '2026',
      image:
        'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Preventive_healthcare.png?v=1778219297',
      description:
        'AI-driven ecosystems transforming preventive diagnostics into seamless everyday experiences.',
    },
    {
      title: 'One-minute Clinic',
      category: 'Hardware',
      year: '2026',
      image:
        'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/one-minute_clinic.jpg?v=1778219298',
      description:
        'Next-generation healthcare kiosks engineered for speed, accessibility, and human-centered care.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0a0f1c] py-28 md:py-36 px-6 md:px-10 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-120px] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 flex flex-col lg:flex-row justify-between items-start gap-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="uppercase tracking-[4px] text-[11px] text-white/70 font-medium">
                Visionary Projects
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-3px]">
              Future-ready
              <span className="block text-white/30 italic font-light">
                healthcare experiences.
              </span>
            </h2>
          </div>

          <div className="max-w-md pt-4">
            <p className="text-lg leading-relaxed md:leading-9 text-white/60">
              We merge cinematic design, intelligent systems, and immersive
              interactions to build healthcare products that feel decades ahead.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-14">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-700 hover:-translate-y-2 hover:border-white/20 ${
                index % 2 === 0
                  ? 'lg:ml-0 lg:mr-24'
                  : 'lg:ml-24 lg:mr-0'
              }`}
            >
              <div className="grid lg:grid-cols-[1.2fr_0.8fr] min-h-[500px] lg:min-h-[650px]">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

                  <div className="absolute top-8 left-8 text-white/20 text-7xl md:text-8xl font-bold tracking-[-4px]">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex flex-col justify-between px-6 py-8 md:p-14">
                  <div className="flex items-center justify-between mb-10">
                    <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-[3px] text-white/70">
                      {project.category}
                    </div>

                    <span className="text-white/30 text-sm tracking-[2px] md:tracking-[3px] shrink-0">
                      {project.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1] tracking-[-2px] mb-8 group-hover:text-cyan-300 transition-colors duration-500">
                      {project.title}
                    </h3>

                    <p className="text-white/60 text-lg leading-relaxed md:leading-9 max-w-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
                    <div className="flex flex-wrap gap-4 md:gap-10 text-[10px] md:text-sm text-white/40 uppercase tracking-[2px]">
                      <span>Innovation</span>
                      <span>Human-Centered</span>
                    </div>

                    {/* Custom Arrow Button */}
                    <button className="group/button w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-cyan-400 transition-all duration-500 hover:rotate-45">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-7 h-7 text-white group-hover/button:text-black transition-colors duration-500"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M8 7H17V16" />
                      </svg>
                    </button>
                  </div>

                  <div className="absolute bottom-[-80px] right-[-80px] w-[240px] h-[240px] rounded-full bg-cyan-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        {/* <div className="mt-28 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 border-t border-white/10 pt-12">
          <div>
            <p className="text-white/30 uppercase tracking-[4px] text-xs mb-5">
              Built for tomorrow
            </p>

            <h4 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight tracking-[-2px]">
              Every project is crafted like a digital experience — not just a product.
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-8 min-w-[320px]">
            {[
              ['20+', 'Global Deployments'],
              ['98%', 'Satisfaction'],
              ['12', 'AI Integrations'],
              ['24/7', 'Connected Care'],
            ].map((item, index) => (
              <div key={index}>
                <h5 className="text-4xl font-bold text-cyan-300 mb-2">
                  {item[0]}
                </h5>

                <p className="text-white/40 uppercase text-xs tracking-[2px]">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
