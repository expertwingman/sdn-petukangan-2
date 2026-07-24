"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Box } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function FasilitasPage() {
  const [fasilitas, setFasilitas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFasilitas() {
      const { data, error } = await supabase
        .from('fasilitas')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (!error && data) {
        setFasilitas(data);
      }
      setLoading(false);
    }
    fetchFasilitas();
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans pb-24">
      {/* Navbar Simple */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-[#0052CC] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm">Kembali ke Beranda</span>
          </Link>
          <div className="font-semibold text-lg tracking-tight text-slate-800">
            Fasilitas Sekolah
          </div>
        </div>
      </header>

      {/* Hero Section Fasilitas */}
      <section className="pt-32 pb-12 px-6 max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Infrastruktur Berstandar <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Untuk Pembelajaran Optimal
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-slate-500 leading-relaxed"
        >
          Kami memastikan setiap siswa mendapatkan akses ke fasilitas terbaik yang mendukung pengembangan akademik, fisik, dan kreativitas mereka.
        </motion.p>
      </section>

      {/* Grid Fasilitas (Fetch from Supabase) */}
      <section className="px-6 max-w-6xl mx-auto">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0052CC]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fasilitas.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/40 border border-slate-100 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={item.gambar_url} 
                    alt={item.nama_fasilitas} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 -mt-14 relative z-20 shadow-sm border border-white">
                    <Box className="w-6 h-6 text-[#0052CC]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.nama_fasilitas}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.deskripsi}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
