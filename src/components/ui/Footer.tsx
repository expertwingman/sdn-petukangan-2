import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-white/60 backdrop-blur-xl border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">
              SDN Petukangan <span className="text-accent">02</span>
            </h3>
            <p className="text-sm text-gray-600">Jl. Sakti VII RT.06/01</p>
            <p className="text-sm text-gray-600">Pesanggrahan, Jakarta Selatan 12340</p>
            <p className="text-sm text-gray-600 mt-2">📞 (021) 1234567</p>
            <p className="text-sm text-gray-600">✉️ info@sdnpetukanganselatan02.sch.id</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Link Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ppdb" className="text-gray-600 hover:text-primary transition">PPDB 2026/2027</Link></li>
              <li><Link href="/fasilitas" className="text-gray-600 hover:text-primary transition">Fasilitas</Link></li>
              <li><Link href="/guru" className="text-gray-600 hover:text-primary transition">Guru & Staf</Link></li>
              <li><Link href="/galeri" className="text-gray-600 hover:text-primary transition">Galeri</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Program</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ekskul" className="text-gray-600 hover:text-primary transition">Ekstrakurikuler</Link></li>
              <li><Link href="/green-school" className="text-gray-600 hover:text-primary transition">Green School</Link></li>
              <li><Link href="/alumni" className="text-gray-600 hover:text-primary transition">Alumni</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-xl text-gray-500 hover:text-primary transition">📸</a>
              <a href="#" className="text-xl text-gray-500 hover:text-red-500 transition">▶️</a>
              <a href="#" className="text-xl text-gray-500 hover:text-blue-600 transition">📘</a>
            </div>
            <p className="text-xs text-gray-400 mt-6">© {new Date().getFullYear()} SDN Petukangan Selatan 02</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
