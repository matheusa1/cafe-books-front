import { useSidebar } from '@/context/AuthSidebarContext'
import React, { ReactElement } from 'react'
import { IAdminSidebarItem } from './types'
import { tv } from 'tailwind-variants'
import Link from 'next/link'
import useWindowSize from '@/utils/hooks/useWindowSize'

const containerStyles = tv({
  base: 'relative flex h-14 w-full shrink-0 cursor-pointer select-none flex-row items-center justify-start gap-5  px-7 text-pureWhite hover:bg-blue-900/50',
  variants: {
    active: {
      true: 'cursor-default bg-pureWhite text-blue-500 hover:bg-pureWhite',
    },
    sidebarState: {
      true: 'w-full rounded-full lg:rounded-l-full lg:rounded-r-none',
      false: 'h-14 w-14 items-center overflow-hidden rounded-full pl-4',
    },
  },
  defaultVariants: {
    active: false,
  },
})

const AdminSidebarItem: React.FC<IAdminSidebarItem> = ({
  icon,
  path,
  text,
  active,
}): ReactElement => {
  const { isSidebarOpen, toggleSidebar } = useSidebar()
  const { width } = useWindowSize()

  return (
    <Link
      href={path}
      onClick={() => {
        if (width >= 1024) {
          return
        }
        toggleSidebar()
      }}
      className={containerStyles({ active, sidebarState: isSidebarOpen })}
    >
      {active && (
        <>
          <div className="absolute -top-4 right-0 h-4 w-4 bg-pureWhite before:absolute before:right-0 before:top-0 before:h-4 before:w-4 before:rounded-br-full before:bg-dark before:content-['']" />
          <div className="absolute -bottom-4 right-0 h-4 w-4 bg-pureWhite before:absolute before:right-0 before:top-0 before:h-4 before:w-4 before:rounded-tr-full before:bg-dark before:content-['']" />
        </>
      )}
      <div className="shrink-0">{icon(active)}</div>
      <span className="text-sm font-bold">{text}</span>
    </Link>
  )
}

export default AdminSidebarItem
