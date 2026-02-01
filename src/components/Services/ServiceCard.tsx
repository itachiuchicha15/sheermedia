
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  slug: string;
  title: string;
  points: string[];
  img: string;
}

export const ServiceCard: React.FC<{ service: Service, index: number, onClick?: () => void }> = ({ service, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      className="group relative h-[380px] w-full rounded-3xl overflow-hidden bg-slate-100 transition-all duration-500 shadow-sm cursor-pointer"
    >
      <motion.img 
        animate={{ 
          scale: isHovered ? 1.06 : 1,
          filter: isHovered ? 'brightness(0.7)' : 'brightness(0.95)' 
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src={service.img} 
        alt={service.title} 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      
      {/* Visual Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/60 opacity-60 group-hover:opacity-20 transition-opacity duration-500" />

      <motion.div 
        initial={false}
        animate={{ 
          height: isHovered ? '70%' : '32%',
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 w-full bg-[#7c3aed] flex flex-col justify-center px-6 pt-8 pb-6 z-10"
        style={{
          clipPath: 'polygon(0 8%, 100% 0%, 100% 100%, 0% 100%)'
        }}
      >
        <div className="relative z-20">
          <div className="flex items-center justify-between gap-4">
            <h4 className={`text-xl font-black text-white leading-tight tracking-tighter transition-all duration-300 ${isHovered ? 'mb-4' : 'mb-0'}`}>
              {service.title}
            </h4>
            <motion.div 
              animate={{ rotate: isHovered ? 45 : 0 }}
              className="text-white opacity-40 group-hover:opacity-100 shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </motion.div>
          </div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 2 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-center gap-2 text-[11px] font-bold text-white/90"
                    >
                      <div className="w-1 h-1 rounded-full bg-white/40 shrink-0" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-white/10">
                   <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.3em]">Explore Module</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};
