import Title from '@/components/atoms/Title'
import React, { ReactElement } from 'react'

const HeadboardItems: React.FC = (): ReactElement => {
  return (
    <div className={''}>
      <Title
        topText="VOCÊ TAMBÉM PODE GOSTAR"
        boldText="Seu próximo"
        text="livro de cabeceira"
      />
    </div>
  )
}

export default HeadboardItems
