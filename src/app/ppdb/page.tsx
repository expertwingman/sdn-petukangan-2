import { Container } from '@/components/ui/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Calendar, Clock, FileText, Users } from 'lucide-react'

export const metadata = {
  title: 'PPDB 2026/2027 — SDN Petukangan Selatan 02',
  description: 'Informasi Penerimaan Peserta Didik Baru SDN Petukangan Selatan 02 tahun ajaran 2026/2027.',
}

export default function PPDBPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <Container>
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 text-center">
          PPDB <span className="text-accent">2026/2027</span>
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Pendaftaran Peserta Didik Baru SDN Petukangan Selatan 02 untuk tahun ajaran 2026/2027.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                Syarat Pendaftaran
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                <li>Usia calon siswa minimal 6 tahun dan maksimal 7 tahun per 1 Juli 2026</li>
                <li>Fotokopi Akta Kelahiran</li>
                <li>Fotokopi Kartu Keluarga (KK)</li>
                <li>Pas foto ukuran 3x4 (2 lembar)</li>
                <li>Surat keterangan sehat dari dokter</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Jadwal Pendaftaran
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Pendaftaran online:</strong> 1 – 30 Juni 2026</li>
                <li><strong>Verifikasi berkas:</strong> 1 – 5 Juli 2026</li>
                <li><strong>Pengumuman:</strong> 10 Juli 2026</li>
                <li><strong>Daftar ulang:</strong> 11 – 15 Juli 2026</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                Kuota
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                Kuota siswa baru untuk kelas 1 adalah <strong>60 siswa</strong> (2 rombongan belajar).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                Pendaftaran Online
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">
                Pendaftaran dilakukan secara online melalui portal resmi sekolah.
              </p>
              <Button variant="primary" size="sm" asChild>
                <a href="#">Daftar Sekarang</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  )
}
