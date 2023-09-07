import React, { ReactElement } from 'react'

const DetailsTitle: React.FC<{ children: string }> = ({
  children,
}): ReactElement => {
  return <span className="text-2xl font-semibold">{children}</span>
}

export default DetailsTitle
