"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BookOpen, Heart, MessageSquare, Send, Sparkles, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function YearbookPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Bintang Pratama (Kelas 6A)",
      pesan: "Terima kasih bapak/ibu guru atas bimbingannya selama 6 tahun ini! SDN Petukangan Selatan 02 juara!",
      likes: 14,
      date: "24 Juni 2026"
    },
    {
      id: 2,
      name: "Nadia Kirana (Kelas 6B)",
      pesan: "Bakalan kangen banget sama kantin sehat dan suasana belajar di sini. Sukses terus buat kita semua!",
      likes: 22,
      date: "23 Juni 2026"
    },
    {
      id: 3,
      name: "Ibu Hj. Siti Aminah (Wali Kelas)",
      pesan: "Tetaplah semangat belajar, gapai cita-citamu setinggi langit anak-anakku tercinta!",
      likes: 35,
      date: "22 Juni 2026"
    }
  ]);

  const [newName, setNewName] = useState("");
  const [newPesan, setNewPesan] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAddMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newPesan.trim()) return;

    const newItem = {
      id: messages.length + 1,
      name: newName,
      pesan: newPesan,
      likes: 1,
      date: "Baru saja"
    };

    setMessages([newItem, ...messages]);
    setNewName("");
    setNewPesan("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleLike = (id: number) => {
    setMessages(messages.map(m => m.id === id ? { ...m, likes: m.likes + 1 } : m));
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans pb-24 selection:bg-blue-500 selection:text-white">
      {/* Navbar Simple */}
      <header className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-slate-200/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-[#0052CC] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm">Kembali ke Beranda</span>
          </Link>
          <div className="font-semibold text-lg tracking-tight text-slate-800">
            Digital Yearbook & Memory Wall
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-12 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6 shadow-sm"
        >
          <GraduationCap className="w-4 h-4 text-[#0052CC]" />
          <span>Kenangan Angkatan Kelulusan 2026</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Buku Kenangan Digital & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Memory Wall Kelulusan
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-8"
        >
          Kumpulan pesan, kesan, dan kenangan indah dari siswa-siswi serta guru tercinta SDN Petukangan Selatan 02.
        </motion.p>
      </section>

      {/* Form Kirim Pesan / Kenangan */}
      <section className="px-6 max-w-2xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/40 border border-slate-100"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#0052CC]" /> Tulis Pesan & Kesan Kelulusan
          </h3>

          {submitted && (
            <div className="mb-4 p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl text-sm font-medium">
              Terima kasih! Pesan dan kenangan Anda berhasil ditambahkan ke Memory Wall.
            </div>
          )}

          <form onSubmit={handleAddMessage} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Nama & Kelas / Status</label>
              <input 
                type="text" 
                required
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Contoh: Raka Pratama (Kelas 6A) atau Guru"
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052CC] bg-slate-50/50 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Pesan / Kenangan</label>
              <textarea 
                required
                rows={3}
                value={newPesan}
                onChange={(e) => setNewPesan(e.target.value)}
                placeholder="Tuliskan kesan, pesan, atau kenangan indah selama di sekolah..."
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052CC] bg-slate-50/50 text-sm resize-none"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-[#0052CC] hover:bg-blue-700 text-white py-3.5 rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 text-sm"
            >
              <Send className="w-4 h-4" /> Kirim ke Memory Wall
            </button>
          </form>
        </motion.div>
      </section>

      {/* Wall of Fame / Messages Grid */}
      <section className="px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Dinding Kenangan Angkatan 2026</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-[#0052CC]">{item.name}</span>
                  <span className="text-[10px] text-slate-400">{item.date}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">"{item.pesan}"</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button 
                  onClick={() => handleLike(item.id)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-rose-500 hover:scale-110 transition-transform bg-rose-50 px-3 py-1.5 rounded-full"
                >
                  <Heart className="w-3.5 h-3.5 fill-rose-500" />
                  <span>{item.likes} Suka</span>
                </button>
                <span className="text-[10px] text-slate-400 font-medium">Memory #0{item.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
