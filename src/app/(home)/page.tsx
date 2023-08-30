import Categories from '@/components/initialPageSections/Categories'
import StartCarousel from '@/components/initialPageSections/StartCarousel'
import React, { ReactElement } from 'react'

const Home: React.FC = (): ReactElement => {
  return (
    <div className={''}>
      <StartCarousel />
      <Categories />
      <div className="h-screen bg-slate-400" />
      <div className="h-screen bg-slate-500" />
    </div>
  )
}

export default Home
