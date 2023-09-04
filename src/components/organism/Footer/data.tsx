import { Book, BookOpen } from '@phosphor-icons/react'

export const FooterData = [
  {
    title: 'Livros',
    icon: <Book size={24} color="white" />,
    links: [
      {
        title: 'Ficção Científica',
        data: '/explore?category=ficao-cientifica',
      },
      {
        title: 'Romance',
        data: '/explore?category=romance',
      },
      {
        title: 'Terror e Suspense',
        data: '/explore?category=terror-e-suspense',
      },
      {
        title: 'Autoajuda e crescimento',
        data: '/explore?category=autoajuda-e-crescimento',
      },
      {
        title: 'Infantojuvenil',
        data: '/explore?category=infantojuvenil',
      },
      {
        title: 'Literatura Brasileira',
        data: '/explore?category=literatura-brasileira',
      },
      {
        title: 'Boxes',
        data: '/explore?category=boxes',
      },
      {
        title: 'Contos',
        data: '/explore?category=contos',
      },
      {
        title: 'Independentes',
        data: '/explore?category=independentes',
      },
    ],
  },
  {
    title: 'Políticas e termos',
    icon: <BookOpen size={24} color="white" />,
    links: [
      // 'Politicas de venda',
      // 'Politicas de privacidade',
      // 'Políticas de troca',
      // 'Termos de condições de compra',
      {
        title: 'Politicas de venda',
        data: 'politicas-de-venda',
      },
      {
        title: 'Politicas de privacidade',
        data: 'politicas-de-privacidade',
      },
      {
        title: 'Políticas de troca',
        data: 'politicas-de-troca',
      },
      {
        title: 'Termos de condições de compra',
        data: 'termos-de-condicoes-de-compra',
      },
    ],
  },
]
