import Categories from '@/components/initialPageSections/Categories'
import StartCarousel from '@/components/initialPageSections/StartCarousel'
import React, { ReactElement } from 'react'

const Home: React.FC = (): ReactElement => {
  return (
    <div className={''}>
      <StartCarousel />
      <Categories />
    </div>
  )
}

export default Home
