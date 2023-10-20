'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode, useState } from 'react'

const BookmarkLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default BookmarkLayout
