import React from 'react'
import { ISelectFeedback } from '../types'
import { AlertCircle, AlertTriangle } from 'lucide-react'

export const SelectFeedback: React.FC<ISelectFeedback> = ({
  children,
  type,
}) => {
  return (
    <div className={'flex items-center gap-1 text-xs text-danger'}>
      {children && (
        <>
          {type === 'error' ? <AlertCircle /> : <AlertTriangle />}
          <span>{children}</span>
        </>
      )}
    </div>
  )
}
