'use client'

import Title from '@/components/atoms/Title'
import HeadboardItem from '@/components/molecules/HeadboardItem'
import React, { ReactElement } from 'react'

import { headboardItemsData } from '@/mock/headboardItemsData'
import useWindowSize from '@/utils/hooks/useWindowSize'

const HeadboardItems: React.FC = (): ReactElement => {
  const { width } = useWindowSize()

  return (
    <div className={'flex flex-col'}>
      <Title
        topText="VOCÊ TAMBÉM PODE GOSTAR"
        boldText="Seu próximo"
        text="livro de cabeceira"
      />
      <div className="w-full max-w-7xl  self-center">
        <div className="grid w-full grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
          {headboardItemsData.map((item, index) => {
            if (index <= 5 || width >= 768)
              return <HeadboardItem key={item.id} cardInfo={{ ...item }} />
          })}
        </div>
      </div>
    </div>
  )
}

export default HeadboardItems
