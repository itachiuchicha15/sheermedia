
import React from 'react';
import { IdentityCard } from './IdentityCard';
import { IDENTITY_CARDS, IDENTITY_SECTION } from '../../constants';

export const IdentityGrid: React.FC = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="container-custom">
        <div className="mb-20">
           <span className="text-[10px] font-black text-violet-600 uppercase tracking-[0.8em] mb-4 block">
             {IDENTITY_SECTION.badge}
           </span>
           <h3 className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter">
             {IDENTITY_SECTION.title} <span className="text-slate-300">{IDENTITY_SECTION.highlight}</span>
           </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {IDENTITY_CARDS.map((card) => (
            <IdentityCard 
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
