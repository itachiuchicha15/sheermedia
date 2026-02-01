
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

// Components
import { Navbar } from './components/Navbar/index';
import { Hero } from './components/Hero/index';
import { LogoMarquee } from './components/LogoMarquee/index';
import { IdentityGrid } from './components/IdentityGrid/index';
import { Services } from './components/Services/index';
import { ProductFeatures } from './components/ProductFeatures/index';
import { Benefits } from './components/Benefits/index';
import { ContactSection } from './components/ContactSection/index';
import { Footer } from './components/Footer/index';
import { ContactModal } from './components/ContactModal/index';
import { AIChatWidget } from './components/Chat/index';

// Service Pages
import { AIGrowthPage } from './components/ServiceDetail/AIGrowth';
import { MarketResearchPage } from './components/ServiceDetail/MarketResearch';
import { AISearchPage } from './components/ServiceDetail/AISearch';
import { WhatsAppEngagementPage } from './components/ServiceDetail/WhatsAppEngagement';
import { VideoMarketingPage } from './components/ServiceDetail/VideoMarketing';
import { AIAutomationPage } from './components/ServiceDetail/AIAutomation';
import { DigitalMediaPage } from './components/ServiceDetail/DigitalMedia';
import { WebDevPage } from './components/ServiceDetail/WebDev';

import { FINAL_CTA } from './constants/index';

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'service'>('home');
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(null);

  const toggleContactModal = () => setIsContactModalOpen(!isContactModalOpen);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleNavigateToService = (slug: string) => {
    setSelectedServiceSlug(slug);
    setCurrentView('service');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleGoHome = () => {
    setCurrentView('home');
    setSelectedServiceSlug(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderServicePage = () => {
    const props = { onBack: handleGoHome, onContactClick: toggleContactModal };
    switch (selectedServiceSlug) {
      case 'ai-growth': return <AIGrowthPage {...props} />;
      case 'market-research': return <MarketResearchPage {...props} />;
      case 'ai-search': return <AISearchPage {...props} />;
      case 'whatsapp-engagement': return <WhatsAppEngagementPage {...props} />;
      case 'personalized-video': return <VideoMarketingPage {...props} />;
      case 'ai-automation': return <AIAutomationPage {...props} />;
      case 'digital-media': return <DigitalMediaPage {...props} />;
      case 'web-development': return <WebDevPage {...props} />;
      default: return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-violet-600 origin-left z-[300]"
        style={{ scaleX }}
      />

      <Navbar
        onContactClick={toggleContactModal}
        onHomeClick={handleGoHome}
        isHome={currentView === 'home'}
      />

      <main className="relative">
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <Hero onContactClick={toggleContactModal} />
              <LogoMarquee />
              <IdentityGrid />

              <Services onServiceClick={handleNavigateToService} />
              <ProductFeatures onContactClick={toggleContactModal} />
              <Benefits />

              <ContactSection />

              {/* World-Class Final CTA Section */}
              <section className="py-64 bg-white relative overflow-hidden group">
                {/* Background Decor Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.03)_0%,transparent_70%)]" />
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px]"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                    className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[140px]"
                  />
                </div>

                <div className="container-custom">
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative text-center"
                  >
                    <div className="flex flex-col items-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="inline-flex items-center gap-4 bg-slate-50 px-6 py-2 rounded-full border border-slate-100 mb-16 shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse"></span>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.8em] py-1">{FINAL_CTA.badge}</span>
                      </motion.div>

                      <div className="relative mb-24">
                        <motion.h3
                          className="text-8xl md:text-[12rem] font-black text-slate-950 tracking-tighter leading-[0.8] relative z-10"
                        >
                          {/* Animated Text Reveal */}
                          {FINAL_CTA.title.split(' ').map((word, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + (i * 0.1), duration: 0.8, ease: "circOut" }}
                              className="inline-block"
                            >
                              {word}&nbsp;
                            </motion.span>
                          ))}
                          <br />
                          <motion.span
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 1, ease: "backOut" }}
                            className="text-violet-600 relative inline-block"
                          >
                            {FINAL_CTA.highlight}
                            {/* Accent under-line effect */}
                            <motion.div
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ delay: 1.2, duration: 1 }}
                              className="absolute -bottom-4 left-0 right-0 h-4 bg-violet-600/10 -z-10 rounded-full"
                            />
                          </motion.span>
                        </motion.h3>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="relative"
                      >
                        <motion.button
                          whileHover={{ scale: 1.02, y: -8 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={toggleContactModal}
                          className="group relative px-24 py-10 bg-slate-950 text-white rounded-[2rem] text-[12px] font-black uppercase tracking-[0.6em] transition-all overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] hover:shadow-violet-600/20 active:scale-95"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <span className="relative z-10">{FINAL_CTA.button}</span>
                        </motion.button>

                        {/* Interactive floating dots */}
                        <div className="absolute -top-12 -right-12 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="w-full h-full border border-dashed border-violet-200 rounded-full" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="service-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {renderServicePage()}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      <AIChatWidget />
      <AnimatePresence mode="wait">
        {isContactModalOpen && <ContactModal onClose={toggleContactModal} />}
      </AnimatePresence>
    </div>
  );
};

export default App;
