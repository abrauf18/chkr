import React from "react";
import ReviewStar from "@/assets/icons/star";
import Image from "next/image";
import DeleteModal from "@/components/shared/delete-modal";
import { Archive, ArchiveRestore } from "lucide-react";

interface ReviewCardProps {
  name: string;
  email: string;
  url: string;
  rating: number;
  time: string;
  review: string;
}

const FeedbackCard: React.FC<ReviewCardProps> = ({
  name,
  email,
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
        <div className="flex items-center justify-between flex-wrap">
          <h3 className="text-lg font-semibold">
            {name} <span className="text-sm">({email})</span>
          </h3>
          <span className="text-gray-500 sm:text-sm text-xs">{time}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
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
          <div className="flex items-center justify-center gap-2">
            <div
              className="p-2 bg-orange-200 rounded-lg cursor-pointer"
              // onClick={handleArchive}
            >
              <Archive color="orange" />
            </div>
            <DeleteModal userId={0} feedbackId={0} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;

