
import React, { useRef } from 'react';
import { 
  motion, 
  useScroll, 
  useSpring, 
  useTransform, 
  useVelocity, 
  useAnimationFrame,
  useMotionValue
} from 'framer-motion';
import { wrap } from 'framer-motion';
import { CLIENT_LOGOS } from '../../constants';

interface MarqueeProps {
  baseVelocity: number;
}

const VelocityMarquee: React.FC<MarqueeProps> = ({ baseVelocity = 5 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex whitespace-nowrap flex-nowrap overflow-hidden">
      <motion.div className="flex whitespace-nowrap flex-nowrap items-center py-4" style={{ x }}>
        {Array(4).fill(CLIENT_LOGOS).flat().map((logo, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter hover:text-violet-600 transition-all duration-500 cursor-default px-10 md:px-16 select-none leading-none scale-y-105">
              {logo}
            </span>
            <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-violet-600 shrink-0 mx-2 md:mx-6 shadow-[0_0_15px_rgba(124,58,237,0.4)]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const LogoMarquee: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden border-y border-slate-50 relative group">
      {/* Ambient Background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-violet-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom mb-16">
        <div className="flex flex-col items-start">
           <span className="text-[10px] font-black text-violet-600 uppercase tracking-[0.8em] mb-4 block">Our Partners</span>
           <h3 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tighter">Trusted by Industry Leaders.</h3>
        </div>
      </div>

      <div className="relative flex items-center overflow-hidden h-32 md:h-48">
        {/* Edge Fading */}
        <div className="absolute inset-y-0 left-0 w-40 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <VelocityMarquee baseVelocity={-2} />
      </div>
      
      {/* Decorative Border */}
      <div className="container-custom mt-12 flex justify-end">
        <div className="w-32 h-[1px] bg-slate-100 relative overflow-hidden">
          <motion.div 
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-600 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};
