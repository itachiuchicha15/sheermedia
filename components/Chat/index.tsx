
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'framer-motion';
import { CHAT_CONTENT } from '../../constants';

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; content: string }[]>([
    { role: 'model', content: CHAT_CONTENT.initialMessage }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...messages.map(m => ({
            role: m.role,
            parts: [{ text: m.content }]
          })),
          { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: {
          systemInstruction: CHAT_CONTENT.systemInstruction,
        }
      });
      const aiText = response.text || "I apologize, let's try that again.";
      setMessages(prev => [...prev, { role: 'model', content: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', content: CHAT_CONTENT.error }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[150] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-[380px] md:w-[480px] h-[650px] bg-white rounded-[3rem] shadow-2xl border border-slate-100 mb-8 flex flex-col overflow-hidden"
          >
            <div className="bg-slate-950 p-10 text-white relative">
              <div className="flex justify-between items-center relative z-10">
                <div className="flex items-center space-x-5">
                  <div className="w-12 h-12 bg-violet-600 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">S</div>
                  <div>
                    <div className="font-black text-xl tracking-tight">{CHAT_CONTENT.title}</div>
                    <div className="text-[9px] uppercase tracking-[0.3em] text-violet-400 font-black">{CHAT_CONTENT.badge}</div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
            </div>
            
            <div ref={scrollRef} className="flex-grow p-10 space-y-8 overflow-y-auto">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-6 rounded-[1.5rem] text-[15px] font-medium leading-relaxed ${msg.role === 'user' ? 'bg-violet-600 text-white rounded-tr-none' : 'bg-slate-50 text-slate-800 rounded-tl-none border border-slate-100'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && <div className="animate-pulse flex space-x-2 p-6 bg-slate-50 w-24 rounded-full"><div className="w-2 h-2 bg-violet-600 rounded-full"></div><div className="w-2 h-2 bg-violet-600 rounded-full"></div><div className="w-2 h-2 bg-violet-600 rounded-full"></div></div>}
            </div>
            
            <div className="p-8 bg-white border-t border-slate-50 flex space-x-3">
              <input 
                value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={CHAT_CONTENT.placeholder} 
                className="flex-grow bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-medium outline-none focus:ring-2 focus:ring-violet-600/20"
              />
              <button onClick={handleSend} className="bg-slate-950 text-white p-4 rounded-2xl hover:bg-violet-600 transition-all shadow-xl"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 bg-slate-950 text-white rounded-[1.5rem] shadow-2xl flex items-center justify-center hover:bg-violet-600 transition-all duration-500 group"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </motion.button>
    </div>
  );
};
