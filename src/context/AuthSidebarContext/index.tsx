'use client'

import { createContext, useContext, useState } from 'react'
import { ISidebarContextProvider, contextType } from './types'

const SidebarContext = createContext({} as contextType)

export const SidebarContextProvider: React.FC<ISidebarContextProvider> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((e) => !e)
  }

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)

  if (!context) {
    throw new Error('useSidebar must be used within an SidebarContextProvider')
  }

  return context
}
