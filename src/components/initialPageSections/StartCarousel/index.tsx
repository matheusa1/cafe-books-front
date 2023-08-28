import CarouselItem from '@/components/organism/CarouselItem'
import { startCarouselData } from '@/mock/startCarouselData'
import React, { ReactElement } from 'react'

const StartCarousel: React.FC = (): ReactElement => {
  return (
    <div className={'h-screen'}>
      <CarouselItem
        id={startCarouselData[0].id}
        banner={startCarouselData[0].banner}
        punchline={startCarouselData[0].punchline}
        infoText={startCarouselData[0].infoText}
        book={startCarouselData[0].book}
      />
    </div>
  )
}

export default StartCarousel
