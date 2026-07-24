"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, Users, FileText, Bot, TrendingUp, ShieldCheck, Lock } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Passcode sederhana untuk prototipe (bisa diganti otentikasi JWT Supabase nantinya)
    if (passcode === process.env.DASHBOARD_PIN || "admin02") {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#F8F9FA] flex items-center justify-center p-6 font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-200/60 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-[#0052CC]" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Executive Login</h1>
          <p className="text-slate-500 text-sm mb-6">Masukkan PIN akses khusus Kepala Sekolah dan Dinas Pendidikan (Gunakan: <span className="font-mono font-bold text-slate-700">admin02</span>)</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Masukkan PIN Akses..."
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-center text-lg tracking-widest focus:outline-none focus:border-[#0052CC] transition-colors bg-slate-50"
            />
            {error && <p className="text-rose-500 text-xs font-medium">PIN yang Anda masukkan salah.</p>}
            <button 
              type="submit"
              className="w-full bg-[#0052CC] hover:bg-blue-700 text-white py-3.5 rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/25"
            >
              Masuk Dashboard
            </button>
          </form>

          <div className="mt-6">
            <Link href="/" className="text-xs text-slate-400 hover:text-[#0052CC] transition-colors">
              &larr; Kembali ke Beranda Utama
            </Link>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans pb-24">
      {/* Navbar Dashboard */}
      <header className="sticky top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-slate-200/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0052CC] rounded-xl flex items-center justify-center text-white font-bold text-xl">
              02
            </div>
            <div>
              <div className="font-bold text-slate-800 text-sm">Dashboard Eksekutif</div>
              <div className="text-xs text-slate-400">SDN Petukangan Selatan 02</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-100 font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Terverifikasi Dinas
            </span>
            <Link href="/" className="text-sm font-medium text-slate-500 hover:text-rose-600 transition-colors">
              Keluar
            </Link>
          </div>
        </div>
      </header>

      {/* Konten Analitik */}
      <section className="pt-10 px-6 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Ringkasan Statistik & Performa</h1>
          <p className="text-slate-500 text-sm">Data analitik real-time dari seluruh aktivitas platform digital sekolah.</p>
        </div>

        {/* Grid Kartu Statistik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {[
            { title: "Total Kunjungan Web", value: "24,592", change: "+12.4%", icon: BarChart3, color: "text-blue-600", bg: "bg-blue-50" },
            { title: "Pendaftar PPDB Online", value: "312", change: "+18.2%", icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
            { title: "Dokumen / Arsip Unduhan", value: "1,480", change: "+5.1%", icon: FileText, color: "text-amber-600", bg: "bg-amber-50" },
            { title: "Pertanyaan AI Chatbot", value: "945", change: "+24.0%", icon: Bot, color: "text-indigo-600", bg: "bg-indigo-50" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">{stat.change}</span>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-slate-400 text-xs font-medium">{stat.title}</div>
            </motion.div>
          ))}
        </div>

        {/* Tabel Aktivitas & Grafik Simulasi */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#0052CC]" /> Tren Pendaftar PPDB Per Jalur
            </h2>
            <div className="space-y-4 pt-2">
              {[
                { label: "Jalur Zonasi Wilayah", count: "185 Siswa", percent: "60%" },
                { label: "Jalur Afirmasi & Prestasi", count: "82 Siswa", percent: "26%" },
                { label: "Jalur Perpindahan Tugas Orang Tua", count: "45 Siswa", percent: "14%" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-700">{item.label}</span>
                    <span className="font-bold text-slate-900">{item.count}</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#0052CC] rounded-full" style={{ width: item.percent }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl shadow-slate-900/20 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-2">Status Sistem</div>
              <h2 className="text-xl font-bold mb-4">Infrastruktur Optimal</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Seluruh server Supabase, CDN Vercel, dan enkripsi SSL berjalan tanpa gangguan. Performa Lighthouse tetap pada skor 100%.
              </p>
            </div>
            <div className="p-4 bg-slate-800 border border-slate-700 rounded-2xl text-xs text-slate-300">
              Sinkronisasi terakhir: <span className="font-bold text-white">Baru saja</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
