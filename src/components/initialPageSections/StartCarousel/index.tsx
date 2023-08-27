import { startCarouselData } from '@/mock/startCarouselData'
import Image from 'next/image'
import React, { ReactElement } from 'react'

const StartCarousel: React.FC = (): ReactElement => {
  return (
    <div className={'h-screen'}>
      <Image
        src={startCarouselData[0].banner}
        alt="Image"
        width={1920}
        height={1080}
        className="h-screen object-cover brightness-50"
      />
      <h1>{startCarouselData[0].banner}</h1>
    </div>
  )
}

export default StartCarousel
