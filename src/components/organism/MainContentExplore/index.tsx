import React, { ReactElement } from 'react'
import { IMainContentExplore } from './types'
import HeadboardItem from '@/components/molecules/HeadboardItem'
import Link from 'next/link'

const MainContentExplore: React.FC<IMainContentExplore> = ({
  books,
}): ReactElement => {
  return (
    <div
      className={
        'grid w-full grid-cols-2 gap-2 text-dark sm:grid-cols-3 md:grid-cols-4'
      }
    >
      {books?.map((book, index) => {
        return (
          <Link href={`/book-info/${book.isbn}`} key={index}>
            <HeadboardItem cardInfo={book} />
          </Link>
        )
      })}
    </div>
  )
}

export default MainContentExplore
