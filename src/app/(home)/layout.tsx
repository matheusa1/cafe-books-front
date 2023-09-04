import BottomBar from '@/components/organism/BottomBar'
import Footer from '@/components/organism/Footer'
import Header from '@/components/organism/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cafe Books',
  description:
    'Compre o seu livro físico favorito, com o melhor preço e qualidade.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <BottomBar />
        <Footer />
      </body>
    </html>
  )
}
