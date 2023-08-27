'use client'

import HeaderItem from '@/components/molecules/HeaderItem'

import React, { ReactElement } from 'react'

import { Routes } from './routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useWindowSize from '@/utils/hooks/useWindowSize'

const BottomBar: React.FC = (): ReactElement => {
  const pathname = usePathname()
  const { width } = useWindowSize()

  return width && width < 768 ? (
    <div
      className={
        'fixed bottom-0 left-0 flex w-screen justify-between rounded-t-lg bg-brownCard px-8 py-5'
      }
    >
      {Routes.map((route, index) => (
        <Link href={route.path} key={index}>
          <HeaderItem
            title=""
            icon={route.icon()}
            active={pathname === route.path}
          />
        </Link>
      ))}
    </div>
  ) : (
    <div />
  )
}

export default BottomBar
