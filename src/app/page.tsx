import Link from 'next/link'
import JsonLd from '@/components/ui/JsonLd'
export default function HomePage() {
  const orgSchema = { '@context': 'https://schema.org', '@type': 'EducationalOrganization', name: 'SDN Petukangan Selatan 02', alternateName: 'SD Negeri Petukangan Selatan 02', description: 'Sekolah dasar negeri terakreditasi A di Jakarta Selatan.', url: 'https://sdnpetukanganselatan02.vercel.app', address: { '@type': 'PostalAddress', streetAddress: 'Jl. Sakti VII RT.06/01', addressLocality: 'Pesanggrahan', addressRegion: 'Jakarta Selatan', postalCode: '12340', addressCountry: 'ID' }, telephone: '+62-21-1234567', email: 'info@sdnpetukanganselatan02.sch.id', foundingDate: '1980', numberOfStudents: 500, numberOfTeachers: 20, educationalLevel: 'Primary School', grades: '1-6' }
  const schoolSchema = { '@context': 'https://schema.org', '@type': 'School', name: 'SDN Petukangan Selatan 02', url: 'https://sdnpetukanganselatan02.vercel.app', address: orgSchema.address, telephone: orgSchema.telephone, email: orgSchema.email }
  return (
    <>
      <JsonLd data={orgSchema} /><JsonLd data={schoolSchema} />
      <div className="bg-gradient-to-b from-blue-50 to-white min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Membentuk Karakter, Merancang Masa Depan</h1>
          <p className="text-xl text-gray-700 mb-6">SDN Petukangan Selatan 02 – Sekolah Dasar Negeri Akreditasi A &amp; Sekolah Ramah Anak</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">Berlokasi di Pesanggrahan, Jakarta Selatan, kami menyediakan pendidikan berkualitas dengan fasilitas digital, lingkungan inklusif, dan tenaga pendidik profesional.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ppdb" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow transition">Daftar Sekarang</Link>
            <Link href="/tentang" className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 rounded-lg shadow border border-blue-600 transition">Pelajari Lebih Lanjut</Link>
          </div>
        </div>
      </div>
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center"><h3 className="text-xl font-bold text-blue-800">Akreditasi A</h3><p className="text-gray-600">Terakreditasi Unggul dari BAN-S/M</p></div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center"><h3 className="text-xl font-bold text-blue-800">Sekolah Ramah Anak</h3><p className="text-gray-600">Lingkungan aman dan nyaman untuk belajar</p></div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center"><h3 className="text-xl font-bold text-blue-800">Fasilitas Digital</h3><p className="text-gray-600">Laboratorium komputer, perpustakaan digital, dan akses internet</p></div>
      </section>
    </>
  )
}
