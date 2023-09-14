import Title from '@/components/atoms/Title'
import { ReactElement } from 'react'

export const ForYou: React.FC = (): ReactElement => {
  return (
    <div className="bg-smokyGray pt-16 text-smokyGrayText">
      <div className='gap-10'>
        <Title
          topText={'ESPECIAIS'}
          boldText={'Separamos'}
          text={'para você'}
        ></Title>
      </div>
    </div>
  )
}

export default ForYou
