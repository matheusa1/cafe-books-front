import Title from '@/components/atoms/Title'
import HeadboardItem from '@/components/molecules/HeadboardItem'
import React, { ReactElement } from 'react'

import { headboardItemsData } from '@/mock/headboardItemsData'

const HeadboardItems: React.FC = (): ReactElement => {
  return (
    <div className={''}>
      <Title
        topText="VOCÊ TAMBÉM PODE GOSTAR"
        boldText="Seu próximo"
        text="livro de cabeceira"
      />
      <div className="w-full max-w-[250px] bg-pureWhite">
        <HeadboardItem cardInfo={headboardItemsData[2]} />
      </div>
    </div>
  )
}

export default HeadboardItems
