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
      <div className="relative gradient-hero text-white min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgMTBhMjAgMjAgMCAwIDEgMCA0MCAyMCAyMCAwIDAgMSAwLTQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')] bg-repeat"></div>
        <div className="max-w-4xl text-center px-4 relative z-10 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Membentuk Karakter, <br />
            <span className="text-yellow-300">Merancang Masa Depan</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            SDN Petukangan Selatan 02 – Sekolah Dasar Negeri Akreditasi A &amp; Sekolah Ramah Anak
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-10">
            Berlokasi di Pesanggrahan, Jakarta Selatan, kami menyediakan pendidikan berkualitas dengan
            fasilitas digital, lingkungan inklusif, dan tenaga pendidik profesional.
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
      </div>

      {/* Keunggulan */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="section-title">Keunggulan <span>Kami</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Akreditasi A', desc: 'Terakreditasi Unggul dari BAN-S/M', icon: '🏆', delay: 'delay-100' },
            { title: 'Sekolah Ramah Anak', desc: 'Lingkungan aman dan nyaman untuk belajar', icon: '🌱', delay: 'delay-200' },
            { title: 'Fasilitas Digital', desc: 'Lab komputer, perpustakaan digital, dan internet cepat', icon: '💻', delay: 'delay-300' },
          ].map((item, i) => (
            <div key={i} className={`glass-card p-8 text-center card-hover animate-slide-up ${item.delay}`}>
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
