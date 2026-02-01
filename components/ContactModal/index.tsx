
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SECURE_LINE, ENCRYPTED_MAIL, MODAL_CONTENT } from '../../constants';

interface ContactModalProps {
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { title, highlight, form } = MODAL_CONTENT;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
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
        className="relative bg-white w-full max-w-5xl rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-slate-100 flex flex-col md:flex-row h-auto max-h-[95vh]"
      >
        {/* Left Panel */}
        <div className="w-full md:w-[360px] bg-[#020617] p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-violet-600/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center font-black text-2xl mb-16 shadow-2xl shadow-violet-600/40">S</div>
            
            <h3 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter leading-[0.9]">
              {title} <br />
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{highlight}</span>
            </h3>
            
            <div className="space-y-6 pt-10 border-t border-white/5">
              <div className="group cursor-pointer">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 group-hover:text-violet-400 transition-colors">Call Us</div>
                <div className="text-lg font-bold tracking-tight text-slate-200">{SECURE_LINE}</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 group-hover:text-violet-400 transition-colors">Email Us</div>
                <div className="text-lg font-bold tracking-tight text-slate-200">{ENCRYPTED_MAIL}</div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 pt-10 mt-10">
            <div className="text-[8px] font-black text-slate-700 uppercase tracking-[0.4em]">Sheermedia Growth Hub</div>
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="flex-grow bg-[#fcfdfe] p-10 md:p-20 relative overflow-y-auto">
          <button 
            onClick={onClose} 
            className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-300 hover:text-slate-950 hover:bg-slate-100 z-30 border border-slate-100 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <AnimatePresence mode="wait">
            {formState === 'success' ? (
              <motion.div 
                key="success" 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-24 h-24 bg-emerald-500 text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/30">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-4xl font-black text-slate-950 mb-4 tracking-tighter">{form.success}</h3>
                <p className="text-slate-500 font-medium mb-12">One of our growth specialists will contact you shortly.</p>
                <button 
                  onClick={onClose} 
                  className="px-12 py-6 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.5em] hover:bg-violet-600 transition-all shadow-xl"
                >
                  {form.close}
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Tell Us Who You Are</label>
                  <input 
                    required 
                    type="text" 
                    placeholder={form.placeholders.name} 
                    className="w-full bg-[#f8fafc] border border-slate-100/50 rounded-[1.8rem] px-8 py-5 text-slate-900 font-bold outline-none focus:ring-4 focus:ring-violet-600/5 focus:border-violet-600 transition-all placeholder:text-slate-400 placeholder:font-medium" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">How Can We Reach You?</label>
                  <input 
                    required 
                    type="email" 
                    placeholder={form.placeholders.email} 
                    className="w-full bg-[#f8fafc] border border-slate-100/50 rounded-[1.8rem] px-8 py-5 text-slate-900 font-bold outline-none focus:ring-4 focus:ring-violet-600/5 focus:border-violet-600 transition-all placeholder:text-slate-400 placeholder:font-medium" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Tell Us Your Goals</label>
                  <textarea 
                    required 
                    rows={4} 
                    placeholder={form.placeholders.message} 
                    className="w-full bg-[#f8fafc] border border-slate-100/50 rounded-[1.8rem] px-8 py-6 text-slate-900 font-bold outline-none focus:ring-4 focus:ring-violet-600/5 focus:border-violet-600 transition-all resize-none placeholder:text-slate-400 placeholder:font-medium"
                  ></textarea>
                </div>

                <button 
                  disabled={formState === 'submitting'}
                  type="submit" 
                  className="w-full py-7 bg-slate-950 text-white rounded-[1.8rem] text-[11px] font-black uppercase tracking-[0.6em] hover:bg-violet-600 transition-all shadow-2xl shadow-slate-950/20 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {formState === 'submitting' ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : form.submit}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
