import CategoriesItem from '@/components/molecules/CategoriesItem'
import React, { ReactElement } from 'react'
import { categoriesData } from '@/mock/categoriesData'
const CategoriesSwiper: React.FC = (): ReactElement => {
  return (
    <div className="flex items-center justify-center">
      <div className={'flex flex-nowrap gap-4 overflow-auto'}>
        {categoriesData.map((item, index) => (
          <CategoriesItem key={index} title={item.name} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default CategoriesSwiper
