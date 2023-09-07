import React, { ReactElement } from 'react'
import { IDetailsPriceCard } from './types'

const DetailsPriceCard: React.FC<IDetailsPriceCard> = ({
  price,
  title,
  originalPrice,
}): ReactElement => {
  return (
    <div className={''}>
      <header>{title}</header>
    </div>
  )
}

export default DetailsPriceCard
