import Categories from '@/components/initialPageSections/Categories'
import ForYou from '@/components/initialPageSections/ForYou'
import StartCarousel from '@/components/initialPageSections/StartCarousel'
import Authors from '@/components/initialPageSections/Authors'
import React, { ReactElement } from 'react'

const Home: React.FC = (): ReactElement => {
  return (
    <div className={''}>
      <StartCarousel />
      <Categories />
      <Authors />
      <ForYou />
    </div>
  )
}

export default Home
