'use client'

import Badge from '@/components/atoms/Badge'
import { BookmarkSimple } from '@phosphor-icons/react'
import React, { ReactElement, useState } from 'react'
import { IHeadboardItem } from './types'
import Image from 'next/image'
import CurrencyText from '@/components/atoms/CurrencyText'
import { Button } from '@/components/atoms/Button'
import { useRouter } from 'next/navigation'
import { addBookToFavorites, apiHandleCart, removeBookToFavorites } from '@/services/api'
import { useAuth } from '@/context/AuthContext'
import { toast } from 'react-toastify'

const HeadboardItem: React.FC<IHeadboardItem> = ({ cardInfo }): ReactElement => {
  const { user, token, refetchCart } = useAuth()

  const router = useRouter()
  const { price, promotional_price, image, title, isbn } = cardInfo

  const [isBookmarked, setIsBookmarked] = useState<boolean>(user?.favorites?.includes(cardInfo.isbn) || false)
  const [isOnCart, setIsOnCart] = useState<boolean>(!!user?.cart?.books?.find((book) => book.book_isbn === isbn) || false)

  const onHandleCart = async () => {
    if (!user) return

    try {
      if (isOnCart) {
        await apiHandleCart({ add: false, book: isbn, token: token! })
        refetchCart()
        setIsOnCart(false)
        toast.success('Livro removido do carrinho')
      } else {
        await apiHandleCart({ add: true, book: isbn, token: token! })
        refetchCart()
        setIsOnCart(true)
        toast.success('Livro adicionado ao carrinho')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleFavorite = async (ISBN: string) => {
    if (!user) return

    try {
      if (isBookmarked) {
        await removeBookToFavorites(ISBN, token!)
        setIsBookmarked(false)
        return
      }

      await addBookToFavorites(ISBN, token!)
      setIsBookmarked(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={'flex h-full w-full flex-col gap-3 rounded-lg bg-pureWhite p-2'}>
      <header className="flex items-center justify-between">
        <div>{promotional_price && <Badge>{`${(((price - promotional_price) / price) * 100).toFixed(0)}% off`}</Badge>}</div>
        <BookmarkSimple
          className={`h-8 w-8 ${isBookmarked && 'text-yellow-500'}`}
          onClick={() => onHandleFavorite(isbn)}
          weight={isBookmarked ? 'fill' : 'regular'}
        />
      </header>
      <main className="flex h-full w-full cursor-pointer justify-center" onClick={() => router.push(`/book-info/${isbn}`)}>
        <Image src={image} alt="Book image" className="h-full w-2/3 object-cover" width={720} height={400} />
      </main>
      <footer className="flex w-full flex-col items-center justify-center ">
        <span className="w-full cursor-pointer truncate text-center font-semibold" onClick={() => router.push(`/book-info/${isbn}`)}>
          {title}
        </span>
        <div className="w-full">
          <div className="mx-auto flex w-fit flex-col">
            <CurrencyText value={price} className={promotional_price ? 'text-sm text-subText line-through' : 'text-lg'} />

            {promotional_price && <CurrencyText value={promotional_price} className="text-lg font-bold" />}
          </div>
          <div className="flex w-full flex-col gap-2">
            <Button.RootLink href={`/book-info/${isbn}`}>
              <Button.Text>Comprar</Button.Text>
            </Button.RootLink>
            <Button.Root onClick={onHandleCart}>
              <Button.Text className="text-sm">{isOnCart ? 'Remover do carrinho' : 'Adicionar ao carrinho'}</Button.Text>
            </Button.Root>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HeadboardItem
