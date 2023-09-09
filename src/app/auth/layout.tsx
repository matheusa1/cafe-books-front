import Image from 'next/image'
import AuthImage from '@/assets/images/AuthImage.jpeg'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen w-screen items-center justify-center bg-backgroundLight">
          <div className="flex h-screen w-full max-w-7xl items-center justify-center lg:justify-evenly">
            <Image
              src={AuthImage}
              alt="auth image"
              className="absolute left-0 top-0 z-0 h-screen w-screen scale-125 object-cover brightness-50 lg:static lg:max-h-[70vh] lg:w-1/2 lg:max-w-lg lg:rounded-3xl"
            />
            <main className="z-10 p-10">{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}
