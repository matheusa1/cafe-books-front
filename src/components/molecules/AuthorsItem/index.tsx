import React, { ReactElement } from 'react'
import { IAuthorsItem } from './types'
import Link from 'next/link'
import Image from 'next/image'

const AuthorsItem: React.FC<IAuthorsItem> = ({
  image,
  title,
}): ReactElement => {
  return (
    <Link
      href={'#'}
      className={
        'flex w-32 shrink-0 flex-col gap-2 rounded-lg p-4 text-center transition-all hover:bg-white'
      }
    >
      <Image
        src={image}
        alt="authorImage"
        width={1920}
        height={1080}
        className="h-24 w-24"
      />
      <p>{title}</p>
    </Link>
  )
}

export default AuthorsItem
