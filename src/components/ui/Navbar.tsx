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
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0"><Link href="/" className="text-xl font-bold tracking-wide">SDN Petukangan 02</Link></div>
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => <Link key={item.href} href={item.href} className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition">{item.label}</Link>)}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none" aria-expanded={isOpen}>
              <span className="sr-only">Buka menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">{isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}</svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && <div className="md:hidden bg-blue-800 px-4 pt-2 pb-4 space-y-1">{menuItems.map((item) => <Link key={item.href} href={item.href} className="block hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>{item.label}</Link>)}</div>}
    </nav>
  )
}
export default Navbar
