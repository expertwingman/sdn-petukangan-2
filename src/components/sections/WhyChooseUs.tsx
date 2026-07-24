import { Container } from '@/components/ui/Container'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

const reasons = [
  {
    icon: '🏆',
    title: 'Akreditasi A',
    description: 'Terakreditasi Unggul dari BAN-S/M dengan standar nasional pendidikan.',
  },
  {
    icon: '🌱',
    title: 'Sekolah Ramah Anak',
    description: 'Lingkungan belajar yang aman, nyaman, dan mendukung tumbuh kembang optimal.',
  },
  {
    icon: '💻',
    title: 'Fasilitas Digital',
    description: 'Lab komputer, perpustakaan digital, akses internet cepat, dan ruang kelas interaktif.',
  },
  {
    icon: '👨‍🏫',
    title: 'Guru Profesional',
    description: 'Tenaga pendidik berkualitas dengan pengalaman dan dedikasi tinggi.',
  },
  {
    icon: '🎯',
    title: 'Kurikulum Merdeka',
    description: 'Pembelajaran berbasis proyek yang mengembangkan karakter dan kompetensi siswa.',
  },
  {
    icon: '🤝',
    title: 'Kemitraan Orang Tua',
    description: 'Kolaborasi aktif antara sekolah dan orang tua dalam mendukung pendidikan anak.',
  },
]

export const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <Container>
        <h2 className="section-title">
          Mengapa Memilih <span>Kami</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="text-4xl mb-2">{reason.icon}</div>
                <CardTitle>{reason.title}</CardTitle>
                <CardDescription>{reason.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
