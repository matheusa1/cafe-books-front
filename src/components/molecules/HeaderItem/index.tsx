import React, { ReactElement } from 'react'
import { IHeaderItem } from './types'

const HeaderItem: React.FC<IHeaderItem> = ({ icon, title }): ReactElement => {
  return (
    <div
      className={
        'brownButton flex flex-col items-center justify-center rounded-lg p-2 hover:bg-brownPrimary/50 md:h-14 md:w-14 md:bg-transparent'
      }
    >
      {icon}
      <h1 className="hidden text-xs text-white md:flex">{title}</h1>
    </div>
  )
}

export default HeaderItem
