'use client'

import InputHeaderSearch from '@/components/atoms/InputHeaderSearch'
import HeaderItem from '@/components/molecules/HeaderItem'
import useScrollPosition from '@/utils/hooks/useScrollPosition'
import useWindowSize from '@/utils/hooks/useWindowSize'
import { ShoppingCart, User } from '@phosphor-icons/react'
import React, { ReactElement, useState } from 'react'
import { tv } from 'tailwind-variants'

const headerWrapper = tv({
  base: 'fixed left-0 top-0 z-30 w-screen transition-all',
  variants: {
    top: {
      true: 'p-0',
      false: 'p-2 md:px-10 md:py-5',
    },
  },
  defaultVariants: {
    top: false,
  },
})

const headerContainer = tv({
  base: 'flex w-full items-center gap-3 bg-brownCard p-2 transition-all md:px-4',
  variants: {
    top: {
      true: 'rounded-none',
      false: 'rounded-2xl',
    },
  },
  defaultVariants: {
    top: false,
  },
})

const Header: React.FC = (): ReactElement => {
  const isUserSignedIn = false
  const scroll = useScrollPosition()
  const { height, width } = useWindowSize()

  const [isInputOpen, setIsInputOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const onHandleSearch = () => {
    if (!isInputOpen && width >= 768) {
      setIsInputOpen(true)
      return
    }

    console.log(inputValue)
  }

  return (
    <header className={headerWrapper({ top: scroll > height })}>
      <div className={headerContainer({ top: scroll > height })}>
        <div className="w-full">
          <InputHeaderSearch
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            open={isInputOpen}
            onHandleSearch={onHandleSearch}
            placeholder="Digite um livro"
          />
        </div>
        <h1 className="hidden whitespace-nowrap text-white lg:flex">
          Logo Topera
        </h1>
        <div className="flex justify-end gap-5 md:w-full">
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
