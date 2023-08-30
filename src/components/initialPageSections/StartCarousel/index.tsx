'use client'

import CarouselItem from '@/components/organism/CarouselItem'
import { startCarouselData } from '@/mock/startCarouselData'
import React, { ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './carouselStyle.css'
import 'swiper/css/pagination'

const StartCarousel: React.FC = (): ReactElement => {
  return (
    <div className={'h-screen max-h-[920px]'}>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        modules={[Navigation, Autoplay]}
        loop
      >
        {startCarouselData.map((item) => (
          <SwiperSlide key={item.id}>
            <CarouselItem
              id={item.id}
              banner={item.banner}
              punchline={item.punchline}
              infoText={item.infoText}
              book={item.book}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default StartCarousel
