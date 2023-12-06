'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { ICartInfo, ICartInfoContextProvider, contextType } from './types'
import { useAuth } from '../AuthContext'
import { IAddress } from '@/types/address'
import { ICartBook } from '@/types/cart'

const CartInfoContext = createContext({} as contextType)

export const CartInfoContextProvider: React.FC<ICartInfoContextProvider> = ({ children }) => {
  const { user } = useAuth()

  const [cartInfo, setCartInfo] = useState<ICartInfo>({
    address: user?.address
      ? {
          street: user?.address.split('|')[0],
          number: user?.address.split('|')[1],
          complement: user?.address.split('|')[2],
          cep: user?.address.split('|')[3],
          neighborhood: user?.address.split('|')[4],
          city: user?.address.split('|')[5],
          state: user?.address.split('|')[6],
        }
      : undefined,
    cart: user?.cart || {
      user: 1,
      status: 'offline',
      id: 1,
      date: new Date().toString(),
      address: null,
      total: 0,
      books: [],
    },
  })

  const setAddress = useCallback(
    (address: IAddress) => {
      setCartInfo({
        ...cartInfo,
        address: address,
      })
    },
    [cartInfo],
  )

  const onHandleAddBookToCart = useCallback(
    (book: ICartBook) => {
      setCartInfo({
        ...cartInfo,
        cart: {
          user: 1,
          status: 'offline',
          id: 1,
          date: new Date().toString(),
          address: null,
          books: cartInfo?.cart?.books ? [...cartInfo.cart.books, book] : [book],
          total: cartInfo?.cart?.total ? cartInfo.cart.total + book.price : book.price,
        },
      })
    },
    [cartInfo],
  )

  const onHandleRemoveBookToCart = useCallback(
    (isbn: string) => {
      const book = cartInfo?.cart?.books?.find((book) => book.book_isbn === isbn)

      if (!book) return console.log('book not found')

      setCartInfo({
        ...cartInfo,
        cart: {
          ...cartInfo.cart,
          user: 1,
          status: 'offline',
          id: 1,
          date: new Date().toString(),
          address: null,
          books: cartInfo?.cart?.books.filter((book) => book.book_isbn !== isbn) || [],
          total: cartInfo?.cart?.total ? cartInfo.cart.total - book?.price : book?.price,
        },
      })
    },
    [cartInfo],
  )

  const onHandleUpdateBookToCart = useCallback(
    (quantity: number, isbn: string) => {
      const book = cartInfo?.cart?.books?.find((book) => book.book_isbn === isbn)
      const newTotal = (book?.price || 0) * quantity

      if (!book) return console.log('book not found')

      setCartInfo({
        ...cartInfo,
        cart: {
          ...cartInfo.cart,
          user: 1,
          status: 'offline',
          id: 1,
          date: new Date().toString(),
          address: null,
          books: cartInfo?.cart?.books.map((book) => (book.book_isbn === isbn ? { ...book, quantity } : book)) || [],
          total: cartInfo?.cart?.total ? cartInfo.cart.total - book?.price + newTotal : newTotal,
        },
      })
    },
    [cartInfo],
  )

  useEffect(() => {
    setCartInfo({
      address: user?.address
        ? {
            street: user?.address.split('|')[0],
            number: user?.address.split('|')[1],
            complement: user?.address.split('|')[2],
            cep: user?.address.split('|')[3],
            neighborhood: user?.address.split('|')[4],
            city: user?.address.split('|')[5],
            state: user?.address.split('|')[6],
          }
        : undefined,
      cart: user?.cart || undefined,
    })
  }, [user?.cart, user?.address])

  return (
    <CartInfoContext.Provider value={{ setAddress, cartInfo, onHandleAddBookToCart, onHandleRemoveBookToCart, onHandleUpdateBookToCart }}>
      {children}
    </CartInfoContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartInfoContext)

  if (!context) {
    throw new Error('useCart must be used within an CartInfoContextProvider')
  }

  return context
}
