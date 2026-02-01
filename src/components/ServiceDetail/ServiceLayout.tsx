
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
  splitSection?: {
    badge: string;
    title: string;
    description: string;
    image: string;
    stats: { label: string; value: string }[];
  };
  gallerySection?: {
    badge: string;
    title: string;
    description: string;
    images: string[];
  };
  infrastructureSection?: {
    title: string;
    image: string;
    cta: string;
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
  challenge,
  splitSection,
  gallerySection,
  infrastructureSection
}) => {
  const accentColor = colorScheme === "violet" ? "text-violet-600" : "text-emerald-500";
  const accentBg = colorScheme === "violet" ? "bg-violet-600" : "bg-emerald-500";

  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxImgRef = useRef<HTMLImageElement>(null);
  const parallaxWrapperRef = useRef<HTMLDivElement>(null);
  const heroBackgroundParallaxRef = useRef<HTMLDivElement>(null);
  const secondaryParallaxRef = useRef<HTMLDivElement>(null);
  const secondaryImgRef = useRef<HTMLImageElement>(null);
  const splitScrollImgRef = useRef<HTMLImageElement>(null);
  const strategyParallaxRef = useRef<HTMLDivElement>(null);
  const strategyImgRef = useRef<HTMLImageElement>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).src = "/images/1497366216548.jpg";
  };

  useLayoutEffect(() => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Hero Background Parallax Layer - Slower movement for depth
      if (heroBackgroundParallaxRef.current && parallaxWrapperRef.current) {
        gsap.to(heroBackgroundParallaxRef.current, {
          y: isMobile ? "8%" : "20%",
          ease: "none",
          scrollTrigger: {
            trigger: parallaxWrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        });
      }

      // Primary Hero Image Parallax
      if (parallaxImgRef.current && parallaxWrapperRef.current) {
        gsap.to(parallaxImgRef.current, {
          y: isMobile ? "5%" : "15%",
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: parallaxWrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }

      // Infrastructure Section Parallax
      if (secondaryImgRef.current && secondaryParallaxRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: secondaryParallaxRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });

        tl.fromTo(secondaryImgRef.current,
          { y: "-10%", scale: 1.2 },
          { y: "10%", scale: 1, ease: "none" }
        );

        gsap.fromTo(".scaling-text",
          { y: 100, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: { trigger: secondaryParallaxRef.current, start: "top 60%" }
          }
        );
      }

      // Split Scroll Image
      if (splitScrollImgRef.current) {
        gsap.to(splitScrollImgRef.current, {
          yPercent: isMobile ? -3 : -10,
          ease: "none",
          scrollTrigger: {
            trigger: splitScrollImgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }

      // Depth Gallery with proper responsive offsets
      const galleryItems = document.querySelectorAll(".gallery-item");
      if (galleryItems.length > 0) {
        galleryItems.forEach((item, i) => {
          const depth = (i + 1) * 40;
          gsap.to(item, {
            y: i % 2 === 0 ? -depth : depth,
            rotate: i % 2 === 0 ? -1.5 : 1.5,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5 + (i * 0.1)
            }
          });
        });
      }

      // Strategy Section Background Parallax
      if (strategyImgRef.current && strategyParallaxRef.current) {
        gsap.to(strategyImgRef.current, {
          y: isMobile ? "10%" : "25%",
          ease: "none",
          scrollTrigger: {
            trigger: strategyParallaxRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [technicalModules, gallerySection, splitSection, infrastructureSection]);

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* Back to Home Navigation - Enhanced for better visibility and alignment */}
      <div className="fixed top-24 left-0 right-0 z-[150] pointer-events-none">
        <div className="container-custom">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="pointer-events-auto flex items-center gap-4 group bg-white/40 backdrop-blur-xl border border-slate-200/50 px-6 py-3 rounded-2xl shadow-sm transition-all hover:bg-slate-950 hover:border-slate-950 group"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-950 transition-all group-hover:bg-violet-600 group-hover:text-white">
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 group-hover:text-white transition-colors">Back to Home</span>
          </motion.button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-56 pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-2/3 h-[900px] bg-gradient-to-l from-slate-50 to-transparent pointer-events-none -z-10" />
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-10">
            <span className="text-[10px] font-black text-violet-500 uppercase tracking-[0.8em]">{subtitle || "CORE_SERVICE"}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-end">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-[9.5rem] font-black text-slate-950 tracking-tighter leading-[0.82] mb-12">
                {title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 0 ? "text-slate-950" : `${accentColor} block lg:inline`}>{word}{' '}</span>
                ))}
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-2xl md:text-4xl text-slate-500 font-medium leading-tight max-xl">
                {description}
              </motion.p>
            </div>

            <div className="flex flex-wrap gap-16 lg:pb-12">
              {impacts.map((impact, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.1 }} className="space-y-1">
                  <div className="text-5xl font-black text-slate-950">{impact.value}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{impact.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Primary Parallax Feature */}
      <section className="container-custom pb-40">
        <div ref={parallaxWrapperRef} className="relative h-[65vh] md:h-[85vh] rounded-[3.5rem] md:rounded-[5rem] overflow-hidden border border-slate-100 shadow-2xl bg-slate-900 group">
          {/* Main background image */}
          <img ref={parallaxImgRef} src={image} onError={handleImageError} className="w-full h-[140%] object-cover absolute top-[-20%] left-0 will-change-transform brightness-[0.7] transition-transform duration-1000 group-hover:scale-110" alt={title} />

          {/* Low-transparency parallax overlay image */}
          <div
            ref={heroBackgroundParallaxRef}
            className="absolute inset-0 w-full h-full will-change-transform pointer-events-none"
            style={{
              backgroundImage: 'url(/images/1497366216548.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.2,
              mixBlendMode: 'overlay'
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/20 pointer-events-none" />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ margin: "-100px" }} className="absolute bottom-12 md:bottom-24 left-8 md:left-24 max-w-2xl">
            <div className="text-[10px] font-black text-white/50 uppercase tracking-[1.2em] mb-6">DEPLOYMENT_STATUS: ACTIVE</div>
            <div className="text-5xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.8] mb-8">Architected <br />Success.</div>
            <p className="text-white/60 text-lg md:text-xl font-medium max-w-md hidden md:block">Engineered for absolute market dominance and sustainable growth loops.</p>
          </motion.div>
        </div>
      </section>

      {/* Split Parallax Content Section */}
      <section className="py-40 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative h-[500px] md:h-[800px] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-xl">
              <img ref={splitScrollImgRef} src={splitSection?.image || "/images/1556761175.jpg"} onError={handleImageError} className="w-full h-[130%] object-cover absolute top-0 left-0 will-change-transform" alt="Analysis" />
              <div className={`absolute inset-0 ${accentBg}/10 mix-blend-multiply`} />
            </div>
            <div className="space-y-12 lg:pl-12">
              <span className="text-[10px] font-black text-violet-500 uppercase tracking-[1em] block">{splitSection?.badge || "Data Engineering"}</span>
              <h2 className="text-6xl md:text-[6.5rem] font-black text-slate-950 tracking-tighter leading-[0.85]">{splitSection?.title.split(' ').map((w, i) => i === 0 ? <React.Fragment key={i}>{w} <br /></React.Fragment> : <span key={i} className={accentColor}>{w} </span>) || "Why This Works."}</h2>
              <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed">
                {splitSection?.description || "We architect growth systems that combine internal AI models with elite design to create high-conversion performance cycles."}
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                {splitSection?.stats.map((stat, i) => (
                  <div key={i} className="p-10 bg-[#fafafa] rounded-[2rem] border border-slate-100 shadow-sm">
                    <div className="text-4xl font-black text-slate-950 mb-2 tracking-tighter">{stat.value}</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Redesigned for world-class alignment */}
      <section className="py-40 md:py-64 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center relative">
            <div className="z-20 relative">
              <span className="text-[10px] font-black text-violet-500 uppercase tracking-[1em] mb-8 block">{gallerySection?.badge || "Visual Performance"}</span>
              <h2 className="text-7xl md:text-[9.5rem] font-black text-slate-950 tracking-tighter leading-[0.8] mb-12">
                {gallerySection?.title.split(' ').map((w, i) => (
                  <span key={i} className={i === 1 ? accentColor : "text-slate-950"}>{w} <br /></span>
                )) || "High Res Reality."}
              </h2>
              <p className="text-slate-500 text-2xl md:text-3xl font-medium leading-tight max-w-lg mb-10">{gallerySection?.description || "Managed execution manifests as undeniable brand growth."}</p>
              <div className="flex gap-4">
                <div className={`w-12 h-1 ${accentBg} rounded-full`} />
                <div className="w-12 h-1 bg-slate-100 rounded-full" />
              </div>
            </div>
            <div className="relative h-[600px] md:h-[900px] flex items-center justify-center pointer-events-none">
              {gallerySection?.images.map((img, i) => (
                <div key={i} className={`gallery-item absolute rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-100 will-change-transform ${i === 0 ? 'top-0 left-0 w-64 md:w-80 h-[450px] md:h-[650px] z-10' :
                  i === 1 ? 'bottom-0 right-0 w-72 md:w-[420px] h-[350px] md:h-[550px] z-20 rounded-[4rem]' :
                    'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-72 h-48 md:h-72 rounded-full z-30 border-[20px] border-white hidden md:block'
                  }`}>
                  <img src={img} onError={handleImageError} className="w-full h-full object-cover" alt={`Focus ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Strategy Section - Aligned with Website Theme */}
      <section ref={strategyParallaxRef} className="py-32 md:py-48 bg-white relative overflow-hidden">
        {/* Parallax Background Image with Low Transparency */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={strategyImgRef}
            src="/images/1497366216548.jpg"
            alt="Background"
            className="w-full h-[130%] object-cover absolute top-[-15%] left-0 opacity-50 will-change-transform grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/70" />
        </div>

        {/* Minimal Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="max-w-5xl mx-auto text-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="w-12 h-[1px] bg-violet-600" />
              <span className="text-[10px] font-black text-violet-600 uppercase tracking-[0.6em]">How We Execute</span>
              <span className="w-12 h-[1px] bg-violet-600" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-[6rem] font-black text-slate-950 tracking-tighter leading-[0.9] mb-8"
            >
              Strategy meets <br />
              <span className="text-violet-600">Execution.</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            {/* Left Column - Operational Model */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Subtle Left Accent */}
              <div className="absolute -left-8 top-0 w-[2px] h-32 bg-gradient-to-b from-violet-600 to-transparent rounded-full" />

              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-violet-600 uppercase tracking-[0.6em]">Operational Model</span>
                </div>

                <p className="text-2xl md:text-[2.75rem] font-bold text-slate-950 tracking-tight leading-[1.15]">
                  {fullDescription}
                </p>
              </div>

              {industries && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mt-16 pt-16 border-t border-slate-100"
                >
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.6em] mb-8 block">Active Sectors</span>
                  <div className="flex flex-wrap gap-4">
                    {industries.map((ind, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-black text-[10px] uppercase tracking-widest bg-white hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all cursor-default shadow-sm hover:shadow-md"
                      >
                        {ind}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Right Column - Delivery Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.6em]">Delivery Map</span>
              </div>

              <div className="grid gap-5">
                {deliverables.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="group relative bg-white border border-slate-100 rounded-2xl p-8 hover:border-violet-600 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                    <div className="relative flex items-center gap-5">
                      {/* Animated Dot */}
                      <div className="relative shrink-0">
                        <div className={`w-2.5 h-2.5 rounded-full ${accentBg} group-hover:scale-125 transition-transform shadow-sm`} />
                      </div>

                      {/* Text */}
                      <span className="text-slate-700 group-hover:text-slate-950 font-bold text-lg md:text-xl tracking-tight transition-colors flex-1">
                        {item}
                      </span>

                      {/* Arrow */}
                      <svg
                        className="w-5 h-5 text-violet-600 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Accent */}
              <div className="flex items-center gap-3 pt-8">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-violet-600 to-transparent rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Execution CTA */}
      <section className="py-64 md:py-80 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-64 md:h-80 bg-gradient-to-b from-slate-100 to-transparent" />
        <div className="container-custom text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
            <span className="text-[11px] md:text-[12px] font-black text-slate-400 uppercase tracking-[2em] mb-16 block translate-x-[1em]">Execution Ready</span>
            <h2 className="text-7xl md:text-[15rem] font-black text-slate-950 tracking-tighter mb-24 md:mb-32 leading-[0.7] group">
              Ready to <br /><span className={`${accentColor} group-hover:text-slate-950 transition-colors duration-700`}>Scale?</span>
            </h2>
            <motion.button whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} onClick={onContactClick} className={`px-24 md:px-32 py-12 bg-slate-950 text-white rounded-[2.5rem] md:rounded-[3rem] text-[12px] md:text-[13px] font-black uppercase tracking-[0.8em] hover:${accentBg} transition-all shadow-2xl`}>
              Initialize Solution
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
