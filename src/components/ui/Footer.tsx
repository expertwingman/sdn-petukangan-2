import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              SDN Petukangan Selatan 02
            </h3>
            <p className="text-sm text-gray-400">Jl. Sakti VII RT.06/01</p>
            <p className="text-sm text-gray-400">Pesanggrahan, Jakarta Selatan 12340</p>
            <p className="text-sm text-gray-400 mt-2">📞 (021) 1234567</p>
            <p className="text-sm text-gray-400">✉️ info@sdnpetukanganselatan02.sch.id</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Link Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ppdb" className="text-gray-400 hover:text-blue-400 transition">PPDB 2026/2027</Link></li>
              <li><Link href="/fasilitas" className="text-gray-400 hover:text-blue-400 transition">Fasilitas</Link></li>
              <li><Link href="/guru" className="text-gray-400 hover:text-blue-400 transition">Guru & Staf</Link></li>
              <li><Link href="/galeri" className="text-gray-400 hover:text-blue-400 transition">Galeri</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Program</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ekskul" className="text-gray-400 hover:text-blue-400 transition">Ekstrakurikuler</Link></li>
              <li><Link href="/green-school" className="text-gray-400 hover:text-blue-400 transition">Green School</Link></li>
              <li><Link href="/alumni" className="text-gray-400 hover:text-blue-400 transition">Alumni</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition text-2xl">📸</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition text-2xl">▶️</a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition text-2xl">📘</a>
            </div>
            <p className="text-xs text-gray-500 mt-6">© {new Date().getFullYear()} SDN Petukangan Selatan 02</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
