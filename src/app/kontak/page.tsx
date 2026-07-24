import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hubungi Kami - SDN Petukangan Selatan 02',
  description: 'Hubungi Kami di SDN Petukangan Selatan 02, Jakarta Selatan.',
}

export default function KontakPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Hubungi Kami</h1>
        <div className="prose prose-lg prose-blue max-w-none">
          <p className="text-gray-700 leading-relaxed">📞 Telepon: (021) 1234567<br />📧 Email: info@sdnpetukanganselatan02.sch.id<br />🏫 Alamat: Jl. Sakti VII RT.06/01, Pesanggrahan, Jakarta Selatan 12340<br /><br />Jam operasional: Senin-Jumat, 07:00 - 16:00 WIB.</p>
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
