'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Menu, X, ChevronDown } from 'lucide-react'

const menuItems = [
  { label: 'Beranda', href: '/' },
  {
    label: 'Profil',
    href: '#',
    submenu: [
      { label: 'Sejarah', href: '/tentang' },
      { label: 'Visi & Misi', href: '/tentang#visi-misi' },
      { label: 'Sambutan Kepala Sekolah', href: '/tentang#sambutan' },
      { label: 'Akreditasi', href: '/tentang#akreditasi' },
    ],
  },
  {
    label: 'Akademik',
    href: '#',
    submenu: [
      { label: 'Kurikulum', href: '/akademik' },
      { label: 'Guru & Staf', href: '/guru' },
      { label: 'Prestasi', href: '/prestasi' },
      { label: 'Kalender Akademik', href: '/agenda' },
    ],
  },
  { label: 'Fasilitas', href: '/fasilitas' },
  { label: 'Ekstrakurikuler', href: '/ekskul' },
  { label: 'PPDB', href: '/ppdb' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Berita', href: '/berita' },
  { label: 'Kontak', href: '/kontak' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === href
    return pathname?.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-300">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold tracking-tight text-primary">
              SDN Petukangan <span className="text-accent">02</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.label} className="relative group">
                    <button className="flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-primary hover:bg-white/60 transition-all duration-200">
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-56 origin-top-left opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100">
                      <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 py-2">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className={cn(
                              'block px-4 py-2.5 text-sm transition-colors hover:bg-primary/5 hover:text-primary',
                              isActive(sub.href) ? 'text-primary bg-primary/5' : 'text-gray-700'
                            )}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    isActive(item.href)
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 hover:text-primary hover:bg-white/60'
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:block">
            <Button variant="primary" size="sm" asChild>
              <Link href="/ppdb">Daftar Sekarang</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full text-gray-600 hover:bg-white/60 transition"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl px-4 pt-2 pb-6 border-t border-white/20 max-h-[80vh] overflow-y-auto">
            {menuItems.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.label} className="mt-2">
                    <div className="px-3 py-2 text-sm font-semibold text-primary">{item.label}</div>
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className={cn(
                          'block pl-6 py-2 rounded-lg text-sm transition-colors hover:bg-white/60 hover:text-primary',
                          isActive(sub.href) ? 'text-primary bg-primary/5' : 'text-gray-600'
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2 rounded-lg text-base font-medium transition-colors hover:bg-white/60 hover:text-primary',
                    isActive(item.href) ? 'text-primary bg-primary/5' : 'text-gray-700'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="mt-4 pt-4 border-t border-gray-200/50">
              <Button variant="primary" size="sm" fullWidth asChild>
                <Link href="/ppdb" onClick={() => setIsOpen(false)}>
                  Daftar Sekarang
                </Link>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}

export default Navbar
