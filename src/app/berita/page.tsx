import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Berita & Kegiatan - SDN Petukangan Selatan 02',
  description: 'Berita & Kegiatan di SDN Petukangan Selatan 02, Jakarta Selatan.',
}

export default function BeritaPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Berita & Kegiatan</h1>
        <div className="prose prose-lg prose-primary max-w-none text-gray-700 leading-relaxed">
          <p>Temukan berita terbaru seputar kegiatan sekolah, pengumuman penting, dan acara-acara yang akan datang. Kami selalu aktif dalam berbagai kegiatan untuk mengembangkan potensi siswa.</p>
        </div>
        <div className="mt-8">
          <Link href="/" className="text-primary hover:text-accent font-medium transition">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}
