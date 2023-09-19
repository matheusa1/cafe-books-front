import React, { ReactElement } from 'react'
import ForYouBottomSliderItem from '../ForYouBottomSliderItem'

const ForYouBottomSlider: React.FC = (): ReactElement => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <span className="p-2 text-xs text-subText">
        Conheça obras relacionadas
      </span>
      <div className="flex w-full max-w-full gap-4 overflow-auto">
        <ForYouBottomSliderItem />
        <ForYouBottomSliderItem />
        <ForYouBottomSliderItem />
        <ForYouBottomSliderItem />
        <ForYouBottomSliderItem />
        <ForYouBottomSliderItem />
      </div>
    </div>
  )
}

export default ForYouBottomSlider
