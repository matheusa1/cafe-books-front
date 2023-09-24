'use client'
import Pagination from '@/components/atoms/Pagination'
import ExploreHeader from '@/components/organism/ExploreHeader'
import MainContentExplore from '@/components/organism/MainContentExplore'
import { getBooks } from '@/services/api'
import { toTitleCase } from '@/utils/toTitleCase'
import { useQuery } from '@tanstack/react-query'
import React, { ReactElement, useState } from 'react'

import EmptyImage from '@/assets/images/empty-box.png'
import Image from 'next/image'

const Explore: React.FC = (): ReactElement => {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const { data: booksData, isLoading } = useQuery(
    ['books', Infinity],
    async () => {
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
    },
  )

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
    <div className={'my-20 flex flex-col items-center px-5 md:my-28 md:px-10'}>
      <div className="flex w-full max-w-7xl flex-col items-center gap-5">
        <ExploreHeader search={search} setSearch={setSearch} />
        <div className="flex w-full gap-5">
          <aside className="hidden h-48 w-20 bg-blue-500 lg:flex">
            {/* To do - Filter */}
          </aside>
          <main className="flex flex-1 flex-col gap-5 ">
            {isLoading ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4">
                <div className="h-14 w-14 animate-spin rounded-full border-b-2 border-gray-900" />
                <span>Carregando... 🚀</span>
              </div>
            ) : filteredBooks?.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4">
                <Image src={EmptyImage} alt="Table Vazia" className="w-20" />
                <span>Ops! Nenhum dado encontrado. 😥</span>
              </div>
            ) : (
              <>
                <MainContentExplore books={filteredBooks} />

                <Pagination
                  currentPage={currentPage}
                  handlePageChange={setCurrentPage}
                  itemsPerPage={itemsPerPage}
                  totalItems={booksData?.length || 0}
                  setItemsPerPage={setItemsPerPage}
                />
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Explore
