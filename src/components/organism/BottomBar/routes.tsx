import {
  Bookmarks,
  HouseSimple,
  SquaresFour,
  User,
} from '@phosphor-icons/react'

export const Routes = [
  {
    path: '/bookmarks',
    icon: () => <Bookmarks size={24} color={'white'} />,
  },
  {
    path: '/',
    icon: () => <HouseSimple size={24} color={'white'} />,
  },
  {
    path: '/explore',
    icon: () => <SquaresFour size={24} color={'white'} />,
  },
  {
    path: '/profile',
    icon: () => <User size={24} color={'white'} />,
  },
]
