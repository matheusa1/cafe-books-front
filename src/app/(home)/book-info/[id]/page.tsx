import DetailsImageAndPriceWrapper from '@/components/organism/DetailsImageAndPriceWrapper'
import React from 'react'
import DetailsDescription from '@/components/organism/DetailsDescription'
import DetailsSpecs from '@/components/organism/DetailsSpecs'
import BackButton from '@/components/atoms/BackButton'
import { getBook } from '@/services/api'

const getBookInfo = async (isbn: string) => {
  const response = await getBook(isbn)

  return response
}

const BookInfo: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const book = await getBookInfo(params.id)

  console.log(book)

  return (
    <div className={'my-20 flex flex-col items-center px-5 md:my-28 md:px-10'}>
      <div className="flex w-full max-w-7xl flex-col items-center gap-5">
        <div className="flex items-center gap-4 self-start">
          <BackButton id="backButton" />
          <label htmlFor="backButton" className="text-2xl">
            Voltar
          </label>
        </div>
        <DetailsImageAndPriceWrapper
          image={book.image}
          price={book.price}
          discountPrice={
            book.promotional_price !== null ? book.promotional_price : undefined
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
}

export default BookInfo
