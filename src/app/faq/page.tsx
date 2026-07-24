import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pertanyaan yang Sering Diajukan - SDN Petukangan Selatan 02',
  description: 'Pertanyaan yang Sering Diajukan di SDN Petukangan Selatan 02, Jakarta Selatan.',
}

export default function FaqPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Pertanyaan yang Sering Diajukan</h1>
        <div className="prose prose-lg prose-blue max-w-none">
          <p className="text-gray-700 leading-relaxed">Berikut adalah pertanyaan-pertanyaan umum seputar PPDB, fasilitas, kurikulum, dan kegiatan sekolah. Jika pertanyaan Anda tidak terjawab, silakan hubungi kami melalui halaman Kontak.</p>
        </div>
        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}
