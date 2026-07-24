import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { facilities } from '@/constants'

export const metadata = {
  title: 'Fasilitas — SDN Petukangan Selatan 02',
  description: 'Fasilitas modern dan lengkap untuk mendukung pembelajaran di SDN Petukangan Selatan 02.',
}

export default function FasilitasPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <Container>
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 text-center">
          Fasilitas <span className="text-accent">Unggulan</span>
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Berbagai fasilitas modern dan lengkap untuk mendukung proses belajar mengajar yang optimal.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility) => (
            <Card key={facility.id} className="card-hover text-center p-4">
              <CardContent className="pt-4">
                <div className="text-5xl mb-3">{facility.icon}</div>
                <h3 className="text-lg font-bold text-primary">{facility.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  )
}
