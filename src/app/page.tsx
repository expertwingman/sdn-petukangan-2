"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-slate-900 overflow-hidden font-sans">
      <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0052CC] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
              02
            </div>
            <span className="font-semibold text-lg tracking-tight text-slate-800">
              SDN Petukangan Selatan 02
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-[#0052CC] transition-colors">Profil</a>
            <a href="#" className="hover:text-[#0052CC] transition-colors">Akademik</a>
            <a href="#" className="hover:text-[#0052CC] transition-colors">Fasilitas</a>
            <a href="#" className="hover:text-[#0052CC] transition-colors">Berita</a>
          </nav>
          <button className="bg-[#0052CC] hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md shadow-blue-500/20">
            Portal PPDB
          </button>
        </div>
      </header>

      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-blue-400/20 to-emerald-400/20 blur-[100px] -z-10 rounded-full" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          Akreditasi A & Sekolah Ramah Anak
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 max-w-4xl leading-[1.1]"
        >
          Membentuk Karakter, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Merancang Masa Depan.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg text-slate-500 max-w-2xl"
        >
          Sekolah dasar negeri terbaik di Pesanggrahan dengan fasilitas digital, lingkungan inklusif, dan tenaga pendidik profesional standar global.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <button className="flex items-center justify-center gap-2 bg-[#0052CC] hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-lg shadow-blue-500/25 group">
            Jelajahi Program Kami
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-base font-medium transition-all shadow-sm">
            Lihat Prestasi
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {[
            { icon: Users, title: "750+ Murid Aktif", desc: "Komunitas belajar yang beragam dan kolaboratif." },
            { icon: GraduationCap, title: "45+ Guru Tersertifikasi", desc: "Tenaga pendidik profesional dan berdedikasi tinggi." },
            { icon: BookOpen, title: "Digital e-Library", desc: "Akses ribuan buku interaktif dari mana saja." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/20 text-left hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-[#0052CC]" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}