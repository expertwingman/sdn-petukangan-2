import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { schoolData, teachers, facilities, achievements, newsItems, testimonials } from '@/constants'
import { cn } from '@/lib/utils'

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <Section background="gradient" padding="xl" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] pointer-events-none"></div>
        <div className="absolute inset-0 shine pointer-events-none"></div>
        <Container className="relative z-10 text-center text-white">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 text-sm text-white/80 border border-white/10 mb-6">
            ✦ Sekolah Ramah Anak & Akreditasi A
          </div>
          <Heading level="h1" size="6xl" className="text-white mb-6 leading-[1.1]">
            Membentuk Karakter, <br />
            <span className="text-accent-light">Merancang Masa Depan</span>
          </Heading>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            SDN Petukangan Selatan 02 – Sekolah Dasar Negeri terakreditasi A di Jakarta Selatan
            dengan pendekatan pendidikan inklusif dan berbasis karakter.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" className="bg-white text-primary hover:bg-white/90">
              Daftar Sekarang
            </Button>
            <Button variant="secondary" size="lg" className="border-white/30">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"></div>
      </Section>

      {/* STATISTICS */}
      <Section background="white" padding="md">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-primary">1980</p>
              <p className="text-sm text-neutral-600">Tahun Berdiri</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary">500+</p>
              <p className="text-sm text-neutral-600">Siswa</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary">20+</p>
              <p className="text-sm text-neutral-600">Guru Profesional</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-accent">50+</p>
              <p className="text-sm text-neutral-600">Prestasi</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* FACILITIES */}
      <Section background="neutral" padding="lg">
        <Container>
          <Heading level="h2" size="4xl" align="center" className="mb-12">
            Fasilitas <span className="text-accent">Unggulan</span>
          </Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.slice(0, 4).map((facility) => (
              <Card key={facility.id} hover className="text-center p-6">
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h3 className="text-lg font-bold text-primary">{facility.name}</h3>
                <p className="text-sm text-neutral-600 mt-2">{facility.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
