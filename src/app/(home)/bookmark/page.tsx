'use client'

import BookmarksGrid from '@/components/organism/BookmarksGrid'
import BookmarksHeader from '@/components/organism/BookmarksHeader'
import { useAuth } from '@/context/AuthContext'
import { getUserFavorites } from '@/services/api'
import { useQuery } from '@tanstack/react-query'
import React, { ReactElement } from 'react'

const Bookmark: React.FC = (): ReactElement => {
  const { token } = useAuth()

  const { data } = useQuery(['bookmark'], async () => {
    const res = await getUserFavorites(token!)
    console.log(res)
    return res
  })

  return (
    <div
      className={
        'my-20 flex min-h-screen flex-col items-center px-5 md:my-28 md:px-10'
      }
    >
      <div className="flex max-w-7xl flex-col gap-10">
        <BookmarksHeader />
        <BookmarksGrid books={data} />
      </div>
    </div>
  )
}

export default Bookmark
