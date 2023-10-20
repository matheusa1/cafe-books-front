'use client'

import InputHeaderSearch from '@/components/atoms/InputHeaderSearch'
import { HeaderItem } from '@/components/molecules/HeaderItem'
import useScrollPosition from '@/utils/hooks/useScrollPosition'
import useWindowSize from '@/utils/hooks/useWindowSize'
import Image from 'next/image'
import React, { ReactElement, useState } from 'react'
import { tv } from 'tailwind-variants'

import Logo from '@/assets/svgs/LogoTextCol.svg'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import {
  Bookmark,
  GaugeCircle,
  Grid2X2,
  LogIn,
  ShoppingBasket,
  User,
} from 'lucide-react'

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
  const scroll = useScrollPosition()
  const { height, width } = useWindowSize()
  const { user } = useAuth()

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
            setIsOpen={setIsInputOpen}
          />
        </div>
        <Link href="/" className="hidden w-20 md:flex">
          <Image src={Logo} alt="Logo" />
        </Link>
        <div className="flex justify-end gap-5 md:w-full">
          <div className="hidden gap-5 md:flex">
            {user && user.type === 'admin' && (
              <HeaderItem
                title={'Admin'}
                path="/admin/books"
                icon={GaugeCircle}
              />
            )}
            <HeaderItem
              title={'Favoritos'}
              path={'/bookmark'}
              icon={Bookmark}
            />
            <HeaderItem title={'Explorar'} path="/explore" icon={Grid2X2} />
            <HeaderItem
              title={user ? 'Perfil' : 'Entrar'}
              path={user ? '/profile' : '/auth/sign-in'}
              icon={user ? User : LogIn}
            />
          </div>
          <HeaderItem title="Carrinho" path={'/cart'} icon={ShoppingBasket} />
        </div>
      </div>
    </header>
  )
}

export default Header
