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
    <div className="flex flex-col gap-4">
      <div className={'flex gap-5'}>
        <Input
          value={search}
          search
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button content="icon">
          <Funnel size={20} />
        </Button>
      </div>
      <Button content="wFull">Criar novo livro</Button>
    </div>
  )
}

export default AdminBooksHeader
