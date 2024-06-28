import React from "react";
import TotalJobs from "@/assets/icons/TotalJobs";
import OngoingJobs from "@/assets/icons/OngoingJobs";
import PendingJobs from "@/assets/icons/PendingJobs";

const InfoCardPage = () => {
  return (
    <div className="flex md:flex-row flex-col w-full gap-6 mt-4">
    <div className="flex md:w-[32%] bg-white rounded-3xl items-center py-8 px-6">
      <TotalJobs className="mr-4" />
      <div className="flex flex-col w-3/4">
        <h1 className="font-bold text-3xl">40</h1>
        <p className="text-gray-500 text-lg md:leading-5 md:mt-2">
          Total Jobs
        </p>
      </div>
    </div>
    <div className="flex md:w-[32%] bg-white rounded-3xl items-center py-8 px-6">
      <OngoingJobs className="mr-4" />
      <div className="flex flex-col w-3/4">
        <h1 className="font-bold text-3xl">25</h1>
        <p className="text-gray-500 text-lg md:leading-5 md:mt-2">
          Ongoing Jobs
        </p>
      </div>
    </div>
    <div className="flex md:w-[32%] bg-white rounded-3xl items-center py-8 px-6">
      <PendingJobs className="h-14 mr-4" />
      <div className="flex flex-col w-3/4">
        <h1 className="font-bold text-3xl">15</h1>
        <p className="text-gray-500 text-lg md:leading-5 md:mt-2">
          Pending Jobs
        </p>
      </div>
    </div>
  </div>
  
  );
};

export default InfoCardPage;

