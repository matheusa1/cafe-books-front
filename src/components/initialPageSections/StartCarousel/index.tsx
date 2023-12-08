import React, { ReactElement } from 'react'
import { CarouselStartComponent } from '@/components/organism/CarouselStartComponent'
import { startCarouselData } from '@/mock/startCarouselData'
import { apiGetHotBooks } from '@/services/api'

const getCarouselData = async () => {
  try {
    const res = await apiGetHotBooks()
    console.log(res)
    return res
  } catch (error) {
    return []
  }
}

export const revalidate = 60 * 60 * 24

const StartCarousel: React.FC = async (): Promise<ReactElement> => {
  const hots = await getCarouselData()
  const hotslen = hots.length
  console.log(hots)
  return (
    <div className={'h-screen'}>
      <CarouselStartComponent data={hotslen ? hots : startCarouselData} />
    </div>
  )
}

export default StartCarousel
