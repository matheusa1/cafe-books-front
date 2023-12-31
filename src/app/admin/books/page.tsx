'use client'

import React, { ReactElement, useState } from 'react'
import 'rsuite-table/dist/css/rsuite-table.css'
import { getAuthor, getBooks, getCategories } from '@/services/api'
import Pagination from '@/components/atoms/Pagination'
import AdminBooksHeader from '@/components/organism/AdminBooksHeader'
import AdminBooksContent from '@/components/organism/AdminBooksContent'
import { toTitleCase } from '@/utils/toTitleCase'
import { useQuery } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'

const Book: React.FC = (): ReactElement => {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const { data: categories, refetch: refetchCategories } = useQuery(
    ['categories', Infinity],
    async () => {
      const categories = await getCategories()

      const categoriesList = categories.map((category) => {
        return {
          label: toTitleCase(category.name),
          value: category.name,
        }
      })

      return categoriesList
    },
  )

  const { data: author, refetch: refetchAuthor } = useQuery(
    ['author', Infinity],
    async () => {
      const author = await getAuthor()

      const authorList = author?.map((author) => {
        return {
          label: toTitleCase(author.name),
          value: author.name,
        }
      })

      return authorList
    },
  )

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
        author: book.author.map((author) => {
          return {
            label: toTitleCase(author),
            value: author,
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <AdminBooksHeader
        categoriesList={categories}
        search={search}
        setSearch={setSearch}
        refetch={refetch}
        refetchCategories={refetchCategories}
        refetchAuthors={refetchAuthor}
        authorsList={author}
      />
      <div className="flex flex-1">
        <AdminBooksContent
          refetch={refetch}
          isLoading={isLoading}
          categoriesList={categories}
          books={filteredBooks || []}
          refetchCategories={refetchCategories}
          authorsList={author}
          refetchAuthors={refetchAuthor}
        />
      </div>
      {filteredBooks && filteredBooks.length > 0 && (
        <Pagination
          currentPage={currentPage}
          handlePageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={booksData?.length || 0}
          setItemsPerPage={setItemsPerPage}
        />
      )}
    </div>
  )
}

export default Book
