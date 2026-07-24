import { Container } from '@/components/ui/Container'
import { Card, CardContent } from '@/components/ui/Card'
import { teachers } from '@/constants'

export const metadata = {
  title: 'Guru & Staf — SDN Petukangan Selatan 02',
  description: 'Daftar guru dan staf pengajar SDN Petukangan Selatan 02 yang profesional dan berdedikasi.',
}

export default function GuruPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <Container>
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 text-center">
          Guru & <span className="text-accent">Staf</span>
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Tenaga pendidik dan kependidikan yang berdedikasi tinggi dalam membentuk generasi berkarakter.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="card-hover p-4">
              <CardContent className="pt-4 flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                  {teacher.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">{teacher.name}</h3>
                  <p className="text-sm text-accent font-medium">{teacher.position}</p>
                  <p className="text-xs text-gray-500 mt-1">NIP: {teacher.nip}</p>
                  <p className="text-xs text-gray-500">{teacher.education}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  )
}
