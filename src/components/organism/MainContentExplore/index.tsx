import React, { ReactElement } from 'react'
import { IMainContentExplore } from './types'
import HeadboardItem from '@/components/molecules/HeadboardItem'

const MainContentExplore: React.FC<IMainContentExplore> = ({
  books,
}): ReactElement => {
  return (
    <div
      className={
        'grid w-full grid-cols-2 gap-2 text-dark sm:grid-cols-3 md:grid-cols-4 md:gap-4'
      }
    >
      {books?.map((book, index) => {
        return <HeadboardItem cardInfo={book} key={index} />
      })}
    </div>
  )
}

export default MainContentExplore
