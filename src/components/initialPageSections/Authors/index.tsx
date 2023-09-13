import Title from '@/components/atoms/Title'
import Authorsbar from '@/components/organism/AuthorsBar'
import { ReactElement } from 'react'

const Authors: React.FC = (): ReactElement => {
  return (
    <div className={'my-20'}>
      <Title
        topText={'VOCÊ TAMBÉM PODE GOSTAR DESTES'}
        boldText={'Autores'}
        text={'fantásticos'}
      />
      <Authorsbar />
    </div>
  )
}

export default Authors
