export interface SchoolData {
  name: string
  address: string
  phone: string
  email: string
  website: string
  foundedYear: number
  accreditation: string
  principal: string
  vision: string
  mission: string[]
}

export interface Teacher {
  id: string
  name: string
  position: string
  nip: string
  education: string
  photo?: string
  expertise?: string
}

export interface Facility {
  id: string
  name: string
  description: string
  icon?: string
  image?: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  year: number
  level: 'Kecamatan' | 'Kota' | 'Provinsi' | 'Nasional' | 'Internasional'
  image?: string
}

export interface NewsItem {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image?: string
  date: string
  category: string
}

export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image?: string
  rating?: number
}
