"use client";

import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Award, Briefcase, Sparkles, Calendar, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AlumniPage() {
  const alumniList = [
    {
      name: "Dr. Ardiansyah Putra, S.T.",
      lulusan: "Lulusan Tahun 2012",
      sekolahLanjutan: "SMPN 19 Jakarta & SMAN 70 Jakarta",
      profesi: "Software Engineer & AI Researcher di Tokyo, Jepang",
      testimoni: "Dasar-dasar kedisiplinan dan rasa ingin tahu yang ditanamkan guru-guru di SDN Petukangan Selatan 02 menjadi fondasi terbesar perjalanan karier internasional saya.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Nadira Maharani, S.Ked.",
      lulusan: "Lulusan Tahun 2015",
      sekolahLanjutan: "SMPN 115 Jakarta & SMAN 8 Jakarta",
      profesi: "Dokter Muda & Peneliti Kesehatan",
      testimoni: "Lingkungan sekolah yang ramah anak dan penuh dukungan membuat saya berani bermimpi besar sejak duduk di bangku sekolah dasar.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Rizky Ramadhan, B.Bus.",
      lulusan: "Lulusan Tahun 2017",
      sekolahLanjutan: "SMP Labschool & Prasetya Mulya Business School",
      profesi: "Founder & CEO Start-up EduTek",
      testimoni: "Bukan hanya akademik, kegiatan ekstrakurikuler di sekolah ini melatih mental kepemimpinan saya dalam membangun tim kerja saat ini.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
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
            Jejak Alumni & Kisah Sukses
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
          <span>Jaringan & Prestasi Lulusan Terbaik</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Jejak Langkah <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Alumni Kebanggaan Sekolah
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-8"
        >
          Melihat kembali pencapaian gemilang para alumni SDN Petukangan Selatan 02 yang kini berkarier dan berkontribusi di berbagai bidang tingkat nasional maupun global.
        </motion.p>
      </section>

      {/* Grid Alumni Stories */}
      <section className="px-6 max-w-6xl mx-auto mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {alumniList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col justify-between group"
            >
              <div className="h-56 overflow-hidden relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-[#0052CC] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {item.lulusan}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{item.name}</h3>
                  <div className="text-xs font-semibold text-emerald-600 mb-4 flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" /> {item.profesi}
                  </div>
                  <p className="text-slate-500 text-sm italic leading-relaxed mb-6">"{item.testimoni}"</p>
                </div>
                <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium">
                  Riwayat: {item.sekolahLanjutan}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
