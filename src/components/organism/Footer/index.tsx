'use client'

import Image from 'next/image'
import React, { ReactElement } from 'react'

import Logo from '@/assets/svgs/LogoTextCol.svg'
import { FooterData } from './data'
import FooterItem from '@/components/molecules/FooterItem'
import { useRouter } from 'next/navigation'
import FooterModal from '@/components/molecules/FooterModal'

const Footer: React.FC = (): ReactElement => {
  const router = useRouter()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [title, setTitle] = React.useState<string>('')
  const [content, setContent] = React.useState<string>('')

  const onHandleClick = (data: string, title: string) => {
    if (data[0] === '/') {
      router.push(data)
      return
    }

    setTitle(title)
    setContent(data)
    setIsOpen(true)
  }

  return (
    <footer
      className={
        'flex w-screen flex-col items-center gap-8 bg-dark px-5 pb-24 pt-10'
      }
    >
      <Image src={Logo} alt={'Logo'} className="w-12" />
      <div className="flex flex-col gap-8 md:flex-row md:gap-14">
        {FooterData.map((item, index) => (
          <FooterItem
            key={index}
            icon={item.icon}
            items={item.links}
            title={item.title}
            onHandleClick={onHandleClick}
          />
        ))}
      </div>
      <FooterModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        content={content}
      />
    </footer>
  )
}

export default Footer
