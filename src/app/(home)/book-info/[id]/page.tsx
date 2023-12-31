import DetailsImageAndPriceWrapper from '@/components/organism/DetailsImageAndPriceWrapper'
import React from 'react'
import DetailsDescription from '@/components/organism/DetailsDescription'
import DetailsSpecs from '@/components/organism/DetailsSpecs'
import BackButton from '@/components/atoms/BackButton'
import { getBook } from '@/services/api'
import Image from 'next/image'

import notFound from '@/assets/images/empty-box.png'
import { ToastContainer } from 'react-toastify'

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

  return (
    <div className={'my-20 flex flex-col items-center px-5 md:my-28 md:px-10'}>
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
      <div className="flex min-h-screen w-full max-w-7xl flex-col items-center gap-5">
        <div className="flex items-center gap-4 self-start">
          <BackButton />
        </div>
        {book ? (
          <>
            <DetailsImageAndPriceWrapper book={book} />
            <DetailsDescription description={book.description} />
            <DetailsSpecs author={book.author} editor={book.publisher} language={book.language} pages={book.pages} release={book.year} isbn={book.isbn} />
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <Image alt="not found image" src={notFound} className="w-1/12 min-w-[150px]" />
            <h1 className="text-xl">Livro não encontrado...</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookInfo
