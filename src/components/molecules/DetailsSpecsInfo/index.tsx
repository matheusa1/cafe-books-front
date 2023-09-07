import React, { ReactElement } from 'react'
import { IDetailsSpecsInfo } from './types'

const DetailsSpecsInfo: React.FC<IDetailsSpecsInfo> = ({
  data,
  title,
}): ReactElement => {
  return (
    <div
      className={'flex flex-col gap-1 text-center lg:flex-row lg:text-start'}
    >
      <h1 className="font-semibold lg:w-56">{title}</h1>
      <span>{data}</span>
    </div>
  )
}

export default DetailsSpecsInfo
