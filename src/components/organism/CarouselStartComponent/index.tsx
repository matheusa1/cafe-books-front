'use client'

import { FC } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './carouselStyle.css'
import 'swiper/css/pagination'
import CarouselItem from '../CarouselItem'
import { TCarouselStartComponent } from './types'

export const CarouselStartComponent: FC<TCarouselStartComponent> = ({ data }) => {
  return (
    <Swiper
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      modules={[Navigation, Autoplay]}
      loop
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <CarouselItem data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
