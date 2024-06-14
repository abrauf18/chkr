'use client'
import React, { useState } from 'react';
import FeedbackCard from './feedback-card';
import RatingSummary from './feedback-summary';
import Header from '@/components/shared/header';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const reviews = [
  {
    name: 'Jacob Jones',
    avatar: 'https://via.placeholder.com/150',
    rating: 4,
    time: '8 hours ago',
    reviewHeading: 'Good Experience !',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis libero id ipsum sollicitudin. a ornare nisl scelerisque. Quisque lobortis nibh eget odio viverra, pulvinar ultricies dui auctor. Quisque malesuada fringilla scelerisque.',
  },
  {
    name: 'Aviv Geffen',
    avatar: 'https://via.placeholder.com/150',
    rating: 4,
    time: '8 hours ago',
    reviewHeading: 'Good Experience !',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    name: 'Esther Howard',
    avatar: 'https://via.placeholder.com/150',
    rating: 4,
    time: '8 hours ago',
    reviewHeading: 'Good Experience !',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    name: 'Esther Howard',
    avatar: 'https://via.placeholder.com/150',
    rating: 3,
    time: '8 hours ago',
    reviewHeading: 'Satisfactory Experience !',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    name: 'Esther Howard',
    avatar: 'https://via.placeholder.com/150',
    rating: 1,
    time: '8 hours ago',
    reviewHeading: 'Satisfactory Experience !',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    name: 'Esther Howard',
    avatar: 'https://via.placeholder.com/150',
    rating: 1,
    time: '8 hours ago',
    reviewHeading: 'Satisfactory Experience !',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
];

const Feedback: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentReviews = reviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  const ratingDistribution = [0, 0, 0, 0, 0];
  reviews.forEach(review => {
    ratingDistribution[5 - review.rating]++;
  });

  return (
    <>
      <Header title='Manage Customers Feedback' />
      <div className='flex mobile:flex-col-reverse md:flex-row gap-4 mt-3'>
        <div className="space-y-4 md:w-[60%]">
          {currentReviews.map((review, index) => (
            <FeedbackCard key={index} {...review} />
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
              {totalPages > 5 && (
                <PaginationEllipsis>
                  ...
                </PaginationEllipsis>
              )}
            </PaginationContent>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </PaginationNext>
          </Pagination>
        </div>
        <div className='md:w-[40%]'>
          <RatingSummary averageRating={averageRating} ratingDistribution={ratingDistribution} />
        </div>
      </div>
    </>
  );
};

export default Feedback;
