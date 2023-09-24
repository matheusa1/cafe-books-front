import React, { ReactElement } from 'react'
import { IExploreFilterItem } from './types'

const ExploreFilterItem: React.FC<IExploreFilterItem> = ({
  title,
  children,
}): ReactElement => {
  return (
    <div className={'flex flex-col gap-3'}>
      <h1 className="font-semibold text-dark">{title}</h1>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )
}

export default ExploreFilterItem
