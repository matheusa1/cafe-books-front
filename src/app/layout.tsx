'use client'

import { AuthContextProvider } from '@/context/AuthContext'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { CartInfoContextProvider } from '@/context/CartInfoContext'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <CartInfoContextProvider>{children}</CartInfoContextProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  )
}
