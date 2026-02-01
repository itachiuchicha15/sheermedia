
import React from 'react';
import { motion, useMotionValue } from 'framer-motion';

interface Step {
  id: string;
  title: string;
  desc: string;
  kpi?: string;
  deliverable?: string;
  meta?: string;
}

export const ProtocolCard: React.FC<{ step: Step, index: number }> = ({ step, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative pt-24 pb-12 lg:pt-40 h-full cursor-default"
    >
      {/* Background Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-x-6 -inset-y-12 rounded-[3rem] opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(124, 58, 237, 0.05), transparent 80%)`,
        }}
      />

      {/* Progress Node */}
      <div className="absolute top-[3.5rem] left-0 hidden lg:block z-20">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 + (index * 0.1), type: "spring", stiffness: 200 }}
          className="relative w-4 h-4"
        >
          <div className="absolute inset-0 rounded-full bg-white border-2 border-slate-200 group-hover:border-violet-600 transition-all duration-500 shadow-sm" />
          <div className="absolute inset-0 rounded-full bg-violet-600 scale-0 group-hover:scale-50 transition-transform duration-500" />
          <motion.div 
            animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-2 rounded-full border border-violet-400 opacity-0 group-hover:opacity-100"
          />
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="space-y-8 flex-grow">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
               <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.5em]">Step 0{index + 1}</span>
               <div className="h-px w-6 bg-slate-100 group-hover:w-10 group-hover:bg-violet-200 transition-all duration-700"></div>
            </div>
            {step.meta && (
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded border border-slate-100 group-hover:border-violet-100 group-hover:text-violet-500 transition-colors">
                {step.meta}
              </span>
            )}
          </div>

          <h4 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter group-hover:text-violet-600 transition-colors duration-500 leading-none">
            {step.title}
          </h4>

          <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-[320px] group-hover:text-slate-900 transition-colors duration-500">
            {step.desc}
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 opacity-40 group-hover:opacity-100 transition-all duration-700">
            {step.kpi && (
              <div>
                <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Focus</div>
                <div className="text-[11px] font-black text-slate-950 uppercase tracking-tight">{step.kpi}</div>
              </div>
            )}
            {step.deliverable && (
              <div>
                <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Outcome</div>
                <div className="text-[11px] font-black text-slate-950 uppercase tracking-tight">{step.deliverable}</div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 overflow-hidden h-px w-full bg-slate-100 rounded-full">
          <motion.div 
            initial={{ x: '-100%' }}
            whileInView={{ x: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.2 }}
            className="h-full w-full bg-violet-600"
          />
        </div>
      </div>
    </motion.div>
  );
};
