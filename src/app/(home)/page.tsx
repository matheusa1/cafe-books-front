import Categories from '@/components/initialPageSections/Categories'
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
    </div>
  )
}

export default Home
