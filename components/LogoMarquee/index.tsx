
import React from 'react';
import { motion } from 'framer-motion';
import { CLIENT_LOGOS } from '../../constants';

export const LogoMarquee: React.FC = () => {
  // We repeat the logos multiple times to ensure the track is always full and seamless
  const marqueeLogos = Array(6).fill(CLIENT_LOGOS).flat();

  return (
    <section className="py-20 bg-white overflow-hidden border-y border-slate-50 relative">
      <div className="relative flex items-center overflow-hidden">
        {/* Modern Edge Fading for a premium feel */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex whitespace-nowrap items-center"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {marqueeLogos.map((logo, idx) => (
            <div key={idx} className="flex items-center">
              <span className="text-4xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter hover:text-violet-600 transition-colors cursor-default px-12 md:px-20">
                {logo}
              </span>
              {/* Branded Purple Dot Separator as seen in reference image */}
              <div className="w-2.5 h-2.5 rounded-full bg-violet-600 shrink-0 mx-4 opacity-40" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
