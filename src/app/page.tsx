'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Sidebar from '@/components/Sidebar'
import AnalyticsChart from '@/components/AnalyticsChart'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* TODO: Complete the Header component */}
      <Header />
      
      {/* TODO: Complete the Hero Section */}
      <HeroSection />
      
      <div className="flex">
        {/* TODO: Complete the Sidebar */}
        <Sidebar />
        
        <div className="flex-1 p-6">
          {/* TODO: Complete the Analytics Chart */}
          <AnalyticsChart />
        </div>
      </div>
    </main>
  )
}
