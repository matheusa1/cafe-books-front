import { FC } from 'react'
import { IProfileSidebarItem } from './types'

export const ProfileSidebarItem: FC<IProfileSidebarItem> = ({ icon: Icon, logout, title, isActive, onClick }) => {
  return (
    <div
      data-active={isActive}
      data-logout={logout}
      onClick={onClick}
      className={
        'flex cursor-pointer select-none items-center justify-center gap-2 rounded-md py-4 text-dark transition-all hover:bg-white1/2 data-[active=true]:cursor-default data-[active=true]:text-brownPrimary data-[logout=true]:text-danger data-[active=true]:hover:bg-white data-[logout=true]:hover:bg-danger/50 data-[logout=true]:hover:text-pureWhite'
      }
    >
      <Icon className="h-6 w-6" strokeWidth={3} />
      <h1>{title}</h1>
    </div>
  )
}
