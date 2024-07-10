"use client";
import React, { useEffect, useState } from "react";
import FeedbackCard from "./feedback-card";
import RatingSummary from "./feedback-summary";
import Header from "@/components/shared/header";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { GetAllFeedbacksAction } from "@/actions/feedback/feedback-action";
import { FeedbackInterface } from "@/lib/interfaces";
import action from "@/app/action";

const Feedback: React.FC = () => {
  const [feedback, setFeedback] = useState<FeedbackInterface[]>([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response: FeedbackInterface[] = await GetAllFeedbacksAction();
        setFeedback(response);
        action("getFeedbacks");
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };
    fetchFeedback();
  }, []);

  console.log(feedback);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  const totalPages = Math.ceil(feedback.length / reviewsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentReviews = feedback.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  const averageRating =
    feedback.reduce((acc, review) => acc + review.rating, 0) / feedback.length;

  const ratingDistribution = [0, 0, 0, 0, 0];
  feedback.forEach((review) => {
    ratingDistribution[5 - review.rating]++;
  });
  return (
    <>
      <Header title="Manage Customers Feedback" />
      {currentReviews.length === 0 ? (
        <div className="text-center mt-12">No feedback to display</div>
      ) : (
        <div className="flex mobile:flex-col-reverse md:flex-row gap-4 mt-3">
          <div className="space-y-4 md:w-[60%]">
            {currentReviews.map((review) => (
              <FeedbackCard
                key={review.id}
                name={`${review.user.first_name} ${review.user.last_name}`}
                url={review.user.picture}
                time={new Date(review.createdAt).toLocaleDateString()}
                review={review.comment}
                rating={review.rating}
              />
            ))}
            <Pagination>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </PaginationPrevious>
              <PaginationContent>
                {[...Array(totalPages)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      isActive={currentPage === index + 1}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                {totalPages > 5 && <PaginationEllipsis>...</PaginationEllipsis>}
              </PaginationContent>
              <PaginationNext onClick={() => handlePageChange(currentPage + 1)}>
                Next
              </PaginationNext>
            </Pagination>
          </div>
          <div className="md:w-[40%]">
            <RatingSummary
              averageRating={averageRating}
              ratingDistribution={ratingDistribution}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Feedback;

