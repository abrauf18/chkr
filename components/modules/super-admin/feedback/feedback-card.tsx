import React from 'react';
import ReviewStar from "@/assets/icons/star";
import Image from 'next/image';

interface ReviewCardProps {
  name: string;
  avatar: string;
  rating: number;
  time: string;
  reviewHeading: string;
  review: string;
}

const FeedbackCard: React.FC<ReviewCardProps> = ({ name, avatar, rating, time, reviewHeading, review }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md flex space-x-4 bg-white">
      <Image width={5} height={5} src='/images/avatar.svg' alt='user-img' className="w-12 h-12 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-gray-500 text-sm">{time}</span>
        </div>
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <ReviewStar key={i} fill={i < rating ? "#FFC107" : "#D9D9D9"} className="w-4 h-4" />
          ))}
        </div>
        <h4 className="font-semibold mt-3">{reviewHeading}</h4>
        <p className="text-gray-600 mt-2 text-sm">{review}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
