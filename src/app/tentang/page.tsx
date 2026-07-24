import { Container } from '@/components/ui/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { schoolData } from '@/constants'

export const metadata = {
  title: 'Profil Sekolah — SDN Petukangan Selatan 02',
  description: 'Profil SDN Petukangan Selatan 02, sekolah dasar negeri terakreditasi A di Jakarta Selatan.',
}

export default function TentangPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <Container>
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-8 text-center">
          Profil <span className="text-accent">Sekolah</span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-8">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>{schoolData.name}</strong> adalah sekolah dasar negeri yang terletak di {schoolData.address}. 
                Dengan akreditasi <span className="text-accent font-bold">{schoolData.accreditation}</span> dan predikat Sekolah Ramah Anak, 
                kami berkomitmen memberikan pendidikan berkualitas yang membentuk karakter dan merancang masa depan siswa.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Didirikan pada tahun <strong>{schoolData.foundedYear}</strong>, sekolah kami telah melahirkan ribuan alumni 
                yang berkiprah di berbagai bidang. Kami terus berinovasi dalam metode pembelajaran dan pengembangan fasilitas 
                untuk mendukung generasi emas Indonesia.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Visi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{schoolData.vision}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Misi</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {schoolData.mission.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Informasi Sekolah</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>Nama:</strong> {schoolData.name}</p>
              <p><strong>Alamat:</strong> {schoolData.address}</p>
              <p><strong>Telepon:</strong> {schoolData.phone}</p>
              <p><strong>Email:</strong> {schoolData.email}</p>
              <p><strong>Tahun Berdiri:</strong> {schoolData.foundedYear}</p>
              <p><strong>Akreditasi:</strong> {schoolData.accreditation}</p>
              <p><strong>Kepala Sekolah:</strong> {schoolData.principal}</p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  )
}
