'use client'

import { useAuth } from '@/context/AuthContext'
import { useSidebar } from '@/context/AuthSidebarContext'
import { List, LogOut, X } from 'lucide-react'

import { useRouter } from 'next/navigation'
import React, { ReactElement } from 'react'

const Header: React.FC = (): ReactElement => {
  const { toggleSidebar, isSidebarOpen } = useSidebar()
  const router = useRouter()
  const { user } = useAuth()

  const userName = user?.name

  const onHandleSignOut = () => {
    router.push('/')
  }

  return (
    <header className={'flex items-center justify-between pb-3'}>
      <div className="flex items-center gap-2 lg:gap-6">
        <div onClick={toggleSidebar}>{isSidebarOpen ? <X className="text-2xl lg:text-3xl" /> : <List className="text-2xl lg:text-3xl" />}</div>
        <h1 className="text-base font-normal sm:text-xl lg:text-2xl">{`Olá, ${userName} 👋`}</h1>
      </div>

      <LogOut className="cursor-pointer text-2xl lg:text-3xl" onClick={onHandleSignOut} />
    </header>
  )
}

export default Header
