'use client'

import * as React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
