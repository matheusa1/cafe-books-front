import CategoriesItem from '@/components/molecules/CategoriesItem'
import React, { ReactElement } from 'react'

const CategoriesSwiper: React.FC = (): ReactElement => {
  return (
    <div className={''}>
      <CategoriesItem
        title={'Ficção cientifica'}
        image={'/mock/images/categoriesBook.png'}
      />
    </div>
  )
}

export default CategoriesSwiper
