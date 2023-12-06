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
    cart: user?.cart || undefined,
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

  const onHandleAddBookToCart = useCallback((book: ICartBook) => {
    const payload = {
      books: book,
    }

    console.log(payload)
  }, [])

  useEffect(() => {
    console.log('reload')
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

  return <CartInfoContext.Provider value={{ setAddress, cartInfo, onHandleAddBookToCart }}>{children}</CartInfoContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartInfoContext)

  if (!context) {
    throw new Error('useCart must be used within an CartInfoContextProvider')
  }

  return context
}
