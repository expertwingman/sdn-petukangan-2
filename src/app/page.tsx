"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Users, Calendar } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [berita, setBerita] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk menarik data dari Supabase
  useEffect(() => {
    async function fetchBerita() {
      const { data, error } = await supabase
        .from('berita')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (!error && data) {
        setBerita(data);
      }
      setLoading(false);
    }
    fetchBerita();
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-slate-900 overflow-hidden font-sans pb-24">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0052CC] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
              02
            </div>
            <span className="font-semibold text-lg tracking-tight text-slate-800">
              SDN Petukangan Selatan 02
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-[#0052CC] transition-colors">Profil</a>
            <a href="#" className="hover:text-[#0052CC] transition-colors">Akademik</a>
            <a href="#" className="hover:text-[#0052CC] transition-colors">Fasilitas</a>
            <a href="#berita" className="hover:text-[#0052CC] transition-colors">Berita</a>
          </nav>
          <button className="bg-[#0052CC] hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md shadow-blue-500/20">
            Portal PPDB
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-blue-400/20 to-emerald-400/20 blur-[100px] -z-10 rounded-full" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          Akreditasi A & Sekolah Ramah Anak
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 max-w-4xl leading-[1.1]"
        >
          Membentuk Karakter, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Merancang Masa Depan.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg text-slate-500 max-w-2xl"
        >
          Sekolah dasar negeri terbaik di Pesanggrahan dengan fasilitas digital, lingkungan inklusif, dan tenaga pendidik profesional standar global.
        </motion.p>
      </section>

      {/* Bagian Berita Terkini (Integrasi Supabase) */}
      <section id="berita" className="px-6 max-w-7xl mx-auto mt-10">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Berita & Informasi</h2>
          <button className="hidden sm:flex items-center gap-2 text-[#0052CC] font-medium hover:underline">
            Lihat Semua <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0052CC]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {berita.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/40 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.gambar_url} 
                    alt={item.judul} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">{item.judul}</h3>
                  <p className="text-slate-500 line-clamp-3 mb-4">{item.konten}</p>
                  <span className="text-[#0052CC] font-medium text-sm">Baca selengkapnya &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}