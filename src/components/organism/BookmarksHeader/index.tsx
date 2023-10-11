import { Input } from '@/components/atoms/Input'
import React, { ReactElement } from 'react'

const BookmarksHeader: React.FC = (): ReactElement => {
  return (
    <div
      className={
        'flex w-full flex-col items-center gap-2 md:flex-row md:justify-between'
      }
    >
      <h1 className="text-xl font-bold">Meus Favoritos</h1>
      <div className="w-full max-w-sm">
        <Input.Input
          variant="search"
          className="border-2 border-dark hover:border-brownPrimary focus:border-brownPrimary"
        />
      </div>
    </div>
  )
}

export default BookmarksHeader
