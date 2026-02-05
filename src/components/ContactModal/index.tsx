
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SECURE_LINES, ENCRYPTED_MAIL, MODAL_CONTENT } from '../../constants';
import { Logo } from '../UI/Logo';
import { supabase } from '../../lib/supabase';

interface ContactModalProps {
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { title, highlight, form } = MODAL_CONTENT;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);
    const data = {
      full_name: formData.get('full_name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([data]);

      if (error) throw error;
      setFormState('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
      setFormState('idle');
    }
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
        onClick={onClose}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative bg-white w-full max-w-5xl rounded-3xl md:rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-slate-100 flex flex-col md:flex-row h-auto max-h-[92vh] md:max-h-[90vh]"
      >
        {/* Left Panel */}
        <div className="w-full md:w-[380px] bg-[#020617] p-6 md:p-14 text-white flex flex-col md:justify-between relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-violet-600/10 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <div className="mb-4 md:mb-16">
              <Logo className="h-6 md:h-12 text-white" inverted={true} />
            </div>

            <h3 className="text-2xl md:text-5xl font-black mb-4 md:mb-12 tracking-tighter leading-[0.9]">
              {title} <span className="text-white/80">{highlight}</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-8 pt-4 md:pt-10 border-t border-white/5">
              <div className="group cursor-pointer">
                <div className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 md:mb-3 group-hover:text-violet-400 transition-colors">Call</div>
                <div className="flex flex-col gap-0.5 md:gap-2">
                  {SECURE_LINES.map((num, idx) => (
                    <div key={idx} className="text-xs md:text-lg font-bold tracking-tight text-slate-200">{num}</div>
                  ))}
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 group-hover:text-violet-400 transition-colors">Email</div>
                <div className="text-xs md:text-lg font-bold tracking-tight text-slate-200 break-all">{ENCRYPTED_MAIL}</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-6 md:pt-10 mt-6 md:mt-10 hidden md:block">
            <div className="text-[8px] font-black text-slate-700 uppercase tracking-[0.4em]">Sheermedia Private Limited</div>
          </div>
        </div>

        {/* Right Panel: Form with Safe-Zone Scrollbar */}
        <div className="flex-grow bg-[#fcfdfe] relative flex flex-col overflow-hidden">
          <style>{`
            .custom-scrollbar-panel::-webkit-scrollbar {
              width: 4px;
              display: block !important;
            }
            .custom-scrollbar-panel::-webkit-scrollbar-track {
              background: transparent;
              margin: 120px 0; /* Significant margin to keep the scrollbar track away from top/bottom curves */
            }
            .custom-scrollbar-panel::-webkit-scrollbar-thumb {
              background: #e2e8f0;
              border-radius: 10px;
            }
            .custom-scrollbar-panel::-webkit-scrollbar-thumb:hover {
              background: #7c3aed;
            }
          `}</style>

          {/* Close Button - Moved outside for global positioning */}
          <button
            onClick={onClose}
            className="absolute top-6 md:top-10 right-6 md:right-10 w-10 md:w-12 h-10 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-white/10 md:bg-white/40 backdrop-blur-xl text-white md:text-slate-300 hover:text-slate-950 hover:bg-slate-100 z-[100] border border-white/10 md:border-slate-200/50 shadow-sm transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          {/* Scrollable Container with its own padding to keep content clear of edges */}
          <div className="flex-grow overflow-y-auto custom-scrollbar-panel px-6 md:px-24 py-10 md:py-32">
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-20 h-20 bg-emerald-500 text-white rounded-[1.8rem] flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/30">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tighter">{form.success}</h3>
                  <p className="text-slate-500 font-medium mb-10 max-w-xs mx-auto">One of our growth specialists will contact you shortly.</p>
                  <button
                    onClick={onClose}
                    className="px-8 md:px-12 py-4 md:py-5 bg-slate-950 text-white rounded-xl md:rounded-2xl text-[10px] font-black uppercase tracking-[0.5em] hover:bg-violet-600 transition-all shadow-xl"
                  >
                    {form.close}
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-10 max-w-xl mx-auto">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-5 block">{form.labels.name}</label>
                    <input
                      required
                      name="full_name"
                      type="text"
                      placeholder={form.placeholders.name}
                      className="w-full bg-[#f8fafc] border border-slate-100 rounded-2xl md:rounded-[1.5rem] px-6 md:px-8 py-5 md:py-6 text-slate-950 font-bold outline-none focus:ring-4 focus:ring-violet-600/5 focus:border-violet-600 transition-all placeholder:text-slate-400 placeholder:font-medium"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-5 block">{form.labels.email}</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder={form.placeholders.email}
                      className="w-full bg-[#f8fafc] border border-slate-100 rounded-2xl md:rounded-[1.5rem] px-6 md:px-8 py-5 md:py-6 text-slate-950 font-bold outline-none focus:ring-4 focus:ring-violet-600/5 focus:border-violet-600 transition-all placeholder:text-slate-400 placeholder:font-medium"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-5 block">{form.labels.message}</label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder={form.placeholders.message}
                      className="w-full bg-[#f8fafc] border border-slate-100 rounded-2xl md:rounded-[1.5rem] px-6 md:px-8 py-6 md:py-7 text-slate-950 font-bold outline-none focus:ring-4 focus:ring-violet-600/5 focus:border-violet-600 transition-all resize-none placeholder:text-slate-400 placeholder:font-medium"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      disabled={formState === 'submitting'}
                      type="submit"
                      className="w-full py-5 md:py-7 bg-slate-950 text-white rounded-2xl md:rounded-[1.5rem] text-[12px] font-black uppercase tracking-[0.6em] hover:bg-violet-600 transition-all shadow-2xl shadow-slate-950/10 active:scale-95 flex items-center justify-center gap-4 disabled:opacity-50"
                    >
                      {formState === 'submitting' ? (
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          {form.submit}
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
