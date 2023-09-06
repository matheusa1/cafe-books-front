export type ISidebarContextProvider = {
  children: React.ReactNode
}

export type contextType = {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}
