import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fasilitas Sekolah - SDN Petukangan Selatan 02',
  description: 'Fasilitas modern dan lengkap untuk mendukung pembelajaran di SDN Petukangan Selatan 02.'
}

const facilities = [
  { name: 'Laboratorium Komputer', desc: '40 PC, headset, internet dedicated', icon: '💻' },
  { name: 'Perpustakaan Digital', desc: 'e-book, jurnal, area baca interaktif', icon: '📚' },
  { name: 'Lapangan Olahraga Multifungsi', desc: 'Basket, futsal, senam', icon: '⚽' },
  { name: 'Ruang UKS Modern', desc: 'Peralatan medis, obat-obatan lengkap', icon: '🏥' },
  { name: 'Ruang Kelas Digital', desc: 'Proyektor, smartboard, AC', icon: '🖥️' },
  { name: 'Mushola', desc: 'Ruang ibadah yang nyaman', icon: '🕌' },
  { name: 'Kantin Sehat', desc: 'Makanan bergizi dan bersih', icon: '🍎' },
  { name: 'Taman Belajar', desc: 'Area hijau untuk belajar outdoor', icon: '🌳' },
]

export default function FasilitasPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 animate-fade-in">
          Fasilitas Sekolah
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, index) => (
            <div key={f.name} className={`glass-card p-6 text-center card-hover animate-slide-up delay-${index % 3 === 0 ? '100' : index % 3 === 1 ? '200' : '300'}`}>
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{f.name}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
