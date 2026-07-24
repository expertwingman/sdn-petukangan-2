import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Guru & Staf Pengajar - SDN Petukangan Selatan 02',
  description: 'Daftar guru dan staf SDN Petukangan Selatan 02 yang profesional dan berdedikasi.'
}

const teachers = [
  { name: 'Drs. H. M. Sutisna, M.Pd.', position: 'Kepala Sekolah', nip: '197504122001121001', education: 'S2 Manajemen Pendidikan IKIP' },
  { name: 'Hj. Siti Aminah, S.Pd.', position: 'Wali Kelas 5A', nip: '198205152005012003', education: 'S1 PGSD' },
  { name: 'Dr. Ahmad Fauzi, M.Pd.', position: 'Guru Matematika', nip: '196808031998021001', education: 'S2 Pendidikan Matematika' },
  { name: 'Dra. Rina Marlina, M.Si.', position: 'Guru IPA', nip: '197205212006042002', education: 'S2 Pendidikan IPA' },
  { name: 'Drs. Budi Santoso, M.Pd.', position: 'Guru Bahasa Indonesia', nip: '196512011990031010', education: 'S2 Pendidikan Bahasa' },
  { name: 'Nurhayati, S.Pd.', position: 'Guru Pendidikan Agama', nip: '198308122010012001', education: 'S1 Pendidikan Agama Islam' },
  { name: 'Eko Prasetyo, S.Pd.', position: 'Guru Olahraga', nip: '199002152015041002', education: 'S1 Pendidikan Olahraga' },
  { name: 'Dewi Lestari, A.Md.', position: 'Staf Administrasi', nip: '198505102010012002', education: 'D3 Administrasi Perkantoran' },
  { name: 'Siti Rahayu, S.Pd.', position: 'Guru Seni Budaya', nip: '199203202016042003', education: 'S1 Pendidikan Seni' },
  { name: 'Dr. Ir. Agus Salim, M.Kom.', position: 'Guru TIK', nip: '197808152003121001', education: 'S2 Teknik Informatika' },
]

export default function GuruPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-primary mb-4 animate-fade-in-up">
          Guru & Staf Pengajar
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-100">
          Tenaga pendidik dan kependidikan yang berdedikasi tinggi dalam membentuk generasi berkarakter.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((guru, idx) => (
            <div key={guru.nip} className="glass-card p-5 flex items-start space-x-4 card-hover animate-fade-in-up" style={{ animationDelay: (idx % 3) * 0.1 + 's' }}>
              <div className="flex-shrink-0">
                <Image
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(guru.name)}&background=0B2B4A&color=fff&size=64`}
                  alt={guru.name}
                  width={64}
                  height={64}
                  className="rounded-full border-2 border-white/30"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary">{guru.name}</h3>
                <p className="text-sm text-accent font-medium">{guru.position}</p>
                <p className="text-xs text-gray-500 mt-1">NIP: {guru.nip}</p>
                <p className="text-xs text-gray-500">{guru.education}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
