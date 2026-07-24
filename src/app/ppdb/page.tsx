"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function PPDBPage() {
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
            Portal PPDB Online
          </div>
        </div>
      </header>

      {/* Hero Section PPDB */}
      <section className="pt-32 pb-12 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          Pendaftaran Gelombang 1 Dibuka
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Penerimaan Peserta Didik Baru <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Tahun Ajaran 2026/2027
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Mari bergabung bersama SD Negeri Petukangan Selatan 02. Kami merancang proses pendaftaran yang transparan, mudah, dan sepenuhnya digital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button className="bg-[#0052CC] hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all shadow-xl shadow-blue-500/30 w-full sm:w-auto">
            Mulai Pendaftaran Online
          </button>
        </motion.div>
      </section>

      {/* Syarat & Timeline Section */}
      <section className="px-6 max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Persyaratan Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#0052CC]" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Syarat Pendaftaran</h2>
          </div>
          
          <ul className="space-y-5">
            {[
              "Berusia minimal 6 tahun pada bulan Juli 2026.",
              "Scan/Foto Asli Akta Kelahiran Calon Siswa.",
              "Scan/Foto Asli Kartu Keluarga (KK) wilayah DKI Jakarta.",
              "Pas foto terbaru ukuran 3x4 (Latar Merah).",
              "Sertifikat TK/PAUD (Opsional/Jika ada)."
            ].map((syarat, i) => (
              <li key={i} className="flex gap-4 text-slate-600">
                <CheckCircle2 className="w-6 h-6 text-[#00A854] shrink-0" />
                <span className="leading-relaxed">{syarat}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex gap-3 text-amber-800 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p>Pastikan semua dokumen hasil scan/foto terbaca dengan jelas sebelum diunggah ke sistem.</p>
          </div>
        </motion.div>

        {/* Timeline Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-900/20 text-white"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">Jadwal Pelaksanaan</h2>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            
            {[
              { date: "15 - 30 April 2026", title: "Pendaftaran Online", desc: "Pembuatan akun dan unggah berkas." },
              { date: "02 - 05 Mei 2026", title: "Verifikasi Berkas", desc: "Tim PPDB memvalidasi dokumen secara online." },
              { date: "08 Mei 2026", title: "Pengumuman Hasil", desc: "Cek status kelulusan di portal ini." },
              { date: "10 - 12 Mei 2026", title: "Daftar Ulang", desc: "Konfirmasi penerimaan dan lapor diri." }
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-blue-500 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-slate-700 bg-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-bold text-blue-400 text-sm">{item.date}</div>
                  </div>
                  <div className="text-white font-bold mb-1">{item.title}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </section>
    </main>
  );
}
