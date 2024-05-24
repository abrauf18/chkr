'use client'
import DashboardHeader from '@/components/shared/dashboard-header'
import { Button } from '@/components/ui/button'
import React from 'react'
import CompanyInformation from '../../company-admin/settings/company-information'
import PlanCard from '../../company-admin/onboarding/plan-card'
import { ErrorMessage } from '@hookform/error-message'

export default function EditCompanyProfile() {
  return (
    <>
      <DashboardHeader
        title='Companies' />
      <div className='flex justify-between'>
        <h1 className='text-xl mb-2'>Edit Company Profile</h1>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 my-4'>
        <div className='bg-white rounded-xl p-3'>
          <h1 className='text-lg font-semibold'>Fill out the Company Information</h1>
          <hr className='my-3' />
          <CompanyInformation />
        </div>
        <div className='bg-white rounded-xl p-3'>
          <h1 className='text-lg font-semibold'>Subscription Plan</h1>
          <hr className='my-3' />
          <p className='mt-6 text-lg font-semibold'>Select a subscription plan</p>
          <div className="w-full xl:px-8 pt-2 pb-8 gap-6">
            <div className="flex items-baseline hover:border-2 px-2 hover:rounded-3xl hover:border-primary focus:border-2 focus:border-primary">
              <input
                type="radio"
                placeholder="Monthly Plan"
                id="montly-plan"
                value="monthly"
              // defaultChecked={onboardingData.plan === "monthly"}
              // {...register("plan")}
              />
              <PlanCard
                title="Monthly Plan"
                price={189.0}
                features={[
                  " Curabitur pulvinar nunc nisl, vitae  orci pellentesque.",
                  "Curabitur pulvinar nunc orci pellentesque.",
                  "Curabitur pulvinar  pellentesque.",
                ]}
                timePeriod="month"
              />
            </div>
            <div className="flex items-baseline hover:border-2 p-2 hover:rounded-3xl hover:border-primary focus:border-2 focus:border-primary">
              <input
                type="radio"
                placeholder="Yearly Plan"
                id="yearly-plan"
                value="yearly"
              // {...register("plan")}
              />
              <PlanCard
                title="Yearly Plan"
                price={699.0}
                features={[
                  " Curabitur pulvinar nunc nisl, vitae  orci pellentesque.",
                  "Curabitur pulvinar nunc orci pellentesque.",
                  "Curabitur pulvinar  pellentesque.",
                ]}
                timePeriod="year"
              />{" "}
            </div>
            {/* <p className="text-sm text-red-500">
              {" "}
              <ErrorMessage errors={errors} name="plan" />
            </p> */}
          </div>
          <div className='flex justify-end'>
            <Button className='text-white rounded-2xl px-6 py-3'>
              Upgrade Plan
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
