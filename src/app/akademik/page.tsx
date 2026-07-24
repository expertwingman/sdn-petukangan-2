import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Akademik - SDN Petukangan Selatan 02',
  description: 'Informasi kurikulum dan kegiatan akademik SDN Petukangan Selatan 02.',
}

export default function AkademikPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Kurikulum & Akademik</h1>
        <div className="prose prose-lg prose-blue max-w-none">
          <p>
            SDN Petukangan Selatan 02 menerapkan <strong>Kurikulum Merdeka</strong> yang berfokus pada
            pengembangan karakter dan kompetensi siswa melalui pembelajaran yang menyenangkan dan bermakna.
          </p>
          <h2>Struktur Kurikulum</h2>
          <ul>
            <li>Pendidikan Agama dan Budi Pekerti</li>
            <li>Pendidikan Pancasila dan Kewarganegaraan</li>
            <li>Bahasa Indonesia</li>
            <li>Matematika</li>
            <li>Ilmu Pengetahuan Alam dan Sosial (IPAS)</li>
            <li>Bahasa Inggris</li>
            <li>Pendidikan Jasmani, Olahraga, dan Kesehatan</li>
            <li>Seni Budaya dan Prakarya</li>
          </ul>
          <h2>Kegiatan Akademik</h2>
          <ul>
            <li>Pembelajaran tatap muka dengan metode interaktif</li>
            <li>Program literasi dan numerasi</li>
            <li>Kegiatan proyek berbasis STEM</li>
            <li>Kunjungan edukasi dan studi lapangan</li>
          </ul>
        </div>
        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}
