"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Users, Calendar, Sparkles, Heart, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PaguyubanPage() {
  const [joined, setJoined] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      kelas: "Paguyuban Kelas 1 (Fase A)",
      kegiatan: "Bazar Amal & Penggalangan Buku Bacaan Anak",
      jadwal: "15 Agustus 2026",
      koordinator: "Ibu Dian Sastrowardoyo",
      deskripsi: "Koordinasi pengumpulan buku cerita layak baca dan persiapan stan bazar amal untuk mendukung perpustakaan mini sekolah.",
      status: "Aktif / Menerima Partisipasi"
    },
    {
      id: 2,
      kelas: "Paguyuban Kelas 3 (Fase B)",
      kegiatan: "Persiapan Pentas Seni & Kostum Tari Daerah",
      jadwal: "25 Agustus 2026",
      koordinator: "Ibu Rina Melati",
      deskripsi: "Gotong royong orang tua murid dalam mempersiapkan properti, kostum, dan konsumsi latihan pentas seni akhir tahun.",
      status: "Persiapan"
    },
    {
      id: 3,
      kelas: "Paguyuban Kelas 6 (Fase C)",
      kegiatan: "Bakti Sosial & Kenangan Perpisahan Angkatan",
      jadwal: "10 September 2026",
      koordinator: "Bapak Hendra Gunawan",
      deskripsi: "Penyusunan agenda bakti sosial ke panti asuhan terdekat serta koordinasi acara pelepasan siswa kelas 6.",
      status: "Perencanaan"
    }
  ];

  const handleJoin = (kelasName: string) => {
    setJoined(kelasName);
    setTimeout(() => setJoined(null), 4000);
  };

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
            Parent Community & Paguyuban Hub
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
          <Users className="w-4 h-4 text-[#0052CC]" />
          <span>Kolaborasi Erat Orang Tua & Sekolah</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Ruang Kolaborasi <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Paguyuban Orang Tua Murid
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-8"
        >
          Wadah koordinasi digital per jenjang kelas untuk bergotong royong mendukung kegiatan sekolah, bazar amal, pentas seni, dan bakti sosial.
        </motion.p>
      </section>

      {/* Notifikasi Sukses */}
      {joined && (
        <div className="max-w-4xl mx-auto px-6 mb-6">
          <div className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl text-sm font-medium flex items-center gap-2 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Terima kasih! Permintaan bergabung dengan <b>{joined}</b> telah dicatat. Koordinator akan menghubungi Anda via WhatsApp.</span>
          </div>
        </div>
      )}

      {/* Grid Proyek Paguyuban */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col justify-between p-8"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-[#0052CC] bg-blue-50 px-3 py-1 rounded-full">{item.kelas}</span>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">{item.status}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.kegiatan}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.deskripsi}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="space-y-1 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#0052CC]" /> Pelaksanaan: {item.jadwal}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Koordinator: {item.koordinator}
                  </div>
                </div>

                <button
                  onClick={() => handleJoin(item.kelas)}
                  className="w-full bg-[#0052CC] hover:bg-blue-700 text-white py-3 rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/20 text-sm flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" /> Gabung & Berpartisipasi
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
