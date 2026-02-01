
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SECURE_LINE, ENCRYPTED_MAIL, CONTACT_SECTION_CONTENT } from '../../constants';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { badge, title, highlight, emailLabel, whatsappLabel, form } = CONTACT_SECTION_CONTENT;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1800);
  };

  return (
    <section id="contact-section" className="py-40 bg-white relative overflow-hidden">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#050508] rounded-[4rem] overflow-hidden relative shadow-[0_80px_100px_-20px_rgba(0,0,0,0.6)] border border-white/[0.03]"
        >
          {/* World-Class Ambient Backgrounds */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[20%] -right-[10%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15)_0%,transparent_70%)] blur-[100px]" 
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          </div>

          <div className="flex flex-col lg:flex-row relative z-10">
            {/* Content Side */}
            <div className="w-full lg:w-[42%] p-14 md:p-24 flex flex-col justify-between">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-3 mb-10"
                >
                  <span className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                  <span className="text-[11px] font-black text-violet-400 uppercase tracking-[0.8em]">{badge}</span>
                </motion.div>
                
                <h2 className="text-6xl md:text-[7.5rem] font-black text-white tracking-tighter leading-[0.82] mb-16">
                  {title} <br />
                  <span className="text-violet-500 drop-shadow-[0_0_20px_rgba(139,92,246,0.2)]">{highlight}</span>
                </h2>
                
                <div className="space-y-10">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-8 group cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-[1.5rem] bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500 shadow-xl">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">{emailLabel}</div>
                      <div className="text-xl font-bold text-white tracking-tight">{ENCRYPTED_MAIL}</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-8 group cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-[1.5rem] bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-xl">
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">{whatsappLabel}</div>
                      <div className="text-xl font-bold text-white tracking-tight">{SECURE_LINE}</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-[58%] p-14 md:p-24 bg-white/[0.01] border-l border-white/[0.05] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(124,58,237,0.05)_0%,transparent_50%)]" />
              
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-28 h-28 bg-emerald-500 text-white rounded-[2.5rem] flex items-center justify-center mb-10 shadow-[0_20px_50px_rgba(16,185,129,0.3)]">
                      <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-5xl font-black text-white mb-4 tracking-tighter">Transmission Successful</h3>
                    <p className="text-slate-500 text-xl font-medium">Our growth advisor will contact you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form" 
                    onSubmit={handleSubmit} 
                    className="space-y-12 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4 group">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4 group-focus-within:text-violet-400 transition-colors">Identification</label>
                        <input 
                          required 
                          type="text" 
                          placeholder={form.placeholders.name} 
                          className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-10 py-6 text-white font-bold outline-none focus:ring-4 focus:ring-violet-600/10 focus:border-violet-500/50 focus:bg-white/[0.06] transition-all placeholder:text-slate-700" 
                        />
                      </div>
                      <div className="space-y-4 group">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4 group-focus-within:text-violet-400 transition-colors">Digital Endpoint</label>
                        <input 
                          required 
                          type="email" 
                          placeholder={form.placeholders.email} 
                          className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-10 py-6 text-white font-bold outline-none focus:ring-4 focus:ring-violet-600/10 focus:border-violet-500/50 focus:bg-white/[0.06] transition-all placeholder:text-slate-700" 
                        />
                      </div>
                    </div>
                    <div className="space-y-4 group">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-4 group-focus-within:text-violet-400 transition-colors">Growth Brief</label>
                      <textarea 
                        required 
                        rows={5} 
                        placeholder={form.placeholders.message} 
                        className="w-full bg-white/[0.03] border border-white/10 rounded-[2.5rem] px-10 py-8 text-white font-bold outline-none focus:ring-4 focus:ring-violet-600/10 focus:border-violet-500/50 focus:bg-white/[0.06] transition-all resize-none placeholder:text-slate-700"
                      ></textarea>
                    </div>

                    <div className="relative group/btn">
                      <button 
                        disabled={formState === 'submitting'}
                        type="submit" 
                        className={`w-full md:w-auto px-20 py-8 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.6em] transition-all flex items-center justify-center gap-5 relative z-10 overflow-hidden ${
                          formState === 'submitting' 
                          ? 'bg-slate-800 text-slate-500' 
                          : 'bg-violet-600 text-white shadow-[0_30px_60px_-10px_rgba(124,58,237,0.4)] group-hover/btn:shadow-[0_40px_80px_-10px_rgba(124,58,237,0.6)] group-hover/btn:-translate-y-1'
                        }`}
                      >
                        {formState === 'submitting' ? (
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            {form.submit}
                            <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                          </>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
