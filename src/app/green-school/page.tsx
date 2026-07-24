"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Leaf, Recycle, Sun, TreePine, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

export default function GreenSchoolPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans pb-24 selection:bg-emerald-500 selection:text-white">
      {/* Navbar Simple */}
      <header className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-slate-200/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-[#0052CC] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm">Kembali ke Beranda</span>
          </Link>
          <div className="font-semibold text-lg tracking-tight text-slate-800">
            Green School & ESG Dashboard
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6 shadow-sm"
        >
          <Leaf className="w-4 h-4 text-[#00A854]" />
          <span>Komitmen Keberlanjutan & Lingkungan</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Membangun Generasi Sadar Lingkungan <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A854] to-emerald-600">
            Sekolah Hijau Berkelanjutan
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto"
        >
          SD Negeri Petukangan Selatan 02 mengintegrasikan nilai-nilai pelestarian lingkungan ke dalam kegiatan belajar mengajar sehari-hari dan operasional sekolah.
        </motion.p>
      </section>

      {/* Grid Statistik Dampak ESG */}
      <section className="px-6 max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Pohon Ditanam di Area Sekolah", value: "340+", desc: "Menjaga kualitas udara dan asri kampus.", icon: TreePine, color: "text-emerald-600", bg: "bg-emerald-50" },
            { title: "Sampah Plastik Didaur Ulang", value: "1.4 Ton", desc: "Melalui program bank sampah mandiri siswa.", icon: Recycle, color: "text-blue-600", bg: "bg-blue-50" },
            { title: "Efisiensi Energi & Surya", value: "85%", desc: "Pemanfaatan pencahayaan alami & panel surya.", icon: Sun, color: "text-amber-600", bg: "bg-amber-50" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40"
            >
              <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center mb-6`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">{stat.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Program Pilar Sekolah Hijau */}
      <section className="px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl relative z-10">
            <div className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">Pilar Utama Eco-School</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Aksi Nyata Menuju Sekolah Bersih & Sehat</h2>
            
            <ul className="space-y-4">
              {[
                "Gerakan Bawa Botol Minum Sendiri (Zero Single-Use Plastic).",
                "Praktik Pemilahan Sampah Organik dan Anorganik di Setiap Sudut Kelas.",
                "Kebun Vertikal dan Taman Edukasi Tanaman Obat Keluarga (Toga).",
                "Edukasi Perubahan Iklim Terintegrasi dalam Kurikulum Merdeka."
              ].map((pilar, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm md:text-base">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{pilar}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
