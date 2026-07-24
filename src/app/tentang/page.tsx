import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Profil Sekolah - SDN Petukangan Selatan 02',
  description: 'Profil SDN Petukangan Selatan 02, sekolah dasar negeri berakreditasi A di Jakarta Selatan.'
}

export default function TentangPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Profil Sekolah</h1>
        <div className="prose prose-lg prose-primary max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            SDN Petukangan Selatan 02 adalah sekolah dasar negeri yang terletak di Jl. Sakti VII RT.06/01, 
            Pesanggrahan, Jakarta Selatan. Dengan akreditasi A dan predikat Sekolah Ramah Anak (SRA), 
            kami berkomitmen memberikan pendidikan berkualitas yang membentuk karakter dan merancang 
            masa depan siswa.
          </p>
          <p>
            Didirikan pada tahun 1980, sekolah kami telah melahirkan ribuan alumni yang berkiprah di 
            berbagai bidang. Kami terus berinovasi dalam metode pembelajaran dan pengembangan fasilitas 
            untuk mendukung generasi emas Indonesia.
          </p>
          <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
            <h2 className="text-xl font-bold text-primary">Visi</h2>
            <p className="text-gray-700">Membentuk karakter, merancang masa depan – generasi berakhlak mulia, cerdas, dan berwawasan global.</p>
          </div>
          <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
            <h2 className="text-xl font-bold text-primary">Misi</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Menyelenggarakan pembelajaran yang inovatif dan berbasis karakter</li>
              <li>Mengembangkan potensi akademik dan non-akademik siswa secara seimbang</li>
              <li>Mewujudkan lingkungan sekolah yang ramah anak dan berkelanjutan</li>
              <li>Membangun kemitraan aktif dengan orang tua dan masyarakat</li>
            </ul>
          </div>
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
