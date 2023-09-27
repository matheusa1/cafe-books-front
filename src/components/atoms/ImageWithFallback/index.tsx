'use client'

import Image, { ImageProps } from 'next/image'
import React, { ReactElement } from 'react'

import fallback from '@/assets/images/notFoundImage.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

const ImageWithFallback: React.FC<{ alt: string } & ImageProps> = ({
  alt,
  ...rest
}): ReactElement => {
  const [src, setSrc] = React.useState<string | StaticImport>(rest.src)

  return (
    <Image
      {...rest}
      alt={alt}
      src={src}
      onError={(e) => {
        e.preventDefault()
        setSrc(fallback)
      }}
    />
  )
}

export default ImageWithFallback
