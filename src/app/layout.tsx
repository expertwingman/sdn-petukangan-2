import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sdnpetukanganselatan02.vercel.app'),
  title: {
    default: 'SDN Petukangan Selatan 02 — Sekolah Dasar Negeri Akreditasi A',
    template: '%s — SDN Petukangan Selatan 02',
  },
  description: 'SDN Petukangan Selatan 02 adalah sekolah dasar negeri terakreditasi A di Jakarta Selatan. Pendidikan karakter, fasilitas digital, dan lingkungan ramah anak.',
  keywords: 'SDN Petukangan Selatan 02, SD Negeri Petukangan Selatan 02, Sekolah Dasar Jakarta Selatan, PPDB Jakarta Selatan, Sekolah Ramah Anak, Akreditasi A',
  authors: [{ name: 'SDN Petukangan Selatan 02' }],
  creator: 'SDN Petukangan Selatan 02',
  publisher: 'SDN Petukangan Selatan 02',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'SDN Petukangan Selatan 02 — Sekolah Dasar Negeri Akreditasi A',
    description: 'Sekolah dasar negeri terakreditasi A di Jakarta Selatan dengan fasilitas digital dan lingkungan ramah anak.',
    url: 'https://sdnpetukanganselatan02.vercel.app',
    siteName: 'SDN Petukangan Selatan 02',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SDN Petukangan Selatan 02',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SDN Petukangan Selatan 02 — Sekolah Dasar Negeri Akreditasi A',
    description: 'Sekolah dasar negeri terakreditasi A di Jakarta Selatan dengan fasilitas digital dan lingkungan ramah anak.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
  },
  alternates: {
    canonical: 'https://sdnpetukanganselatan02.vercel.app',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1A4A6B',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body className={cn('min-h-screen bg-neutral-50 antialiased')}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground p-3 rounded-lg z-50"
        >
          Langsung ke konten
        </a>
        <Navbar />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
