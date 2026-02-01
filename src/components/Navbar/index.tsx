
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../constants';
import { Logo } from '../UI/Logo';

interface NavbarProps {
  onContactClick: () => void;
  onHomeClick: () => void;
  isHome?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, onHomeClick, isHome = true }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[160] transition-all duration-700 px-6 py-6 ${scrolled ? 'pt-4' : 'pt-8'}`}>
        <div className={`max-w-[1600px] mx-auto transition-all duration-700 relative ${scrolled ? 'scale-[0.99]' : 'scale-100'}`}>
          <div className={`relative flex items-center justify-between px-10 transition-all duration-700 rounded-full border ${
            scrolled 
            ? 'bg-white/80 backdrop-blur-xl border-slate-200/40 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] h-16' 
            : 'bg-transparent border-transparent h-20'
          }`}>
            
            {/* Brand Logo - Left Aligned */}
            <div onClick={onHomeClick} className="flex items-center cursor-pointer group shrink-0">
              <Logo className={`h-10 md:h-11 transition-all duration-500 ${scrolled ? 'text-slate-950' : 'text-slate-950'}`} />
            </div>

            {/* Navigation Links - Always Show Global Nav */}
            <div className="hidden lg:flex items-center space-x-2">
              {NAV_LINKS.map((item) => (
                <a 
                  key={item.name} 
                  href={isHome ? item.href : `/#${item.href.replace('#', '')}`}
                  onClick={(e) => {
                    if (!isHome) {
                      e.preventDefault();
                      onHomeClick();
                      // Small delay to allow transition back home before scrolling
                      setTimeout(() => {
                        const el = document.querySelector(item.href);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                  className={`px-8 py-2 text-[10px] font-black uppercase tracking-[0.45em] transition-all duration-500 relative group overflow-hidden ${
                    scrolled ? 'text-slate-400 hover:text-slate-950' : 'text-slate-400 hover:text-slate-950'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <motion.span 
                    className="absolute bottom-0 left-8 right-8 h-[1.5px] bg-violet-600 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={onContactClick}
                className={`hidden md:flex px-10 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.45em] transition-all duration-700 shadow-lg ${
                  scrolled 
                  ? 'bg-slate-950 text-white hover:bg-violet-600 shadow-slate-950/10' 
                  : 'bg-slate-950 text-white hover:bg-violet-600 hover:-translate-y-0.5 shadow-slate-950/20'
                }`}
              >
                Get Started
              </button>
              
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-slate-100/50 rounded-full"
              >
                <div className="w-5 h-[1.5px] bg-slate-950"></div>
                <div className="w-5 h-[1.5px] bg-slate-950"></div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[200] bg-white/98 backdrop-blur-3xl flex flex-col"
          >
            <div className="p-10 flex justify-between items-center">
               <div className="text-xl font-black tracking-tighter uppercase text-slate-950">Menu</div>
               <button 
                 onClick={() => setMobileMenuOpen(false)}
                 className="w-14 h-14 bg-slate-950 text-white rounded-full flex items-center justify-center"
               >
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
               </button>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center space-y-12">
              <button onClick={() => { onHomeClick(); setMobileMenuOpen(false); }} className="text-5xl font-black text-slate-950 tracking-tighter hover:text-violet-600">Home</button>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (!isHome) onHomeClick();
                  }}
                  className="text-5xl font-black text-slate-950 tracking-tighter hover:text-violet-600 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => { setMobileMenuOpen(false); onContactClick(); }}
                className="mt-8 px-12 py-6 bg-violet-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.5em]"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
