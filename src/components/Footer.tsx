import * as React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { schoolData } from '@/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-primary text-white/80 border-t border-white/10">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              SDN Petukangan <span className="text-accent">02</span>
            </h3>
            <p className="text-sm text-white/60 mb-4">
              Sekolah dasar negeri terakreditasi A yang berkomitmen membentuk karakter dan merancang masa depan siswa.
            </p>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="text-white/50 hover:text-accent transition-colors" aria-label="Facebook">📘</a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors" aria-label="Instagram">📸</a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors" aria-label="YouTube">▶️</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-accent text-lg">📍</span>
                <span className="text-white/70">{schoolData.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-accent text-lg">📞</span>
                <span className="text-white/70">{schoolData.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-accent text-lg">✉️</span>
                <span className="text-white/70">{schoolData.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-accent text-lg">🕐</span>
                <span className="text-white/70">Senin-Jumat, 07:00 - 16:00 WIB</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">Link Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ppdb" className="text-white/70 hover:text-accent transition-colors">PPDB 2026/2027</Link></li>
              <li><Link href="/fasilitas" className="text-white/70 hover:text-accent transition-colors">Fasilitas</Link></li>
              <li><Link href="/guru" className="text-white/70 hover:text-accent transition-colors">Guru & Staf</Link></li>
              <li><Link href="/galeri" className="text-white/70 hover:text-accent transition-colors">Galeri</Link></li>
              <li><Link href="/kontak" className="text-white/70 hover:text-accent transition-colors">Kontak</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">Program</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ekskul" className="text-white/70 hover:text-accent transition-colors">Ekstrakurikuler</Link></li>
              <li><Link href="/green-school" className="text-white/70 hover:text-accent transition-colors">Green School</Link></li>
              <li><Link href="/alumni" className="text-white/70 hover:text-accent transition-colors">Alumni</Link></li>
              <li><Link href="/akademik" className="text-white/70 hover:text-accent transition-colors">Kurikulum</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© {currentYear} SDN Petukangan Selatan 02. All rights reserved.</p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
