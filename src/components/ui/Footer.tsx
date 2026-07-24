import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div><h3 className="text-lg font-semibold mb-3">SDN Petukangan Selatan 02</h3><p className="text-sm">Jl. Sakti VII RT.06/01</p><p className="text-sm">Pesanggrahan, Jakarta Selatan 12340</p><p className="text-sm mt-2">📞 (021) 1234567</p><p className="text-sm">✉️ info@sdnpetukanganselatan02.sch.id</p></div>
          <div><h3 className="text-lg font-semibold mb-3">Link Cepat</h3><ul className="space-y-1 text-sm"><li><Link href="/ppdb" className="hover:underline">PPDB 2026/2027</Link></li><li><Link href="/fasilitas" className="hover:underline">Fasilitas</Link></li><li><Link href="/guru" className="hover:underline">Guru & Staf</Link></li><li><Link href="/galeri" className="hover:underline">Galeri</Link></li></ul></div>
          <div><h3 className="text-lg font-semibold mb-3">Ikuti Kami</h3><div className="flex space-x-4"><a href="#" className="hover:text-blue-300">Instagram</a><a href="#" className="hover:text-blue-300">YouTube</a><a href="#" className="hover:text-blue-300">Facebook</a></div><p className="text-xs mt-4 opacity-75">© {new Date().getFullYear()} SDN Petukangan Selatan 02</p></div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
