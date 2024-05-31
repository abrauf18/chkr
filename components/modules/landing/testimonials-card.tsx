interface TestimonialsCardProps {
  feedback: string;
  authorName: string;
  companyName: string;
}

import React from "react";
import Image from "next/image";
import Star from "@/assets/icons/stars-icon";
import user1 from "@/public/images/testUser1.svg";

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  feedback,
  authorName,
  companyName,
}) => {
  return (
    <div>
      <div className="w-full bg-white rounded-2xl p-8 mb-5">
        <p className="font-normal lg:text-2xl  md:text-lg">{feedback}</p>
        <div className="flex mt-4 justify-between items-center">
          <div className="flex flex-col justify-start">
            <div className="flex gap-1">
              <span className="lg:text-xl md:text-lg font-semibold capitalize">
                {authorName}
              </span>
              <span className="lg:text-lg md:text-base text-sm font-normal capitalize">
                ( {companyName} )
              </span>
            </div>
            <Star className="ml-4 h-[2rem] w-[6rem]" />
          </div>
          <Image src={user1} alt="user icon" className=" h-14 w-14" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;

