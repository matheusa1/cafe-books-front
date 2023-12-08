'use client'

import { useAuth } from '@/context/AuthContext'
import { UserCircle2 } from 'lucide-react'
import { FC } from 'react'

export const ProfileSidebarHeader: FC = () => {
  const { user } = useAuth()

  return (
    <div className={'flex items-center justify-center gap-4'}>
      <UserCircle2 className="h-20 w-20" />
      <span className="text-2xl">Olá, {user?.name}</span>
    </div>
  )
}
