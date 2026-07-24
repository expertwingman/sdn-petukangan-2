import { Metadata } from 'next'
import JsonLd from '@/components/ui/JsonLd'
export const metadata: Metadata = { title: 'PPDB 2026/2027 - Pendaftaran Peserta Didik Baru', description: 'Informasi PPDB SDN Petukangan Selatan 02 tahun ajaran 2026/2027. Syarat, jadwal, dan pendaftaran online.' }
export default function PPDBPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [ { '@type': 'Question', name: 'Kapan pendaftaran PPDB 2026/2027 dibuka?', acceptedAnswer: { '@type': 'Answer', text: 'Pendaftaran dibuka pada 1 Juni 2026 dan ditutup 30 Juni 2026.' } }, { '@type': 'Question', name: 'Apa saja syarat pendaftaran?', acceptedAnswer: { '@type': 'Answer', text: 'Syarat: 1) Usia 6-7 tahun, 2) Akta kelahiran, 3) KK, 4) Pas foto, 5) Surat sehat.' } }, { '@type': 'Question', name: 'Apakah ada biaya pendaftaran?', acceptedAnswer: { '@type': 'Answer', text: 'Pendaftaran PPDB di SDN Petukangan Selatan 02 gratis (sekolah negeri).' } }, { '@type': 'Question', name: 'Berapa kuota siswa baru?', acceptedAnswer: { '@type': 'Answer', text: 'Kuota untuk kelas 1 adalah 60 siswa (2 rombel).' } } ] }
  return ( <>
    <JsonLd data={faqSchema} />
    <main className="max-w-4xl mx-auto p-6 py-12">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Penerimaan Peserta Didik Baru (PPDB) 2026/2027</h1>
      <div className="prose prose-lg">
        <p>SDN Petukangan Selatan 02 membuka pendaftaran siswa baru untuk tahun ajaran 2026/2027. Kami mengundang orang tua/wali untuk mendaftarkan putra-putrinya di sekolah kami yang berakreditasi A dan berpredikat Sekolah Ramah Anak.</p>
        <h2 className="text-2xl font-semibold mt-8">Syarat Pendaftaran</h2><ul><li>Usia calon siswa minimal 6 tahun dan maksimal 7 tahun per 1 Juli 2026</li><li>Fotokopi Akta Kelahiran</li><li>Fotokopi Kartu Keluarga (KK)</li><li>Pas foto ukuran 3x4 (2 lembar)</li><li>Surat keterangan sehat dari dokter</li></ul>
        <h2 className="text-2xl font-semibold mt-8">Jadwal Pendaftaran</h2><ul><li><strong>Pendaftaran online:</strong> 1 – 30 Juni 2026</li><li><strong>Verifikasi berkas:</strong> 1 – 5 Juli 2026</li><li><strong>Pengumuman:</strong> 10 Juli 2026</li><li><strong>Daftar ulang:</strong> 11 – 15 Juli 2026</li></ul>
        <h2 className="text-2xl font-semibold mt-8">Kuota</h2><p>Kuota siswa baru untuk kelas 1 adalah 60 siswa (2 rombongan belajar).</p>
        <h2 className="text-2xl font-semibold mt-8">Pendaftaran Online</h2><p>Silakan klik tombol di bawah ini untuk mengakses portal pendaftaran online.</p>
        <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-4 transition">Daftar Sekarang</a>
        <h2 className="text-2xl font-semibold mt-8">Pertanyaan Umum (FAQ)</h2>
        <div className="space-y-4"><div><h3 className="font-semibold">Apakah ada biaya pendaftaran?</h3><p>Tidak ada biaya pendaftaran. Sekolah ini adalah sekolah negeri.</p></div><div><h3 className="font-semibold">Bagaimana jika anak saya berusia kurang dari 6 tahun?</h3><p>Calon siswa harus berusia minimal 6 tahun per 1 Juli 2026. Pengecualian dapat diajukan dengan rekomendasi psikolog.</p></div><div><h3 className="font-semibold">Apakah ada tes masuk?</h3><p>Tidak ada tes masuk. Pendaftaran berdasarkan domisili dan kuota.</p></div></div>
      </div>
    </main>
  </> )
}
