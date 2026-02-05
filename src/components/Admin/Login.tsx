
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';
import { Logo } from '../UI/Logo';

interface LoginProps {
    onLogin: () => void;
}

export const AdminLogin: React.FC<LoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            onLogin();
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white rounded-[2.5rem] p-12 shadow-2xl"
            >
                <div className="flex flex-col items-center mb-10">
                    <Logo className="h-10 text-slate-950 mb-6" />
                    <h2 className="text-2xl font-black tracking-tight text-slate-950 uppercase">Admin Portal</h2>
                    <p className="text-slate-500 text-sm font-medium">Please sign in to continue</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email</label>
                        <input
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@sheermedia.co.in"
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-950 font-bold outline-none focus:ring-4 focus:ring-violet-600/5 focus:border-violet-600 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Password</label>
                        <input
                            required
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-950 font-bold outline-none focus:ring-4 focus:ring-violet-600/5 focus:border-violet-600 transition-all"
                        />
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-500 p-4 rounded-xl text-xs font-bold border border-red-100 italic">
                            {error}
                        </div>
                    )}

                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full py-5 bg-slate-950 text-white rounded-2xl text-[12px] font-black uppercase tracking-[0.6em] hover:bg-violet-600 transition-all shadow-xl active:scale-[0.98] disabled:opacity-50"
                    >
                        {loading ? 'Authenticating...' : 'Sign In'}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};
