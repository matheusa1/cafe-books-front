'use client'

import AdminBooksHeader from '@/components/organism/AdminBooksHeader'
import React, { ReactElement, useState } from 'react'

const Book: React.FC = (): ReactElement => {
  const [search, setSearch] = useState('')

  return (
    <div className={''}>
      <h1>book</h1>
      <AdminBooksHeader search={search} setSearch={setSearch} />
    </div>
  )
}

export default Book
