import React from 'react';

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
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white">
          <span className="text-xl font-bold">{companyName.charAt(0)}</span>
        </div>
        <div className="ml-4">
          <div className="font-bold text-xl">{companyName}</div>
          <div className="text-gray-500">{companyType}</div>
        </div>
      </div>
      <p className="text-gray-700 text-base mb-4">{description}</p>
      <div className="flex items-center mb-4">
        <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">{subscriptionPlan}</span>
      </div>
      <div className="flex justify-between items-center text-gray-500">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.28 0 4.34-.98 5.65-2.56A7.968 7.968 0 0012 4a7.968 7.968 0 00-5.65 5.44C7.66 11.02 9.72 12 12 12z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22c4.97 0 9-4.03 9-9 0-1.38-.31-2.7-.86-3.88A7.97 7.97 0 0012 22z"></path>
          </svg>
          {location}
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12v1.21c0 2.06 1.69 3.79 3.75 3.79s3.75-1.73 3.75-3.79V12m-7.5 0a2.375 2.375 0 014.75 0m-4.75 0v1.21c0 2.06 1.69 3.79 3.75 3.79s3.75-1.73 3.75-3.79V12m-7.5 0a2.375 2.375 0 014.75 0"></path>
          </svg>
          {staffCount} Staff Workers
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
