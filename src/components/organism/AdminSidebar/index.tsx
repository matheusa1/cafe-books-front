'use client'

import { useSidebar } from '@/context/AuthSidebarContext'
import React, { ReactElement } from 'react'
import { Paths } from '@/utils/adminRoutes'
import AdminSidebarItem from '@/components/molecules/AdminSidebarItem'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Logo from '@/assets/svgs/Logo.svg'
import { X } from 'lucide-react'

const Sidebar: React.FC = (): ReactElement => {
  const { isSidebarOpen, toggleSidebar } = useSidebar()
  const pathName = usePathname()

  return (
    <div
      className={`fixed top-0 z-50 flex h-full flex-col items-start gap-4 bg-dark px-4 pt-10 lg:static lg:pl-4 lg:pr-0 ${
        isSidebarOpen ? 'left-0 w-full xs:w-60' : '-left-96 w-20'
      }  overflow-hidden transition-all duration-500`}
    >
      <Image src={Logo} alt="Logo image" className="w-12 self-center" />
      <p className={'ml-3 whitespace-nowrap text-xs font-bold text-subText'}>{isSidebarOpen ? 'MENU PRINCIPAL' : 'MENU'}</p>
      {Paths.map((path, index) => (
        <AdminSidebarItem key={index} icon={path.icon} path={path.path} text={path.name} active={path.path === pathName} />
      ))}
      <div className={`flex h-14 w-14 cursor-pointer items-center justify-center lg:hidden ${isSidebarOpen && 'self-center'}`} onClick={toggleSidebar}>
        <X className="text-pureWhite" size={24} />
      </div>
    </div>
  )
}

export default Sidebar
