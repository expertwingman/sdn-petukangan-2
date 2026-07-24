"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, Clock, Calendar, ShieldCheck, UserCheck, Search, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function AbsensiPage() {
  const [nisn, setNisn] = useState("");
  const [dataAbsen, setDataAbsen] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleCariAbsen = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nisn.trim()) return;

    setLoading(true);
    setSearched(false);

    // Simulasi pengambilan data absensi real-time dari database
    setTimeout(() => {
      if (nisn === "123456" || nisn.length >= 5) {
        setDataAbsen({
          nama: "Bintang Pratama",
          nisn: nisn,
          kelas: "Kelas 5A",
          statusHariIni: "HADIR",
          waktuMasuk: "06:45 WIB",
          keterangan: "Tepat Waktu (Scan RFID Gerbang Utama)",
          riwayatMingguan: [
            { hari: "Senin", tanggal: "20 Juli 2026", status: "HADIR", jam: "06:42 WIB" },
            { hari: "Selasa", tanggal: "21 Juli 2026", status: "HADIR", jam: "06:50 WIB" },
            { hari: "Rabu", tanggal: "22 Juli 2026", status: "IZIN", jam: "-" },
            { hari: "Kamis", tanggal: "23 Juli 2026", status: "HADIR", jam: "06:40 WIB" },
            { hari: "Jumat", tanggal: "24 Juli 2026", status: "HADIR", jam: "06:45 WIB" }
          ]
        });
      } else {
        setDataAbsen(null);
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
            Smart Attendance & Notification
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-12 px-6 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-6 shadow-sm"
        >
          <UserCheck className="w-4 h-4 text-[#00A854]" />
          <span>Sistem Pemantauan Kehadiran Real-Time</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Absensi Digital & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Notifikasi Orang Tua
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-10"
        >
          Masukkan Nomor Induk Siswa Nasional (NISN) untuk memantau status kehadiran harian anak secara transparan dan akurat.
        </motion.p>

        {/* Form Pencarian Absensi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-2xl border border-slate-200/60"
        >
          <form onSubmit={handleCariAbsen} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                value={nisn}
                onChange={(e) => setNisn(e.target.value)}
                placeholder="Masukkan NISN Siswa (Coba: 123456)" 
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
                <span>Cek Kehadiran</span>
              )}
            </button>
          </form>
        </motion.div>
      </section>

      {/* Hasil Data Absensi */}
      <section className="px-6 max-w-3xl mx-auto">
        <AnimatePresence>
          {searched && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="mt-8 space-y-6"
            >
              {dataAbsen ? (
                <>
                  {/* Status Hari Ini */}
                  <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-emerald-100 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50 rounded-full blur-3xl -z-10"></div>
                    
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-100">
                      <div>
                        <div className="text-xs font-bold tracking-widest text-[#00A854] uppercase mb-1">Status Kehadiran Hari Ini</div>
                        <h3 className="text-2xl font-bold text-slate-900">{dataAbsen.nama}</h3>
                        <div className="text-sm text-slate-500">{dataAbsen.kelas} &bull; NISN: {dataAbsen.nisn}</div>
                      </div>
                      <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-2xl font-bold text-sm flex items-center gap-1.5 shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-[#00A854]" /> {dataAbsen.statusHariIni}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#0052CC]">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 font-medium">Jam Masuk</div>
                          <div className="font-bold text-slate-800">{dataAbsen.waktuMasuk}</div>
                        </div>
                      </div>
                      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-[#00A854]">
                          <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 font-medium">Keterangan Sistem</div>
                          <div className="font-bold text-slate-800 text-xs mt-0.5">{dataAbsen.keterangan}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Riwayat Kehadiran 1 Pekan */}
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#0052CC]" /> Riwayat Kehadiran Minggu Ini
                    </h4>
                    <div className="space-y-3">
                      {dataAbsen.riwayatMingguan.map((riwayat: any, idx: number) => (
                        <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm">
                          <div>
                            <div className="font-bold text-slate-800">{riwayat.hari}, <span className="font-normal text-slate-500">{riwayat.tanggal}</span></div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-xs text-slate-400 font-mono">{riwayat.jam}</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              riwayat.status === 'HADIR' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                            }`}>
                              {riwayat.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-rose-100 flex items-center gap-4">
                  <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center shrink-0">
                    <AlertCircle className="w-8 h-8 text-rose-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Data Siswa Tidak Ditemukan</h3>
                    <p className="text-slate-500 text-sm">Pastikan NISN yang dimasukkan sudah terdaftar (Coba masukkan angka: <span className="font-mono font-bold text-slate-700">123456</span>).</p>
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
