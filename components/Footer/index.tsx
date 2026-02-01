
import React from 'react';
import { BRAND_NAME, SECURE_LINE, ENCRYPTED_MAIL, NAV_LINKS, FOOTER_CONTENT } from '../../constants';
import { Logo } from '../UI/Logo';

export const Footer: React.FC = () => {
  const { backgroundTitle, description, navTitle, contactTitle, secureLineLabel, encryptedMailLabel, legal } = FOOTER_CONTENT;

  return (
    <footer className="bg-slate-950 pt-48 pb-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.02]">
        <h2 className="text-[25vw] font-black text-white leading-none tracking-tighter">{backgroundTitle}</h2>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 pb-24">
          
          <div className="lg:col-span-5 space-y-12">
             <div className="flex flex-col items-start gap-4">
                {/* Inverted set to true for visibility on slate-950 */}
                <Logo className="h-16 text-white opacity-90" inverted={true} />
                <p className="text-slate-500 max-w-sm text-xl font-medium leading-relaxed">
                  {description}
                </p>
             </div>
          </div>
          
          <div className="lg:col-span-2">
            <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-violet-400 mb-10">{navTitle}</h5>
            <ul className="space-y-6">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-400 hover:text-white font-bold text-sm tracking-tight transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-4 h-[2px] bg-violet-600 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
              <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-violet-400 mb-8">{contactTitle}</h5>
              <div className="space-y-6">
                <div>
                  <div className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1">{secureLineLabel}</div>
                  <a href={`tel:${SECURE_LINE.replace(/\s/g, '')}`} className="text-white font-bold text-lg hover:text-violet-400 transition-colors">{SECURE_LINE}</a>
                </div>
                <div>
                  <div className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1">{encryptedMailLabel}</div>
                  <a href={`mailto:${ENCRYPTED_MAIL}`} className="text-white font-bold text-lg hover:text-violet-400 transition-colors">{ENCRYPTED_MAIL}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.6em]">{legal.copyright}</p>
          <div className="flex space-x-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
            {legal.links.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
