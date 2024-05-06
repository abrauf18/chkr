import React from "react";
import Image from "next/image";
import Location from "@/assets/icons/location-icon";
import EditIcon from "@/assets/icons/edit-icon";
import DeleteIcon from "@/assets/icons/delete-icon";

interface AssignedJobCardProps {
  userName: string;
  location: string;
  status: string;
  phoneNumber: string;
  dateTime: string;
  service: string;
  payment: string;
  employeeName: string;
  imageurl: string | undefined;
}

const AssignedJobCard: React.FC<AssignedJobCardProps> = ({
  userName,
  location,
  status,
  phoneNumber,
  dateTime,
  service,
  payment,
  employeeName,
  imageurl,
}) => {
  return (
    <div className="mt-4 bg-white rounded-3xl py-10 px-4">
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl mb-3">{userName}</h1>
          <div className="flex items-center">
            <Location className="h-6 w-6" />
            <span className="font-semibold text-lg text-gray-700 ml-2">
              {location}
            </span>
          </div>
        </div>
        <div className="flex gap-2 h-3/4 mt-4 lg:mt-0">
          <div className="flex items-center bg-gray-100 rounded-xl px-3">
            <div className="bg-primary rounded-full h-2 w-2 mr-2"></div>
            <span>{status}</span>
          </div>
          <EditIcon />
          <DeleteIcon />
        </div>
      </div>
      <div className="flex mt-6 justify-between lg:flex-row flex-col lg:gap-0 gap-5">
        <div className="flex flex-wrap gap-4 ">
          <div className="flex flex-col text-sm lg:text-lg whitespace-nowrap">
            <span className="font-bold">Phone number:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2">
              {phoneNumber}
            </span>
          </div>
          <div className="flex flex-col text-sm lg:text-lg whitespace-nowrap">
            <span className="font-bold ">Date & Time:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 ">
              {dateTime}
            </span>
          </div>
          <div className="flex flex-col text-sm lg:text-lg whitespace-nowrap">
            <span className="font-bold ">Service:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2">
              {service}
            </span>
          </div>
          <div className="flex flex-col text-sm lg:text-lg whitespace-nowrap">
            <span className="font-bold">To Pay:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 ">
              $ {payment} USD
            </span>
          </div>
        </div>
        <div className="flex flex-col text-sm lg:text-lg whitespace-nowrap">
          <span className="font-bold ">Assigned To:</span>
          <div className="flex mt-2">
            <Image
              src={imageurl}
              alt="user-image"
              height={6}
              width={6}
              className="rounded-full border border-black h-10 w-10"
            />
            <span className="mt-2 ml-2 font-semibold">{employeeName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignedJobCard;

