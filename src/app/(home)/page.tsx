import Title from '@/components/atoms/Title'
import StartCarousel from '@/components/initialPageSections/StartCarousel'
import React, { ReactElement } from 'react'

const Home: React.FC = (): ReactElement => {
  return (
    <div className={''}>
      <StartCarousel />
      <Title boldText="Nossa estante" text="de livros" topText="CATEGORIAS" />
      <div className="h-screen bg-slate-400" />
      <div className="h-screen bg-slate-500" />
    </div>
  )
}

export default Home
