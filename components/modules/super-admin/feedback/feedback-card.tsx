import React from "react";
import ReviewStar from "@/assets/icons/star";
import Image from "next/image";
import DeleteModal from "@/components/shared/delete-modal";
import { Archive, ArchiveRestore } from "lucide-react";
import { UpdateFeedbackStatusAction } from "@/actions/feedback/feedback-action";
import action from "@/app/action";

interface ReviewCardProps {
  reviewId: number;
  name: string;
  email: string;
  url: string;
  rating: number;
  time: string;
  review: string;
  isArchive: boolean;
}

const FeedbackCard: React.FC<ReviewCardProps> = ({
  reviewId,
  name,
  email,
  url,
  rating,
  time,
  review,
  isArchive,
}) => {

  const handleFeedbackStatus = () => {
    try {
      UpdateFeedbackStatusAction(reviewId, !isArchive);
      action("getFeedbacks");
    } catch (error) {
      console.error("Failed to update status:", error);
      // Optionally, you can show an error message to the user here
    }
  }

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
              className={`p-2 ${isArchive ? `bg-orange-200` : `bg-green-200`} rounded-lg cursor-pointer`}
              onClick={handleFeedbackStatus}
            >
              {isArchive ? <Archive color="orange" /> : <ArchiveRestore color="green" />}
            </div>
            <DeleteModal userId={0} feedbackId={reviewId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;

