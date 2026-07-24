"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BookOpen, Sparkles, Clock, User, BookMarked, X } from "lucide-react";
import Link from "next/link";

export default function StorybookPage() {
  const [selectedStory, setSelectedStory] = useState<any | null>(null);
  const [filter, setFilter] = useState("Semua");

  const stories = [
    {
      id: 1,
      title: "Kancil dan Sahabat Hutan",
      kategori: "Fabel",
      penulis: "Tim Literasi SDN Petukangan 02",
      waktuBaca: "4 Menit",
      cover: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      isi: "Di sebuah hutan yang lebat dan asri, Si Kancil dikenal sebagai hewan yang cerdik dan suka membantu teman-temannya. Suatu hari, ketika musim kemarau tiba, sumber air di dekat sungai mulai menyusut. Kancil berinisiatif mengajak seluruh penghuni hutan untuk bekerja sama menggali sumur penampungan air hujan agar semua hewan tetap bisa bertahan hidup. Dari kisah ini, kita belajar bahwa kerja sama dan kecerdikan yang digunakan untuk kebaikan akan menyelamatkan banyak orang."
    },
    {
      id: 2,
      title: "Asal-Usul Burung Cendrawasih",
      kategori: "Dongeng Nusantara",
      penulis: "Ibu Hj. Siti Aminah, S.Pd.",
      waktuBaca: "6 Menit",
      cover: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      isi: "Konon di pedalaman tanah Papua, hiduplah seorang anak penari yang sangat berbakat. Suatu ketika, ia mengenakan pakaian berbulu indah berwarna-warni untuk mempersembahkan tarian suci kepada alam. Karena ketulusan hatinya, ia dianugerahi sayap yang indah dan terbang tinggi menjadi burung surga yang memesona, yang kini kita kenal sebagai Burung Cendrawasih."
    },
    {
      id: 3,
      title: "Petualangan Menanam Pohon Pertama",
      kategori: "Cerita Edukasi",
      penulis: "Roni Laksono, S.Kom.",
      waktuBaca: "5 Menit",
      cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      isi: "Bintang dan kawan-kawan sekelasnya mendapatkan tugas dari Pak Guru untuk menanam bibit pohon mangga di pekarangan sekolah. Mereka belajar bagaimana merawat tanah, menyiramnya setiap hari dengan air secukupnya, dan melihat tunas hijau pertama tumbuh dari dalam biji. Pengalaman ini mengajarkan mereka arti penting menjaga kelestarian lingkungan sejak dini."
    }
  ];

  const filteredStories = filter === "Semua" ? stories : stories.filter(s => s.kategori === filter);

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
            Digital Storybook Corner
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
          <span>Gerakan Literasi Sekolah (GLS)</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Pojok Cerita & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Literasi Digital Anak
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-8"
        >
          Kumpulan dongeng nusantara, fabel mendidik, dan cerita inspiratif pilihan untuk menumbuhkan minat baca sejak dini.
        </motion.p>

        {/* Filter Kategori */}
        <div className="flex flex-wrap justify-center gap-2">
          {["Semua", "Fabel", "Dongeng Nusantara", "Cerita Edukasi"].map((cat) => (
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

      {/* Grid Buku Cerita */}
      <section className="px-6 max-w-7xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedStory(story)}
            >
              <div className="h-52 overflow-hidden relative">
                <img src={story.cover} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0052CC] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {story.kategori}
                </span>
                <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {story.waktuBaca}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0052CC] transition-colors">{story.title}</h3>
                  <div className="text-xs text-slate-400 font-medium mb-4 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#0052CC]" /> {story.penulis}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[#0052CC] font-semibold text-sm">
                  <BookMarked className="w-4 h-4" /> Baca Cerita Lengkap
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Baca Cerita */}
      <AnimatePresence>
        {selectedStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-8 md:p-10 shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedStory(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-600 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-bold text-[#0052CC] uppercase tracking-wider mb-2">{selectedStory.kategori}</div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{selectedStory.title}</h2>
              <div className="text-xs text-slate-400 font-medium mb-6 flex items-center gap-2">
                <span>Penulis: {selectedStory.penulis}</span> &bull; <span>Waktu Baca: {selectedStory.waktuBaca}</span>
              </div>

              <div className="h-64 rounded-2xl overflow-hidden mb-6 shadow-md">
                <img src={selectedStory.cover} alt={selectedStory.title} className="w-full h-full object-cover" />
              </div>

              <div className="text-slate-600 text-base leading-relaxed space-y-4 mb-8">
                <p>{selectedStory.isi}</p>
              </div>

              <button
                onClick={() => setSelectedStory(null)}
                className="w-full bg-[#0052CC] hover:bg-blue-700 text-white py-3.5 rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/20"
              >
                Tutup Cerita
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
