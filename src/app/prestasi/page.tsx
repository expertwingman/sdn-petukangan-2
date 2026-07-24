import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { achievements } from '@/constants'

export const metadata = {
  title: 'Prestasi — SDN Petukangan Selatan 02',
  description: 'Prestasi yang telah diraih oleh SDN Petukangan Selatan 02.',
}

const levelColors = {
  Kecamatan: 'secondary',
  Kota: 'info',
  Provinsi: 'primary',
  Nasional: 'accent',
  Internasional: 'error',
} as const

export default function PrestasiPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <Container>
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 text-center">
          Prestasi <span className="text-accent">Kami</span>
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Berbagai prestasi yang telah diraih oleh siswa-siswi SDN Petukangan Selatan 02.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="card-hover">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                  </div>
                  <Badge variant={levelColors[achievement.level]}>
                    {achievement.level}
                  </Badge>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  {achievement.year} — {achievement.level}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  )
}
