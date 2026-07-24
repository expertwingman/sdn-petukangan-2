import { MetadataRoute } from 'next'

const baseUrl = 'https://sdnpetukanganselatan02.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/tentang',
    '/guru',
    '/fasilitas',
    '/prestasi',
    '/ppdb',
    '/kontak',
    '/faq',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
