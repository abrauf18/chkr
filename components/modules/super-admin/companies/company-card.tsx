import { MapPinned } from 'lucide-react';
import React from 'react';
import CardOptions from './card-options';
import Image from 'next/image';
interface CompanyCardProps {
  companyName: string;
  companyType: string;
  description: string;
  subscriptionPlan: string;
  location: string;
  staffCount: number;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  companyName,
  companyType,
  description,
  subscriptionPlan,
  location,
  staffCount,
}) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg p-5 bg-white">
      <div className='flex justify-between'>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white">
            <Image alt='company-logo' width={4} height={4} src='/images/companyLogo.svg' />
          </div>
          <div className="flex flex-col ml-4 gap-1">
            <div className="font-medium text-lg">{companyName}</div>
            <div className="text-gray-400">{companyType}</div>
          </div>
        </div>
        <CardOptions />
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex items-center mb-4">
        <div className="flex items-center gap-2 py-2 px-5 rounded-xl bg-gray-100">
          <div className='rounded-full bg-green-500 h-3 w-3'></div>
          {subscriptionPlan}</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center bg-gray-100 py-2 px-5 rounded-xl gap-2">
          <MapPinned className='w-4 h-4' color='gray' />
          <span className='whitespace-nowrap'>{location}</span>
        </div>
        <div className="flex items-center gap-2 py-2 px-5 rounded-xl bg-gray-100">
          <div className='rounded-full bg-blue-400 h-3 w-3'></div>
          <span className='whitespace-nowrap'>{staffCount} Staff Workers</span>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
