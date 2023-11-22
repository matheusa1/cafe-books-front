import React, { ReactElement } from 'react'
import { IFooterItem } from './types'

const FooterItem: React.FC<IFooterItem> = ({ icon: Icon, items, title, onHandleClick }): ReactElement => {
  return (
    <div className={'flex flex-col gap-4 text-center text-white'}>
      <div className="flex items-center justify-center gap-4">
        <Icon size={24} />
        <span className="font-extrabold">{title}</span>
      </div>
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <div key={index} className="cursor-pointer" onClick={() => onHandleClick(item.name)}>
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FooterItem
