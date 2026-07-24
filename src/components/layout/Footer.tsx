import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { schoolData } from '@/constants'

export function Footer() {
  return (
    <footer className="relative mt-20 bg-white/60 backdrop-blur-xl border-t border-white/20">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              SDN Petukangan <span className="text-accent">02</span>
            </h3>
            <p className="text-sm text-neutral-600">{schoolData.address}</p>
            <p className="text-sm text-neutral-600 mt-2">📞 {schoolData.phone}</p>
            <p className="text-sm text-neutral-600">✉️ {schoolData.email}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Link Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ppdb" className="text-neutral-600 hover:text-primary transition">PPDB 2026/2027</Link></li>
              <li><Link href="/fasilitas" className="text-neutral-600 hover:text-primary transition">Fasilitas</Link></li>
              <li><Link href="/guru" className="text-neutral-600 hover:text-primary transition">Guru & Staf</Link></li>
              <li><Link href="/galeri" className="text-neutral-600 hover:text-primary transition">Galeri</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Program</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ekskul" className="text-neutral-600 hover:text-primary transition">Ekstrakurikuler</Link></li>
              <li><Link href="/green-school" className="text-neutral-600 hover:text-primary transition">Green School</Link></li>
              <li><Link href="/alumni" className="text-neutral-600 hover:text-primary transition">Alumni</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-xl text-neutral-500 hover:text-primary transition">📸</a>
              <a href="#" className="text-xl text-neutral-500 hover:text-red-500 transition">▶️</a>
              <a href="#" className="text-xl text-neutral-500 hover:text-blue-600 transition">📘</a>
            </div>
            <p className="text-xs text-neutral-400 mt-6">© {new Date().getFullYear()} SDN Petukangan Selatan 02</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
