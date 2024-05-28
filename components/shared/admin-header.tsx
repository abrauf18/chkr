'use client'
import { Button } from '@/components/ui/button';
import { CalendarDays, ChevronDown } from 'lucide-react';
import React from 'react';
import AddAdmin from '../modules/super-admin/admins/add-admin';
import AddEmployee from '../modules/company-admin/employees/add-employee';
import CreateJob from '../modules/company-admin/jobs/create-job';

interface AdminHeaderProps {
  title: string,
  isAdmin?: boolean;
  isSuperAdmin: boolean;
  page?: 'addEmployee' | 'createJob'; // Add a page prop to specify the current page
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ title, isAdmin, isSuperAdmin, page }) => {
  return (
    <div className="flex justify-between mobile:flex-col items-center my-2">
      <div className="flex w-full">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex items-center gap-2 mobile:mt-2 md:mt-2 lg:mt-0 justify-end mobile:justify-start w-full ">
        <Button className="bg-white hover:bg-white rounded-3xl py-6 text-sm lg:text-base mobile:hidden flex gap-2">
          <CalendarDays className="ml-2 w-4 h-4" color="#FF2600" />
          <span>Select Date</span>
          <ChevronDown className='w-4 h-4' />
        </Button>
        <Button className="bg-white rounded-3xl py-6 text-sm lg:text-base flex gap-2 items-center justify-center">
          Filter
          <ChevronDown className='w-4 h-4' />
        </Button>
        {isSuperAdmin && <AddAdmin />}
        {isAdmin && page === 'addEmployee' && <AddEmployee />}
        {isAdmin && page === 'createJob' && <CreateJob />}
      </div>
    </div>
  );
}

export default AdminHeader;
