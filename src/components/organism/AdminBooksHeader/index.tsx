import React, { ReactElement } from 'react'
import { IAdminBooksHeader } from './types'
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'
import { Funnel } from '@phosphor-icons/react'

const AdminBooksHeader: React.FC<IAdminBooksHeader> = ({
  search,
  setSearch,
}): ReactElement => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className={'flex w-full max-w-sm gap-5'}>
        <Input
          value={search}
          search
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button content="icon">
          <Funnel size={20} />
        </Button>
      </div>
      <div className="w-full max-w-[150px]">
        <Button content="wFull">Criar novo livro</Button>
      </div>
    </div>
  )
}

export default AdminBooksHeader
