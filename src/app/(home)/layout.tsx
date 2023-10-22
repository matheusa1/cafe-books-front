import BottomBar from '@/components/organism/BottomBar'
import Footer from '@/components/organism/Footer'
import Header from '@/components/organism/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cafe Books',
  description: 'Compre o seu livro físico favorito, com o melhor preço e qualidade.',
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body className="w-screen max-w-[100vw] overflow-x-hidden bg-backgroundLight">
        <Header />
        <main className="w-screen">{children}</main>
        <BottomBar />
        <Footer />
      </body>
    </html>
  )
}
