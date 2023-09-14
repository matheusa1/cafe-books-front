import Categories from '@/components/initialPageSections/Categories'
import ForYou from '@/components/initialPageSections/ForYou'
import StartCarousel from '@/components/initialPageSections/StartCarousel'
import React, { ReactElement } from 'react'

const Home: React.FC = (): ReactElement => {
  return (
    <div className={''}>
      <StartCarousel />
      <Categories />
      <ForYou />
    </div>
  )
}

export default Home
