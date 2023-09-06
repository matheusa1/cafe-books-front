import React from 'react'

export type IAdminSidebarItem = {
  text: string
  icon: (active?: boolean) => React.ReactNode
  active?: boolean
  path: string
}
