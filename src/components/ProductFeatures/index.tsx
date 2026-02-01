
import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCT_FEATURES_DATA } from '../../constants';

interface FeatureProps {
  badge: string;
  title: string;
  subtitle: string;
  points: string[];
  image: string;
  isReversed?: boolean;
}

const FeatureSection: React.FC<FeatureProps> = ({ badge, title, subtitle, points, image, isReversed }) => (
  <section className="py-32 bg-white">
    <div className="container-custom">
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20 lg:gap-32`}>
        <div className="w-full lg:w-1/2">
          <div className="text-[10px] font-black text-violet-600 uppercase tracking-[0.5em] mb-8 block">
            {badge}
          </div>
          <h3 className="text-5xl md:text-7xl font-black text-slate-950 leading-tight mb-8 tracking-tighter">
            {title}
          </h3>
          <p className="text-lg md:text-xl text-slate-400 font-medium mb-12 leading-relaxed">
            {subtitle}
          </p>

          <div className="space-y-6">
            {points.map((point, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-2 h-2 bg-violet-600 rounded-full shrink-0 group-hover:scale-150 transition-transform"></div>
                <span className="text-slate-700 font-bold text-lg leading-none">{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative rounded-[2.5rem] border border-slate-100 overflow-hidden bg-slate-50 aspect-[4/3] shadow-inner">
            <motion.img
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={image}
              alt={title}
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              onError={(e) => {
                // Fallback to a solid color or a very reliable placeholder if needed
                (e.target as HTMLImageElement).src = '/images/1557200134.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

interface ProductFeaturesProps {
  onContactClick: () => void;
}

export const ProductFeatures: React.FC<ProductFeaturesProps> = ({ onContactClick }) => {
  return (
    <div id="products">
      {PRODUCT_FEATURES_DATA.map((feature, idx) => (
        <FeatureSection key={idx} {...feature} />
      ))}
    </div>
  );
};
