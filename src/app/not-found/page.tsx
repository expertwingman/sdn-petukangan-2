import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-16">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Halaman Tidak Ditemukan</h2>
          <p className="text-gray-600 mb-8">
            Maaf, halaman yang Anda cari tidak tersedia. Mungkin halaman telah dipindahkan atau dihapus.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/">Kembali ke Beranda</Link>
          </Button>
        </div>
      </Container>
    </div>
  )
}
