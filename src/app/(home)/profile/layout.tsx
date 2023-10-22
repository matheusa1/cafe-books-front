import { ProfileSidebar } from '@/components/organism/ProfileSidebar'
import { SidebarContextProvider } from '@/context/AuthSidebarContext'
import { FC, ReactNode } from 'react'

const ProfileLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SidebarContextProvider>
      <div className={'flex min-h-screen py-24 md:py-28'}>
        <ProfileSidebar />
        <div className={'flex-1 px-5'}>{children}</div>
      </div>
    </SidebarContextProvider>
  )
}

export default ProfileLayout
