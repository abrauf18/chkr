import React from 'react';
import Image from 'next/image';
import { Button } from "@/app/components/ui/button";
import check from "@/app/assets/icons/checkmark.svg"


interface IconTextProps {
    text: string;
}

const IconText: React.FC<IconTextProps> = ({ text }) => {
    return (
        <div className="flex items-center mb-2">
            <Image src={check} alt="Checkmark" width={12} height={12} className="w-3 h-3 mr-2" />
            <span className="font-medium text-base">{text}</span>
        </div>
    );
}

interface PlanCardProps {
    monthlyHeading: string;
    monthlyPrice: string;
    buttonText: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ monthlyHeading, monthlyPrice, buttonText }) => {
    // Define the array of length 5 to map over
    const data = Array.from({ length: 5 });

    return (
        <div className='flex flex-col p-2 rounded-2xl w-1/2 text-black hover:text-white text-center items-center bg-gray-200 hover:bg-[#212123]'>
            <div>
                <h3 className="font-normal text-lg mt-4">{monthlyHeading}</h3>
                <h1 className="font-bold text-2xl mt-4 mb-6 xl:mb-8">{monthlyPrice}</h1>
                <hr className='my-6' />
            </div>
            {data.map((_, index) => (
                <IconText key={index} text="Unlimited Collaboration Project Team" />
            ))}
            <Button className="w-3/4 py-4 text-black mt-10 mb-10 xl:mt-10 border border-white bg-transparent hover:bg-primary hover:text-white rounded-3xl">
                {buttonText}
            </Button>
        </div>
    );
}

export default PlanCard;
