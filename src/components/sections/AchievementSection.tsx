import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { achievements } from '@/constants'

const levelColors = {
  Kecamatan: 'secondary',
  Kota: 'info',
  Provinsi: 'primary',
  Nasional: 'accent',
  Internasional: 'error',
} as const

export const AchievementSection = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <Container>
        <h2 className="section-title">
          Prestasi <span>Kami</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </section>
  )
}
