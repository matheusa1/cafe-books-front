'use client'

import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react'
import Cookie from 'js-cookie'
import { getUser, getUserCart, signIn } from '@/services/api'
import jwt from 'jwt-decode'
import { IJWTDecode, IUserType } from '@/types/user'
import { contextType } from './types'

const AuthContext = createContext({} as contextType)

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUserType>()

  const getUserInfo = useCallback(async (token: string) => {
    const decoded: IJWTDecode = await jwt(token)

    let userInfo

    try {
      userInfo = await getUser(decoded.user_id)
    } catch (error) {
      return Cookie.remove('token')
    }

    let cartInfo

    try {
      cartInfo = await getUserCart(token)
    } catch (error) {
      cartInfo = undefined
    }

    setUser({
      id: decoded.user_id,
      address: userInfo.address,
      name: userInfo.name,
      phone: userInfo.phone,
      sex: userInfo.sex,
      type: userInfo.type,
      favorites: userInfo.favorites,
      cart: cartInfo,
    })
  }, [])

  const handleSignIn = useCallback(
    async (email: string, password: string) => {
      try {
        const res = await signIn(email, password)

        Cookie.set('token', res.access, {
          expires: 1,
        })

        getUserInfo(res.access)

        return true
      } catch (error) {
        return false
      }
    },
    [getUserInfo],
  )

  const signOut = useCallback(() => {
    setUser(undefined)
    Cookie.remove('token')
  }, [])

  const getToken = useCallback(() => {
    const token = Cookie.get('token')
    return token
  }, [])

  const refetchCart = useCallback(async () => {
    const token = Cookie.get('token')
    if (token) {
      getUserInfo(token)
    }
  }, [getUserInfo])

  useEffect(() => {
    const token = Cookie.get('token')

    if (token) {
      getUserInfo(token)
    }
  }, [getUserInfo])

  return <AuthContext.Provider value={{ user, signIn: handleSignIn, signOut, token: getToken(), refetchCart }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider')
  }

  return context
}
