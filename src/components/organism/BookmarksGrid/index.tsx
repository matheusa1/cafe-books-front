import HeadboardItem from '@/components/molecules/HeadboardItem'
import React, { ReactElement } from 'react'

const mockData = {
  isbn: '978-8560280940',
  title: 'It: A coisa',
  author: 'Stephen King',
  publisher: 'Suma',
  country: 'Inglês',
  language: 'Português',
  image:
    'https://res.cloudinary.com/dkwt60tnl/image/upload/v1695318592/PI/zpwatiyggorsdxxmjplp.jpg',
  description:
    'Nesse clássico que inspirou os filmes da Warner, um grupo de amigos conhecido como Clube dos Otários aprende o real sentido da amizade, do amor, da confiança... e do medo. O mais profundo e tenebroso medo.',
  year: 2014,
  pages: 1104,
  price: 112.9,
  promotional_price: 70.0,
  stock: 20,
  category: ['terror', 'Ficção Científica'],
}

const BookmarksGrid: React.FC = (): ReactElement => {
  return (
    <div
      className={
        'grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
      }
    >
      <HeadboardItem cardInfo={{ ...mockData }} />
      <HeadboardItem cardInfo={{ ...mockData }} />
      <HeadboardItem cardInfo={{ ...mockData }} />
      <HeadboardItem cardInfo={{ ...mockData }} />
      <HeadboardItem cardInfo={{ ...mockData }} />
      <HeadboardItem cardInfo={{ ...mockData }} />
    </div>
  )
}

export default BookmarksGrid
