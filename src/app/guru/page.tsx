"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Users, Award, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";

export default function GuruPage() {
  const [filter, setFilter] = useState("Semua");

  const staffList = [
    {
      name: "Drs. H. M. Sutisna, M.Pd.",
      role: "Kepala Sekolah",
      kategori: "Pimpinan",
      pendidikan: "S2 Manajemen Pendidikan IKIP",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Ibu Hj. Siti Aminah, S.Pd.",
      role: "Wali Kelas 5A & Guru Senior",
      kategori: "Guru Kelas",
      pendidikan: "S1 Pendidikan Guru Sekolah Dasar",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Bapak Ahmad Fauzi, S.Pd.",
      role: "Wali Kelas 6B & Pembina Pramuka",
      kategori: "Guru Kelas",
      pendidikan: "S1 Pendidikan Olahraga & Rekreasi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Ibu Siska Melina, M.Sn.",
      role: "Guru Seni Budaya & Keterampilan",
      kategori: "Bidang Studi",
      pendidikan: "S2 Seni Pertunjukan",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Bapak Rian Pratama, S.Or.",
      role: "Guru PJOK & Pelatih Futsal",
      kategori: "Bidang Studi",
      pendidikan: "S1 Pendidikan Jasmani",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Ibu Dewi Lestari, A.Md.",
      role: "Staf Administrasi & Tata Usaha",
      kategori: "Staf & TU",
      pendidikan: "D3 Administrasi Perkantoran",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredStaff = filter === "Semua" ? staffList : staffList.filter(s => s.kategori === filter);

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
            Direktori Guru & Staf Pengajar
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
          <span>Tenaga Pendidik Profesional & Berdedikasi</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Direktori Guru & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Staf Pengajar Sekolah
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-8"
        >
          Mengenal lebih dekat para pendidik dan tenaga kependidikan di SDN Petukangan Selatan 02 yang membimbing siswa dengan sepenuh hati.
        </motion.p>

        {/* Filter Kategori */}
        <div className="flex flex-wrap justify-center gap-2">
          {["Semua", "Pimpinan", "Guru Kelas", "Bidang Studi", "Staf & TU"].map((cat) => (
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

      {/* Grid Staff */}
      <section className="px-6 max-w-7xl mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStaff.map((staff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col justify-between group"
            >
              <div className="h-60 overflow-hidden relative">
                <img src={staff.image} alt={staff.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0052CC] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {staff.kategori}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{staff.name}</h3>
                  <div className="text-sm font-semibold text-[#0052CC] mb-4">{staff.role}</div>
                </div>
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium">
                  Latar Belakang: {staff.pendidikan}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
