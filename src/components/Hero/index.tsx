
import React from 'react';
import { motion } from 'framer-motion';
import { MinimalText } from '../UI/MinimalText';
import { HERO_CONTENT } from '../../constants';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative min-h-screen grid-bg flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="container-custom text-center relative z-10">

        {/* World-Class Frosted Glass Badge - High Visibility Revision */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-slate-50/90 backdrop-blur-2xl border border-slate-300 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)] relative overflow-hidden group"
        >
          {/* Subtle Shimmer Effect */}
          <motion.div
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 2
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-25deg] pointer-events-none opacity-40"
          />

          {/* Living Protocol Indicator */}
          <div className="relative flex items-center justify-center w-2.5 h-2.5">
            <span className="absolute w-full h-full rounded-full bg-violet-600/30 animate-ping" />
            <span className="relative w-1.5 h-1.5 rounded-full bg-violet-600 shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
          </div>

          <span className="text-[10px] font-black uppercase tracking-[0.55em] text-slate-600 relative z-10">
            {HERO_CONTENT.badge}
          </span>
        </motion.div>

        {HERO_CONTENT.headlines.map((text, i) => (
          <MinimalText
            key={i}
            delay={i * 0.1}
            text={text}
            as={i === 0 ? 'h1' : 'h2'}
            className="text-[clamp(3.5rem,8.5vw,9rem)] font-black text-slate-950 tight-heading mb-4 tracking-tighter"
          />
        ))}

        <div className="text-[clamp(3.5rem,8.5vw,9rem)] font-black text-slate-950 tight-heading mb-16 tracking-tighter">
          <span className="text-violet-600">{HERO_CONTENT.highlight}</span>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xl md:text-2xl text-slate-400 leading-tight mb-20 max-w-3xl mx-auto font-medium"
        >
          {HERO_CONTENT.description}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            onClick={onContactClick}
            className="px-12 py-6 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-violet-600 transition-[background-color,transform,box-shadow] shadow-xl active:scale-95"
          >
            {HERO_CONTENT.primaryCTA}
          </button>
          <button
            onClick={onContactClick}
            className="px-12 py-6 bg-white text-slate-950 border border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:border-violet-600 transition-[border-color,transform,box-shadow] active:scale-95"
          >
            {HERO_CONTENT.secondaryCTA}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
