import React from "react";
import ReviewStar from "@/assets/icons/star";
import Image from "next/image";

interface ReviewCardProps {
  name: string;
  url: string;
  rating: number;
  time: string;
  review: string;
}

const FeedbackCard: React.FC<ReviewCardProps> = ({
  name,
  url,
  rating,
  time,
  review,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md flex space-x-4 bg-white">
      <Image
        width={33}
        height={33}
        src={url}
        alt="user-img"
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-gray-500 text-sm">{time}</span>
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
        <p className="text-gray-600 mt-2 text-sm">{review}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;

