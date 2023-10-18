import React, { ReactElement } from 'react'

const PurchaseComplete: React.FC = (): ReactElement => {
  return (
    <div className="bg-backgroundLight">
      <div>
        <span className="text-lg font-bold">
          Seu pedido foi realizado com sucesso!
        </span>
        
      </div>
    </div>
  )
}

export default PurchaseComplete
