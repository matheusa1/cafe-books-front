'use client'

import { FC, useCallback, useEffect, useState } from 'react'
import { getUserPurchases } from '@/services/api'
import { useAuth } from '@/context/AuthContext'
import Loading from 'react-loading'
import { ProfilePurchasesItem } from '../ProfilePurchasesItem'
import { IPurchases } from '@/types/purcheses'

export const ProfilePurchaseContent: FC = () => {
  const { token } = useAuth()
  const [purchases, setPurchases] = useState<IPurchases>([])
  const [loading, setLoading] = useState(false)

  const handleGetUserPurchase = useCallback(async () => {
    setLoading(true)
    const res = await getUserPurchases(token!)

    console.log(res)
    setPurchases(res)
    setLoading(false)
  }, [token])

  useEffect(() => {
    handleGetUserPurchase()

    return () => {
      setPurchases([])
    }
  }, [handleGetUserPurchase])

  return (
    <div className={'flex h-full flex-col gap-2 pr-5'}>
      {loading ? (
        <div className="flex flex-1 items-center justify-center">
          <Loading type="spin" width={40} height={40} color="#000" />
        </div>
      ) : (
        purchases.map((purchase) => <ProfilePurchasesItem key={purchase.id} purchase={purchase} />)
      )}
    </div>
  )
}
