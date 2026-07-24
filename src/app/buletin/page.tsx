"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BookOpen, Sparkles, Calendar, Download, X, Eye } from "lucide-react";
import Link from "next/link";

export default function BuletinPage() {
  const [selectedEdition, setSelectedEdition] = useState<any | null>(null);

  const editions = [
    {
      id: 1,
      title: "Buletin Triwulan I: Digitalisasi & Prestasi",
      edisi: "Edisi 01 / Tahun 2026",
      tanggal: "Maret 2026",
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      deskripsi: "Rangkuman lengkap liputan khusus prestasi siswa, implementasi kurikulum digital, galeri kegiatan eco-school, dan ulasan karya tulis peserta didik.",
      halaman: 24
    },
    {
      id: 2,
      title: "Majalah Dinding Spesial Hari Pendidikan",
      edisi: "Edisi Khusus / Mei 2026",
      tanggal: "Mei 2026",
      cover: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      deskripsi: "Edisi khusus menyambut Hari Pendidikan Nasional yang memuat puisi karya siswa, liputan pentas seni, serta wawancara eksklusif bersama kepala sekolah.",
      halaman: 18
    },
    {
      id: 3,
      title: "Buletin Triwulan II: Kreativitas & Seni Budaya",
      edisi: "Edisi 02 / Tahun 2026",
      tanggal: "Juni 2026",
      cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      deskripsi: "Fokus pada pelestarian budaya Betawi, pameran seni rupa siswa, serta laporan kegiatan akhir tahun ajaran.",
      halaman: 30
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
            Digital School Magazine & Newsletter
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
          <span>Publikasi Resmi & Majalah Dinding Sekolah</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Buletin & Majalah Dinding <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Digital Interaktif
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-8"
        >
          Kumpulan e-magazine triwulanan yang merangkum liputan khusus kegiatan siswa, karya tulis, dan galeri eksklusif SDN Petukangan Selatan 02.
        </motion.p>
      </section>

      {/* Grid Edisi Buletin */}
      <section className="px-6 max-w-7xl mx-auto mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedEdition(item)}
            >
              <div className="h-60 overflow-hidden relative">
                <img src={item.cover} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0052CC] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {item.edisi}
                </span>
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-full font-bold text-xs shadow-lg flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-[#0052CC]" /> Baca E-Magazine
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-medium mb-2 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#0052CC]" /> {item.tanggal} &bull; {item.halaman} Halaman
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0052CC] transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{item.deskripsi}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Reader */}
      <AnimatePresence>
        {selectedEdition && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-10 shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedEdition(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-600 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-bold text-[#0052CC] uppercase tracking-wider mb-2">{selectedEdition.edisi}</div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{selectedEdition.title}</h2>
              <div className="text-xs text-slate-400 font-medium mb-6">
                Tanggal Terbit: {selectedEdition.tanggal} &bull; Total: {selectedEdition.halaman} Halaman
              </div>

              <div className="h-64 rounded-2xl overflow-hidden mb-6 shadow-md">
                <img src={selectedEdition.cover} alt={selectedEdition.title} className="w-full h-full object-cover" />
              </div>

              <p className="text-slate-600 text-base leading-relaxed mb-8">{selectedEdition.deskripsi}</p>

              <div className="flex gap-4">
                <button
                  onClick={() => alert("Mengunduh edisi buletin dalam format PDF...")}
                  className="flex-1 bg-[#0052CC] hover:bg-blue-700 text-white py-3.5 rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 text-sm"
                >
                  <Download className="w-4 h-4" /> Unduh Versi PDF
                </button>
                <button
                  onClick={() => setSelectedEdition(null)}
                  className="px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3.5 rounded-2xl font-medium transition-all text-sm"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
