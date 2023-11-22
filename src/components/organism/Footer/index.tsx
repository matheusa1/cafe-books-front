'use client'

import Image from 'next/image'
import React, { ReactElement } from 'react'

import Logo from '@/assets/svgs/LogoTextCol.svg'
import FooterItem from '@/components/molecules/FooterItem'
import { useRouter } from 'next/navigation'
import FooterModal from '@/components/molecules/FooterModal'
import { Book, BookOpen } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getCategories } from '@/services/api'

const Footer: React.FC = (): ReactElement => {
  const { data } = useQuery(['categories'], async () => {
    try {
      const res = await getCategories()
      return res?.map((item) => ({ name: item.name }))
    } catch (error) {
      return []
    }
  })

  const termos = [
    {
      name: 'Politicas de vendas',
    },
    { name: 'Políticas de trocas' },
    { name: 'Políticas de privacidade' },
    { name: 'Políticas de condições de compra' },
  ]

  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [title, setTitle] = React.useState<string>('')
  const [content, setContent] = React.useState<string>('')

  return (
    <footer className={'flex w-screen flex-col items-center gap-8 bg-dark px-5 pb-24 pt-10'}>
      <Image src={Logo} alt={'Logo'} className="w-12" />
      <div className="flex flex-col gap-8 md:flex-row md:gap-14">
        <FooterItem
          icon={Book}
          title={'Categorias'}
          items={data || []}
          onHandleClick={(name) => {
            router.push(`/explore?category=${name}`)
          }}
        />
        <FooterItem
          icon={BookOpen}
          title={'Termos de uso'}
          items={termos || []}
          onHandleClick={(name) => {
            setTitle(name)
            setContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam, sed. ')
            setIsOpen(true)
          }}
        />
      </div>
      <FooterModal isOpen={isOpen} setIsOpen={setIsOpen} title={title} content={content} />
    </footer>
  )
}

export default Footer
