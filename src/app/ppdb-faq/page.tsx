"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, HelpCircle, Search, ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PPDBFaqPage() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Apa saja syarat usia minimum untuk mendaftar di SDN Petukangan Selatan 02?",
      a: "Sesuai ketentuan Kemendikbudristek, usia calon peserta didik baru kelas 1 SD minimum adalah 7 tahun, atau paling rendah 6 tahun terhitung pada tanggal 1 Juli tahun berjalan."
    },
    {
      q: "Dokumen apa saja yang harus disiapkan saat pendaftaran PPDB?",
      a: "Dokumen yang diperlukan meliputi Akta Kelahiran anak, Kartu Keluarga (KK) domisili DKI Jakarta, Ijazah TK/PAUD (jika ada), serta KTP orang tua/wali murid."
    },
    {
      q: "Apakah ada jalur zonasi dalam penerimaan siswa baru?",
      a: "Ya, jalur zonasi diperuntukkan bagi calon peserta didik yang berdomisili di dalam wilayah zonasi yang telah ditetapkan oleh Dinas Pendidikan DKI Jakarta."
    },
    {
      q: "Bagaimana cara mengecek pengumuman hasil seleksi PPDB?",
      a: "Pengumuman hasil seleksi dapat dicek secara online melalui portal resmi PPDB sekolah ini atau langsung melalui menu Portal PPDB pada website utama."
    },
    {
      q: "Apakah ada biaya pendaftaran atau SPP di sekolah ini?",
      a: "Sebagai sekolah dasar negeri di bawah naungan pemerintah DKI Jakarta, kegiatan pendidikan dasar di SDN Petukangan Selatan 02 bebas dari biaya SPP bulanan."
    }
  ];

  const filteredFaqs = faqs.filter(item => 
    item.q.toLowerCase().includes(search.toLowerCase()) || 
    item.a.toLowerCase().includes(search.toLowerCase())
  );

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
            Pusat Informasi & Tanya Jawab PPDB
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
          <HelpCircle className="w-4 h-4 text-[#0052CC]" />
          <span>Panduan Informasi Calon Siswa Baru</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Tanya Jawab Seputar <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Penerimaan Peserta Didik Baru
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-8 max-w-2xl mx-auto"
        >
          Temukan jawaban lengkap dan cepat mengenai alur, persyaratan, dan ketentuan PPDB di SDN Petukangan Selatan 02.
        </motion.p>

        {/* Kolom Pencarian FAQ */}
        <div className="max-w-xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari kata kunci (contoh: syarat, usia, dokumen, zonasi)..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052CC] shadow-lg shadow-slate-200/40 text-sm"
          />
        </div>
      </section>

      {/* Accordion List */}
      <section className="px-6 max-w-3xl mx-auto mt-6">
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/30 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-slate-900 text-base md:text-lg">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-blue-50 text-[#0052CC]" : "text-slate-500"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/30">
              <p className="text-slate-400 text-sm">Tidak ditemukan pertanyaan yang sesuai dengan kata kunci "{search}".</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
