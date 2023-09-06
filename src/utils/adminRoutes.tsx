import { Books, Fire } from '@phosphor-icons/react'

const iconSize = 24

export const Paths = [
  {
    path: '/admin/books',
    name: 'Livros',
    icon: (active?: boolean) => (
      <Books
        size={iconSize}
        className={active ? 'text-blue-500' : 'text-white'}
      />
    ),
  },
  {
    path: '/admin/hot',
    name: 'Destaques',
    icon: (active?: boolean) => (
      <Fire
        size={iconSize}
        className={active ? 'text-blue-500' : 'text-white'}
      />
    ),
  },
]
