import JsonLd from '@/components/ui/JsonLd'
import { schoolData } from '@/constants'
import { Container } from '@/components/ui/Container'
import { StatsSection } from '@/components/sections/StatsSection'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { FacilitiesSection } from '@/components/sections/FacilitiesSection'
import { AchievementSection } from '@/components/sections/AchievementSection'
import { Button } from '@/components/ui/Button'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: schoolData.name,
  alternateName: 'SD Negeri Petukangan Selatan 02',
  description: 'Sekolah dasar negeri terakreditasi A di Jakarta Selatan.',
  url: schoolData.website,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Sakti VII RT.06/01',
    addressLocality: 'Pesanggrahan',
    addressRegion: 'Jakarta Selatan',
    postalCode: '12340',
    addressCountry: 'ID',
  },
  telephone: schoolData.phone,
  email: schoolData.email,
  foundingDate: '1980',
  numberOfStudents: 500,
  numberOfTeachers: 20,
  educationalLevel: 'Primary School',
  grades: '1-6',
}

const schoolSchema = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: schoolData.name,
  url: schoolData.website,
  address: organizationSchema.address,
  telephone: organizationSchema.telephone,
  email: organizationSchema.email,
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={schoolSchema} />

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] pointer-events-none"></div>
        <Container className="relative z-10 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm text-white/80 border border-white/10 mb-6">
            ✦ Sekolah Ramah Anak & Akreditasi A
          </div>
          <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Membentuk Karakter, <br />
            <span className="text-accent">Merancang Masa Depan</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            SDN Petukangan Selatan 02 — Sekolah Dasar Negeri terakreditasi A di Jakarta Selatan
            dengan pendekatan pendidikan inklusif dan berbasis karakter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" asChild>
              <a href="/ppdb">Daftar Sekarang</a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="/tentang">Pelajari Lebih Lanjut</a>
            </Button>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none"></div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Facilities */}
      <FacilitiesSection />

      {/* Achievements */}
      <AchievementSection />
    </>
  )
}
