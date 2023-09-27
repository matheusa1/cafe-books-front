import CategoriesItem from '@/components/molecules/CategoriesItem'
import React, { ReactElement } from 'react'
import { ICategoriesSwiper } from './types'

import fallBackImage from '@/assets/images/notFoundImage.png'

const CategoriesSwiper: React.FC<ICategoriesSwiper> = ({
  categories,
}): ReactElement => {
  return (
    <div className="flex items-center justify-center">
      <div className={'flex flex-nowrap gap-4 overflow-auto'}>
        {categories?.map(
          (item, index) =>
            index < 9 && (
              <CategoriesItem
                key={index}
                title={item.name}
                image={item.image_url === null ? fallBackImage : item.image_url}
              />
            ),
        )}
      </div>
    </div>
  )
}

export default CategoriesSwiper
