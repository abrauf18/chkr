import React from 'react'
import CompanyCard from './company-card'

export default function Companies() {
  return (
    <div className="p-8">
      <CompanyCard
        companyName="Upyr Ltd"
        companyType="Startup Agency"
        description="Lorem ipsum dolor sit amet, Curabitur tempus ac leo eget luctus. Integer et odio id nisi."
        subscriptionPlan="Monthly Subscription Plan"
        location="Singapore"
        staffCount={3}
      />
    </div>
  )
}
