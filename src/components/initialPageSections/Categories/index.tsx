import Title from '@/components/atoms/Title'
import CategoriesSwiper from '@/components/organism/CategoriesSwiper'
import React, { ReactElement } from 'react'

const Categories: React.FC = (): ReactElement => {
  return (
    <div className={'mt-20'}>
      <Title
        topText={'CATEGORIAS'}
        boldText={'Nossa estante'}
        text={'de livros'}
      />
      <CategoriesSwiper />
    </div>
  )
}

export default Categories
