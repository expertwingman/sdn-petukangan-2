import Link from 'next/link'
import JsonLd from '@/components/ui/JsonLd'

export default function HomePage() {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'SDN Petukangan Selatan 02',
    alternateName: 'SD Negeri Petukangan Selatan 02',
    description: 'Sekolah dasar negeri terakreditasi A di Jakarta Selatan.',
    url: 'https://sdnpetukanganselatan02.vercel.app',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Sakti VII RT.06/01',
      addressLocality: 'Pesanggrahan',
      addressRegion: 'Jakarta Selatan',
      postalCode: '12340',
      addressCountry: 'ID'
    },
    telephone: '+62-21-1234567',
    email: 'info@sdnpetukanganselatan02.sch.id',
    foundingDate: '1980',
    numberOfStudents: 500,
    numberOfTeachers: 20,
    educationalLevel: 'Primary School',
    grades: '1-6'
  }

  const schoolSchema = {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: 'SDN Petukangan Selatan 02',
    url: 'https://sdnpetukanganselatan02.vercel.app',
    address: orgSchema.address,
    telephone: orgSchema.telephone,
    email: orgSchema.email
  }

  return (
    <>
      <JsonLd data={orgSchema} />
      <JsonLd data={schoolSchema} />

      {/* Hero */}
      <div className="relative min-h-[85vh] gradient-hero flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 shine pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-5xl text-center px-4 relative z-10 animate-fade-in-up">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm text-white/80 border border-white/10 mb-6">
            ✦ Sekolah Ramah Anak & Akreditasi A
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Membentuk Karakter, <br />
            <span className="text-accent-light">Merancang Masa Depan</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            SDN Petukangan Selatan 02 – Sekolah Dasar Negeri terakreditasi A di Jakarta Selatan
            dengan pendekatan pendidikan inklusif dan berbasis karakter.
          </p>
          <p className="text-md text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Fasilitas digital, lingkungan ramah anak, dan tenaga pendidik profesional siap
            mengantarkan putra-putri Anda menuju masa depan gemilang.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ppdb" className="btn-primary">
              Daftar Sekarang
            </Link>
            <Link href="/tentang" className="btn-secondary">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
      </div>

      {/* Keunggulan dengan kartu modern */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="section-title">Keunggulan <span>Kami</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Akreditasi A', desc: 'Terakreditasi Unggul dari BAN-S/M dengan standar nasional pendidikan.', icon: '🏆', delay: '100' },
            { title: 'Sekolah Ramah Anak', desc: 'Lingkungan belajar yang aman, nyaman, dan mendukung tumbuh kembang optimal.', icon: '🌱', delay: '200' },
            { title: 'Fasilitas Digital', desc: 'Lab komputer, perpustakaan digital, akses internet cepat, dan ruang kelas interaktif.', icon: '💻', delay: '300' },
          ].map((item) => (
            <div key={item.title} className={`glass-card p-8 text-center card-hover animate-fade-in-up delay-${item.delay}`}>
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
