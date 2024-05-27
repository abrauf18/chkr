import React from 'react';
import ReviewStar from "@/assets/icons/star";

interface RatingSummaryProps {
  averageRating: number;
  ratingDistribution: number[];
}

const RatingSummary: React.FC<RatingSummaryProps> = ({ averageRating, ratingDistribution }) => {
  const maxCount = Math.max(...ratingDistribution);
  return (
    <div className="p-4 border rounded-lg shadow-md text-center bg-white">
      <div className="text-[64px] font-bold">{averageRating.toFixed(1)}</div>
      <div className="flex justify-center mt-1">
        {[...Array(5)].map((_, i) => (
          <ReviewStar key={i} fill={i < Math.round(averageRating) ? "#FFC107" : "#D9D9D9"} className="w-5 h-5 mx-0.5" />
        ))}
      </div>
      <div className="text-gray-500 mt-2">Average Response</div>
      <div className="mt-4">
        {ratingDistribution.map((count, index) => (
          <div key={index} className="flex items-center my-1">
            <div className="w-8 text-right text-gray-600">{5 - index}</div>
            <div className="flex-1 mx-2 bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#FFC107] h-full"
                style={{ width: `${(count / maxCount) * 100}%` }}
                aria-label={`Rating ${5 - index} stars: ${count} users`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSummary;
