interface PlanCardProps {
  title: string;
  price: number;
  features: string[];
  timePeriod: string;
}

import React from "react";
import CheckmarkCircle from "@/assets/icons/checkmark-circle";

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  features,
  timePeriod,
}) => {
  const formattedPrice = price.toFixed(2);

  return (
    <div className="overflow-hidden w-full mx-auto mb-4">
      <div className="flex justify-between p-4">
        <div className="flex-col">
          <h3 className="md:text-lg whitespace-nowrap font-semibold mobile:text-left">{title}</h3>
          <span className="text-gray-500 text-xs md:text-sm whitespace-nowrap">
            select one subscription plan
          </span>
        </div>
        <div className="flex flex-col">
          <span className="md:text-lg whitespace-nowrap font-semibold">$ {formattedPrice} USD</span>
          <span className="text-gray-500 text-xs md:text-sm">per {timePeriod}</span>
        </div>
      </div>

      <ul className="list-disc space-y-2 text-gray-700 p-4 mobile:text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckmarkCircle className="w-8 h-8 md:w-4 md:h-4 mr-2" />
            <span className="text-gray-400 text-sm">
              Feature {index + 1}: {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanCard;

