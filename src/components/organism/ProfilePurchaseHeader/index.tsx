'use client'

import { useSidebar } from '@/context/AuthSidebarContext'
import { Menu } from 'lucide-react'
import { FC } from 'react'

export const ProfilePurchaseHeader: FC = () => {
  const { toggleSidebar } = useSidebar()

  return (
    <header className={'flex items-center justify-between'}>
      <button onClick={toggleSidebar} className="rounded-md p-2 hover:bg-white1/2 lg:hidden">
        <Menu className="h-6 w-6" />
      </button>
      <h1 className="text-xl font-bold">Pedidos</h1>
      <div className="h-8 w-8" />
    </header>
  )
}
