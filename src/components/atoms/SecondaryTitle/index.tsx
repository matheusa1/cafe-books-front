import { ReactElement } from 'react'
import { ISecondaryTitle } from './types'

const SecondaryTitle: React.FC<ISecondaryTitle> = ({
  mainTitle,
  smallTitle,
}): ReactElement => {
  return (
    <div className={'flex w-full flex-col gap-2 text-center'}>
      <strong className="text-2xl text-pureWhite">{mainTitle}</strong>
      <span className="text-xs text-pureWhite">{smallTitle}</span>
    </div>
  )
}

export default SecondaryTitle
