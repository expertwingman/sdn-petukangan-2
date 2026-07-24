import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Prestasi Sekolah - SDN Petukangan Selatan 02',
  description: 'Prestasi Sekolah di SDN Petukangan Selatan 02, Jakarta Selatan.',
}

export default function PrestasiPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Prestasi Sekolah</h1>
        <div className="prose prose-lg prose-blue max-w-none">
          <p className="text-gray-700 leading-relaxed">Kami bangga dengan berbagai prestasi yang telah diraih oleh siswa-siswi kami, baik di bidang akademik maupun non-akademik. Prestasi tersebut meliputi juara lomba Olimpiade Sains, Juara Lomba Pidato Bahasa Inggris, Juara Futsal tingkat Jakarta Selatan, dan masih banyak lagi.</p>
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
