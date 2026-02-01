
import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TechnicalModule } from '../../constants';

// External declaration for GSAP
declare const gsap: any;
declare const ScrollTrigger: any;

interface ServiceLayoutProps {
  title: string;
  subtitle?: string;
  description: string;
  fullDescription: string;
  deliverables: string[];
  impacts: { label: string; value: string }[];
  image: string;
  onBack: () => void;
  onContactClick: () => void;
  colorScheme?: string;
  technicalModules?: TechnicalModule[];
  industries?: string[];
  performance?: {
    title: string;
    stats: { label: string; value: string; desc: string }[];
  };
  challenge?: {
    title: string;
    points: string[];
  };
}

export const ServiceLayout: React.FC<ServiceLayoutProps> = ({ 
  title, 
  subtitle, 
  description, 
  fullDescription, 
  deliverables, 
  impacts, 
  image, 
  onBack, 
  onContactClick,
  colorScheme = "violet",
  technicalModules,
  industries,
  performance,
  challenge
}) => {
  const accentColor = colorScheme === "violet" ? "text-violet-600" : "text-emerald-500";
  const accentBg = colorScheme === "violet" ? "bg-violet-600" : "bg-emerald-500";
  
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxImgRef = useRef<HTMLImageElement>(null);
  const parallaxWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Main image parallax using GSAP
      if (parallaxImgRef.current && parallaxWrapperRef.current) {
        gsap.to(parallaxImgRef.current, {
          yPercent: 40,
          ease: "none",
          scrollTrigger: {
            trigger: parallaxWrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }

      // Entrance animations
      gsap.from(".tech-module-card", {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".tech-modules-grid",
          start: "top 80%"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-2/3 h-[900px] bg-gradient-to-l from-slate-50 to-transparent pointer-events-none -z-10" />
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-10"
          >
            <button onClick={onBack} className={`${accentColor} hover:underline font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-2 group transition-all`}>
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
              Services Home
            </button>
            <span className="w-12 h-px bg-slate-200"></span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.8em]">{subtitle || "SERVICE_MODULE"}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-end">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-[9rem] font-black text-slate-950 tracking-tighter leading-[0.85] mb-12"
              >
                {title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 0 ? "text-slate-950" : `${accentColor} block lg:inline`}>
                    {word}{' '}
                  </span>
                ))}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-4xl text-slate-500 font-medium leading-tight max-w-xl"
              >
                {description}
              </motion.p>
            </div>
            
            <div className="flex flex-wrap gap-16 lg:pb-10">
              {impacts.map((impact, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="space-y-1"
                >
                  <div className="text-5xl font-black text-slate-950">{impact.value}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{impact.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.02]" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-32">
            <div className="space-y-12">
              <span className="text-[10px] font-black text-violet-400 uppercase tracking-[1em] block">Our Strategy</span>
              <p className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                {fullDescription}
              </p>
              
              {industries && (
                <div className="industry-container pt-8">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-6 block">Where We Succeed</span>
                  <div className="flex flex-wrap gap-3">
                    {industries.map((ind, i) => (
                      <span key={i} className="px-5 py-2.5 rounded-full border border-white/10 text-white font-bold text-xs uppercase tracking-wider bg-white/5 transition-colors hover:bg-white/10">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-10">
                <button 
                  onClick={onContactClick}
                  className={`px-12 py-6 ${accentBg} text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.5em] hover:scale-105 transition-all shadow-2xl active:scale-95`}
                >
                  Start My Growth Journey
                </button>
              </div>
            </div>

            <div className="space-y-10">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[1em] block">What's Included</span>
              <div className="grid gap-4">
                {deliverables.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all"
                  >
                    <div className={`w-2.5 h-2.5 rounded-full ${accentBg} group-hover:scale-150 transition-transform`} />
                    <span className="text-slate-300 font-bold text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      {challenge && (
        <section className="py-40 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.8em] mb-12 block text-center">Market Challenges & Solutions</span>
               <h2 className="text-5xl md:text-6xl font-black text-slate-950 mb-16 tracking-tighter leading-tight text-center">{challenge.title}</h2>
               <div className="grid md:grid-cols-2 gap-10">
                  {challenge.points.map((p, i) => (
                    <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100/50 flex flex-col justify-between">
                      <p className="text-xl font-bold text-slate-800 leading-snug">{p}</p>
                      <div className="w-10 h-1 bg-violet-400 mt-8 rounded-full" />
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>
      )}

      {/* Modules Section */}
      {technicalModules && (
        <section className="py-40 bg-[#f8fafc]">
          <div className="container-custom">
            <div className="flex flex-col items-center text-center mb-24">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[1em] mb-6 block">Our Solutions</span>
              <h2 className="text-6xl font-black text-slate-950 tracking-tighter">Bespoke <span className={accentColor}>Growth.</span></h2>
            </div>
            
            <div className="tech-modules-grid grid lg:grid-cols-2 gap-12">
              {technicalModules.map((module) => (
                <div key={module.id} className="tech-module-card p-12 md:p-20 bg-white rounded-[4rem] border border-slate-100 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-700">
                  <div>
                    <span className="text-[10px] font-black text-violet-500 uppercase tracking-[0.4em] mb-10 block">{module.title}</span>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-950 mb-8 tracking-tighter leading-none">{module.headline}</h3>
                    <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed">{module.description}</p>
                    <div className="space-y-4 mb-16">
                      {module.points.map((p, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <div className={`w-2 h-2 rounded-full ${accentBg} group-hover:scale-150 transition-transform`} />
                          <span className="font-bold text-slate-700">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button onClick={onContactClick} className="w-fit px-10 py-5 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-violet-600 transition-colors shadow-xl">
                    {module.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Visual Section */}
      <section className="py-20 container-custom">
        <div ref={parallaxWrapperRef} className="relative h-[800px] rounded-[4rem] overflow-hidden border border-slate-100 shadow-2xl bg-slate-900">
          <img 
            ref={parallaxImgRef}
            src={image} 
            className="w-full h-[160%] object-cover absolute top-[-30%] left-0 will-change-transform brightness-75 contrast-125" 
            alt={title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute bottom-20 left-20"
          >
             <div className="text-[10px] font-black text-white/60 uppercase tracking-[1em] mb-4">Module Status: ACTIVE</div>
             <div className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none drop-shadow-2xl">Proven Solutions.</div>
          </motion.div>
        </div>
      </section>

      {/* Performance Section */}
      {performance && (
        <section className="py-40 bg-white border-t border-slate-50">
          <div className="container-custom">
            <div className="mb-24 flex flex-col items-center text-center">
              <span className="text-[10px] font-black text-violet-600 uppercase tracking-[0.8em] mb-4 block">Measurable Results</span>
              <h2 className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter">{performance.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {performance.stats.map((stat, i) => (
                <div key={i} className="p-14 bg-[#f8fafc] rounded-[3.5rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                   <div className="text-7xl font-black text-violet-600 mb-8 group-hover:scale-110 transition-transform origin-left">{stat.value}</div>
                   <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">{stat.label}</div>
                   <p className="text-slate-500 font-medium leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Global CTA */}
      <section className="py-64 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-48 bg-gradient-to-b from-slate-200 to-transparent" />
        <div className="container-custom text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[1.5em] mb-12 block">Grow With Us</span>
            <h2 className="text-8xl md:text-[11.5rem] font-black text-slate-950 tracking-tighter mb-24 leading-[0.8]">
              Ready to <br /><span className={accentColor}>Grow?</span>
            </h2>
            <button 
              onClick={onContactClick}
              className={`px-24 py-10 bg-slate-950 text-white rounded-[2rem] text-[11px] font-black uppercase tracking-[0.6em] hover:${accentBg} transition-all shadow-2xl shadow-slate-950/20 active:scale-95`}
            >
              Start My Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
