'use client'

import { useSidebar } from '@/context/AuthSidebarContext'
import React, { ReactElement } from 'react'

const AdminOverlay: React.FC = (): ReactElement => {
  const { isSidebarOpen, toggleSidebar } = useSidebar()

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/50 lg:hidden ${
        isSidebarOpen ? '' : 'hidden'
      }`}
      onClick={toggleSidebar}
    />
  )
}

export default AdminOverlay
