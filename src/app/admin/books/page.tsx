'use client'

import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { data } from '@/mock/booksInfoData'
import 'rsuite-table/dist/css/rsuite-table.css'
import { getCategories } from '@/services/api'
import Pagination from '@/components/atoms/Pagination'
import AdminBooksHeader from '@/components/organism/AdminBooksHeader'
import AdminBooksContent from '@/components/organism/AdminBooksContent'

const Book: React.FC = (): ReactElement => {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [books, setBooks] = useState(data)

  const filteredBooks = books.filter((book, index) => {
    let tempData

    if (search === '') {
      tempData = book
    } else if (
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.isbn.toLowerCase().includes(search.toLowerCase())
    ) {
      tempData = book
    }

    if (
      index >= (currentPage - 1) * itemsPerPage &&
      index < currentPage * itemsPerPage
    ) {
      return tempData
    }
  })

  const getCategoriesData = useCallback(async () => {
    const categories = await getCategories()

    console.log(categories)
    console.log('teste')
  }, [])

  const getBooksData = useCallback(async () => {
    const books = await getCategories()

    console.log(books)
    console.log('teste')
  }, [])

  useEffect(() => {
    getCategoriesData()
    getBooksData()
  }, [getCategoriesData, getBooksData])

  return (
    <div className={'flex h-full w-full flex-col gap-5'}>
      <AdminBooksHeader search={search} setSearch={setSearch} />
      <div className="flex flex-1">
        <AdminBooksContent books={filteredBooks} />
      </div>
      <Pagination
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
        itemsPerPage={itemsPerPage}
        totalItems={filteredBooks.length}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  )
}

export default Book
