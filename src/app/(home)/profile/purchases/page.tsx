'use client'
import { useSidebar } from '@/context/AuthSidebarContext'
import { FC } from 'react'

const Purchases: FC = () => {
  const { toggleSidebar } = useSidebar()

  return (
    <div className={''}>
      <button onClick={toggleSidebar}>toggle sidebar</button>
      <h1>purchases</h1>
    </div>
  )
}

export default Purchases
