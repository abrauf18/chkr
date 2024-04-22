"use client";

import React, { useEffect, useState } from "react";
import TestimonialsCard from "./TestimonialsCard";

function Carousel() {
  const slides = [
    {
      id: 1,
      feedback: "lorrum ips",
      authorName: "john doe",
      companyName: "XYZ Company",
      Rating: "4",
    },
    {
      id: 2,
      feedback: "sfsd",
      authorName: "john doe",
      companyName: "XYZ Company",
      Rating: "4",
    },
    {
      id: 3,
      feedback: "1231",
      authorName: "john doe",
      companyName: "XYZ Company",
      Rating: "4",
    },
    {
      id: 4,
      feedback: "23123",
      authorName: "john doe",
      companyName: "XYZ Company",
      Rating: "4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(slides.length / 2); // Calculate total number of slides

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex top-4 justify-center py-2 mt-5">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`mx-2 ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex">
              {slides.slice(index * 2, index * 2 + 2).map((slide) => (
                <div key={slide.id} className="mx-2">
                  <TestimonialsCard
                    authorName={slide.authorName}
                    feedback={slide.feedback}
                    companyName={slide.companyName}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
