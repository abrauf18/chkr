import React from "react";
import Location from "@/assets/icons/location-icon";

interface CompletedJobCardProps {
  customer_name: string;
  location: string;
  status: string;
  date_time: string;
  service: string;
  price: number;
  description?: string;
}

const CompletedJobCard: React.FC<CompletedJobCardProps> = ({
  customer_name,
  location,
  status,
  date_time,
  service,
  price,
}) => {
  return (
    <div className="mt-4 bg-white rounded-3xl py-10 px-4">
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl mb-3">{customer_name}</h1>
          <div className="flex items-center">
            <Location className="h-6 w-6" />
            <span className="font-semibold text-lg text-gray-700 ml-2">
              {location}
            </span>
          </div>
        </div>
        <div className="flex gap-2 h-3/4 mt-4 lg:mt-0">
          <div className="flex items-center bg-gray-100 rounded-xl p-3">
            <div className="bg-green-500 rounded-full h-2 w-2 mr-2"></div>
            <span>{status}</span>
          </div>
        </div>
      </div>
      <div className="flex mt-6 justify-between lg:flex-row flex-col lg:gap-0 gap-5">
        <div className="flex flex-wrap gap-2 xl:gap-8 ">
          <div className="flex flex-col text-sm lg:text-lg whitespace-nowrap">
            <span className="font-bold md:text-lg">Date & Time:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
              {date_time}
            </span>
          </div>
          <div className="flex flex-col text-sm whitespace-nowrap">
            <span className="font-bold md:text-lg">Service:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
              {service}
            </span>
          </div>
          <div className="flex flex-col text-sm whitespace-nowrap">
            <span className="font-bold md:text-lg">Payment:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base flex items-center">
              <div className="bg-green-500 rounded-full h-2 w-2 mr-2"></div>
              {status}
            </span>
          </div>
        </div>
        <span className="font-bold text-3xl mt-3 whitespace-nowrap">
          $ {price} USD
        </span>
      </div>
    </div>
  );
};

export default CompletedJobCard;

