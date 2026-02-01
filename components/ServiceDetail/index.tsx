
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceDetailProps {
  service: {
    slug: string;
    title: string;
    details: {
      subtitle: string;
      description: string;
      capabilities: { title: string; desc: string }[];
      process: { step: string; label: string; detail: string }[];
      outcomes: { label: string; value: string }[];
    };
    img: string;
  };
  onContactClick: () => void;
  onBack: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onContactClick, onBack }) => {
  const { details } = service;

  return (
    <div className="bg-white min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 overflow-hidden">
        <div className="container-custom">
          <div className="max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <button onClick={onBack} className="text-violet-600 hover:text-violet-700 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group">
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
                Core Protocol
              </button>
              <span className="w-8 h-px bg-slate-100"></span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.8em]">{details.subtitle}</span>
            </motion.div>
            
            <h1 className="text-7xl md:text-[11rem] font-black text-slate-950 tracking-tighter leading-[0.85] mb-12">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i === 0 ? "text-slate-950" : "text-violet-600 block md:inline"}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              <p className="text-xl md:text-3xl text-slate-500 font-medium leading-tight lg:w-2/3">
                {details.description}
              </p>
              
              <div className="lg:w-1/3 flex flex-wrap gap-10">
                {details.outcomes.map((outcome, i) => (
                  <div key={i} className="space-y-2">
                    <div className="text-5xl font-black text-slate-950">{outcome.value}</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{outcome.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprints / Capabilities Grid */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-violet-600/5 blur-[120px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="mb-20">
            <span className="text-[10px] font-black text-violet-600 uppercase tracking-[1em] mb-4 block">Capabilities Matrix</span>
            <h2 className="text-5xl font-black text-slate-950 tracking-tighter">Engineered <span className="text-slate-300">Excellence.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {details.capabilities.map((cap, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-violet-600 mb-8 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  <span className="font-black font-mono text-sm">0{i+1}</span>
                </div>
                <h4 className="text-2xl font-black text-slate-950 mb-4 tracking-tight">{cap.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Resolution Media */}
      <section className="py-20 container-custom">
        <div className="relative h-[600px] rounded-[4rem] overflow-hidden">
          <img src={service.img} className="w-full h-full object-cover" alt={service.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
          <div className="absolute bottom-16 left-16">
             <div className="text-[10px] font-black text-white/60 uppercase tracking-[1em] mb-4">Live Module</div>
             <div className="text-4xl font-black text-white tracking-tighter">Execution in Progress.</div>
          </div>
        </div>
      </section>

      {/* Specific Protocol / Timeline */}
      <section className="py-48 bg-white">
        <div className="container-custom">
           <div className="grid lg:grid-cols-12 gap-20">
              <div className="lg:col-span-4">
                 <span className="text-[10px] font-black text-violet-600 uppercase tracking-[1em] mb-8 block">Execution Protocol</span>
                 <h2 className="text-6xl font-black text-slate-950 tracking-tighter mb-8 leading-[0.85]">The <br />Roadmap.</h2>
                 <p className="text-slate-500 text-lg font-medium leading-relaxed">
                   Our deployment lifecycle is refined for speed and precision, ensuring maximum uptime and market resonance.
                 </p>
              </div>
              <div className="lg:col-span-8 space-y-12">
                {details.process.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-10 items-start pb-12 border-b border-slate-100 last:border-0"
                  >
                    <div className="text-7xl font-black text-slate-100 font-mono leading-none">{step.step}</div>
                    <div>
                      <h4 className="text-2xl font-black text-slate-950 uppercase tracking-widest mb-4">{step.label}</h4>
                      <p className="text-slate-500 text-lg font-medium">{step.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Service specific CTA */}
      <section className="py-32 bg-slate-950">
        <div className="container-custom text-center">
          <span className="text-[10px] font-black text-violet-500 uppercase tracking-[1.5em] mb-12 block">Initialize This Solution</span>
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-16 leading-[0.85]">
            Ready to deploy <br /><span className="text-violet-600">{service.title}?</span>
          </h2>
          <button 
            onClick={onContactClick}
            className="px-16 py-8 bg-violet-600 text-white rounded-[2rem] text-[10px] font-black uppercase tracking-[0.6em] hover:bg-white hover:text-slate-950 transition-all shadow-2xl shadow-violet-600/20"
          >
            Deploy This Module
          </button>
        </div>
      </section>
    </div>
  );
};
