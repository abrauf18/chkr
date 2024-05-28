import React from 'react'
import EarningsOverview from './earnings-overview'
import DashboardHeader from '@/components/shared/dashboard-header'
import { TransactionHistory } from './transaction-history'
import Header from '@/components/shared/header'

export default function Payments() {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardHeader
        title='Payments' />
      <Header title='My Earnings Overview' />
      <EarningsOverview />
      <Header title='Transaction History' />
      <TransactionHistory />
    </div>
  )
}
