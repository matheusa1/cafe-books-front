'use client'

import Badge from '@/components/atoms/Badge'
import { BookmarkSimple } from '@phosphor-icons/react'
import React, { ReactElement, useState } from 'react'
import { IHeadboardItem } from './types'

const HeadboardItem: React.FC<IHeadboardItem> = ({
  cardInfo,
}): ReactElement => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)

  const { price, discountPrice } = cardInfo

  return (
    <div className={''}>
      <header className="flex items-center justify-between">
        <div>
          {discountPrice && (
            <Badge>{`${(((price - discountPrice) / price) * 100).toFixed(
              0,
            )}% off`}</Badge>
          )}
        </div>
        <BookmarkSimple
          className={`h-8 w-8 ${isBookmarked && 'text-yellow-500'}`}
          onClick={() => setIsBookmarked(!isBookmarked)}
          weight={isBookmarked ? 'fill' : 'regular'}
        />
      </header>
    </div>
  )
}

export default HeadboardItem
