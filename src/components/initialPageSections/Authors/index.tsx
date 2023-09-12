import Title from '@/components/atoms/Title'
import { ReactElement } from 'react'

const Authors: React.FC = (): ReactElement => {
  return (
    <div className={'my-20'}>
      <Title
        topText={'VOCÊ TAMBÉM PODE GOSTAR DESTES'}
        boldText={'Autores'}
        text={'fantásticos'}
      />
    </div>
  )
}

export default Authors
