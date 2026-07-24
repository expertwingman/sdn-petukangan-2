'use client'
import Link from 'next/link'
import { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const menuItems = [
  { label: 'Beranda', href: '/' },
  {
    label: 'Profil',
    href: '#',
    submenu: [
      { label: 'Sejarah', href: '/tentang' },
      { label: 'Visi & Misi', href: '/tentang#visi-misi' },
      { label: 'Sambutan Kepsek', href: '/tentang#sambutan' },
      { label: 'Akreditasi', href: '/tentang#akreditasi' },
    ]
  },
  {
    label: 'Akademik',
    href: '#',
    submenu: [
      { label: 'Kurikulum', href: '/akademik' },
      { label: 'Guru & Staf', href: '/guru' },
      { label: 'Prestasi', href: '/prestasi' },
      { label: 'Kalender Akademik', href: '/agenda' },
    ]
  },
  { label: 'Fasilitas', href: '/fasilitas' },
  { label: 'Ekstrakurikuler', href: '/ekskul' },
  { label: 'PPDB', href: '/ppdb' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Berita', href: '/berita' },
  { label: 'Kontak', href: '/kontak' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-300">
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-primary">
              SDN Petukangan <span className="text-accent">02</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              if (item.submenu) {
                return (
                  <Menu as="div" key={item.label} className="relative">
                    <Menu.Button className="flex items-center px-4 py-2 rounded-full text-sm font-medium text-neutral-700 hover:text-primary hover:bg-white/60 transition-all duration-200">
                      {item.label}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-150"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-100"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 py-2 z-50">
                        {item.submenu.map((sub) => (
                          <Menu.Item key={sub.label}>
                            {({ active }) => (
                              <Link
                                href={sub.href}
                                className={`block px-4 py-2.5 text-sm ${active ? 'bg-primary/5 text-primary' : 'text-neutral-700'} transition`}
                              >
                                {sub.label}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-neutral-700 hover:text-primary hover:bg-white/60 transition-all duration-200"
                >
                  {item.label}
                </Link>
              )
            })}
            <Button variant="primary" size="sm" className="ml-2">
              PPDB 2026
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-neutral-600 hover:bg-white/60 transition"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl px-4 pt-2 pb-6 border-t border-white/20 max-h-[80vh] overflow-y-auto">
          {menuItems.map((item) => {
            if (item.submenu) {
              return (
                <div key={item.label} className="space-y-1 mt-2">
                  <div className="px-3 py-2 text-sm font-semibold text-primary">{item.label}</div>
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block pl-6 py-2 rounded-lg text-sm text-neutral-600 hover:text-primary hover:bg-white/60 transition"
                      onClick={() => setMobileMenuOpen(false)}
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
                className="block px-3 py-2 rounded-lg text-base font-medium text-neutral-700 hover:text-primary hover:bg-white/60 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
          <div className="mt-4">
            <Button variant="primary" size="sm" className="w-full">
              PPDB 2026
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
