"use client"
import React from 'react'
import { Send, CheckCircle2, Info, Rocket, BrainCircuit, Microscope } from 'lucide-react'

const InnovationFundContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 space-y-24">
      {/* Header Section */}
      <div className="max-w-3xl space-y-6">
        <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide">
          $50M STRATEGIC CAPITAL
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight text-foreground leading-[1.1]">
          Investing In The <br />
          <span className="text-primary italic">Next Frontier</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed font-light">
          The TAKE Innovation Fund is dedicated to supporting early-stage biotech and health-tech companies that are redefining patient care through data, AI, and novel therapeutics.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {[
          {
            icon: <BrainCircuit className="text-primary" size={32} />,
            title: "AI-Driven Discovery",
            desc: "Startups leveraging machine learning to accelerate lead identification and clinical trial optimization."
          },
          {
            icon: <Microscope className="text-primary" size={32} />,
            title: "Precision Medicine",
            desc: "Novel approaches to personalized therapy based on genomic and phenotypic data sets."
          },
          {
            icon: <Rocket className="text-primary" size={32} />,
            title: "Digital Health",
            desc: "Platforms that improve patient engagement, remote monitoring, and decentralized trial execution."
          }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-muted rounded-[32px] border border-border">
            <div className="mb-6">{item.icon}</div>
            <h3 className="text-2xl font-serif mb-4 italic">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start bg-card rounded-[48px] border border-border overflow-hidden shadow-2xl">
        <div className="p-8 lg:p-16 space-y-8 bg-foreground text-background h-full">
          <h2 className="text-4xl md:text-5xl font-serif italic leading-tight">
            Apply For <br />Funding
          </h2>
          <p className="text-lg opacity-70 font-light">
            Tell us about your breakthrough. Our investment committee reviews applications on a rolling basis and typically responds within 14 business days.
          </p>

          <div className="space-y-6 pt-8">
            <div className="flex gap-4 items-center">
              <CheckCircle2 className="text-primary" size={24} />
              <span className="opacity-90">Strategic mentorship from industry veterans</span>
            </div>
            <div className="flex gap-4 items-center">
              <CheckCircle2 className="text-primary" size={24} />
              <span className="opacity-90">Access to global clinical trial infrastructure</span>
            </div>
            <div className="flex gap-4 items-center">
              <CheckCircle2 className="text-primary" size={24} />
              <span className="opacity-90">Capital investment from $500k to $5M</span>
            </div>
          </div>

          <div className="p-6 bg-background/5 rounded-3xl border border-background/10 mt-12">
            <div className="flex gap-4">
              <Info className="text-primary shrink-0" size={20} />
              <p className="text-sm opacity-60">
                Please ensure you have a pitch deck and executive summary ready to be requested if your initial application is shortlisted.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 lg:p-16">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium opacity-70 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-muted rounded-2xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium opacity-70 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@company.com"
                  className="w-full px-6 py-4 bg-muted rounded-2xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium opacity-70 ml-1">Company Name</label>
              <input 
                type="text" 
                placeholder="Biotech Solutions Inc."
                className="w-full px-6 py-4 bg-muted rounded-2xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium opacity-70 ml-1">Company Website</label>
              <input 
                type="url" 
                placeholder="https://..."
                className="w-full px-6 py-4 bg-muted rounded-2xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium opacity-70 ml-1">Focus Area</label>
              <select className="w-full px-6 py-4 bg-muted rounded-2xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                <option>AI-Driven Discovery</option>
                <option>Precision Medicine</option>
                <option>Digital Health</option>
                <option>Other Biotech</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium opacity-70 ml-1">Tell us about your innovation</label>
              <textarea 
                rows={4}
                placeholder="Briefly describe your technology and the problem it solves..."
                className="w-full px-6 py-4 bg-muted rounded-2xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
            >
              Submit Application
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InnovationFundContent

