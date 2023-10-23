import { UserCircle2 } from 'lucide-react'
import { FC } from 'react'

export const ProfileSidebarHeader: FC = () => {
  return (
    <div className={'flex items-center justify-center gap-4'}>
      <UserCircle2 className="h-20 w-20" />
      <span className="text-2xl">Olá, Matheus</span>
    </div>
  )
}
