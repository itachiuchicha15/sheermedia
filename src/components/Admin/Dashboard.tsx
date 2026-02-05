
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../lib/supabase';
import {
    Users,
    MessageSquare,
    CheckCircle,
    Clock,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight,
    LogOut,
    Search,
    Filter,
    ExternalLink,
    Save,
    Trash2
} from 'lucide-react';

interface Submission {
    id: string;
    created_at: string;
    full_name: string;
    email: string;
    message: string;
    status: 'new' | 'contacted' | 'converted' | 'archived';
    notes: string;
}

const ITEMS_PER_PAGE = 10;

export const AdminDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [search, setSearch] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editNotes, setEditNotes] = useState('');
    const [updating, setUpdating] = useState(false);

    const fetchSubmissions = async () => {
        setLoading(true);
        try {
            let query = supabase
                .from('contact_submissions')
                .select('*', { count: 'exact' });

            if (statusFilter !== 'all') {
                query = query.eq('status', statusFilter);
            }

            if (search) {
                query = query.or(`full_name.ilike.%${search}%,email.ilike.%${search}%`);
            }

            const { data, count, error } = await query
                .order('created_at', { ascending: false })
                .range(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE - 1);

            if (error) throw error;
            setSubmissions(data || []);
            setTotalCount(count || 0);
        } catch (err) {
            console.error('Error fetching submissions:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSubmissions();
    }, [page, statusFilter, search]);

    const updateStatus = async (id: string, status: Submission['status']) => {
        setUpdating(true);
        try {
            const { error } = await supabase
                .from('contact_submissions')
                .update({ status })
                .eq('id', id);

            if (error) throw error;
            setSubmissions(prev => prev.map(s => s.id === id ? { ...s, status } : s));
        } catch (err) {
            console.error('Error updating status:', err);
        } finally {
            setUpdating(false);
        }
    };

    const saveNotes = async (id: string) => {
        setUpdating(true);
        try {
            const { error } = await supabase
                .from('contact_submissions')
                .update({ notes: editNotes })
                .eq('id', id);

            if (error) throw error;
            setSubmissions(prev => prev.map(s => s.id === id ? { ...s, notes: editNotes } : s));
            setEditingId(null);
        } catch (err) {
            console.error('Error saving notes:', err);
        } finally {
            setUpdating(false);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        onLogout();
    };

    const statusColors = {
        new: 'bg-blue-100 text-blue-700',
        contacted: 'bg-amber-100 text-amber-700',
        converted: 'bg-emerald-100 text-emerald-700',
        archived: 'bg-slate-100 text-slate-700'
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex">
            {/* Sidebar */}
            <aside className="w-80 bg-[#020617] p-10 flex flex-col justify-between hidden lg:flex">
                <div>
                    <div className="mb-20">
                        <h1 className="text-white text-2xl font-black tracking-tighter uppercase">Sheer<span className="text-violet-500">Admin</span></h1>
                    </div>

                    <nav className="space-y-4">
                        <button className="w-full flex items-center gap-4 px-6 py-4 bg-violet-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-violet-600/20">
                            <Users size={20} /> Submissions
                        </button>
                        <div className="pt-10 space-y-2">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-600 px-6">Stats Summary</p>
                            <div className="px-6 py-4 space-y-6">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-400 font-medium">Total Leads</span>
                                    <span className="text-white font-bold">{totalCount}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-400 font-medium">Unread</span>
                                    <span className="text-blue-400 font-bold">{submissions.filter(s => s.status === 'new').length}</span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-4 px-6 py-4 text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl font-bold transition-all group"
                >
                    <LogOut size={20} className="group-hover:translate-x-1 transition-transform" /> Sign Out
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-grow flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="h-24 bg-white border-b border-slate-100 flex items-center justify-between px-10 shrink-0">
                    <div className="flex items-center gap-6 flex-grow max-w-2xl">
                        <div className="relative flex-grow group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-600 transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search leads by name or email..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full bg-slate-50 border-none rounded-2xl pl-16 pr-6 py-4 text-sm font-bold placeholder:text-slate-400 outline-none focus:ring-4 focus:ring-violet-600/5 transition-all"
                            />
                        </div>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold text-slate-600 outline-none cursor-pointer focus:ring-4 focus:ring-violet-600/5 transition-all appearance-none pr-10 relative"
                        >
                            <option value="all">All Status</option>
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="converted">Converted</option>
                            <option value="archived">Archived</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 font-black text-xs">SM</div>
                    </div>
                </header>

                {/* Lead Table Area */}
                <div className="flex-grow overflow-auto p-10 custom-scrollbar">
                    <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden min-w-[1000px]">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-50 bg-slate-50/50">
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Date</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Lead Info</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Message</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Status</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                <AnimatePresence mode="popLayout">
                                    {loading ? (
                                        <tr>
                                            <td colSpan={5} className="py-20 text-center text-slate-400 font-medium">Loading submissions...</td>
                                        </tr>
                                    ) : submissions.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="py-20 text-center text-slate-400 font-medium">No submissions found.</td>
                                        </tr>
                                    ) : (
                                        submissions.map((item) => (
                                            <motion.tr
                                                key={item.id}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="group hover:bg-slate-50/50 transition-colors"
                                            >
                                                <td className="px-10 py-8 align-top">
                                                    <div className="text-xs font-bold text-slate-900">{new Date(item.created_at).toLocaleDateString()}</div>
                                                    <div className="text-[10px] text-slate-400 font-medium mt-1">{new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                                </td>
                                                <td className="px-10 py-8 align-top">
                                                    <div className="font-black text-slate-900 leading-none">{item.full_name}</div>
                                                    <div className="text-xs text-slate-500 font-medium mt-2 flex items-center gap-1.5 hover:text-violet-600 transition-colors cursor-pointer">
                                                        {item.email} <ExternalLink size={10} />
                                                    </div>
                                                </td>
                                                <td className="px-10 py-8 align-top max-w-md">
                                                    <p className="text-sm font-medium text-slate-600 line-clamp-3 leading-relaxed">{item.message}</p>

                                                    {/* Notes Section */}
                                                    <div className="mt-4">
                                                        {editingId === item.id ? (
                                                            <div className="space-y-3">
                                                                <textarea
                                                                    autoFocus
                                                                    value={editNotes}
                                                                    onChange={(e) => setEditNotes(e.target.value)}
                                                                    className="w-full bg-slate-100/50 border border-slate-200 rounded-xl p-3 text-xs font-medium outline-none focus:ring-2 focus:ring-violet-600/20"
                                                                    placeholder="Add internal notes..."
                                                                    rows={2}
                                                                />
                                                                <div className="flex gap-2">
                                                                    <button onClick={() => saveNotes(item.id)} className="px-3 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-tighter rounded-lg flex items-center gap-1.5 shadow-md">
                                                                        <Save size={12} /> Save
                                                                    </button>
                                                                    <button onClick={() => setEditingId(null)} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-400 text-[10px] font-black uppercase tracking-tighter rounded-lg">Cancel</button>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <div
                                                                onClick={() => { setEditingId(item.id); setEditNotes(item.notes || ''); }}
                                                                className="group/notes cursor-pointer"
                                                            >
                                                                {item.notes ? (
                                                                    <p className="text-[11px] italic text-slate-400 bg-slate-50 p-2 rounded-lg border border-transparent group-hover/notes:border-slate-200 transition-all">{item.notes}</p>
                                                                ) : (
                                                                    <span className="text-[10px] text-slate-300 font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5"><MessageSquare size={10} /> Add Note</span>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-10 py-8 align-top">
                                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${statusColors[item.status]}`}>
                                                        {item.status}
                                                    </span>
                                                </td>
                                                <td className="px-10 py-8 align-top text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <select
                                                            disabled={updating}
                                                            value={item.status}
                                                            onChange={(e) => updateStatus(item.id, e.target.value as Submission['status'])}
                                                            className="bg-white border border-slate-100 rounded-xl px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500 outline-none focus:ring-2 focus:ring-violet-600/20 transition-all cursor-pointer hover:border-violet-200"
                                                        >
                                                            <option value="new">Mark New</option>
                                                            <option value="contacted">Contacted</option>
                                                            <option value="converted">Converted</option>
                                                            <option value="archived">Archived</option>
                                                        </select>
                                                    </div>
                                                </td>
                                            </motion.tr>
                                        ))
                                    )}
                                </AnimatePresence>
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="px-10 py-8 bg-slate-50/30 border-t border-slate-50 flex items-center justify-between">
                            <div className="text-xs font-bold text-slate-400">
                                Showing <span className="text-slate-900">{page * ITEMS_PER_PAGE + 1}</span> to <span className="text-slate-900">{Math.min((page + 1) * ITEMS_PER_PAGE, totalCount)}</span> of <span className="text-slate-900">{totalCount}</span> results
                            </div>
                            <div className="flex gap-2">
                                <button
                                    disabled={page === 0}
                                    onClick={() => setPage(p => p - 1)}
                                    className="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 disabled:opacity-30 transition-all shadow-sm"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button
                                    disabled={(page + 1) * ITEMS_PER_PAGE >= totalCount}
                                    onClick={() => setPage(p => p + 1)}
                                    className="w-10 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-900 disabled:opacity-30 transition-all shadow-sm"
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}</style>
        </div>
    );
};
