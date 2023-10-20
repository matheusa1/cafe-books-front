import HeadboardItem from '@/components/molecules/HeadboardItem'
import React, { ReactElement } from 'react'
import { IBookmarksGrid } from './types'

const BookmarksGrid: React.FC<IBookmarksGrid> = ({ books }): ReactElement => {
  return (
    <div
      className={
        'grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
      }
    >
      {books?.map((book) => (
        <HeadboardItem key={book.isbn} cardInfo={{ ...book }} />
      ))}
    </div>
  )
}

export default BookmarksGrid
