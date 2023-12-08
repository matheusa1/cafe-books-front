import Title from '@/components/atoms/Title'
import HeadboardItem from '@/components/molecules/HeadboardItem'
import React from 'react'

import ViewMoreButton from '@/components/atoms/ViewMoreButton'
import { apiGetMostSelleds } from '@/services/api'

const getBooksData = async () => {
  try {
    const response = await apiGetMostSelleds()

    return response
  } catch (error) {
    return undefined
  }
}

export const revalidate = 60 * 60 * 24

const HeadboardItems: React.FC = async () => {
  const books = await getBooksData()

  return (
    <div className={'mt-10 flex flex-col gap-10'}>
      <Title topText="VOCÊ TAMBÉM PODE GOSTAR" boldText="Seu próximo" text="livro de cabeceira" />
      <div className="flex w-full  max-w-7xl flex-col self-center">
        <div className="grid w-full grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
          {books?.map((item, index) => {
            if (index <= 10) return <HeadboardItem key={index} cardInfo={item} />
          })}
        </div>
        <div className="mb-4 self-end">
          <ViewMoreButton />
        </div>
      </div>
    </div>
  )
}

export default HeadboardItems
