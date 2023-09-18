import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-[100vw] overflow-x-hidden bg-backgroundLight">
        {children}
      </body>
    </html>
  )
}
