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
import ExploreFilter from '@/components/organism/ExploreFilter'
import { ExploreFilterProps } from '@/components/organism/ExploreFilter/types'

const Explore: React.FC = (): ReactElement => {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const [filter, setFilter] = useState<ExploreFilterProps>({
    categories: [],
    authors: [],
    price: {
      min: undefined,
      max: undefined,
    },
  })

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
          author: book.author.map((author) => {
            return {
              label: toTitleCase(author),
              value: author,
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

    if (filter.categories.length > 0) {
      tempData = book.category.some((category) =>
        filter.categories.some(
          (filterCategory) => filterCategory.value === category.value,
        ),
      )
    }

    if (filter.authors.length > 0) {
      tempData = book.author.some((author) =>
        filter.categories.some(
          (filterAuthor) => filterAuthor.value === author.value,
        ),
      )
    }

    if (filter.price.min !== undefined || filter.price.max !== undefined) {
      if (filter.price.min === undefined && filter.price.max !== undefined) {
        if (book?.promotional_price) {
          tempData = book?.promotional_price <= filter.price.max
        } else {
          tempData = book?.price <= filter.price.max
        }
      }

      if (filter.price.max === undefined && filter.price.min !== undefined) {
        if (book?.promotional_price) {
          tempData = book?.promotional_price >= filter.price.min
        } else {
          tempData = book.price >= filter.price.min
        }
      }

      if (filter.price.min !== undefined && filter.price.max !== undefined) {
        if (book?.promotional_price) {
          tempData =
            book?.promotional_price >= filter.price.min &&
            book?.promotional_price <= filter.price.max
        } else {
          tempData =
            book.price >= filter.price.min && book.price <= filter.price.max
        }
      }
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
          <aside className="hidden w-64 p-2 lg:flex">
            <ExploreFilter filter={filter} setFilter={setFilter} />
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
