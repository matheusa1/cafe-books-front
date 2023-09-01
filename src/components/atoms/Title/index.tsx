import React, { ReactElement } from 'react'
import { ITitle } from './types'

const Title: React.FC<ITitle> = ({ boldText, text, topText }): ReactElement => {
  return (
    <div className={'w-full text-center'}>
      <span className="text-xs">{topText}</span>
      <div className="text-2xl">
        <strong className="font-bold">{boldText} </strong>
        <span className="italic">{text}</span>
      </div>
    </div>
  )
}

export default Title
