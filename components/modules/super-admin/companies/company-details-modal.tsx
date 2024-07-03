import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PencilLine } from 'lucide-react';
import CompanyDetails from './company-details';
import { CompanyInterface } from '@/lib/interfaces';

interface CompanyDetailsModalProps {
  companyId: number;
  companyData: CompanyInterface;
}

const CompanyDetailsModal: React.FC<CompanyDetailsModalProps> = ({ companyId, companyData }) => {
  // You can fetch additional company details using companyId here if needed
  // For demonstration, using provided companyData

  return (
    <div>
      <Dialog>
        <DialogTrigger className='flex w-full items-center p-2 gap-2 hover:bg-gray-100'>
          <PencilLine className='w-4 h-4' color='gray' />
          <span className='text-gray-600'>Edit Profile</span>
        </DialogTrigger>
        <DialogContent
          className="bg-white md:max-w-[65%] xl:max-w-[50%] mobile:max-w-[90%] max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-3xl">
          <DialogHeader>
            <DialogTitle>
              <div className='flex '>
                Company Details
              </div>
              <hr className='my-3' />
            </DialogTitle>
            <DialogDescription>
              <CompanyDetails
                company_name={companyData.company_name}
                firm_name={companyData.firm_name}
                phone_number={companyData.phone_number}
                country={companyData.country}
                location={companyData.location}
                plan_type={companyData.plan.plan_type}
                price= {93}
                subscriptionPlan='plan'
                company_logo={companyData.company_logo}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CompanyDetailsModal;
