import React from 'react'
import { AlertCircle, AlertTriangle } from 'lucide-react'
import { ITextAreaFeedback } from '../types'

export const TextAreaFeedback: React.FC<ITextAreaFeedback> = ({
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
