import React, { ReactElement } from 'react'
import { ICategoriesItem } from './types'
import Image from 'next/image'

const CategoriesItem: React.FC<ICategoriesItem> = ({
  image,
  title,
}): ReactElement => {
  return (
    <div className={'flex w-32 flex-col gap-2 p-4 text-center'}>
      <Image
        src={image}
        alt="bookImage"
        width={1920}
        height={1080}
        className="h-24 w-24"
      />
      <p>{title}</p>
    </div>
  )
}

export default CategoriesItem
