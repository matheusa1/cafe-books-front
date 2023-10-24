'use client'

import { HeaderItem } from '@/components/molecules/HeaderItem'

import React, { ReactElement } from 'react'

import useWindowSize from '@/utils/hooks/useWindowSize'
import { Bookmark, GaugeCircle, Grid2X2, Home, LogIn, User } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

const BottomBar: React.FC = (): ReactElement => {
  const { width } = useWindowSize()
  const { user } = useAuth()

  return width && width < 768 ? (
    <div
      className={
        'fixed bottom-0 left-0 z-30 flex w-screen justify-between rounded-t-lg bg-brownCard px-8 py-5'
      }
    >
      <HeaderItem path={'/bookmark'} title="Favoritos" icon={Bookmark} />
      <HeaderItem path={'/'} title="Início" icon={Home} />
      <HeaderItem path={'/explore'} title="Explorar" icon={Grid2X2} />
      <HeaderItem
        path={user ? '/profile/purchases' : '/auth/sign-in'}
        title={user ? 'Perfil' : 'Entrar'}
        icon={user ? User : LogIn}
      />
      {user && (
        <HeaderItem path={'/admin/books'} title="admin" icon={GaugeCircle} />
      )}
    </div>
  ) : (
    <div />
  )
}

export default BottomBar
