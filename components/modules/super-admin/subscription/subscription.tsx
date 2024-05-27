import React from 'react'
import UsersSummaryCard from './users-summary-card'
import CompaniesSummaryCard from './companies-summary-card';
import SubscriptionList from './subscription-list';
import DashboardHeader from '@/components/shared/dashboard-header';
import Header from '@/components/shared/header';
import Stripe from '@/components/shared/stripe';

export default function Subscription() {
  const userSummaryData = [
    { period: "Monthly", amount: 24.97 },
    { period: "Yearly", amount: 1234.56 }, // No amount provided
  ];

  const companySummaryData = [
    { title: "Total Companies", companyCount: 45 },
    { title: "Active Companies", companyCount: 8 },
  ];

  return (
    <>
      <div className='flex flex-col gap-4'>
        <DashboardHeader title='Payments' />
        <h1 className='text-xl'>Subscription Summary</h1>
        <div className="grid gap-6 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <UsersSummaryCard {...userSummaryData[0]} />
          </div>
          <div className="lg:col-span-1">
            <UsersSummaryCard {...userSummaryData[1]} />
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <CompaniesSummaryCard {...companySummaryData[0]} />
            <CompaniesSummaryCard {...companySummaryData[1]} />
          </div>
        </div>
        <Header title='Transaction Summary' />
        <SubscriptionList />
      </div>
    </>
  );
}