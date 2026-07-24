"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Users, Award, Calendar, Sparkles, ShieldCheck, Clock, UserCheck } from "lucide-react";
import Link from "next/link";

export default function EkskulPage() {
  const [filter, setFilter] = useState("Semua");

  const listEkskul = [
    {
      id: 1,
      nama: "Pramuka Siaga & Penggalang",
      kategori: "Keterampilan",
      jadwal: "Jumat, 14:00 - 16:00 WIB",
      pembina: "Kak Ahmad Fauzi, S.Pd.",
      deskripsi: "Membentuk karakter disiplin, mandiri, dan cinta tanah air melalui kegiatan kepanduan yang interaktif dan menyenangkan.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      anggota: "85 Siswa"
    },
    {
      id: 2,
      nama: "Marching Band Gita Swara 02",
      kategori: "Seni & Budaya",
      jadwal: "Sabtu, 08:00 - 11:00 WIB",
      pembina: "Kak Siska Melina, M.Sn.",
      deskripsi: "Mengasah kemampuan bermusik, kerja sama tim, dan koordinasi ritmik. Sering tampil dalam ajang festival tingkat kota.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      anggota: "50 Siswa"
    },
    {
      id: 3,
      nama: "Seni Tari Tradisional Betawi",
      kategori: "Seni & Budaya",
      jadwal: "Rabu, 15:00 - 16:30 WIB",
      pembina: "Ibu Hj. Siti Aminah",
      deskripsi: "Melestarikan seni budaya lokal khususnya tari tradisional Betawi dan nusantara untuk menumbuhkan kecintaan pada warisan bangsa.",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      anggota: "40 Siswa"
    },
    {
      id: 4,
      nama: "Pencak Silat Tapak Suci",
      kategori: "Olahraga",
      jadwal: "Selasa & Kamis, 15:00 - 17:00 WIB",
      pembina: "Coach Budi Santoso",
      deskripsi: "Pendidikan jasmani, pembentukan mental bela diri, serta prestasi kejuaraan tingkat pelajar.",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
      anggota: "60 Siswa"
    },
    {
      id: 5,
      nama: "Futsal & Mini Soccer Club",
      kategori: "Olahraga",
      jadwal: "Senin & Rabu, 15:30 - 17:00 WIB",
      pembina: "Coach Rian Pratama, S.Or.",
      deskripsi: "Melatih sportivitas, strategi permainan tim, dan kesehatan fisik melalui latihan sepak bola mini terpadu.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
      anggota: "70 Siswa"
    },
    {
      id: 6,
      nama: "Junior Coding & Robotic Club",
      kategori: "Keterampilan",
      jadwal: "Kamis, 14:00 - 15:30 WIB",
      pembina: "Roni Laksono, S.Kom.",
      deskripsi: "Pengenalan logika pemrograman dasar, visual block coding, dan perakitan robotika sederhana untuk anak.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      anggota: "35 Siswa"
    }
  ];

  const filteredEkskul = filter === "Semua" ? listEkskul : listEkskul.filter(item => item.kategori === filter);

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
            Pusat Ekstrakurikuler & Klub Siswa
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
          <span>Pengembangan Bakat & Minat Siswa</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Klub & Kegiatan <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Ekstrakurikuler Pilihan
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-8"
        >
          Wadah bagi peserta didik untuk mengasah potensi non-akademik, membangun kepemimpinan, dan menyalurkan kreativitas secara positif.
        </motion.p>

        {/* Filter Kategori */}
        <div className="flex flex-wrap justify-center gap-2">
          {["Semua", "Olahraga", "Seni & Budaya", "Keterampilan"].map((cat) => (
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

      {/* Grid Ekstrakurikuler */}
      <section className="px-6 max-w-7xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEkskul.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col justify-between group"
            >
              <div className="h-52 overflow-hidden relative">
                <img src={item.image} alt={item.nama} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0052CC] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {item.kategori}
                </span>
                <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {item.anggota}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0052CC] transition-colors">{item.nama}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.deskripsi}</p>
                </div>
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <Calendar className="w-4 h-4 text-[#0052CC]" />
                    <span>{item.jadwal}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <Users className="w-4 h-4 text-[#00A854]" />
                    <span>Pembina: {item.pembina}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
