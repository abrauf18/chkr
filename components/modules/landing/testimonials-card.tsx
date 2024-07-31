interface TestimonialsCardProps {
  feedback: string;
  authorName: string;
  companyName: string;
  picture: string;
  rating: number;
}

import React from "react";
import Image from "next/image";
import ReviewStar from "@/assets/icons/star";

const TestimonialsCard: React.FC<TestimonialsCardProps> = ({
  feedback,
  authorName,
  companyName,
  picture,
  rating,
}) => {
  return (
    <div>
      <div className="w-full bg-white rounded-2xl p-8 mb-5">
        <div>
          <p className="font-normal lg:text-2xl  md:text-lg">{feedback}</p>
          <div className="flex mt-4 justify-between items-center gap-2">
            <div className="flex flex-col justify-start">
              <div className="flex items-center gap-1">
                <span className="lg:text-xl md:text-lg font-semibold capitalize">
                  {authorName}
                </span>
                <span className=" text-sm font-normal capitalize">
                  ( {companyName} )
                </span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <ReviewStar
                    key={i}
                    fill={i < rating ? "#FFC107" : "#D9D9D9"}
                    className="w-4 h-4"
                  />
                ))}
              </div>
            </div>
            <Image
              src={picture}
              alt="user icon"
              width={33}
              height={33}
              className=" h-10 w-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;

