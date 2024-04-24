import React from "react";
import Image from "next/image";
import star from "@/assets/icons/stars.svg";
import user1 from "@/assets/icons/testUser1.svg";

interface TestimonialsCardProps {
  feedback: string;
  authorName: string;
  companyName: string;
}

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  feedback,
  authorName,
  companyName,
}) => {
  return (
    <div>
      <div className="md:w-full  bg-white rounded-2xl p-8 mb-5 ">
        <p className="font-normal lg:text-2xl  md:text-lg">{feedback}</p>
        <div className="flex mt-4 justify-between items-center">
          <div className="flex flex-col justify-start">
            <div className="flex">
              <span className="lg:text-xl md:text-lg font-semibold">
                {authorName}
              </span>
              <span className="lg:text-lg md:text-base font-normal">
                ({companyName})
              </span>
            </div>
            <Image src={star} alt="stars" className="ml-4 h-[2rem] w-[6rem]" />
          </div>
          <Image src={user1} alt="user icon" className=" h-14 w-14" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;

