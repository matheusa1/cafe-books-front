'use client'

import AdminBooksHeader from '@/components/organism/AdminBooksHeader'
import React, { ReactElement, useState } from 'react'
import { data } from '@/mock/booksInfoData.json'
import 'rsuite-table/dist/css/rsuite-table.css'
import AdminBooksContent from '@/components/organism/AdminBooksContent'
import Pagination from '@/components/atoms/Pagination'
const Book: React.FC = (): ReactElement => {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const filteredBooks = data.filter((book, index) => {
    let tempData

    if (search === '') {
      tempData = book
    } else if (book.title.toLowerCase().includes(search.toLowerCase())) {
      tempData = book
    }

    //pagination

    if (
      index >= (currentPage - 1) * itemsPerPage &&
      index < currentPage * itemsPerPage
    ) {
      return tempData
    }
  })

  return (
    <div className={'flex h-full w-full flex-col gap-5'}>
      <AdminBooksHeader search={search} setSearch={setSearch} />
      <AdminBooksContent books={filteredBooks} />
      <Pagination
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  )
}

export default Book
