import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ekstrakurikuler - SDN Petukangan Selatan 02',
  description: 'Berbagai kegiatan ekstrakurikuler di SDN Petukangan Selatan 02.',
}

const ekskulList = [
  { name: 'Pramuka', desc: 'Kegiatan kepramukaan untuk membentuk karakter dan kedisiplinan.', icon: '🏕️' },
  { name: 'Futsal', desc: 'Latihan sepak bola mini untuk mengembangkan bakat olahraga.', icon: '⚽' },
  { name: 'Basket', desc: 'Olahraga bola basket untuk melatih kerjasama tim.', icon: '🏀' },
  { name: 'Seni Tari', desc: 'Belajar tarian tradisional dan modern.', icon: '💃' },
  { name: 'Paduan Suara', desc: 'Kegiatan vokal untuk mengembangkan bakat bernyanyi.', icon: '🎵' },
  { name: 'Robotika', desc: 'Belajar merakit dan memprogram robot sederhana.', icon: '🤖' },
  { name: 'Melukis', desc: 'Mengembangkan kreativitas melalui seni lukis.', icon: '🎨' },
  { name: 'English Club', desc: 'Belajar bahasa Inggris dengan cara menyenangkan.', icon: '🇬🇧' },
]

export default function EkskulPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 animate-fade-in">
          Ekstrakurikuler
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ekskulList.map((item, index) => (
            <div key={item.name} className={`glass-card p-6 text-center card-hover animate-slide-up delay-${index % 3 === 0 ? '100' : index % 3 === 1 ? '200' : '300'}`}>
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}
