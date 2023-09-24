'use client'

import ExploreHeader from '@/components/organism/ExploreHeader'
import React, { ReactElement } from 'react'

const Explore: React.FC = (): ReactElement => {
  return (
    <div className={'my-20 px-5 md:my-28 md:px-10'}>
      <div className="flex w-full max-w-7xl flex-col items-center gap-5">
        <ExploreHeader />
      </div>
    </div>
  )
}

export default Explore
