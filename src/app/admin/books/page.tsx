'use client'

import React, { ReactElement, useState } from 'react'
import 'rsuite-table/dist/css/rsuite-table.css'
import { getBooks, getCategories } from '@/services/api'
import Pagination from '@/components/atoms/Pagination'
import AdminBooksHeader from '@/components/organism/AdminBooksHeader'
import AdminBooksContent from '@/components/organism/AdminBooksContent'
import { toTitleCase } from '@/utils/toTitleCase'
import { useQuery } from '@tanstack/react-query'

const Book: React.FC = (): ReactElement => {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const { data: categories } = useQuery(['categories', Infinity], async () => {
    const categories = await getCategories()

    const categoriesList = categories.map((category) => {
      return {
        label: toTitleCase(category.name),
        value: category.name,
      }
    })

    return categoriesList
  })

  const {
    data: booksData,
    isLoading,
    refetch,
  } = useQuery(['books', Infinity], async () => {
    const books = await getBooks()

    const booksList = books.map((book) => {
      return {
        ...book,
        category: book.category.map((category) => {
          return {
            label: toTitleCase(category),
            value: category,
          }
        }),
      }
    })

    return booksList
  })

  const filteredBooks = booksData?.filter((book, index) => {
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

  return (
    <div className={'flex h-full w-full flex-col gap-5'}>
      <AdminBooksHeader
        categoriesList={categories}
        search={search}
        setSearch={setSearch}
        refetch={refetch}
      />
      <div className="flex flex-1">
        <AdminBooksContent
          refetch={refetch}
          isLoading={isLoading}
          categoriesList={categories}
          books={filteredBooks || []}
        />
      </div>
      {filteredBooks && filteredBooks.length > 0 && (
        <Pagination
          currentPage={currentPage}
          handlePageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={filteredBooks.length || 0}
          setItemsPerPage={setItemsPerPage}
        />
      )}
    </div>
  )
}

export default Book
