"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Send, CheckCircle2, Star, User } from "lucide-react";
import Link from "next/link";

export default function PohonImpianPage() {
  const [dreams, setDreams] = useState([
    { id: 1, name: "Bintang Pratama", kelas: "Kelas 6A", cita: "Menjadi Ilmuwan & Peneliti NASA", tanggal: "Hari ini" },
    { id: 2, name: "Nadia Kirana", kelas: "Kelas 5B", cita: "Menjadi Dokter Anak yang Baik Hati", tanggal: "Kemarin" },
    { id: 3, name: "Raka Maulana", kelas: "Kelas 4A", cita: "Menjadi Arsitek & Perancang Kota Hijau", tanggal: "2 hari lalu" }
  ]);

  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("Kelas 5A");
  const [cita, setCita] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !cita.trim()) return;

    const newDream = {
      id: dreams.length + 1,
      name: nama,
      kelas: kelas,
      cita: cita,
      tanggal: "Baru saja"
    };

    setDreams([newDream, ...dreams]);
    setNama("");
    setCita("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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
            School Dream Tree & Future Aspirations
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
          <Star className="w-4 h-4 text-[#0052CC] fill-blue-500" />
          <span>Ruang Aspirasi & Cita-Cita Siswa</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Pohon Impian & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Cita-Cita Masa Depan
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-8"
        >
          Tuliskan impian dan cita-citamu di sini sebagai pemacu semangat belajar setiap hari untuk menggapai masa depan gemilang.
        </motion.p>
      </section>

      {/* Form Gantungkan Cita-Cita */}
      <section className="px-6 max-w-2xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/40 border border-slate-100"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#0052CC]" /> Gantungkan Cita-Citamu
          </h3>

          {submitted && (
            <div className="mb-4 p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl text-sm font-medium flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Yeay! Impian dan cita-citamu berhasil ditambahkan ke Pohon Impian sekolah.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Nama Lengkap</label>
              <input 
                type="text" 
                required
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Contoh: Rian Utama"
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052CC] bg-slate-50/50 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Kelas</label>
              <select 
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-slate-800 focus:outline-none focus:border-[#0052CC] bg-slate-50/50 text-sm"
              >
                <option>Kelas 1</option>
                <option>Kelas 2</option>
                <option>Kelas 3</option>
                <option>Kelas 4</option>
                <option>Kelas 5</option>
                <option>Kelas 6</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Cita-Cita & Impian</label>
              <input 
                type="text" 
                required
                value={cita}
                onChange={(e) => setCita(e.target.value)}
                placeholder="Contoh: Menjadi Guru / Astronot / Dokter"
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052CC] bg-slate-50/50 text-sm"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-[#0052CC] hover:bg-blue-700 text-white py-3.5 rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 text-sm"
            >
              <Send className="w-4 h-4" /> Gantungkan Impian
            </button>
          </form>
        </motion.div>
      </section>

      {/* Grid Pohon Impian */}
      <section className="px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Pohon Impian Siswa SDN Petukangan Selatan 02</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dreams.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-[#0052CC] bg-blue-50 px-3 py-1 rounded-full">{item.kelas}</span>
                  <span className="text-[10px] text-slate-400">{item.tanggal}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">"{item.cita}"</h4>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-semibold">
                <User className="w-3.5 h-3.5 text-[#0052CC]" /> {item.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
