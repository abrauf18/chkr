"use client";
interface Feedbacks {
  id: number;
  comment: string;
  user: {
    first_name: string;
    last_name: string;
    picture: string;
    role: string;
    email: string;
    company: {
      company_name: string;
    };
  };
  rating: number;
}

import React, { useEffect, useState } from "react";
import TestimonialsCard from "./testimonials-card";

function Carousel({ feedbacks }: { feedbacks: Feedbacks[] }) {
  const slidesToShow = feedbacks.length > 6 ? 3 : 2;
  const totalSlides = Math.ceil(feedbacks.length / slidesToShow);
  const dots = Array.from({ length: totalSlides });
  const [transitioning, setTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledSlides, setShuffledSlides] = useState<Feedbacks[]>([]);

  useEffect(() => {
    setShuffledSlides([...feedbacks].sort(() => Math.random() - 0.5));
  }, [feedbacks]);

  const nextSlide = () => {
    if (!transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % totalSlides);
        setTransitioning(false);
      }, 1000);
    }
  };

  const goToSlide = (slideIndex: number) => {
    if (!transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(slideIndex);
        setTransitioning(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, totalSlides]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex top-4 justify-center py-2">
        <div className="gap-12 items-center justify-center lg:mx-2 mx-5 testimonial-container">
          {shuffledSlides
            .slice(
              currentIndex * slidesToShow,
              currentIndex * slidesToShow + slidesToShow
            )
            .map((slide, index) => (
              <div
                key={index}
                className={`lg:self-${index === 0 ? "start" : "center"} 
                lg:ml-${index === 0 ? "2" : "0"} 
                ${transitioning ? "opacity-0" : "opacity-100"}`}
                style={{
                  transition: "opacity 1s ease-in",
                }}
              >
                <TestimonialsCard
                  authorName={`${slide.user.first_name} ${slide.user.last_name}`}
                  feedback={slide.comment}
                  companyName={slide.user.company.company_name}
                  picture={slide.user.picture}
                  rating={slide.rating}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="flex">
        {dots.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;

