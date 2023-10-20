import React, { ReactNode } from 'react'

export const SelectRoot: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={'flex w-full flex-col gap-2 '}>{children}</div>
}
