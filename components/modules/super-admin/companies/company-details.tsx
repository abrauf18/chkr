import { MapPinned, PencilLine } from 'lucide-react';
import React from 'react';
import PlanCard from '../../company-admin/onboarding/plan-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CompanyDetailsProps {
  companyName: string;
  companyType: string;
  phoneNumber: string;
  country: string;
  location: string;
  subscriptionPlan: string;
  price: number;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({
  companyName,
  companyType,
  phoneNumber,
  country,
  location,
}) => {
  return (
    <div className="flex flex-col mx-auto">
      <div className="flex flex-row mobile:flex-col items-center justify-between">
        <div className="flex items-center">
          <div
            className="rounded-full bg-yellow-400 h-16 w-16 flex items-center justify-center">
          </div>
          <div className="ml-4">
            <div className="text-xl font-medium text-black">{companyName}</div>
          </div>
        </div>
        <Link href='/super-admin/companies/editprofile'>
          <Button className="text-white p-3 rounded-3xl flex items-center gap-2 mobile:mt-4 mobile:w-full mobile:mx-auto">
            <PencilLine className='w-4 h-4' />
            Edit Profile
          </Button>
        </Link>
      </div>
      <div className="flex mt-6 justify-between lg:flex-row flex-col lg:gap-0 gap-4 text-black">
        <div className="flex flex-wrap xl:gap-10 gap-4">
          <div className="flex flex-col text-sm lg:text-lg whitespace-nowrap">
            <span className="font-bold md:text-lg mobile:text-left">Company Type:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
              {companyType}
            </span>
          </div>
          <div className="flex flex-col text-sm whitespace-nowrap">
            <span className="font-bold md:text-lg mobile:text-left">Phone Number:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
              {phoneNumber}
            </span>
          </div>
          <div className="flex flex-col text-sm whitespace-nowrap">
            <span className="font-bold md:text-lg mobile:text-left">Country:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base ">
              {country}
            </span>
          </div>
          <div className="flex flex-col text-sm lg:whitespace-nowrap">
            <span className="font-bold md:text-lg mobile:text-left">Location:</span>
            <div className="bg-gray-100 flex items-center rounded-2xl py-3 px-6 mt-2 md:text-base gap-2 ">
              <MapPinned className='w-4 h-4' color='red' />
              {location}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-lg font-medium text-black">Subscription Plan</div>
        <div className="flex items-baseline hover:border-2 p-2 mt-4 text-black hover:rounded-3xl hover:border-primary focus:border-2 focus:border-primary">
          <input
            type="radio"
            placeholder="Monthly Plan"
            id="montly-plan"
            value="monthly"
            checked
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
      </div>
    </div>
  );
};

export default CompanyDetails;
