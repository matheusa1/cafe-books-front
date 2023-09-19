'use client'

import Title from '@/components/atoms/Title'
import HeadboardItem from '@/components/molecules/HeadboardItem'
import React, { ReactElement } from 'react'

import { headboardItemsData } from '@/mock/headboardItemsData'
import useWindowSize from '@/utils/hooks/useWindowSize'
import Button from '@/components/atoms/Button'
import { ArrowCircleRight } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

const HeadboardItems: React.FC = (): ReactElement => {
  const { width } = useWindowSize()
  const router = useRouter()

  return (
    <div className={'mt-10 flex flex-col gap-10'}>
      <Title
        topText="VOCÊ TAMBÉM PODE GOSTAR"
        boldText="Seu próximo"
        text="livro de cabeceira"
      />
      <div className="flex w-full  max-w-7xl flex-col self-center">
        <div className="grid w-full grid-cols-2 gap-2 p-2 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
          {headboardItemsData.map((item, index) => {
            if (index <= 5 || width >= 768)
              return <HeadboardItem key={item.id} cardInfo={{ ...item }} />
          })}
        </div>
        <div className="self-end">
          <Button
            styleType="filledWhite"
            onClick={() => router.push('/explore')}
          >
            <div className="flex items-center gap-2 text-dark">
              Ver mais <ArrowCircleRight size={32} />
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeadboardItems
