import { MapPinned } from 'lucide-react';
import React from 'react';
import CardOptions from './card-options';
import Image from 'next/image';
import { CompanyInterface } from '@/lib/interfaces';

const CompanyCard: React.FC<CompanyInterface> = ({
  id,
  company_name,
  company_logo,
  country,
  firm_name,
  plan,
  location,
  staffCount,
  phone_number,
  // Add other necessary fields from your API response
}) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg p-5 bg-white">
      <div className='flex justify-between'>
        <div className="flex items-center mb-4">
          <div className="rounded-full flex items-center justify-center shadow-xl">
          <Image alt='company-logo' width={40} height={40} src={company_logo} 
                className="rounded-full aspect-square object-cover max-h-20 max-w-20"/>
           </div>
          <div className="flex flex-col ml-4 gap-1">
            <div className="font-medium text-lg">{company_name}</div>
            <div className="text-gray-400">{firm_name}</div>
          </div>
        </div>
        <CardOptions companyId={id} companyData={{ id, company_name, company_logo, country, firm_name, plan, location, staffCount, phone_number }} />
      </div>
      <p className="text-gray-600 mobile:text-xs text-sm mb-4">{location}</p>
      <div className=' flex flex-wrap gap-2'>
        <div className="flex items-center gap-2 py-2 px-5 rounded-xl bg-gray-100">
          <div className='rounded-full bg-green-500 h-3 w-3'></div>
          <p className='whitespace-nowrap text-xs'>{plan.plan_type} subscription plan</p>
        </div>
        <div className="flex items-center bg-gray-100 py-2 px-5 rounded-xl gap-2">
          <MapPinned className='w-4 h-4' color='gray' />
          <span className='whitespace-nowrap text-xs'>{country}</span>
        </div>
        <div className="flex items-center gap-2 py-2 px-5 rounded-xl bg-gray-100">
          <div className='rounded-full bg-blue-400 h-3 w-3'></div>
          <span className='whitespace-nowrap text-xs'>{staffCount} Staff Workers</span>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
