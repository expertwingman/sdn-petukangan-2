import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sdnpetukanganselatan02.vercel.app'
  const pages = ['', '/tentang','/prestasi','/berita','/agenda','/galeri','/fasilitas','/guru','/ppdb','/kontak','/faq','/absensi','/akademik','/alumni','/buletin','/dashboard','/ekskul','/green-school','/galeri-seni']
  return pages.map((page) => ({ url: `${baseUrl}${page}`, lastModified: new Date(), changeFrequency: page === '' ? 'daily' : 'weekly', priority: page === '' ? 1 : 0.8 }))
}
