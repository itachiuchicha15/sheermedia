
import React, { useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

interface IdentityCardProps {
  id: string;
  title: string;
  description: string;
  iconType?: string;
}

const Icons = {
  ai: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7l3 3 3-3" />
    </svg>
  ),
  whatsapp: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  ads: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  web: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  default: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  )
};

export const IdentityCard: React.FC<IdentityCardProps> = ({ id, title, description, iconType }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const IconComponent = Icons[iconType as keyof typeof Icons] || Icons.default;

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: parseInt(id) * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(124, 58, 237, 0.15), transparent 40%)`,
        }}
      />

      <div className={`relative h-full spotlight-card p-10 rounded-[2.5rem] flex flex-col justify-between border transition-all duration-700 overflow-hidden ${
        isHovered 
        ? 'bg-white border-violet-200 shadow-[0_30px_60px_-15px_rgba(124,58,237,0.1)]' 
        : 'bg-[#fafafa]/50 border-slate-100 shadow-sm'
      }`}>
        <div className={`absolute -right-4 -top-4 w-32 h-32 rounded-full blur-3xl transition-colors duration-700 ${isHovered ? 'bg-violet-100/50' : 'bg-transparent'}`} />

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-12">
             <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
               isHovered ? 'bg-violet-600 text-white scale-110 shadow-lg shadow-violet-200' : 'bg-white text-slate-400 border border-slate-100 shadow-sm'
             }`}>
               <IconComponent />
             </div>
             <span className={`text-[10px] font-black font-mono tracking-widest transition-colors duration-500 ${isHovered ? 'text-violet-300' : 'text-slate-300'}`}>
               MOD_{id}
             </span>
          </div>

          <h4 className={`text-3xl font-black leading-[1.1] tracking-tighter mb-4 transition-all duration-500 ${isHovered ? 'text-slate-950 translate-x-1' : 'text-slate-900'}`}>
            {title}
          </h4>
          <p className={`text-sm font-medium leading-relaxed transition-colors duration-500 ${isHovered ? 'text-slate-600' : 'text-slate-400'}`}>
            {description}
          </p>
        </div>

        <div className="relative z-10 mt-12 overflow-hidden">
           <div className={`h-[2px] w-full bg-slate-100 rounded-full overflow-hidden`}>
             <motion.div 
               animate={{ x: isHovered ? '0%' : '-100%' }}
               transition={{ duration: 0.6, ease: "circOut" }}
               className="h-full w-full bg-violet-600"
             />
           </div>
        </div>
      </div>
    </motion.div>
  );
};
