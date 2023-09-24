import DetailsImageAndPriceWrapper from '@/components/organism/DetailsImageAndPriceWrapper'
import React from 'react'
import DetailsDescription from '@/components/organism/DetailsDescription'
import DetailsSpecs from '@/components/organism/DetailsSpecs'
import BackButton from '@/components/atoms/BackButton'
import { getBook } from '@/services/api'
import Image from 'next/image'

import notFound from '@/assets/images/empty-box.png'

const getBookInfo = async (isbn: string) => {
  try {
    const response = await getBook(isbn)
    return response
  } catch (error) {
    return undefined
  }
}

const BookInfo: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const book = await getBookInfo(params.id)

  if (book)
    return (
      <div
        className={'my-20 flex flex-col items-center px-5 md:my-28 md:px-10'}
      >
        <div className="flex w-full max-w-7xl flex-col items-center gap-5">
          <div className="flex items-center gap-4 self-start">
            <BackButton />
          </div>
          <DetailsImageAndPriceWrapper
            image={book.image}
            price={book.price}
            discountPrice={
              book.promotional_price !== null
                ? book.promotional_price
                : undefined
            }
            title={book.title}
          />
          <DetailsDescription description={book.description} />
          <DetailsSpecs
            author={book.author}
            editor={book.publisher}
            language={book.language}
            pages={book.pages}
            release={book.year}
            isbn={book.isbn}
          />
        </div>
      </div>
    )
  else {
    return (
      <div className="flex h-screen w-screen flex-col gap-4 px-5 pt-20 md:px-10 md:pt-28">
        <div className="flex items-center gap-4 self-start">
          <BackButton />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image
            alt="not found image"
            src={notFound}
            className="w-1/12 min-w-[150px]"
          />
          <h1 className="text-xl">Livro não encontrado...</h1>
        </div>
      </div>
    )
  }
}

export default BookInfo
