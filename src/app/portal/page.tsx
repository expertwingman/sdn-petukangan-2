"id";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search, CheckCircle2, AlertCircle, UserCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function PortalPage() {
  const [nisn, setNisn] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleCheckStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nisn.trim()) return;

    setLoading(true);
    setSearched(false);

    // Simulasi pencarian data dari database Supabase (atau tabel siswa/ppdb)
    // Untuk prototipe interaktif ini, kita cek jika NISN berupa angka valid
    setTimeout(() => {
      if (nisn === "123456" || nisn.length >= 5) {
        setResult({
          nama: "Bintang Pratama",
          nisn: nisn,
          status: "DITERIMA",
          jalur: "Zonasi Wilayah Pesanggrahan",
          sekolahAsal: "TK Mutiara Bangsa",
          tanggal: "20 Juni 2026"
        });
      } else {
        setResult(null);
      }
      setLoading(false);
      setSearched(true);
    }, 600);
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
            Portal Interaktif Siswa & Orang Tua
          </div>
        </div>
      </header>

      {/* Hero / Checker Section */}
      <section className="pt-40 pb-16 px-6 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6 shadow-sm"
        >
          <UserCheck className="w-4 h-4 text-[#0052CC]" />
          <span>Layanan Verifikasi & Status Akademik</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Cek Status Seleksi & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Kelulusan PPDB Online
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-10"
        >
          Masukkan Nomor Induk Siswa Nasional (NISN) atau Nomor Pendaftaran Anda untuk melihat hasil verifikasi secara real-time.
        </motion.p>

        {/* Search Box Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-2xl border border-slate-200/60"
        >
          <form onSubmit={handleCheckStatus} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                value={nisn}
                onChange={(e) => setNisn(e.target.value)}
                placeholder="Masukkan Nomor Pendaftaran / NISN (Coba: 123456)" 
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052CC] transition-colors bg-slate-50/50"
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="bg-[#0052CC] hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span>Cek Status</span>
              )}
            </button>
          </form>
        </motion.div>
      </section>

      {/* Result Display Section */}
      <section className="px-6 max-w-3xl mx-auto">
        <AnimatePresence>
          {searched && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              {result ? (
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-emerald-100 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50 rounded-full blur-3xl -z-10"></div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-8 h-8 text-[#00A854]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest text-[#00A854] uppercase mb-1">Status Verifikasi Berhasil</div>
                      <h3 className="text-2xl font-bold text-slate-900">{result.nama}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div className="text-xs text-slate-400 font-medium mb-1">Nomor Pendaftaran / NISN</div>
                      <div className="font-bold text-slate-800">{result.nisn}</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div className="text-xs text-slate-400 font-medium mb-1">Jalur Pendaftaran</div>
                      <div className="font-bold text-slate-800">{result.jalur}</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <div className="text-xs text-slate-400 font-medium mb-1">Sekolah Asal</div>
                      <div className="font-bold text-slate-800">{result.sekolahAsal}</div>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                      <div className="text-xs text-emerald-600 font-medium mb-1">Status Penerimaan</div>
                      <div className="font-bold text-emerald-700 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4" /> {result.status}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-2xl text-blue-800 text-sm leading-relaxed">
                    Selamat! Silakan lakukan proses daftar ulang sesuai jadwal yang tertera di menu informasi PPDB dengan membawa dokumen fisik asli.
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-rose-100 flex items-center gap-4">
                  <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center shrink-0">
                    <AlertCircle className="w-8 h-8 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Data Tidak Ditemukan</h3>
                    <p className="text-slate-500 text-sm">Pastikan NISN atau nomor pendaftaran yang Anda masukkan sudah benar (Coba masukkan angka: <span className="font-mono font-bold text-slate-700">123456</span>).</p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
