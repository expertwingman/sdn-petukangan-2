import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fasilitas Sekolah - SDN Petukangan Selatan 02',
  description: 'Fasilitas modern dan lengkap untuk mendukung pembelajaran di SDN Petukangan Selatan 02.'
}

const facilities = [
  { name: 'Laboratorium Komputer', desc: '40 PC, headset, dan akses internet dedicated', icon: '💻' },
  { name: 'Perpustakaan Digital', desc: 'Koleksi e-book, jurnal, dan area baca interaktif', icon: '📚' },
  { name: 'Lapangan Olahraga Multifungsi', desc: 'Lapangan basket, futsal, dan senam', icon: '⚽' },
  { name: 'Ruang UKS Modern', desc: 'Peralatan medis dan obat-obatan lengkap', icon: '🏥' },
  { name: 'Ruang Kelas Digital', desc: 'Proyektor, smartboard, dan AC di setiap kelas', icon: '🖥️' },
  { name: 'Mushola', desc: 'Ruang ibadah yang nyaman dan bersih', icon: '🕌' },
  { name: 'Kantin Sehat', desc: 'Makanan bergizi dan bersih dengan menu beragam', icon: '🍎' },
  { name: 'Taman Belajar', desc: 'Area hijau untuk belajar outdoor dan bersantai', icon: '🌳' },
  { name: 'Ruang Seni', desc: 'Fasilitas untuk mengembangkan bakat seni siswa', icon: '🎨' },
]

export default function FasilitasPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-primary mb-4 animate-fade-in-up">
          Fasilitas Sekolah
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-100">
          Berbagai fasilitas modern dan lengkap untuk mendukung proses belajar mengajar yang optimal.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item, idx) => (
            <div key={item.name} className="glass-card p-6 text-center card-hover animate-fade-in-up" style={{ animationDelay: (idx % 3) * 0.1 + 's' }}>
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-1">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
