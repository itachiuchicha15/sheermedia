
import React from 'react';
import { ServiceCard } from './ServiceCard';
import { SERVICES_SECTION } from '../../constants';

interface ServicesProps {
  onServiceClick?: (slug: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-violet-600"></span>
              <span className="text-[10px] font-black text-violet-600 uppercase tracking-[0.6em]">{SERVICES_SECTION.badge}</span>
            </div>
            <h2 className="text-5xl md:text-[5rem] font-black text-slate-950 tracking-tighter leading-[0.85]">
              {SERVICES_SECTION.title[0]} <br />
              <span className="text-violet-600">{SERVICES_SECTION.title[1]}</span>
            </h2>
          </div>
          <p className="text-slate-400 font-medium text-lg max-w-[280px] leading-tight pb-2 border-b-2 border-slate-50 italic">
            "{SERVICES_SECTION.quote}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_SECTION.items.map((service, i) => (
            <ServiceCard 
              key={i} 
              service={service as any} 
              index={i} 
              onClick={() => onServiceClick?.(service.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
