import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import check from "@/assets/icons/checkmark.svg";

interface IconTextProps {
  text: string;
}

const IconText: React.FC<IconTextProps> = ({ text }) => {
  return (
    <div className="flex justify-center items-center mb-2">
      <Image
        src={check}
        alt="Checkmark"
        width={12}
        height={12}
        className="w-3 h-3 mr-2"
      />
      <span className="font-medium text-base">{text}</span>
    </div>
  );
};

interface PlanCardProps {
  monthlyHeading: string;
  monthlyPrice: string;
  buttonText: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  monthlyHeading,
  monthlyPrice,
  buttonText,
}) => {
  // Define the array of length 5 to map over
  const data = Array.from({ length: 5 });

  return (
    <div className="flex flex-col p-2 rounded-2xl w-full text-center bg-gray-200 hover:text-white hover:bg-[#212123]">
      <div>
        <h3 className="font-normal text-lg mt-4 text-[#6C7275]">
          {monthlyHeading}
        </h3>
        <h1 className="font-bold text-2xl mt-4 mb-6 xl:mb-8">{monthlyPrice}</h1>
        <hr className="my-10 border-t-2 border-gray-400 w-[90%] ml-6" />
      </div>
      {data.map((_, index) => (
        <IconText key={index} text="Unlimited Collaboration Project Team" />
      ))}
      <div className="flex justify-center items-center">
        <Button className="w-3/4 py-4 text-white font-semibold mt-10 mb-10 xl:mt-10 border border-white bg-primary rounded-3xl hover:bg-transparent">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PlanCard;

