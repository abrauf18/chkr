"use client";
import React, { useState } from "react";
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
import { FeedbackInterface } from "@/lib/interfaces";
import Loader from "@/components/shared/loader";
import { format } from "date-fns";

const Feedback = ({ feedback }: { feedback: FeedbackInterface[] }) => {
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
      <Header title="Manage Customer Feedback" />
      {feedback.length > 0 ? (
        <div className="flex mobile:flex-col-reverse md:flex-row gap-4 mt-3">
          <div className="space-y-4 md:w-[60%]">
            {currentReviews.map((review) => (
              <FeedbackCard
                key={review.id}
                name={`${review.user.first_name} ${review.user.last_name}`}
                email={review.user.email}
                url={review.user.picture}
                time={format(review.createdAt, "dd MMMM yyyy, h:mm a")}
                review={review.comment}
                rating={review.rating}
              />
            ))}
            {feedback.length > reviewsPerPage && (
              <Pagination>
                <PaginationPrevious
                  className="cursor-pointer"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </PaginationPrevious>
                <PaginationContent>
                  {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        isActive={currentPage === index + 1}
                        className="cursor-pointer"
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  {totalPages > 5 && (
                    <PaginationEllipsis>...</PaginationEllipsis>
                  )}
                </PaginationContent>
                <PaginationNext
                  className="cursor-pointer"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </PaginationNext>
              </Pagination>
            )}
          </div>
          <div className="md:w-[40%]">
            <RatingSummary
              averageRating={averageRating}
              ratingDistribution={ratingDistribution}
            />
          </div>
        </div>
      ) : (
        <div className="text-center mt-12">No feedback to show</div>
      )}
    </>
  );
};

export default Feedback;

