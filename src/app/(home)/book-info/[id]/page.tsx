'use client'

import Button from '@/components/atoms/Button'
import DetailsImageAndPriceWrapper from '@/components/organism/DetailsImageAndPriceWrapper'
import { CaretLeft } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import React, { ReactElement } from 'react'
import { DetailsData } from '@/mock/DetailsData'
import DetailsDescription from '@/components/organism/DetailsDescription'
import DetailsSpecs from '@/components/organism/DetailsSpecs'

const BookInfo: React.FC = (): ReactElement => {
  const router = useRouter()

  return (
    <div className={'my-20 flex flex-col items-center px-5 md:my-28 md:px-10'}>
      <div className="flex w-full max-w-7xl flex-col items-center gap-5">
        <div className="flex items-center gap-4 self-start">
          <Button id="backButton" content="icon" onClick={() => router.back()}>
            <CaretLeft size={24} color="white" />
          </Button>
          <label htmlFor="backButton" className="text-2xl">
            Voltar
          </label>
        </div>
        <DetailsImageAndPriceWrapper
          image={DetailsData.image}
          originalPrice={DetailsData.originalPrice}
          price={DetailsData.price}
          title={DetailsData.title}
        />
        <DetailsDescription description={DetailsData.description} />
        <DetailsSpecs
          author={DetailsData.author}
          editor={DetailsData.editor}
          language={DetailsData.language}
          pages={DetailsData.pages}
          release={DetailsData.releaseDate}
        />
      </div>
    </div>
  )
}

export default BookInfo
