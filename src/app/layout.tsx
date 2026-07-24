import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: { default: 'SDN Petukangan Selatan 02 - Sekolah Dasar Negeri Akreditasi A', template: '%s - SDN Petukangan Selatan 02' },
  description: 'SDN Petukangan Selatan 02 adalah sekolah dasar negeri terakreditasi A di Jakarta Selatan. Fasilitas digital, lingkungan inklusif, dan guru profesional.',
  keywords: 'SDN Petukangan Selatan 02, SD Negeri Petukangan Selatan 02, Sekolah Dasar Jakarta Selatan, PPDB Jakarta Selatan, Sekolah Ramah Anak, Akreditasi A',
  authors: [{ name: 'SDN Petukangan Selatan 02' }],
  creator: 'SDN Petukangan Selatan 02',
  publisher: 'SDN Petukangan Selatan 02',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: 'SDN Petukangan Selatan 02 - Sekolah Dasar Negeri Akreditasi A',
    description: 'Sekolah dasar negeri terakreditasi A di Jakarta Selatan dengan fasilitas modern dan guru profesional.',
    url: 'https://sdnpetukanganselatan02.vercel.app',
    siteName: 'SDN Petukangan Selatan 02',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SDN Petukangan Selatan 02' }],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'SDN Petukangan Selatan 02', description: 'Sekolah dasar negeri terakreditasi A di Jakarta Selatan.', images: ['/og-image.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  verification: { google: '_iiZk25vu5K9Jj4fiynZSj4rX6XFVrQjwDeeaR_fA1g' },
  alternates: { canonical: 'https://sdnpetukanganselatan02.vercel.app' },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  ],
}
export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 5, userScalable: true, themeColor: '#1A365D' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-blue-900 p-3 rounded-lg z-50">Langsung ke konten</a>
        <Navbar />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
