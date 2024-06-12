import React from 'react'
import EarningsOverview from './earnings-overview'
import { TransactionHistory } from './transaction-history'
import Header from '@/components/shared/header'

export default function Payments() {
  return (
    <div className='flex flex-col gap-4'>
      <Header title='My Earnings Overview' />
      <EarningsOverview />
      <Header title='Transaction History' />
      <TransactionHistory />
    </div>
  )
}
