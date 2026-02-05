import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TechnicalModule } from '../../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  useCases?: string[];
  howItWorks?: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  commercials?: {
    title: string;
    table: { column1: string; column2: string; column3: string }[];
    terms: string[];
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
  infrastructureSection,
  useCases,
  howItWorks,
  commercials,
  comparison
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
    (e.target as HTMLImageElement).src = "/images/1497366216548.webp";
  };

  useLayoutEffect(() => {
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
      <div className="fixed top-32 left-0 right-0 z-[150] pointer-events-none">
        <div className="container-custom">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="pointer-events-auto flex items-center gap-4 group bg-white/60 backdrop-blur-2xl border border-white/50 px-6 py-3.5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] transition-[background-color,border-color,transform,box-shadow] duration-500 hover:bg-slate-950 hover:border-slate-950"
          >
            <div className="w-9 h-9 rounded-full bg-slate-950 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-violet-600">
              <svg className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-950 group-hover:text-white transition-colors duration-500">Back to Global</span>
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
          <img ref={parallaxImgRef} src={image} onError={handleImageError} className="w-full h-[140%] object-cover absolute top-[-20%] left-0 will-change-transform brightness-[0.7] transition-transform duration-1000 group-hover:scale-110" alt={`Visual representation of ${title}`} />

          {/* Low-transparency parallax overlay image */}
          <div
            ref={heroBackgroundParallaxRef}
            className="absolute inset-0 w-full h-full will-change-transform pointer-events-none"
            style={{
              backgroundImage: 'url(/images/1497366216548.webp)',
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
              <img ref={splitScrollImgRef} src={splitSection?.image || "/images/1556761175.webp"} onError={handleImageError} loading="lazy" className="w-full h-[130%] object-cover absolute top-0 left-0 will-change-transform" alt={splitSection?.title || "Strategic Perspective"} />
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
                  <img src={img} onError={handleImageError} loading="lazy" className="w-full h-full object-cover" alt={`${title} Showcase Focus ${i + 1}`} />
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
            src="/images/1497366216548.webp"
            className="w-full h-[130%] object-cover absolute top-[-15%] left-0 opacity-50 will-change-transform"
            alt={`${title} Operational Strategy Background`}
            loading="lazy"
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
            <div className="relative">
              {/* Subtle Left Accent */}
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
                <div className="mt-16 pt-16 border-t border-slate-100">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.6em] mb-8 block">Active Sectors</span>
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.05
                        }
                      }
                    }}
                    className="flex flex-wrap gap-4"
                  >
                    {industries.map((ind, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0, scale: 0.9 },
                          show: { opacity: 1, scale: 1 }
                        }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-black text-[10px] uppercase tracking-widest bg-white hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-[background-color,color,border-color,transform,box-shadow] duration-300 cursor-default shadow-sm hover:shadow-md will-change-transform"
                      >
                        {ind}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              )}
            </div>

            {/* Right Column - Delivery Map */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.6em]">Delivery Map</span>
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.2
                    }
                  }
                }}
                className="grid gap-5"
              >
                {deliverables.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      show: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ x: 4 }}
                    className="group relative bg-white border border-slate-100 rounded-2xl p-8 hover:border-violet-600 hover:shadow-lg transition-[border-color,box-shadow,transform] duration-300 will-change-transform"
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {challenge && (
        <section className="py-40 bg-[#020617] text-white relative overflow-hidden">
          {/* Brand-Aligned Ambient Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.08),transparent_70%)] opacity-50" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
            <motion.div
              animate={{ opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${accentBg} opacity-5 rounded-full blur-[120px]`}
            />
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Critical Status Header */}
              <div className="flex flex-col items-center text-center mb-24">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                >
                  <div className="relative flex items-center justify-center w-2 h-2">
                    <span className={`absolute w-full h-full rounded-full ${accentBg} animate-ping opacity-75`} />
                    <span className={`relative w-2 h-2 rounded-full ${accentBg} shadow-[0_0_8px_rgba(124,58,237,0.8)]`} />
                  </div>
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.8em]">Conflict Intelligence</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-8"
                >
                  The <span className={accentColor}>Friction</span> <br />
                  Holding you back.
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-400 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed"
                >
                  Traditional models are breaking. We've identified the core performance bottlenecks in your current market trajectory.
                </motion.p>
              </div>

              {/* Conflict Cards Grid */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.15
                    }
                  }
                }}
                className="grid gap-6"
              >
                {challenge.points.map((point, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.01, x: 10 }}
                    className="group relative"
                  >
                    <div className="relative flex flex-col md:flex-row gap-8 p-10 md:p-12 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] transition-[background-color,border-color,transform] duration-500 group-hover:bg-white/[0.05] group-hover:border-white/20 overflow-hidden">
                      {/* Scanline Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                      <div className="relative z-10 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-white/5 border border-white/10 shrink-0 group-hover:scale-110 transition-transform duration-500">
                        <span className={`text-2xl md:text-3xl font-black ${accentColor}`}>!</span>
                        {/* Orbiting Ring */}
                        <div className={`absolute inset-0 border-2 border-dashed ${colorScheme === 'violet' ? 'border-violet-500/30' : 'border-emerald-500/30'} rounded-3xl animate-[spin_8s_linear_infinite] opacity-0 group-hover:opacity-100`} />
                      </div>

                      <div className="relative z-10 flex-1">
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-3">Conflict Protocol #{i + 1}</div>
                        <p className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-white transition-colors duration-300">
                          {point}
                        </p>
                      </div>

                      <div className="relative z-10 flex items-center justify-end md:opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-500">
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Glow Underlay on Hover */}
                    <div className={`absolute -inset-1 bg-gradient-to-r from-violet-600/0 via-violet-600/10 to-violet-600/0 rounded-[3.5rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`} />
                  </motion.div>
                ))}
              </motion.div>


              <div className="mt-32 pt-32 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map(dot => (
                    <div key={dot} className={`w-2 h-2 rounded-full ${accentBg} opacity-20`} />
                  ))}
                </div>
                <div className="text-[10px] font-black text-white/5 uppercase tracking-[1em]">Protocol: Neutralize_Friction</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Performance / Market Opportunity Section */}
      {
        performance && (
          <section className="py-40 bg-zinc-950 text-white overflow-hidden relative">
            {/* Ambient Tech Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_70%)]" />
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-600/10 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container-custom relative z-10">
              <div className="text-center mb-32">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[10px] font-black text-violet-400 uppercase tracking-[1em] mb-8 block"
                >
                  Performance Data
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.8]"
                >
                  {performance.title}
                </motion.h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {performance.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10 }}
                    className="group relative p-12 rounded-[3.5rem] bg-white/5 border border-white/10 hover:border-violet-500/50 transition-[border-color,box-shadow,background-color] duration-500 backdrop-blur-sm overflow-hidden"
                  >
                    {/* Internal Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className={`text-7xl md:text-8xl font-black mb-8 tracking-tighter transition-transform duration-500 group-hover:scale-110 origin-left ${accentColor}`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-4 opacity-60">
                      {stat.label}
                    </div>
                    <p className="text-slate-400 font-medium leading-relaxed text-lg">
                      {stat.desc}
                    </p>

                    {/* Corner Accent */}
                    <div className="absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-violet-600 group-hover:scale-150 transition-transform" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )
      }

      {/* Use Cases Section */}
      {
        useCases && (
          <section className="py-40 bg-white overflow-hidden">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-24 items-start">
                <div className="sticky top-40">
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-[10px] font-black text-violet-600 uppercase tracking-[1em] mb-8 block"
                  >
                    Application Layer
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-black text-slate-950 tracking-tighter leading-[0.85] mb-12"
                  >
                    Common <br />
                    <span className={accentColor}>Use Cases.</span>
                  </motion.h2>
                  <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-sm">
                    Strategic deployments that drive immediate brand impact across every customer touchpoint.
                  </p>

                  {/* Visual Connector */}
                  <div className="mt-16 w-32 h-[2px] bg-slate-100 relative overflow-hidden">
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-violet-600/40"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-1 gap-6">
                  {useCases.map((useCase, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ x: 10 }}
                      className="p-10 bg-[#fafafa] rounded-[2.5rem] border border-slate-100 hover:border-violet-200 transition-[border-color,box-shadow,transform] group flex items-center gap-8 shadow-sm hover:shadow-xl hover:shadow-violet-500/5 cursor-default"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-violet-600 font-black text-xl group-hover:bg-violet-600 group-hover:text-white transition-[background-color,color] shadow-sm">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-violet-600 transition-colors">
                          {useCase}
                        </p>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )
      }

      {/* How It Works / Flow Section */}
      {
        howItWorks && (
          <section className="py-40 bg-white">
            <div className="container-custom">
              <div className="text-center mb-32">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[1em] mb-8 block">Operational Protocol</span>
                <h2 className="text-6xl md:text-[8rem] font-black text-slate-950 tracking-tighter leading-[0.8]">{howItWorks.title}</h2>
              </div>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-12 relative">
                {/* Connector line for desktop */}
                <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-slate-100 -z-10" />
                {howItWorks.steps.map((step, i) => (
                  <div key={i} className="space-y-8 relative">
                    <div className="w-20 h-20 rounded-[2rem] bg-slate-950 text-white flex items-center justify-center text-xl font-black shadow-xl ring-8 ring-white">
                      0{i + 1}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">{step.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      }

      {/* Commercials Section */}
      {
        commercials && (
          <section className="py-40 bg-slate-950 text-white rounded-[4rem] md:rounded-[6rem] mx-4 md:mx-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent pointer-events-none" />
            <div className="container-custom relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-24">
                  <span className="text-[10px] font-black text-violet-400 uppercase tracking-[1em] mb-8 block">Commercial Matrix</span>
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]">{commercials.title}</h2>
                </div>

                {/* Pricing Table */}
                <div className="overflow-hidden bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-md mb-20">
                  <div className="grid grid-cols-3 p-10 border-b border-white/10 bg-white/5">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message Volume</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Cost per Message (₹)</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Minimum Cost (₹)</div>
                  </div>
                  {commercials.table.map((row, i) => (
                    <div key={i} className="grid grid-cols-3 p-10 border-b last:border-0 border-white/10 items-center hover:bg-white/[0.02] transition-colors">
                      <div className="text-lg md:text-2xl font-bold tracking-tight">{row.column1}</div>
                      <div className="text-xl md:text-3xl font-black text-violet-400 tracking-tighter">{row.column2}</div>
                      <div className="text-lg md:text-2xl font-bold text-slate-300 tracking-tight">{row.column3}</div>
                    </div>
                  ))}
                </div>

                {/* Terms */}
                <div className="grid md:grid-cols-2 gap-12 p-4 md:p-0">
                  <div className="space-y-6">
                    <h3 className="text-sm font-black uppercase tracking-[0.4em] text-violet-400">Terms & Conditions</h3>
                    <div className="space-y-4">
                      {commercials.terms.map((term, i) => (
                        <div key={i} className="flex gap-4 items-start text-slate-400">
                          <div className="w-1 h-1 rounded-full bg-violet-500 mt-2 shrink-0" />
                          <p className="text-xs font-medium leading-relaxed">{term}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-black mb-4 tracking-tight">Need a Custom Plan?</h3>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">For volumes above 1,000,000 or specific regional audio requirements, let's build a dedicated model.</p>
                    </div>
                    <button onClick={onContactClick} className="mt-8 px-10 py-5 bg-white text-slate-950 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-violet-400 transition-colors">Request Custom Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      }

      {/* Comparison Section - The Competitive Edge */}
      {
        comparison && (
          <section className="py-40 bg-white">
            <div className="container-custom">
              <div className="text-center mb-24">
                <span className="text-[10px] font-black text-violet-500 uppercase tracking-[1em] mb-6 block">Competitive Edge</span>
                <h2 className="text-6xl md:text-[8rem] font-black text-slate-950 tracking-tighter leading-[0.8]">{comparison.title}</h2>
              </div>
              <div className="max-w-5xl mx-auto overflow-hidden rounded-[3rem] border border-slate-100 shadow-2xl bg-white">
                <div className="grid grid-cols-3 bg-slate-50 p-8 md:p-12 border-b border-slate-100">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Parameter</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Generic Agency</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-violet-600">The Sheermedia Edge</div>
                </div>
                {comparison.items.map((item, i) => (
                  <div key={i} className="grid grid-cols-3 p-8 md:p-12 border-b last:border-0 border-slate-100 items-center hover:bg-slate-50/50 transition-colors">
                    <div className="text-sm font-black text-slate-900 uppercase tracking-tight">{item.label}</div>
                    <div className="text-slate-500 font-bold">{item.generic}</div>
                    <div className="text-slate-950 font-black flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-violet-600" />
                      {item.sheermedia}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      }

      {/* Technical Modules Breakdown */}
      {
        technicalModules && technicalModules.length > 0 && (
          <section className="py-40 bg-[#020617] text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.1),transparent)] pointer-events-none" />
            <div className="container-custom relative z-10">
              <div className="mb-24">
                <span className="text-[10px] font-black text-violet-400 uppercase tracking-[1em] mb-8 block">Internal Architecture</span>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-12">Deep Tech <br />Transparency.</h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                {technicalModules.map((module, i) => (
                  <div key={i} className="p-12 bg-white/5 rounded-[3.5rem] border border-white/10 hover:border-violet-500/50 transition-[border-color,box-shadow] group backdrop-blur-xl">
                    <div className="flex justify-between items-start mb-12">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">{module.id}</div>
                      <div className="w-12 h-12 rounded-2xl bg-violet-600 flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform">
                        {i + 1}
                      </div>
                    </div>
                    <h3 className="text-4xl font-black mb-4 tracking-tighter">{module.title}</h3>
                    <div className="text-violet-400 font-bold text-lg mb-8 tracking-tight">{module.headline}</div>
                    <p className="text-slate-400 font-medium leading-relaxed mb-10 text-lg">{module.description}</p>
                    <div className="space-y-4 mb-12">
                      {module.points.map((p, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-sm font-bold text-slate-200">
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                          {p}
                        </div>
                      ))}
                    </div>
                    <button className="px-10 py-5 bg-white text-slate-950 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-violet-400 hover:text-white transition-all">
                      {module.cta}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      }

      {/* Final Execution CTA */}
      <section className="py-64 md:py-80 bg-white relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-64 md:h-80 bg-gradient-to-b from-slate-100 to-transparent" />
        <div className="container-custom text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
            <span className="text-[11px] md:text-[12px] font-black text-slate-400 uppercase tracking-[2em] mb-16 block translate-x-[1em]">Execution Ready</span>
            <h2 className="text-7xl md:text-[15rem] font-black text-slate-950 tracking-tighter mb-24 md:mb-32 leading-[0.7] group">
              Ready to <br /><span className={`${accentColor} group-hover:text-slate-950 transition-colors duration-700`}>Scale?</span>
            </h2>
            <motion.button whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} onClick={onContactClick} className={`px-24 md:px-32 py-12 bg-slate-950 text-white rounded-[2.5rem] md:rounded-[3rem] text-[12px] md:text-[13px] font-black uppercase tracking-[0.8em] hover:${accentBg} transition-[background-color,transform,box-shadow] shadow-2xl`}>
              Initialize Solution
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div >
  );
};
