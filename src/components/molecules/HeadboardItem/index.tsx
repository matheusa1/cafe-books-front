'use client'

import Badge from '@/components/atoms/Badge'
import { BookmarkSimple } from '@phosphor-icons/react'
import React, { ReactElement, useState } from 'react'
import { IHeadboardItem } from './types'
import Image from 'next/image'
import CurrencyText from '@/components/atoms/CurrencyText'
import { Button } from '@/components/atoms/Button'
import { useRouter } from 'next/navigation'

const HeadboardItem: React.FC<IHeadboardItem> = ({
  cardInfo,
}): ReactElement => {
  const onHandleAddToCart = () => {
    console.log('add to cart')
  }

  const router = useRouter()

  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)

  const { price, promotional_price, image, title, isbn } = cardInfo

  return (
    <div
      className={
        'flex h-full w-full flex-col gap-3 rounded-lg bg-pureWhite p-2'
      }
    >
      <header className="flex items-center justify-between">
        <div>
          {promotional_price && (
            <Badge>{`${(((price - promotional_price) / price) * 100).toFixed(
              0,
            )}% off`}</Badge>
          )}
        </div>
        <BookmarkSimple
          className={`h-8 w-8 ${isBookmarked && 'text-yellow-500'}`}
          onClick={() => setIsBookmarked(!isBookmarked)}
          weight={isBookmarked ? 'fill' : 'regular'}
        />
      </header>
      <main
        className="flex h-full w-full justify-center"
        onClick={() => router.push(`/book-info/${isbn}`)}
      >
        <Image
          src={image}
          alt="Book image"
          className="h-full w-2/3 object-cover"
          width={720}
          height={400}
        />
      </main>
      <footer className="flex w-full flex-col items-center justify-center ">
        <span
          className="w-full truncate text-center font-semibold"
          onClick={() => router.push(`/book-info/${isbn}`)}
        >
          {title}
        </span>
        <div className="w-full">
          <div className="mx-auto flex w-fit flex-col">
            <CurrencyText
              value={price}
              className={
                promotional_price
                  ? 'text-sm text-subText line-through'
                  : 'text-lg'
              }
            />

            {promotional_price && (
              <CurrencyText
                value={promotional_price}
                className="text-lg font-bold"
              />
            )}
          </div>
          <div className="flex w-full flex-col gap-2">
            <Button.RootLink href={`/book-info/${isbn}`}>
              <Button.Text>Comprar</Button.Text>
            </Button.RootLink>
            <Button.Root onClick={onHandleAddToCart}>
              <Button.Text className="text-sm">Adicionar à sacola</Button.Text>
            </Button.Root>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HeadboardItem
