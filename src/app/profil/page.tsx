"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Target, Heart, Lightbulb, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ProfilPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans pb-24">
      {/* Navbar Simple */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-[#0052CC] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm">Kembali ke Beranda</span>
          </Link>
          <div className="font-semibold text-lg tracking-tight text-slate-800">
            Profil Sekolah
          </div>
        </div>
      </header>

      {/* Hero Section Profil */}
      <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Membangun Generasi <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Cerdas dan Berkarakter
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-slate-500 leading-relaxed"
        >
          SD Negeri Petukangan Selatan 02 telah berdedikasi menjadi pilar pendidikan dasar di Jakarta Selatan, memadukan nilai budaya luhur dengan teknologi pendidikan modern.
        </motion.p>
      </section>

      {/* Sambutan Kepala Sekolah */}
      <section className="px-6 max-w-5xl mx-auto mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col md:flex-row gap-10 items-center"
        >
          <div className="w-40 h-40 md:w-64 md:h-64 shrink-0 rounded-full md:rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
              alt="Kepala Sekolah" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-bold tracking-widest text-[#0052CC] uppercase mb-2">Sambutan Kepala Sekolah</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Selamat Datang di Portal Digital Kami</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              "Kami berkomitmen untuk menciptakan lingkungan belajar yang tidak hanya berfokus pada keunggulan akademik, tetapi juga pada pembentukan karakter dan literasi digital sejak dini. Kehadiran platform ini adalah wujud transparansi dan adaptasi kami terhadap era Pendidikan 4.0."
            </p>
            <div>
              <div className="font-bold text-slate-900">Bpk. Ahmad Susanto, M.Pd.</div>
              <div className="text-sm text-slate-500">Kepala Sekolah SDN Petukangan Selatan 02</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Visi Misi Section */}
      <section className="px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#0052CC] rounded-3xl p-10 text-white shadow-xl shadow-blue-500/20"
          >
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
            <p className="text-blue-50 leading-relaxed text-lg">
              "Mewujudkan peserta didik yang bertaqwa, berakhlak mulia, cerdas, kreatif, dan berwawasan global dalam lingkungan Sekolah Ramah Anak yang berbasis digital."
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/40"
          >
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-[#00A854]" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Misi Kami</h3>
            <ul className="space-y-4">
              {[
                "Menyelenggarakan proses pembelajaran PAIKEM berlandaskan Kurikulum Merdeka.",
                "Meningkatkan penguasaan IPTEK melalui program Sekolah Digital.",
                "Mengembangkan bakat dan minat melalui ekstrakurikuler terarah.",
                "Menanamkan karakter kepedulian lingkungan (Green School)."
              ].map((misi, i) => (
                <li key={i} className="flex gap-3 text-slate-600">
                  <ShieldCheck className="w-5 h-5 text-[#0052CC] shrink-0 mt-0.5" />
                  <span>{misi}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
