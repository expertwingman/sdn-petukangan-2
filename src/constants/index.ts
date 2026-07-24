import { SchoolData, Teacher, Facility, Achievement, NewsItem, Event, Testimonial } from '@/types'

export const schoolData: SchoolData = {
  name: 'SDN Petukangan Selatan 02',
  address: 'Jl. Sakti VII RT.06/01, Pesanggrahan, Jakarta Selatan 12340',
  phone: '(021) 1234567',
  email: 'info@sdnpetukanganselatan02.sch.id',
  website: 'https://sdnpetukanganselatan02.vercel.app',
  foundedYear: 1980,
  accreditation: 'A',
  principal: 'Drs. H. M. Sutisna, M.Pd.',
  vision: 'Membentuk karakter, merancang masa depan – generasi berakhlak mulia, cerdas, dan berwawasan global.',
  mission: [
    'Menyelenggarakan pembelajaran yang inovatif dan berbasis karakter',
    'Mengembangkan potensi akademik dan non-akademik siswa secara seimbang',
    'Mewujudkan lingkungan sekolah yang ramah anak dan berkelanjutan',
    'Membangun kemitraan aktif dengan orang tua dan masyarakat',
  ],
}

export const teachers: Teacher[] = [
  {
    id: '1',
    name: 'Drs. H. M. Sutisna, M.Pd.',
    position: 'Kepala Sekolah',
    nip: '197504122001121001',
    education: 'S2 Manajemen Pendidikan IKIP',
  },
  {
    id: '2',
    name: 'Hj. Siti Aminah, S.Pd.',
    position: 'Wali Kelas 5A',
    nip: '198205152005012003',
    education: 'S1 PGSD',
  },
  {
    id: '3',
    name: 'Dr. Ahmad Fauzi, M.Pd.',
    position: 'Guru Matematika',
    nip: '196808031998021001',
    education: 'S2 Pendidikan Matematika',
  },
  {
    id: '4',
    name: 'Dra. Rina Marlina, M.Si.',
    position: 'Guru IPA',
    nip: '197205212006042002',
    education: 'S2 Pendidikan IPA',
  },
  {
    id: '5',
    name: 'Drs. Budi Santoso, M.Pd.',
    position: 'Guru Bahasa Indonesia',
    nip: '196512011990031010',
    education: 'S2 Pendidikan Bahasa',
  },
  {
    id: '6',
    name: 'Nurhayati, S.Pd.',
    position: 'Guru Pendidikan Agama',
    nip: '198308122010012001',
    education: 'S1 Pendidikan Agama Islam',
  },
  {
    id: '7',
    name: 'Eko Prasetyo, S.Pd.',
    position: 'Guru Olahraga',
    nip: '199002152015041002',
    education: 'S1 Pendidikan Olahraga',
  },
  {
    id: '8',
    name: 'Dewi Lestari, A.Md.',
    position: 'Staf Administrasi',
    nip: '198505102010012002',
    education: 'D3 Administrasi Perkantoran',
  },
]

export const facilities: Facility[] = [
  { id: '1', name: 'Laboratorium Komputer', description: '40 PC, headset, internet dedicated', icon: '💻' },
  { id: '2', name: 'Perpustakaan Digital', description: 'Koleksi e-book, jurnal, area baca interaktif', icon: '📚' },
  { id: '3', name: 'Lapangan Olahraga Multifungsi', description: 'Basket, futsal, senam', icon: '⚽' },
  { id: '4', name: 'Ruang UKS Modern', description: 'Peralatan medis dan obat-obatan lengkap', icon: '🏥' },
  { id: '5', name: 'Ruang Kelas Digital', description: 'Proyektor, smartboard, AC', icon: '🖥️' },
  { id: '6', name: 'Mushola', description: 'Ruang ibadah yang nyaman dan bersih', icon: '🕌' },
  { id: '7', name: 'Kantin Sehat', description: 'Makanan bergizi dan bersih', icon: '🍎' },
  { id: '8', name: 'Taman Belajar', description: 'Area hijau untuk belajar outdoor', icon: '🌳' },
]

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Juara 1 Olimpiade Sains',
    description: 'Meraih juara 1 dalam Olimpiade Sains tingkat Jakarta Selatan',
    year: 2025,
    level: 'Kota',
  },
  {
    id: '2',
    title: 'Juara Lomba Pidato Bahasa Inggris',
    description: 'Juara 2 Lomba Pidato Bahasa Inggris tingkat Provinsi DKI Jakarta',
    year: 2024,
    level: 'Provinsi',
  },
  {
    id: '3',
    title: 'Juara Futsal',
    description: 'Juara 1 Futsal tingkat Jakarta Selatan',
    year: 2024,
    level: 'Kota',
  },
  {
    id: '4',
    title: 'Sekolah Ramah Anak',
    description: 'Predikat Sekolah Ramah Anak tingkat nasional',
    year: 2023,
    level: 'Nasional',
  },
]

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Pembukaan PPDB 2026/2027',
    slug: 'pembukaan-ppdb-2026-2027',
    excerpt: 'SDN Petukangan Selatan 02 membuka pendaftaran siswa baru untuk tahun ajaran 2026/2027.',
    content: '...',
    date: '2026-06-01',
    category: 'Pengumuman',
  },
  {
    id: '2',
    title: 'Kegiatan Literasi Bulan Juni',
    slug: 'kegiatan-literasi-bulan-juni',
    excerpt: 'Siswa-siswi mengikuti kegiatan literasi yang diadakan di perpustakaan digital.',
    content: '...',
    date: '2026-06-10',
    category: 'Kegiatan',
  },
  {
    id: '3',
    title: 'Peringatan Hari Anak Nasional',
    slug: 'peringatan-hari-anak-nasional',
    excerpt: 'Sekolah mengadakan peringatan Hari Anak Nasional dengan berbagai perlombaan.',
    content: '...',
    date: '2026-07-23',
    category: 'Acara',
  },
]

export const events: Event[] = [
  {
    id: '1',
    title: 'Rapat Orang Tua',
    date: '2026-07-25',
    time: '08:00 - 10:00',
    location: 'Aula Sekolah',
    description: 'Rapat orang tua dan guru dalam rangka evaluasi semester.',
  },
  {
    id: '2',
    title: 'Pentas Seni',
    date: '2026-08-10',
    time: '09:00 - 12:00',
    location: 'Lapangan Sekolah',
    description: 'Pentas seni tahunan dengan berbagai penampilan siswa.',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Ardiansyah Putra, S.T.',
    role: 'Alumni 2018, Software Engineer di Tokyo',
    content: 'SDN Petukangan Selatan 02 memberikan fondasi pendidikan yang kuat dan karakter yang baik bagi saya.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ibu Rina',
    role: 'Orang tua siswa kelas 4',
    content: 'Anak saya sangat senang belajar di sini. Gurunya ramah dan fasilitasnya lengkap.',
    rating: 5,
  },
]
