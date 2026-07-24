import { Container } from '@/components/ui/Container'

const stats = [
  { value: '44+', label: 'Tahun Pengalaman' },
  { value: '500+', label: 'Siswa Aktif' },
  { value: '20+', label: 'Guru Profesional' },
  { value: '50+', label: 'Prestasi' },
]

export const StatsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary text-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
