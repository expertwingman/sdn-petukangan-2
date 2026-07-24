'use client'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [
    { href: '/', label: 'Beranda' },
    { href: '/tentang', label: 'Profil' },
    { href: '/prestasi', label: 'Prestasi' },
    { href: '/berita', label: 'Berita' },
    { href: '/agenda', label: 'Agenda' },
    { href: '/galeri', label: 'Galeri' },
    { href: '/fasilitas', label: 'Fasilitas' },
    { href: '/guru', label: 'Guru & Staf' },
    { href: '/ppdb', label: 'PPDB' },
    { href: '/kontak', label: 'Kontak' },
    { href: '/faq', label: 'FAQ' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              SDN Petukangan 02
            </Link>
          </div>
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50/70 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-700 hover:bg-blue-50/70 transition"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Buka menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm px-4 pt-2 pb-4 space-y-1 border-t border-gray-200/50">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50/70 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
export default Navbar
