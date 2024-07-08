"use client";
import { MapPinned } from "lucide-react";
import Link from "next/link";
import React from "react";
import MarkAsComplete from "./mark-as-complete";
import Select from "./select-status";
import ShowJobDetails from "../../../shared/show-job-details";

interface CardProps {
  id: number;
  customer_name: string;
  location: {
    name: string;
    lat: number;
    lng: number;
  };
  description: string;
  status: string;
  date_time: string;
  service: string;
  price: number;
}

const OngoingJobCard: React.FC<CardProps> = ({
  id,
  customer_name,
  location,
  description,
  status,
  date_time,
  service,
  price,
}) => {
  return (
    <div className="w-full mx-auto bg-white shadow-xl rounded-xl overflow-hidden p-6">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl mb-3">{customer_name}</h1>
          <div className="flex items-center gap-2">
            <MapPinned className="h-5 w-5" />
            <span className="font-semibold md:text-lg text-gray-700">
              {location?.name}
              <Link
                href={`https://www.google.com/maps?q=${location}`}
                target="_blank"
                className="text-primary text-sm md:text-base font-semibold ml-2"
              >
                View Direction
              </Link>
            </span>
          </div>
        </div>
        <div className="flex gap-2 h-3/4 mt-4 xl:mt-0">
          <MarkAsComplete jobID={id} />
          <Select />
        </div>
      </div>
      <p className="mt-4 text-base text-gray-600">{description} </p>
      <div className="flex mt-6 justify-between lg:flex-row flex-col lg:gap-0 gap-5">
        <div className="flex flex-wrap xl:gap-10 gap-4">
          <div className="flex flex-col text-sm whitespace-nowrap">
            <span className="font-bold md:text-lg">Date & Time:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
              {new Date(date_time).toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col text-sm whitespace-nowrap">
            <span className="font-bold md:text-lg">Service:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base ">
              {service}
            </span>
          </div>
          <div className="flex flex-col text-sm whitespace-nowrap">
            <span className="font-bold md:text-lg">Status:</span>
            <div className="bg-gray-100 flex items-center rounded-2xl py-3 px-6 mt-2 md:text-base ">
              <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
              {status}
            </div>
          </div>
        </div>
        <div className="flex flex-col whitespace-nowrap mr-4 mt-1 gap-2">
          <span className="font-bold text-xl md:text-3xl">${price} USD</span>
          <ShowJobDetails jobId={id} />
        </div>
      </div>
    </div>
  );
};

export default OngoingJobCard;

