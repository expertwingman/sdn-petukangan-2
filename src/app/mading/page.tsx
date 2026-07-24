"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, FileText, Download, Sparkles, Calendar, User } from "lucide-react";
import Link from "next/link";

export default function MadingPage() {
  const [activeTab, setActiveTab] = useState<"karya" | "buletin">("karya");

  const karyaSiswa = [
    {
      title: "Petualangan di Kebun Sekolah",
      author: "Raka Pratama (Kelas 5A)",
      date: "12 Mei 2026",
      category: "Cerpen Anak",
      excerpt: "Hari ini kami bersama Pak Guru menanam bibit pohon mangga di halaman belakang. Rasanya seru sekali bisa melihat langsung proses pertumbuhan tanaman...",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Indahnya Indonesiaku",
      author: "Nadia Kirana (Kelas 4B)",
      date: "05 Mei 2026",
      category: "Puisi",
      excerpt: "Dari Sabang sampai Merauke, terbentang luas pulau nan jaya. Laut biru buih menyapa, hijau sawah permadani semesta...",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Eksperimen Sederhana: Pelangi dalam Gelas",
      author: "Kelompok Sains Kelas 6",
      date: "28 April 2026",
      category: "Artikel Sains",
      excerpt: "Dengan menggunakan air, gula dengan takaran berbeda, dan pewarna makanan, kami berhasil membuat lapisan pelangi mini di dalam gelas laboratorium...",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const buletinSekolah = [
    {
      edisi: "Edisi 01 / Tahun 2026",
      title: "Buletin Triwulan: Transformasi Sekolah Digital",
      size: "4.2 MB",
      pages: "24 Halaman"
    },
    {
      edisi: "Edisi 02 / Tahun 2026",
      title: "Khusus PPDB & Prestasi Siswa Berprestasi",
      size: "5.8 MB",
      pages: "32 Halaman"
    }
  ];

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
            Mading & Arsip Digital Siswa
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
          <Sparkles className="w-4 h-4 text-[#0052CC]" />
          <span>Karya Kreativitas & Buletin Resmi</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Majalah Dinding & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Arsip Digital Sekolah
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-8"
        >
          Wadah apresiasi karya tulis, puisi, hasil sains siswa, serta unduhan buletin bulanan resmi SDN Petukangan Selatan 02.
        </motion.p>

        {/* Tab Switcher */}
        <div className="inline-flex bg-slate-200/60 p-1.5 rounded-2xl gap-2">
          <button 
            onClick={() => setActiveTab("karya")}
            className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all ${
              activeTab === "karya" ? "bg-white text-[#0052CC] shadow-md" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Karya Siswa (Mading)
          </button>
          <button 
            onClick={() => setActiveTab("buletin")}
            className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all ${
              activeTab === "buletin" ? "bg-white text-[#0052CC] shadow-md" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Buletin & Majalah PDF
          </button>
        </div>
      </section>

      {/* Konten Berdasarkan Tab */}
      <section className="px-6 max-w-6xl mx-auto mt-6">
        {activeTab === "karya" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {karyaSiswa.map((karya, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col justify-between group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={karya.image} alt={karya.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0052CC] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {karya.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-2">
                      <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {karya.author}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {karya.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0052CC] transition-colors">{karya.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{karya.excerpt}</p>
                  </div>
                  <span className="text-[#0052CC] font-semibold text-sm hover:underline cursor-pointer">Baca karya lengkap &rarr;</span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {buletinSekolah.map((buletin, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 flex items-center justify-between gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    <FileText className="w-7 h-7 text-[#0052CC]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0052CC] uppercase mb-1">{buletin.edisi}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{buletin.title}</h3>
                    <div className="text-xs text-slate-400 font-medium">Ukuran: {buletin.size} &bull; {buletin.pages}</div>
                  </div>
                </div>
                <button className="w-12 h-12 bg-slate-100 hover:bg-[#0052CC] hover:text-white text-slate-700 rounded-2xl flex items-center justify-center transition-colors shadow-sm shrink-0">
                  <Download className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
