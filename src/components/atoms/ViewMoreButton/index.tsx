'use client'

import React, { ReactElement } from 'react'
import { Button } from '../Button'
import { ArrowRightCircle } from 'lucide-react'

const ViewMoreButton: React.FC = (): ReactElement => {
  return (
    <Button.RootLink href={'/explore'} className="bg-pureWhite">
      <Button.Text className="text-dark">View More</Button.Text>
      <Button.Icon icon={ArrowRightCircle} className="text-dark" />
    </Button.RootLink>
  )
}

export default ViewMoreButton
