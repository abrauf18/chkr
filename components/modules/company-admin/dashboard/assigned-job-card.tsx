import React from "react";
import Image from "next/image";
import Location from "@/assets/icons/location-icon";
import EditIcon from "@/assets/icons/edit-icon";
import ShowJobDetails from "../../../shared/show-job-details";
import DeleteModal from "../../super-admin/admins/delete-modal";

interface AssignedJobCardProps {
  id: number;
  customer_name: string;
  location: string;
  status: string;
  phone_number: string;
  date_time: string;
  service: string;
  price: number;
  assignedUsers: Array<{
    first_name: string;
    last_name: string;
    picture: string;
  }>;
}

const AssignedJobCard: React.FC<AssignedJobCardProps> = ({
  id,
  customer_name,
  location,
  status,
  phone_number,
  date_time,
  service,
  price,
  assignedUsers,
}) => {
  const displayEmployeeName = () => {
    if (assignedUsers.length > 1) {
      return `${assignedUsers[0].first_name} ${assignedUsers[0].last_name} & ${
        assignedUsers.length - 1
      } more`;
    } else if (assignedUsers.length === 1) {
      return `${assignedUsers[0].first_name} ${assignedUsers[0].last_name}`;
    } else {
      return "Unassigned";
    }
  };

  return (
    <div className="mt-4 bg-white rounded-3xl p-4">
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
          <div className="flex items-center bg-gray-100 rounded-xl px-3">
            {status.toLowerCase() === "checked-in" && (
              <div className="bg-primary rounded-full h-2 w-2 mr-2"></div>
            )}
            {status.toLowerCase() === "checked-out" && (
              <div className="bg-[#748afe] rounded-full h-2 w-2 mr-2"></div>
            )}
            <span>{status}</span>
          </div>
          <EditIcon />
          <DeleteModal />
          <ShowJobDetails jobId={id} />
        </div>
      </div>
      <div className="flex mt-6 justify-between lg:flex-row flex-col lg:gap-0 gap-5">
        <div className="flex flex-wrap gap-4 ">
          <div className="flex flex-col text-sm lg:text-lg whitespace-nowrap">
            <span className="font-bold md:text-lg">Phone number:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
              {phone_number}
            </span>
          </div>
          <div className="flex flex-col text-sm lg:text-lg whitespace-nowrap">
            <span className="font-bold md:text-lg">Date & Time:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
              {new Date(date_time).toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col text-sm whitespace-nowrap">
            <span className="font-bold md:text-lg">Service:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
              {service}
            </span>
          </div>
          <div className="flex flex-col text-sm whitespace-nowrap">
            <span className="font-bold md:text-lg">To Pay:</span>
            <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base ">
              $ {price} USD
            </span>
          </div>
        </div>
        <div className="flex flex-col whitespace-nowrap mr-4 mt-1">
          <span className="font-bold text-sm lg:text-lg">Assigned To:</span>
          <div className="flex mt-2 relative">
            {assignedUsers.slice(0, 2).map((user, index) => (
              <Image
                key={index}
                src={user.picture || "/images/user.jpeg"}
                alt="user-image"
                height={33}
                width={33}
                className={`rounded-full w-10 h-10 absolute ${
                  index === 0 ? "left-2" : "left-6"
                }`}
              />
            ))}
            <span className="mt-2 ml-20 font-semibold text-sm text-[#232324]">
              {displayEmployeeName()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignedJobCard;

