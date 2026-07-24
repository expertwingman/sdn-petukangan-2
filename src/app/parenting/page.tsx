"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BookOpen, Sparkles, User, Clock, X } from "lucide-react";
import Link from "next/link";

export default function ParentingPage() {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const articles = [
    {
      id: 1,
      title: "Mendampingi Anak Belajar di Rumah dengan Metode Positif",
      kategori: "Pola Asuh",
      penulis: "Ibu Hj. Siti Aminah, S.Pd. (Guru BK)",
      waktuBaca: "5 Menit",
      cover: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      isi: "Pendampingan belajar yang efektif bukan tentang memaksakan kehendak, melainkan menciptakan suasana yang menyenangkan di rumah. Berikan apresiasi pada setiap usaha kecil anak, dengarkan keluh kesah mereka saat menghadapi soal yang sulit, dan jadilah pendengar yang sabar."
    },
    {
      id: 2,
      title: "Mengatur Batas Waktu Penggunaan Gawai (Screen Time) pada Anak",
      kategori: "Kesehatan Mental",
      penulis: "Bapak Drs. H. M. Sutisna, M.Pd.",
      waktuBaca: "4 Menit",
      cover: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
      isi: "Di era digital ini, gawai bagaikan pisau bermata dua. Orang tua perlu menetapkan aturan yang konsisten mengenai durasi penggunaan gawai, mengarahkannya pada konten edukatif, serta memperbanyak aktivitas luar ruangan agar anak tetap aktif secara fisik."
    },
    {
      id: 3,
      title: "Membangun Rasa Percaya Diri Anak Sejak Usia Dini",
      kategori: "Psikologi Anak",
      penulis: "Ibu Siska Melina, M.Sn.",
      waktuBaca: "6 Menit",
      cover: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
      isi: "Kepercayaan diri tumbuh ketika anak merasa dihargai di dalam keluarga. Berikan mereka tanggung jawab kecil di rumah, dukung hobi positif mereka, dan hindari membanding-bandingkan anak dengan orang lain."
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
            Parenting Tips & Expert Corner
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
          <span>Panduan & Artikel Psikologi Orang Tua</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Pojok Artikel & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Panduan Orang Tua Murid
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-8"
        >
          Kumpulan artikel edukatif, tips pola asuh positif, dan panduan mendampingi tumbuh kembang anak dari para ahli dan guru berpengalaman.
        </motion.p>
      </section>

      {/* Grid Artikel */}
      <section className="px-6 max-w-7xl mx-auto mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedArticle(item)}
            >
              <div className="h-60 overflow-hidden relative">
                <img src={item.cover} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0052CC] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {item.kategori}
                </span>
                <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {item.waktuBaca}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0052CC] transition-colors">{item.title}</h3>
                  <div className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#0052CC]" /> {item.penulis}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Artikel */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-10 shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-600 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-bold text-[#0052CC] uppercase tracking-wider mb-2">{selectedArticle.kategori}</div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{selectedArticle.title}</h2>
              <div className="text-xs text-slate-400 font-medium mb-6">
                Ditulis oleh: <span className="font-bold text-slate-700">{selectedArticle.penulis}</span> &bull; Waktu Baca: {selectedArticle.waktuBaca}
              </div>

              <div className="h-64 rounded-2xl overflow-hidden mb-6 shadow-md">
                <img src={selectedArticle.cover} alt={selectedArticle.title} className="w-full h-full object-cover" />
              </div>

              <p className="text-slate-600 text-base leading-relaxed mb-8">{selectedArticle.isi}</p>

              <button
                onClick={() => setSelectedArticle(null)}
                className="w-full bg-[#0052CC] hover:bg-blue-700 text-white py-3.5 rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/20"
              >
                Tutup Artikel
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
