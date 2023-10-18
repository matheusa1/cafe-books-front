import { FC, ReactNode } from 'react'

export const TextAreaRoot: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={'flex w-full flex-col gap-2'}>{children}</div>
}
