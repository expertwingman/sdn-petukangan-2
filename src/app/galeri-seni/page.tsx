"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Palette, Sparkles, User, X, Eye } from "lucide-react";
import Link from "next/link";

export default function ArtGalleryPage() {
  const [selectedArt, setSelectedArt] = useState<any | null>(null);
  const [filter, setFilter] = useState("Semua");

  const artPieces = [
    {
      id: 1,
      title: "Pemandangan Sawah Hijau Nusantara",
      kategori: "Lukisan",
      author: "Kirana Putri",
      kelas: "Kelas 4B",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
      deskripsi: "Lukisan cat air yang menggambarkan keindahan panorama persawahan di pedesaan Indonesia dengan warna-warna cerah penuh keceriaan."
    },
    {
      id: 2,
      title: "Kriya Botol Daur Ulang Menjadi Vas Bunga",
      kategori: "Kerajinan Tangan",
      author: "Farel Aditya",
      kelas: "Kelas 5A",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
      deskripsi: "Hasil karya daur ulang sampah plastik botol bekas yang dihias dengan motif batik tradisional ciptaan siswa dalam program Eco-School."
    },
    {
      id: 3,
      title: "Burung Garuda Pancasila dari Kertas Origami",
      kategori: "Prakarya",
      author: "Zahra Aulia",
      kelas: "Kelas 6A",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      deskripsi: "Seni melipat kertas (origami) membentuk lambang negara Garuda Pancasila dengan ketelitian tinggi dan kombinasi warna emas."
    }
  ];

  const filteredArt = filter === "Semua" ? artPieces : artPieces.filter(item => item.kategori === filter);

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
            Student Art Gallery & Kreativitas
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
          <Palette className="w-4 h-4 text-[#0052CC]" />
          <span>Apresiasi Seni & Ekspresi Siswa</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Galeri Karya Seni & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Kreativitas Peserta Didik
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-8"
        >
          Pameran virtual hasil karya lukis, kerajinan tangan, dan prakarya inspiratif buatan tangan siswa-siswi SDN Petukangan Selatan 02.
        </motion.p>

        {/* Filter Kategori */}
        <div className="flex flex-wrap justify-center gap-2">
          {["Semua", "Lukisan", "Kerajinan Tangan", "Prakarya"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm ${
                filter === cat ? "bg-[#0052CC] text-white shadow-blue-500/25" : "bg-white text-slate-600 border border-slate-200 hover:border-[#0052CC]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Galeri Seni */}
      <section className="px-6 max-w-7xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArt.map((art, index) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedArt(art)}
            >
              <div className="h-60 overflow-hidden relative">
                <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0052CC] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {art.kategori}
                </span>
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-full font-bold text-xs shadow-lg flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-[#0052CC]" /> Lihat Detail Karya
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0052CC] transition-colors">{art.title}</h3>
                  <div className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#0052CC]" /> {art.author} ({art.kelas})
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Detail Karya */}
      <AnimatePresence>
        {selectedArt && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-10 shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedArt(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-600 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-bold text-[#0052CC] uppercase tracking-wider mb-2">{selectedArt.kategori}</div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{selectedArt.title}</h2>
              <div className="text-xs text-slate-400 font-medium mb-6">
                Karya oleh: <span className="font-bold text-slate-700">{selectedArt.author}</span> ({selectedArt.kelas})
              </div>

              <div className="h-72 rounded-2xl overflow-hidden mb-6 shadow-md">
                <img src={selectedArt.image} alt={selectedArt.title} className="w-full h-full object-cover" />
              </div>

              <p className="text-slate-600 text-base leading-relaxed mb-8">{selectedArt.deskripsi}</p>

              <button
                onClick={() => setSelectedArt(null)}
                className="w-full bg-[#0052CC] hover:bg-blue-700 text-white py-3.5 rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/20"
              >
                Tutup Galeri
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
