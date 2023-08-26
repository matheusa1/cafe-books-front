'use client'

import HeaderItem from '@/components/molecules/HeaderItem'
import useScrollPosition from '@/utils/hooks/useScrollPosition'
import { ShoppingCart, User } from '@phosphor-icons/react'
import React, { ReactElement, useEffect, useState } from 'react'

const Header: React.FC = (): ReactElement => {
  const isUserSignedIn = false
  const scroll = useScrollPosition()

  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  }, [])

  return (
    <header
      className={`fixed left-0 top-0 w-screen transition-all ${
        scroll > windowHeight ? 'p-0' : 'p-2 md:px-10 md:py-5'
      }`}
    >
      <div
        className={`flex w-full justify-between bg-brownCard p-2 transition-all ${
          scroll > windowHeight ? 'rounded-none' : 'rounded-2xl'
        }`}
      >
        <h1 className="hidden md:flex">Logo Topera</h1>
        <div className="flex gap-5">
          <div className="hidden md:flex">
            <HeaderItem
              title={isUserSignedIn ? 'Perfil' : 'Entrar'}
              icon={
                isUserSignedIn ? (
                  <ShoppingCart size={24} color="white" />
                ) : (
                  <User size={24} color="white" />
                )
              }
            />
          </div>
          <HeaderItem
            title="Carrinho"
            icon={<ShoppingCart size={24} color="white" />}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
