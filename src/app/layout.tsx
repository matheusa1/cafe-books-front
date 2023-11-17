import { AuthContextProvider } from '@/context/AuthContext'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { CartInfoContextProvider } from '@/context/CartInfoContext'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      <CartInfoContextProvider>{children}</CartInfoContextProvider>
    </AuthContextProvider>
  )
}
