import Categories from '@/components/initialPageSections/Categories'
import ForYou from '@/components/initialPageSections/ForYou'
import StartCarousel from '@/components/initialPageSections/StartCarousel'
import Authors from '@/components/initialPageSections/Authors'
import React, { ReactElement } from 'react'
import HeadboardItems from '@/components/initialPageSections/HeadboardItems'

const Home: React.FC = (): ReactElement => {
  return (
    <div className={''}>
      <StartCarousel />
      <Categories />
      <HeadboardItems />
      <Authors />
      <ForYou />
    </div>
  )
}

export default Home
