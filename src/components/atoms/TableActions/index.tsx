import React, { ReactElement } from 'react'
import { ITableActions } from './types'
import { PencilLine, Trash } from '@phosphor-icons/react'

const TableActions: React.FC<ITableActions> = ({
  onHandleDelete,
  onHandleEdit,
}): ReactElement => {
  return (
    <div className={'flex w-full justify-center gap-4'}>
      <PencilLine
        className={'cursor-pointer text-blue-500'}
        size={24}
        onClick={() => onHandleEdit('oi')}
      />
      <Trash
        className={'cursor-pointer text-danger'}
        size={24}
        onClick={() => onHandleDelete('oi')}
      />
    </div>
  )
}

export default TableActions
