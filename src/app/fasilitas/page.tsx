import { Metadata } from 'next'
export const metadata: Metadata = { title: 'Fasilitas Sekolah', description: 'Fasilitas modern dan lengkap untuk mendukung pembelajaran di SDN Petukangan Selatan 02.' }
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
  return <main className="max-w-6xl mx-auto p-6 py-12"><h1 className="text-3xl font-bold text-blue-900 mb-8">Fasilitas Sekolah</h1><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{facilities.map((f) => <div key={f.name} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 text-center hover:shadow-lg transition"><div className="text-5xl mb-4">{f.icon}</div><h3 className="text-xl font-semibold text-gray-800">{f.name}</h3><p className="text-gray-600 mt-2">{f.desc}</p></div>)}</div></main>
}
