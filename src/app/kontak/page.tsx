import { Container } from '@/components/ui/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { schoolData } from '@/constants'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata = {
  title: 'Kontak — SDN Petukangan Selatan 02',
  description: 'Hubungi SDN Petukangan Selatan 02 untuk informasi lebih lanjut.',
}

export default function KontakPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <Container>
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 text-center">
          Hubungi <span className="text-accent">Kami</span>
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Kami siap membantu Anda. Silakan hubungi kami melalui informasi kontak di bawah ini.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Informasi Kontak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-700">Alamat</p>
                  <p className="text-sm text-gray-600">{schoolData.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-700">Telepon</p>
                  <p className="text-sm text-gray-600">{schoolData.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-700">Email</p>
                  <p className="text-sm text-gray-600">{schoolData.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-700">Jam Operasional</p>
                  <p className="text-sm text-gray-600">Senin-Jumat, 07:00 - 16:00 WIB</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Kirim Pesan</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-neutral-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-neutral-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    placeholder="Masukkan email Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-neutral-200 bg-white/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                    placeholder="Tulis pesan Anda"
                  />
                </div>
                <Button variant="primary" size="sm" className="w-full">
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  )
}
