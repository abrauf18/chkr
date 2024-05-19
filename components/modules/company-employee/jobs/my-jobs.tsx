"use client"
import DashboardHeader from '@/components/shared/dashboard-header';
import { Button } from '@/components/ui/button';
import { CalendarDays, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import JobRequests from './job-requests'; // Import your component for new job requests
import OngoingJobs from './ongoing-jobs'; // Import your component for ongoing jobs
import CompletedJobs from './completed-jobs'; // Import your component for completed jobs

const tabsData = [
  { id: 1, text: 'New Job Requests' },
  { id: 2, text: 'Ongoing Jobs' },
  { id: 3, text: 'Completed Jobs' },
];

export default function MyJobs() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <JobRequests />;
      case 2:
        return <OngoingJobs />;
      case 3:
        return <CompletedJobs />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex flex-col w-full">
        <DashboardHeader title='My Jobs' />
        <div className='flex justify-between items-center'>
          <h1 className='text-base md:text-xl font-bold'>Track your Assigned Services</h1>
          <div className="flex justify-center items-center gap-2">
            <Button className="md:w-[90%] w-1/2 bg-white hover:bg-white rounded-3xl p-6 text-sm lg:text-base mobile:hidden">
              <CalendarDays className='mr-2' color='#FF2600' />
              March 11 - March 17, 2024
              <ChevronDown className='ml-2' />
            </Button>
            <Button className="w-full md:w-[90%] bg-white rounded-3xl p-6 text-sm lg:text-base">
              Filter
              <ChevronDown className="ml-2 md:w-[1rem] md:h-[1rem] w-[1rem] h-[1rem]" />
            </Button>
          </div>
        </div>
        <div className="flex gap-2 items-center my-4">
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex items-center bg-white rounded-2xl md:py-3 md:px-6 px-1 py-2 gap-2 cursor-pointer ${activeTab === tab.id ? 'bg-primary border-b-2 border-primary font-bold' : ''
                }`}
            >
              <div
                className={`rounded-full w-2 h-2 ${activeTab === tab.id ? 'bg-primary' : 'bg-white'
                  } `}
              />
              <div>
                <span className='text-xs md:text-base whitespace-nowrap'>{tab.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div>{renderContent()}</div>
      </div>
    </div>
  );
}
