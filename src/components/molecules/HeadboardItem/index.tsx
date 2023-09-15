'use client'

import { BookmarkSimple } from '@phosphor-icons/react'
import React, { ReactElement, useState } from 'react'

const HeadboardItem: React.FC = (): ReactElement => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)

  return (
    <div className={''}>
      <header className="flex items-center justify-between">
        <div></div>
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
