import React, { ReactElement } from 'react'
import { ICategoriesItem } from './types'
import Image from 'next/image'
import Link from 'next/link'

const CategoriesItem: React.FC<ICategoriesItem> = ({
  image,
  title,
}): ReactElement => {
  return (
    <Link
      href={'#'}
      className={
        'flex w-32 shrink-0 flex-col gap-2 rounded-lg p-4 text-center transition-all hover:bg-white'
      }
    >
      <Image
        src={image}
        alt="bookImage"
        width={1920}
        height={1080}
        className="h-24 w-24"
      />
      <p>{title}</p>
    </Link>
  )
}

export default CategoriesItem
