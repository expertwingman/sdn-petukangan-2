"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Users, Calendar, Sparkles, Globe } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function Home() {
  const [berita, setBerita] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState<"id" | "en">("id");

  const t = {
    id: {
      badge: "Akreditasi A & Sekolah Ramah Anak",
      titleMain: "Membentuk Karakter,",
      titleSub: "Merancang Masa Depan.",
      desc: "Sekolah dasar negeri terbaik di Pesanggrahan dengan fasilitas digital, lingkungan inklusif, dan tenaga pendidik profesional standar global.",
      ctaPPDB: "Mulai Pendaftaran PPDB",
      ctaProfile: "Pelajari Profil Sekolah",
      newsLabel: "Informasi Terkini",
      newsTitle: "Berita & Kegiatan Sekolah",
      readMore: "Baca selengkapnya"
    },
    en: {
      badge: "A-Accredited & Child-Friendly School",
      titleMain: "Building Character,",
      titleSub: "Designing the Future.",
      desc: "The leading public elementary school in Pesanggrahan featuring digital facilities, an inclusive environment, and professional educators.",
      ctaPPDB: "Start PPDB Registration",
      ctaProfile: "Explore School Profile",
      newsLabel: "Latest Updates",
      newsTitle: "School News & Activities",
      readMore: "Read more"
    }
  };

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
    <main className="min-h-screen bg-[#F8F9FA] text-slate-900 overflow-hidden font-sans pb-24 selection:bg-blue-500 selection:text-white">
      {/* Navbar dengan Menu Lengkap & Multi-Bahasa */}
      <header className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-slate-200/40 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-tr from-[#0052CC] to-blue-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
              02
            </div>
            <span className="font-semibold text-lg tracking-tight text-slate-800">
              SDN Petukangan Selatan 02
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link className="hover:text-[#0052CC] transition-colors" href="/profil">Profil</Link>
            <Link className="hover:text-[#0052CC] transition-colors" href="/akademik">Akademik</Link>
            <Link className="hover:text-[#0052CC] transition-colors" href="/fasilitas">Fasilitas</Link>
            <Link className="hover:text-[#0052CC] transition-colors" href="/konsultasi">Konsultasi</Link>
            <Link className="hover:text-[#0052CC] transition-colors" href="/lab">Lab Edukasi</Link>
            <Link className="hover:text-[#0052CC] transition-colors" href="/alumni">Alumni</Link>
            <Link className="hover:text-[#0052CC] transition-colors" href="/ekskul">Ekskul</Link>
            <Link className="hover:text-[#0052CC] transition-colors" href="/portal">Portal</Link>
            <Link className="hover:text-[#0052CC] transition-colors" href="/green-school">Eco-School</Link>
            <a href="#berita" className="hover:text-[#0052CC] transition-colors">Berita</a>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:border-[#0052CC] transition-all shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-[#0052CC]" />
              <span>{lang.toUpperCase()}</span>
            </button>

            <Link className="hidden sm:inline-block bg-[#0052CC] hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-105 active:scale-95" href="/ppdb">
              Portal PPDB
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[450px] bg-gradient-to-tr from-blue-500/15 via-emerald-400/15 to-transparent blur-[120px] -z-10 rounded-full pointer-events-none" 
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-md border border-blue-100 text-blue-700 text-sm font-medium mb-8 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-[#0052CC]" />
          <span>{t[lang].badge}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 max-w-5xl leading-[1.05]"
        >
          {t[lang].titleMain} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] via-blue-600 to-[#00A854]">
            {t[lang].titleSub}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed font-normal"
        >
          {t[lang].desc}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <Link href="/ppdb" className="flex items-center justify-center gap-2 bg-[#0052CC] hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-xl shadow-blue-500/25 hover:scale-105 active:scale-95 group">
            {t[lang].ctaPPDB}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/profil" className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md hover:bg-white text-slate-700 border border-slate-200/80 px-8 py-4 rounded-full text-base font-medium transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95">
            {t[lang].ctaProfile}
          </Link>
        </motion.div>
      </section>

      {/* Bagian Berita Terkini */}
      <section id="berita" className="px-6 max-w-7xl mx-auto mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <div className="text-xs font-bold tracking-widest text-[#0052CC] uppercase mb-1">{t[lang].newsLabel}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{t[lang].newsTitle}</h2>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0052CC]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {berita.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100/80 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div className="h-52 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img 
                    src={item.gambar_url} 
                    alt={item.judul} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-3">
                      <Calendar className="w-3.5 h-3.5 text-[#0052CC]" />
                      {new Date(item.created_at).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0052CC] transition-colors line-clamp-2">{item.judul}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">{item.konten}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#0052CC] font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>{t[lang].readMore}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
