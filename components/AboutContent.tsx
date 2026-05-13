"use client"
import React from 'react'
import { ShieldCheck, Beaker, Globe, ChevronDown, Award, Target, Users, Zap } from 'lucide-react'

const AboutContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12 space-y-24">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide">
            ESTABLISHED 2001
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight text-foreground leading-[1.1]">
            Pioneering <br />
            <span className="text-primary italic">Life Sciences</span> <br />
            For A Better Future
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light max-w-xl">
            TAKE Solutions is a global leader in life sciences, providing specialized technical solutions that span the entire drug development lifecycle. We sit at the rare intersection of rigorous science and human outcomes.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:opacity-90 transition-all hover:scale-105">
              Our Journey
            </button>
            <button className="px-8 py-4 bg-muted text-foreground rounded-2xl font-bold border border-border hover:bg-muted/80 transition-all">
              Contact Leadership
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-[40px] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative bg-foreground text-background p-8 md:p-12 rounded-[40px] shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-end">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Globe size={240} />
            </div>
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase bg-primary text-primary-foreground rounded-full">
                Global Footprint
              </div>
              <h2 className="text-4xl font-serif mb-6 leading-tight">
                Operating in <span className="italic font-light text-primary">12 Countries</span> <br />
                Across 3 Continents
              </h2>
              <p className="text-lg opacity-80 mb-8 leading-relaxed max-w-md">
                Our global presence allows us to tap into diverse talent pools and provide around-the-clock support for critical clinical trials.
              </p>
              <div className="grid grid-cols-3 gap-8 border-t border-background/20 pt-8">
                <div>
                  <div className="text-3xl font-serif text-primary italic">150+</div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Global Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-primary italic">2k+</div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Specialists</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-primary italic">9/10</div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Top Pharma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="p-10 bg-muted rounded-[40px] border border-border relative overflow-hidden group hover:border-primary/50 transition-colors">
          <div className="absolute -right-8 -top-8 p-12 bg-primary/5 rounded-full group-hover:scale-110 transition-transform">
            <Target className="text-primary/20" size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-3xl font-serif mb-4 italic">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide clinical and technological solutions that accelerate the delivery of life-changing therapies to patients worldwide. We bridge the gap between data and discovery.
            </p>
          </div>
        </div>

        <div className="p-10 bg-muted rounded-[40px] border border-border relative overflow-hidden group hover:border-primary/50 transition-colors">
          <div className="absolute -right-8 -top-8 p-12 bg-primary/5 rounded-full group-hover:scale-110 transition-transform">
            <Zap className="text-primary/20" size={120} />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
              <Zap size={28} />
            </div>
            <h3 className="text-3xl font-serif mb-4 italic">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted strategic partner for the life sciences industry, known for our integrity, expertise, and unwavering commitment to scientific excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values / Why Us */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl sm:text-5xl font-serif italic">Why Choose TAKE?</h2>
          <p className="text-muted-foreground">Our foundation is built on three decades of clinical expertise and technological foresight.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <ShieldCheck size={24} />,
              title: "Regulatory Precision",
              desc: "Ensuring 100% compliance with global health authority standards."
            },
            {
              icon: <Beaker size={24} />,
              title: "Scientific Rigor",
              desc: "Deep domain expertise in pharmacovigilance and clinical data."
            },
            {
              icon: <Users size={24} />,
              title: "Patient Centricity",
              desc: "Every data point we process represents a life we aim to improve."
            },
            {
              icon: <Award size={24} />,
              title: "Proven Legacy",
              desc: "A track record of successful submissions and clinical milestones."
            }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-card rounded-3xl border border-border hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutContent

