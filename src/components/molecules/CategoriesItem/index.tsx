'use client'

import React, { ReactElement } from 'react'
import { ICategoriesItem } from './types'
import Link from 'next/link'
import ImageWithFallback from '@/components/atoms/ImageWithFallback'
const CategoriesItem: React.FC<ICategoriesItem> = ({
  image,
  title,
}): ReactElement => {
  const [isHover, setIsHover] = React.useState<boolean>(false)

  return (
    <Link
      href={`/explore?category=${title}`}
      className={
        'flex w-32 shrink-0 flex-col gap-2 rounded-lg p-4 text-center transition-all hover:bg-pureWhite'
      }
      onMouseEnter={(e) => {
        e.preventDefault()
        setIsHover(true)
      }}
      onMouseLeave={(e) => {
        e.preventDefault()
        setIsHover(false)
      }}
    >
      <div className="relative h-24 w-24">
        <div
          className={
            'absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-700 transition-all data-[ishover=true]:h-28 data-[ishover=true]:w-28'
          }
          data-ishover={isHover}
        />
        <ImageWithFallback
          data-ishover={isHover}
          src={image}
          alt="bookImage"
          width={96}
          height={96}
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 object-contain transition-all duration-500 data-[ishover=true]:rotate-12"
        />
      </div>
      <p>{title}</p>
    </Link>
  )
}

export default CategoriesItem
