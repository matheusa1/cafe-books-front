'use client'

import { createContext, useCallback, useContext, useState } from 'react'
import { ICartInfo, ICartInfoContextProvider, contextType } from './types'
import { useAuth } from '../AuthContext'
import { IAddress } from '@/types/address'

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

  return <CartInfoContext.Provider value={{ setAddress, cartInfo }}>{children}</CartInfoContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartInfoContext)

  if (!context) {
    throw new Error('useCart must be used within an CartInfoContextProvider')
  }

  return context
}
