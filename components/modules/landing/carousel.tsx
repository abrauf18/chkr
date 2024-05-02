"use client";
interface Slide {
  id: number;
  feedback: string;
  authorName: string;
  companyName: string;
  rating: string;
}

import React, { useEffect, useState } from "react";
import TestimonialsCard from "./testimonials-card";

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
      feedback:
        "CKHR has made managing our team a breeze! It's user-friendly, boosts productivity, and ensures accountability.”",
      authorName: "john doe",
      companyName: "abc Company",
      rating: "4",
    },
    {
      id: 3,
      feedback:
        " “CKHR is a game-changer! It's streamlined our workforce management, saved us time, and improved accuracy. Highly recommend!“",
      authorName: "john doe",
      companyName: "XYZ Company",
      rating: "4",
    },
    {
      id: 4,
      feedback:
        "“CKHR has made managing our team a breeze! It's user-friendly, boosts productivity, and ensures accountability.”",
      authorName: "john doe",
      companyName: "abc Company",
      rating: "4",
    },
    {
      id: 5,
      feedback:
        "“CKHR is a game-changer! It's streamlined our workforce management, saved us time, and improved accuracy. Highly recommend!“",
      authorName: "john doe",
      companyName: "XYZ Company",
      rating: "4",
    },
    {
      id: 6,
      feedback:
        "“CKHR has made managing our team a breeze! It's user-friendly, boosts productivity, and ensures accountability.”",
      authorName: "john doe",
      companyName: "abc Company",
      rating: "4",
    },
  ];

  const totalSlides = 3; // Total number of slides
  const dots = Array.from({ length: 3 }); // Array of dots
  const [transitioning, setTransitioning] = useState(false); // State to control transition

  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledSlides, setShuffledSlides] = useState<Slide[]>([]);

  useEffect(() => {
    // Shuffle the slides array to get random testimonials
    setShuffledSlides(slides.sort(() => Math.random() - 0.5));
  }, []);

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
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex top-4 justify-center py-2 mt-5">
        <div className="lg:flex lg:h-[50vh] gap-12 items-center justify-center lg:mx-2 mx-5 testimonial-container">
          {shuffledSlides
            .slice(currentIndex, currentIndex + 2)
            .map((slide, index) => (
              <div
                key={index}
                className={`lg:self-${index === 0 ? "start" : "center"} 
                lg:ml-${index === 0 ? "2" : "0"} 
                ${transitioning ? "opacity-0" : "opacity-100"
                  }`}
                style={{
                  transition: "opacity 1s ease-in",
                }}
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

