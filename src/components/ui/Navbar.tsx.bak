'use client'
import Link from 'next/link'
import { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
    { label: 'Quiz', href: '/quiz' },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              SDN Petukangan 02
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              if (item.submenu) {
                return (
                  <Menu as="div" key={item.label} className="relative">
                    <Menu.Button className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50/70 transition-all duration-200">
                      {item.label}
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left bg-white rounded-xl shadow-lg ring-1 ring-black/5 focus:outline-none py-1 z-50">
                        {item.submenu.map((sub) => (
                          <Menu.Item key={sub.label}>
                            {({ active }) => (
                              <Link
                                href={sub.href}
                                className={`block px-4 py-2 text-sm ${active ? 'bg-blue-50 text-blue-700' : 'text-gray-700'} transition`}
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
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50/70 transition-all duration-200"
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-700 hover:bg-blue-50/70 transition"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm px-4 pt-2 pb-4 space-y-1 border-t border-gray-200/50 max-h-[80vh] overflow-y-auto">
          {menuItems.map((item) => {
            if (item.submenu) {
              return (
                <div key={item.label} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-800">{item.label}</div>
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block pl-6 py-2 rounded-lg text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50/70 transition"
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
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50/70 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
export default Navbar
