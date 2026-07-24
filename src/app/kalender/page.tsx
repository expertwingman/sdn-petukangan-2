"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar as CalendarIcon, Clock, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function KalenderPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, minutes: 45, seconds: 30 });

  // Simulasi hitung mundur sederhana
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const agendaList = [
    {
      tanggal: "05 Agustus 2026",
      kegiatan: "Ujian Tengah Semester (UTS) Ganjil",
      lokasi: "Ruang Kelas Masing-masing",
      status: "Mendatang"
    },
    {
      tanggal: "17 Agustus 2026",
      kegiatan: "Upacara Peringatan HUT Kemerdekaan RI ke-81",
      lokasi: "Lapangan Utama SDN Petukangan Selatan 02",
      status: "Agenda Utama"
    },
    {
      tanggal: "25 Agustus 2026",
      kegiatan: "Pentas Seni & Pameran Karya Siswa",
      lokasi: "Aula Serbaguna Sekolah",
      status: "Terjadwal"
    },
    {
      tanggal: "10 September 2026",
      kegiatan: "Rapat Koordinasi Komite & Orang Tua Murid",
      lokasi: "Ruang Guru / Daring",
      status: "Terjadwal"
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
            Kalender Akademik & Hitung Mundur
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
          <span>Agenda & Kegiatan Resmi Sekolah</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Kalender Interaktif & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Hitung Mundur Agenda
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-10"
        >
          Pantau jadwal kegiatan akademik, ujian, dan acara spesial sekolah secara presisi dan terstruktur.
        </motion.p>

        {/* Countdown Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden mb-12"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-2">Hitung Mundur Menuju Agenda Terdekat</div>
          <h3 className="text-2xl font-bold mb-6">Ujian Tengah Semester (UTS) Ganjil</h3>

          <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
            <div className="bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700">
              <div className="text-3xl font-extrabold text-white">{timeLeft.days}</div>
              <div className="text-xs text-slate-400 mt-1 uppercase font-medium">Hari</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700">
              <div className="text-3xl font-extrabold text-white">{timeLeft.hours}</div>
              <div className="text-xs text-slate-400 mt-1 uppercase font-medium">Jam</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700">
              <div className="text-3xl font-extrabold text-white">{timeLeft.minutes}</div>
              <div className="text-xs text-slate-400 mt-1 uppercase font-medium">Menit</div>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700">
              <div className="text-3xl font-extrabold text-[#00A854]">{timeLeft.seconds}</div>
              <div className="text-xs text-slate-400 mt-1 uppercase font-medium">Detik</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Daftar Agenda */}
      <section className="px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-[#0052CC]" /> Jadwal Kegiatan Semester Ini
        </h3>
        <div className="space-y-4">
          {agendaList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-200/40 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="text-xs font-bold text-[#0052CC] uppercase tracking-wider">{item.tanggal}</div>
                <h4 className="text-xl font-bold text-slate-900">{item.kegiatan}</h4>
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> {item.lokasi}
                </div>
              </div>
              <span className={`px-4 py-2 rounded-xl text-xs font-bold ${
                item.status === 'Agenda Utama' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-700'
              }`}>
                {item.status}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
