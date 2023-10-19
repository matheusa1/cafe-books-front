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
import { signIn } from '@/services/api'
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

      setUser({ id: decoded.user_id })

      return true
    } catch (error) {
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
    const token = Cookie.get('token')

    if (token) {
      const decoded: IJWTDecode = jwt(token)

      setUser({ id: decoded.user_id })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, signIn: handleSignIn, signOut, getToken }}
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
