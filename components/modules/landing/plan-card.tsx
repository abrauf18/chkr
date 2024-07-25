import React from "react";
import { Button } from "@/components/ui/button";
import Checkmark from "@/assets/icons/checkmark-icon";

interface IconTextProps {
  text: string;
}

const IconText: React.FC<IconTextProps> = ({ text }) => {
  return (
    <ul className="flex justify-center items-center mb-2 gap-2">
      <li className="font-medium text-center">{text}</li>
    </ul>
  );
};

interface PlanCardProps {
  monthlyHeading: string;
  monthlyPrice: string;
  buttonText: string;
  description?: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  monthlyHeading,
  monthlyPrice,
  buttonText,
  description,
}) => {
  return (
    <div className="flex flex-col p-6 rounded-2xl w-full text-center bg-gray-200 hover:text-white hover:bg-[#212123]">
      <div>
        <h3 className="font-normal text-lg mt-4 text-[#6C7275]">
          {monthlyHeading}
        </h3>
        <h1 className="font-bold text-2xl mt-4 mb-6 xl:mb-8">{monthlyPrice}</h1>
        <hr className="my-10 border-t-2 border-gray-400 w-[90%] mx-auto" />
      </div>
      <div className="flex justify-center">
        <div>
          <ul className="pl-5 text-start">
            <li className="!list-disc">Unlimited Collaboration Project Team</li>
            <li className="!list-disc">{description}</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Button className="w-full mx-6 py-3 px-8 text-white font-semibold mt-10 mb-6 border border-white bg-primary rounded-[50px] hover:bg-transparent">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PlanCard;

