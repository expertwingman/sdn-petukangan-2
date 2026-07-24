"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, MessageSquare, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function KonsultasiPage() {
  const [namaOrtu, setNamaOrtu] = useState("");
  const [namaSiswa, setNamaSiswa] = useState("");
  const [guru, setGuru] = useState("Ibu Hj. Siti Aminah, S.Pd. (Wali Kelas 5A)");
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("08:00 - 09:00 WIB");
  const [topik, setTopik] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!namaOrtu || !namaSiswa || !tanggal || !topik) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 800);
  };

  const resetForm = () => {
    setNamaOrtu("");
    setNamaSiswa("");
    setTanggal("");
    setTopik("");
    setSuccess(false);
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
            Jadwal Konsultasi Orang Tua & Guru
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-12 px-6 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-[#0052CC]" />
          <span>Layanan Kolaborasi & Komunikasi Sekolah</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Pemesanan Jadwal <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Konsultasi Wali Kelas
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-8"
        >
          Atur jadwal pertemuan tatap muka atau daring dengan guru pengampu untuk memantau perkembangan belajar anak secara terstruktur.
        </motion.p>
      </section>

      {/* Form Booking Section */}
      <section className="px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100 relative overflow-hidden"
        >
          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Nama Orang Tua / Wali</label>
                <input 
                  type="text" 
                  required
                  value={namaOrtu}
                  onChange={(e) => setNamaOrtu(e.target.value)}
                  placeholder="Masukkan nama lengkap Anda..."
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052CC] transition-colors bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Nama Siswa / Peserta Didik</label>
                <input 
                  type="text" 
                  required
                  value={namaSiswa}
                  onChange={(e) => setNamaSiswa(e.target.value)}
                  placeholder="Masukkan nama lengkap anak..."
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052CC] transition-colors bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Pilih Guru / Wali Kelas</label>
                <select 
                  value={guru}
                  onChange={(e) => setGuru(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-slate-800 focus:outline-none focus:border-[#0052CC] transition-colors bg-slate-50/50"
                >
                  <option>Ibu Hj. Siti Aminah, S.Pd. (Wali Kelas 5A)</option>
                  <option>Bapak Ahmad Fauzi, S.Pd. (Wali Kelas 6B)</option>
                  <option>Ibu Siska Melina, M.Sn. (Guru Seni & Konseling)</option>
                  <option>Bapak Rian Pratama, S.Or. (Guru PJOK)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Tanggal Pertemuan</label>
                  <input 
                    type="date" 
                    required
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-slate-800 focus:outline-none focus:border-[#0052CC] transition-colors bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Sesi Waktu</label>
                  <select 
                    value={jam}
                    onChange={(e) => setJam(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-slate-800 focus:outline-none focus:border-[#0052CC] transition-colors bg-slate-50/50"
                  >
                    <option>08:00 - 09:00 WIB</option>
                    <option>09:30 - 10:30 WIB</option>
                    <option>13:00 - 14:00 WIB</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Topik Pembahasan / Konsultasi</label>
                <textarea 
                  required
                  rows={3}
                  value={topik}
                  onChange={(e) => setTopik(e.target.value)}
                  placeholder="Contoh: Perkembangan belajar matematika atau penyesuaian kegiatan sekolah..."
                  className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0052CC] transition-colors bg-slate-50/50 resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#0052CC] hover:bg-blue-700 text-white py-4 rounded-2xl font-medium transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <span>Konfirmasi Pesan Jadwal</span>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#00A854]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Jadwal Berhasil Dipesan!</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Permintaan konsultasi Anda untuk siswa <span className="font-bold text-slate-800">{namaSiswa}</span> telah dicatat. Wali kelas akan mengonfirmasi jadwal melalui WhatsApp atau nomor kontak terdaftar.
              </p>
              <button
                onClick={resetForm}
                className="bg-[#0052CC] hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/20"
              >
                Buat Jadwal Baru
              </button>
            </div>
          )}
        </motion.div>
      </section>
    </main>
  );
}
