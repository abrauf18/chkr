"use client";

import React, { useEffect, useState } from "react";
import TestimonialsCard from "./TestimonialsCard";

interface Slide {
  id: number;
  feedback: string;
  authorName: string;
  companyName: string;
  rating: string;
}

function Carousel() {
  const slides: Slide[] = [
    {
      id: 1,
      feedback:
        "“CKHR is a game-changer! It's streamlined our workforce management, saved us time, and improved accuracy. Highly recommend!“",
      authorName: "John Smith",
      companyName: "XYZ Company",
      rating: "4",
    },
    {
      id: 2,
      feedback: "CKHR has made managing our team a breeze! It's user-friendly, boosts productivity, and ensures accountability.”",
      authorName: "john doe",
      companyName: "abc Company",
      rating: "4",
    },
    {
      id: 3,
      feedback: " “CKHR is a game-changer! It's streamlined our workforce management, saved us time, and improved accuracy. Highly recommend!“",
      authorName: "john doe",
      companyName: "XYZ Company",
      rating: "4",
    },
    {
      id: 4,
      feedback: "“CKHR has made managing our team a breeze! It's user-friendly, boosts productivity, and ensures accountability.”",
      authorName: "john doe",
      companyName: "abc Company",
      rating: "4",
    },
    {
      id: 5,
      feedback: "“CKHR is a game-changer! It's streamlined our workforce management, saved us time, and improved accuracy. Highly recommend!“",
      authorName: "john doe",
      companyName: "XYZ Company",
      rating: "4",
    },
    {
      id: 6,
      feedback: "“CKHR has made managing our team a breeze! It's user-friendly, boosts productivity, and ensures accountability.”",
      authorName: "john doe",
      companyName: "abc Company",
      rating: "4",
    },
  ];

  const totalSlides = 3; // Total number of slides
  const dots = Array.from({ length: 3 }); // Array of dots

  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledSlides, setShuffledSlides] = useState<Slide[]>([]);

  useEffect(() => {
    // Shuffle the slides array to get random testimonials
    setShuffledSlides(slides.sort(() => Math.random() - 0.5));
  }, []);

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
        <div className="lg:flex lg:h-[50vh] gap-12 items-center justify-center lg:mx-2 mx-5">
          {shuffledSlides
            .slice(currentIndex, currentIndex + 2)
            .map((slide, index) => (
              <div
                key={index}
                className={
                  index === 0
                    ? "lg:self-start lg:ml-2"
                    : "lg:self-center lg:mr-2"
                }
              >
                <TestimonialsCard
                  authorName={slide.authorName}
                  feedback={slide.feedback}
                  companyName={slide.companyName}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="flex mt">
        {dots.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 mx-2 rounded-full cursor-pointer ${currentIndex === index ? "bg-primary" : "bg-gray-300"
              }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
