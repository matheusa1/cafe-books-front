'use client'

import { ProfileSidebarHeader } from '@/components/molecules/ProfileSidebarHeader'
import { ProfileSidebarItem } from '@/components/molecules/ProfileSidebarItem'
import { useAuth } from '@/context/AuthContext'
import { useSidebar } from '@/context/AuthSidebarContext'
import { LogOut, Package, User2, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

export const ProfileSidebar: FC = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar()
  const path = usePathname()
  const { push } = useRouter()
  const { signOut } = useAuth()

  return (
    <div
      className={twMerge(
        'fixed inset-0 md:max-w-md lg:translate-x-0 lg:py-0 lg:border-r-2 lg:border-brownPrimary lg:static lg:w-fit lg:bg-transparent py-40 px-10 flex flex-col gap-20 transition-all -translate-x-full bg-white',
        isSidebarOpen && 'translate-x-0',
      )}
    >
      <ProfileSidebarHeader />

      <div className="flex flex-col gap-5">
        <ProfileSidebarItem title="Dados Pessoais" icon={User2} isActive={path === '/profile/user-info'} onClick={() => push('/profile/user-info')} />
        <ProfileSidebarItem title="Pedidos" icon={Package} isActive={path === '/profile/purchases'} onClick={() => push('/profile/purchases')} />
        <ProfileSidebarItem
          title="Sair"
          logout
          icon={LogOut}
          isActive={false}
          onClick={() => {
            signOut()
            push('/')
          }}
        />
        <button onClick={toggleSidebar} className="self-center rounded-md p-2 hover:bg-white1/2 lg:hidden">
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
