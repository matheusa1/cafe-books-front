import BookmarksHeader from '@/components/organism/BookmarksHeader'
import React, { ReactElement } from 'react'

const Bookmarks: React.FC = (): ReactElement => {
  return (
    <div
      className={
        'my-20 flex min-h-screen flex-col items-center px-5 md:my-28 md:px-10'
      }
    >
      <BookmarksHeader />
    </div>
  )
}

export default Bookmarks
