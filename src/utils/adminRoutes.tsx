import { BookCopy, Flame } from 'lucide-react'

const iconSize = 24

export const Paths = [
  {
    path: '/admin/books',
    name: 'Livros',
    icon: (active?: boolean) => <BookCopy size={iconSize} className={active ? 'text-blue-500' : 'text-white'} />,
  },
  {
    path: '/admin/hot',
    name: 'Destaques',
    icon: (active?: boolean) => <Flame size={iconSize} className={active ? 'text-blue-500' : 'text-white'} />,
  },
]
