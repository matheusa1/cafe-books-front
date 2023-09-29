import BookmarksGrid from '@/components/organism/BookmarksGrid'
import BookmarksHeader from '@/components/organism/BookmarksHeader'
import React, { ReactElement } from 'react'

const Bookmarks: React.FC = (): ReactElement => {
  return (
    <div
      className={
        'my-20 flex min-h-screen flex-col items-center px-5 md:my-28 md:px-10'
      }
    >
      <div className="flex max-w-7xl flex-col gap-10">
        <BookmarksHeader />
        <BookmarksGrid />
      </div>
    </div>
  )
}

export default Bookmarks
