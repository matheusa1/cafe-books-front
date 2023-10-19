import { AuthContextProvider } from '@/context/AuthContext'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthContextProvider>{children}</AuthContextProvider>
}
