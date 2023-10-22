'use client'

import { useAuth } from '@/context/AuthContext'
import Image from 'next/image'
import { FC } from 'react'
import EmptyImage from '@/assets/images/empty-box.png'
import { CartItemContent } from '@/components/atoms/CartItemContent'

export const CartItemsTable: FC = () => {
  const { user } = useAuth()

  return (
    <div className={'w-full'}>
      {user?.cart?.books.length === 0 || !user?.cart?.books.length ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <Image src={EmptyImage} alt="Table Vazia" className="w-20" />
          <span>Carrinho vazio</span>
        </div>
      ) : (
        <>
          <header className="hidden grid-cols-5 place-items-center rounded-md bg-gray-200 p-2 lg:grid">
            <div className="col-span-2 place-self-start ">
              <span>Produto</span>
            </div>
            <div>
              <span>Preço</span>
            </div>
            <div>
              <span>Quantidade</span>
            </div>
            <div>
              <span>Total</span>
            </div>
          </header>

          <div className="relative">
            <div
              data-itenslen={user?.cart?.books.length || 0}
              className="absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-pureWhite data-[itenslen='1']:hidden data-[itenslen='2']:hidden"
            />
            <div className="h-fit max-h-96 overflow-auto lg:max-h-[50vh]">
              {user?.cart?.books.map((book) => <CartItemContent isbn={book.book_isbn} price={book.price} quantity={book.quantity} key={book.book_isbn} />)}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
