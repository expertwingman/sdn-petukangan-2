import { Container } from '@/components/ui/Container'
import { Accordion } from '@/components/ui/Accordion'
import JsonLd from '@/components/ui/JsonLd'

export const metadata = {
  title: 'FAQ — SDN Petukangan Selatan 02',
  description: 'Pertanyaan yang sering diajukan tentang SDN Petukangan Selatan 02.',
}

const faqs = [
  {
    question: 'Apa saja fasilitas yang tersedia di SDN Petukangan Selatan 02?',
    answer: 'Kami memiliki laboratorium komputer, perpustakaan digital, lapangan olahraga multifungsi, ruang UKS modern, ruang kelas digital, mushola, kantin sehat, dan taman belajar.',
  },
  {
    question: 'Bagaimana cara mendaftar PPDB 2026/2027?',
    answer: 'Pendaftaran dilakukan secara online melalui portal resmi sekolah. Silakan kunjungi halaman PPDB untuk informasi lengkap.',
  },
  {
    question: 'Apakah ada biaya pendaftaran PPDB?',
    answer: 'Pendaftaran PPDB di SDN Petukangan Selatan 02 gratis (sekolah negeri).',
  },
  {
    question: 'Berapa kuota siswa baru untuk tahun ajaran 2026/2027?',
    answer: 'Kuota untuk kelas 1 adalah 60 siswa (2 rombongan belajar).',
  },
  {
    question: 'Apa saja ekstrakurikuler yang tersedia?',
    answer: 'Kami memiliki Pramuka, Futsal, Basket, Seni Tari, Paduan Suara, Robotika, Melukis, dan English Club.',
  },
  {
    question: 'Bagaimana cara menghubungi sekolah?',
    answer: 'Anda dapat menghubungi kami melalui telepon (021) 1234567, email info@sdnpetukanganselatan02.sch.id, atau datang langsung ke alamat Jl. Sakti VII RT.06/01, Pesanggrahan, Jakarta Selatan.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <div className="min-h-screen py-16 md:py-24">
        <Container>
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 text-center">
            Pertanyaan <span className="text-accent">Umum</span>
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Temukan jawaban dari pertanyaan-pertanyaan yang sering diajukan tentang sekolah kami.
          </p>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <Accordion key={index} title={faq.question}>
                {faq.answer}
              </Accordion>
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}
