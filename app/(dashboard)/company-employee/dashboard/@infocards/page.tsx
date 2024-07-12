import React from "react";
import {
  CircleChevronRight,
  MailPlus,
  MoveDownRight,
  MoveUpRight,
  Receipt,
  StickyNote,
} from "lucide-react";

const InfoCardPage = () => {
  return (
    <>
      <h1 className="text-xl font-semibold mt-2">Overview</h1>
      <div className="flex flex-col lg:flex-row gap-4 w-full mx-auto">
        <div className="flex flex-col w-full bg-white rounded-3xl py-8 px-6 gap-6">
          <div className="flex items-center xl:gap-9 gap-2 w-full">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
              <Receipt color="#3498DB" />
            </div>
            <div className="flex flex-col w-[40%]">
              <h1 className="font-bold text-3xl lg:text-2xl text-gray-700 whitespace-nowrap">
                $ 120.8K
              </h1>
              <p className="text-gray-400 text-xl whitespace-nowrap">
                Total Earnings
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex items-center gap-1 text-green-500">
              <MoveUpRight className="h-4 w-4" />
              <span className="text-xs xl:text-sm font-bold">1.20%</span>
              <span className="text-gray-400 ml-2 whitespace-nowrap lg:text-sm text-base">
                since last month
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-white rounded-3xl py-8 px-6 gap-6">
          <div className="flex items-center xl:gap-9 gap-2 w-full">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center ">
              <StickyNote color="#BB6BD9" />
            </div>
            <div className="flex flex-col w-[40%]">
              <h1 className="font-bold text-2xl xl:text-3xl text-gray-700">
                18
              </h1>
              <p className="text-gray-400 text-xl xl:whitespace-nowrap mobile:whitespace-nowrap">
                Completed Jobs
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex xl:flex-row flex-col items-center gap-1 text-red-500">
              <div className="flex items-center gap-1 text-left w-full">
                <MoveDownRight className="h-4 w-4" />
                <span className="text-xs xl:text-sm font-bold">2.84%</span>
              </div>
              <span className="text-gray-400 ml-2 whitespace-nowrap lg:text-sm text-base">
                since last month
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm whitespace-nowrap">See Jobs</span>
              <button>
                <CircleChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-white rounded-3xl py-8 px-6 gap-6">
          <div className="flex items-center xl:gap-9 gap-2">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center">
              <MailPlus color="#F2994A" />
            </div>
            <div className="flex flex-col w-[40%]">
              <h1 className="font-bold text-3xl text-gray-700">02</h1>
              <p className="text-gray-400 text-xl xl:whitespace-nowrap mobile:whitespace-nowrap">
                New Requests
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex xl:flex-row flex-col items-center gap-1 text-green-500">
              <div className="flex items-center w-full gap-1">
                <MoveUpRight className="h-4 w-4" />
                <span className="text-xs xl:text-sm font-bold">3.64%</span>
              </div>
              <span className="text-gray-400 ml-2 whitespace-nowrap lg:text-sm text-base">
                since last month
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="whitespace-nowrap lg:text-sm text-base">
                See Requests
              </span>
              <button>
                <CircleChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCardPage;

