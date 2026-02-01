
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProtocolCard } from './ProtocolCard';
import { BENEFITS_SECTION } from '../../constants';

const StackingCard = ({ item, index, total }: { item: any, index: number, total: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9]); 

  return (
    <div 
      ref={containerRef} 
      className="min-h-[70vh] flex items-start sticky top-40 mb-[5vh]"
    >
      <motion.div 
        style={{ 
          scale: index === total - 1 ? 1 : scale,
          opacity: index === total - 1 ? 1 : opacity,
          marginTop: `${index * 24}px`,
          zIndex: index
        }}
        className="relative w-full bg-[#0a0f1e] border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden group"
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="absolute inset-px rounded-[2.5rem] border border-white/5 pointer-events-none" />

        <div className="relative z-10 space-y-10">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-violet-600 flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.3)] group-hover:scale-110 transition-transform duration-500">
                <span className="text-white font-black text-xl">{index + 1}</span>
              </div>
              <div>
                <div className="text-[10px] font-black text-violet-500 uppercase tracking-[0.4em] mb-0.5">Key Advantage</div>
                <div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">ADVANTAGE_POINT_{index + 1}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Results</span>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] group-hover:text-violet-400 transition-colors duration-500">
              {item.t}
            </h4>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl">
              {item.d}
            </p>
          </div>

          <div className="pt-10 border-t border-white/5 flex items-center justify-between">
            <div className="flex gap-10">
              <div className="space-y-1">
                <div className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Standard</div>
                <div className="text-xs font-bold text-slate-300">Quality-Assured</div>
              </div>
              <div className="space-y-1">
                <div className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Reliability</div>
                <div className="text-xs font-bold text-slate-300">Certified</div>
              </div>
            </div>
            <div className="text-[9px] font-black text-slate-800 uppercase tracking-[0.3em] hidden md:block">
              Sheermedia Growth Partner
            </div>
          </div>
        </div>

        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-violet-600/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      </motion.div>
    </div>
  );
};

export const Benefits: React.FC = () => {
  const { badge, title, highlight, steps, whySheer } = BENEFITS_SECTION;
  const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <div id="benefits" className="bg-white">
      <section className="py-40 md:py-64 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.2] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-12 h-[1px] bg-violet-600"></span>
              <span className="text-[10px] font-black text-violet-600 uppercase tracking-[0.8em]">{badge}</span>
            </motion.div>
            <h2 className="text-7xl md:text-[10rem] font-black text-slate-950 tracking-tighter tight-heading">
              {title} <br /><span className="text-violet-600">{highlight}</span>
            </h2>
          </div>
          
          <div className="relative">
            <div className="absolute top-[3.9rem] left-0 right-0 h-[1px] bg-slate-100 hidden lg:block overflow-hidden">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="h-full w-[30%] bg-gradient-to-r from-transparent via-violet-500 to-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {steps.map((step, i) => (
                <ProtocolCard key={i} step={step} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="py-48 bg-slate-950 relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
            
            <div className="w-full lg:w-5/12 lg:sticky lg:top-48 lg:h-fit pb-20 px-2 z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[11px] font-black text-violet-500 uppercase tracking-[1em] mb-12 block">
                  {whySheer.badge}
                </span>
                
                <h2 className="text-[12vw] lg:text-[7.5rem] font-black text-white leading-[0.9] mb-16 tracking-tight">
                  {whySheer.title} <br />
                  <span className="text-violet-600 inline-block drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">
                    {whySheer.highlight}
                  </span>
                </h2>
                
                <div className="grid grid-cols-2 gap-10 border-t border-white/5 pt-16 max-w-sm">
                  {whySheer.stats.map((stat, i) => (
                    <div key={i} className="space-y-2 group">
                      <div className="text-5xl font-black text-white flex items-center gap-1 group-hover:text-violet-500 transition-colors">
                        {stat.value}
                        <span className="text-violet-600 text-2xl font-black">+</span>
                      </div>
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-7/12 relative space-y-0 z-10">
              {whySheer.reasons.map((item, i) => (
                <StackingCard 
                  key={i} 
                  item={item} 
                  index={i} 
                  total={whySheer.reasons.length} 
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
