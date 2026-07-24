"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Award, BookOpen } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function AkademikPage() {
  const [guru, setGuru] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGuru() {
      const { data, error } = await supabase
        .from('guru')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (!error && data) {
        setGuru(data);
      }
      setLoading(false);
    }
    fetchGuru();
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
            Akademik & Tenaga Pendidik
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6 shadow-sm"
        >
          <Award className="w-4 h-4" />
          Tim Pendidik Profesional
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Dedikasi Tinggi Untuk <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Pendidikan Berkualitas
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto"
        >
          SD Negeri Petukangan Selatan 02 didukung oleh barisan guru dan staf bersertifikasi yang berdedikasi untuk memaksimalkan potensi setiap siswa.
        </motion.p>
      </section>

      {/* Grid Guru (Fetch from Supabase) */}
      <section className="px-6 max-w-6xl mx-auto">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0052CC]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {guru.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-200/30 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-5 border-4 border-slate-50 shadow-sm">
                  <img 
                    src={item.foto_url} 
                    alt={item.nama} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.nama}</h3>
                <div className="text-sm font-medium text-[#0052CC] mb-3">{item.jabatan}</div>
                <div className="text-xs text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 w-full">
                  NIP: {item.nip || '-'}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
