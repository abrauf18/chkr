interface PlanCardProps {
  title: string;
  price: number;
  description: string;
}

import CheckmarkCircle from "@/assets/icons/checkmark-circle";
import React from "react";

const PlanCard: React.FC<PlanCardProps> = ({ title, price, description }) => {
  return (
    <div className="overflow-hidden w-full mx-auto mb-3">
      <div className="flex justify-between p-2">
        <div className="flex-col">
          <h3 className="md:text-lg  font-bold mobile:text-left">{title}</h3>
          <span className="text-gray-500 text-xs md:text-sm ">
            select one subscription plan
          </span>
        </div>
        <div className="flex flex-col">
          <span className="md:text-lg  font-semibold">$ {price} USD</span>
          <span className="text-gray-500 text-xs md:text-sm text-end">
            per month
          </span>
        </div>
      </div>
      <ul className="list-disc space-y-2 text-gray-700 p-4 mobile:text-left">
        <li className="flex items-center">
          <CheckmarkCircle className="mr-1" />
          <span className="text-gray-400 text-sm ">{description}</span>
        </li>
        <li className="flex items-center">
          <CheckmarkCircle className="mr-1" />
          <span className="text-gray-400 text-sm ">
            Unlimited Collaboration Project Team
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PlanCard;

