"use client";
import React from "react";
import { JobRequestAction } from "@/actions/jobs/job-action";
import { Button } from "@/components/ui/button";
import { MapPinned } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";
import action from "@/app/action";

interface CardProps {
  job_id: number;
  customer_name: string;
  location: string;
  description: string;
  status: string;
  date_time: string;
  service: string;
  price: number;
}

const JobRequestCard: React.FC<CardProps> = ({
  job_id,
  customer_name,
  location,
  description,
  status,
  date_time,
  service,
  price,
}) => {
  const handleClick = async (accept: boolean) => {
    try {
      const data = {
        job_request: accept,
        job_id,
      };
      const result = await JobRequestAction(data);
      if (result.statusCode === 200) {
        await action("GetUserJobs");
        return toast.success(result.message);
      } else {
        return toast.error(result.message);
      }
    } catch (error) {
      return toast.error((error as Error)?.message);
    }
  };

  return (
    <div className="w-full mx-auto bg-white shadow-xl rounded-xl overflow-hidden p-6">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl mb-3">{customer_name}</h1>
          <div className="flex items-center gap-2">
            <MapPinned className="h-5 w-5" />
            <span className="font-semibold md:text-lg text-gray-700">
              {location}
              <Link
                href={`https://www.google.com/maps?q=${location}`}
                target="_blank"
                className="text-primary text-sm md:text-base font-semibold ml-2 blank"
              >
                View Direction
              </Link>
            </span>
          </div>
        </div>
        <div className="flex gap-2 h-3/4 mt-4 xl:mt-0">
          <Button
            className="rounded-3xl text-white"
            type="button"
            onClick={() => handleClick(true)}
          >
            Accept
          </Button>
          <Button
            className="rounded-3xl text-black bg-gray-100"
            type="button"
            onClick={() => handleClick(false)}
          >
            Decline
          </Button>
        </div>
      </div>
      <p className="mt-4 text-base text-gray-600">{description}</p>
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
            <span className="font-bold md:text-lg">Zip Code:</span>
            <div className="bg-gray-100 flex items-center rounded-2xl py-3 px-6 mt-2 md:text-base capitalize">
              <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
              {status}
            </div>
          </div>
        </div>
        <div className="flex flex-col whitespace-nowrap mr-4 mt-1">
          <span className="font-bold text-xl md:text-3xl">${price} USD</span>
        </div>
      </div>
    </div>
  );
};

export default JobRequestCard;

