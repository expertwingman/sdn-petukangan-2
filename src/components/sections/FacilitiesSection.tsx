import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { facilities } from '@/constants'

export const FacilitiesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <h2 className="section-title">
          Fasilitas <span>Unggulan</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <Card key={facility.id} className="card-hover text-center p-4">
              <CardContent className="pt-4">
                <div className="text-5xl mb-3">{facility.icon}</div>
                <h3 className="text-lg font-bold text-primary">{facility.name}</h3>
                <p className="text-sm text-gray-600">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
