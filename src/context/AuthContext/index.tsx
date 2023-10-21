'use client'

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import Cookie from 'js-cookie'
import { getUser, signIn } from '@/services/api'
import jwt from 'jwt-decode'
import { IJWTDecode, IUserType } from '@/types/user'
import { contextType } from './types'

const AuthContext = createContext({} as contextType)

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<IUserType>()

  const handleSignIn = useCallback(async (email: string, password: string) => {
    try {
      const res = await signIn(email, password)

      Cookie.set('token', res.access, {
        expires: 1,
      })

      const decoded: IJWTDecode = await jwt(res.access)

      const userInfo = await getUser(decoded.user_id)

      setUser({
        id: decoded.user_id,
        address: userInfo.address,
        name: userInfo.name,
        phone: userInfo.phone,
        sex: userInfo.sex,
        type: userInfo.type,
        favorites: userInfo.favorites,
      })

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }, [])

  const signOut = useCallback(() => {
    setUser(undefined)
    Cookie.remove('token')
  }, [])

  const getToken = useCallback(() => {
    const token = Cookie.get('token')
    return token
  }, [])

  useEffect(() => {
    Cookie.remove('token')
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, signIn: handleSignIn, signOut, token: getToken() }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider')
  }

  return context
}
