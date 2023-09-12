import React, { ReactElement } from 'react'
import { ICurrencyText } from './types'
import { NumericFormat } from 'react-number-format'

const CurrencyText: React.FC<ICurrencyText> = ({
  value,
  className,
}): ReactElement => {
  return (
    <NumericFormat
      displayType={'text'}
      thousandSeparator={true}
      prefix={'R$ '}
      value={value.toFixed(2)}
      renderText={(value) => <span className={className}>{value}</span>}
    />
  )
}

export default CurrencyText
