import DetailsTitle from '@/components/atoms/DetailsTitle'
import DetailsSpecsInfo from '@/components/molecules/DetailsSpecsInfo'
import React, { ReactElement } from 'react'
import { IDetailsSpecs } from './types'

const DetailsSpecs: React.FC<IDetailsSpecs> = ({
  author,
  editor,
  language,
  pages,
  release,
  isbn,
}): ReactElement => {
  const year = new Date(release).getFullYear()

  return (
    <div
      className={
        'flex w-full flex-col gap-4 text-center lg:items-start lg:text-start'
      }
    >
      <DetailsTitle>Especificações</DetailsTitle>
      <div className="flex flex-col gap-2">
        <DetailsSpecsInfo title="ISBN" data={isbn} />
        <DetailsSpecsInfo title="Autor" data={author} />
        <DetailsSpecsInfo title="Editor" data={editor} />
        <DetailsSpecsInfo title="Idioma" data={language} />
        <DetailsSpecsInfo title="Páginas" data={pages} />
        <DetailsSpecsInfo title="Data de lançamento" data={year} />
      </div>
    </div>
  )
}

export default DetailsSpecs
