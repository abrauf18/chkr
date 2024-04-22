"use client"
import React, { useState } from "react";
import TestimonialsCard from "./TestimonialsCard";
import { Dot } from "lucide-react";
interface CarouselProps {
    children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = () => {

    return (
        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className='flex xl:flex-row md:flex-col flex-col h-screen p-10 '>
                        <div className='xl:self-start md:w-3/4 lg:w-[65%] xl:w-[73%] xl:h-[16rem] lg:h-[15rem] md:h-[13rem]' >
                            <TestimonialsCard
                                review="“CKHR is a game-changer! It's streamlined our workforce management, saved us time, and improved accuracy. Highly recommend!“"
                                authorName="- John Smith"
                                companyName="xyz Company" />
                        </div>
                        <div className=" md:w-3/4 lg:w-[65%] xl:w-[73%] xl:h-[16rem] lg:h-[15rem] md:h-[13rem] md:ml-40 lg:ml-72 xl:ml-6 md:mt-[5rem] xl:mt-44 ">
                            <TestimonialsCard
                                review="“CKHR has made managing our team a breeze! It's user-friendly, boosts productivity, and ensures accountability.”"
                                authorName="- Emiley Johnson"
                                companyName="ABC Company" />
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className='flex xl:flex-row md:flex-col flex-col h-screen p-10 '>
                        <div className='xl:self-start md:w-3/4 lg:w-[65%] xl:w-[73%] xl:h-[16rem] lg:h-[15rem] md:h-[13rem]' >
                            <TestimonialsCard
                                review="“CKHR is a game-changer! It's streamlined our workforce management, saved us time, and improved accuracy. Highly recommend!“"
                                authorName="- John Smith"
                                companyName="xyz Company" />
                        </div>
                        <div className=" md:w-3/4 lg:w-[65%] xl:w-[73%] xl:h-[16rem] lg:h-[15rem] md:h-[13rem] md:ml-40 lg:ml-72 xl:ml-6 md:mt-[5rem] xl:mt-44 ">
                            <TestimonialsCard
                                review="“CKHR has made managing our team a breeze! It's user-friendly, boosts productivity, and ensures accountability.”"
                                authorName="- Emiley Johnson"
                                companyName="ABC Company" />
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className='flex xl:flex-row md:flex-col flex-col h-screen p-10 '>
                        <div className='xl:self-start md:w-3/4 lg:w-[65%] xl:w-[73%] xl:h-[16rem] lg:h-[15rem] md:h-[13rem]' >
                            <TestimonialsCard
                                review="“CKHR is a game-changer! It's streamlined our workforce management, saved us time, and improved accuracy. Highly recommend!“"
                                authorName="- John Smith"
                                companyName="xyz Company" />
                        </div>
                        <div className=" md:w-3/4 lg:w-[65%] xl:w-[73%] xl:h-[16rem] lg:h-[15rem] md:h-[13rem] md:ml-40 lg:ml-72 xl:ml-6 md:mt-[5rem] xl:mt-44 ">
                            <TestimonialsCard
                                review="“CKHR has made managing our team a breeze! It's user-friendly, boosts productivity, and ensures accountability.”"
                                authorName="- Emiley Johnson"
                                companyName="ABC Company" />
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div className='flex xl:flex-row md:flex-col flex-col h-screen p-10 '>
                        <div className='xl:self-start md:w-3/4 lg:w-[65%] xl:w-[73%] xl:h-[16rem] lg:h-[15rem] md:h-[13rem]' >
                            <TestimonialsCard
                                review="“CKHR is a game-changer! It's streamlined our workforce management, saved us time, and improved accuracy. Highly recommend!“"
                                authorName="- John Smith"
                                companyName="xyz Company" />
                        </div>
                        <div className=" md:w-3/4 lg:w-[65%] xl:w-[73%] xl:h-[16rem] lg:h-[15rem] md:h-[13rem] md:ml-40 lg:ml-72 xl:ml-6 md:mt-[5rem] xl:mt-44 ">
                            <TestimonialsCard
                                review="“CKHR has made managing our team a breeze! It's user-friendly, boosts productivity, and ensures accountability.”"
                                authorName="- Emiley Johnson"
                                companyName="ABC Company" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-1">
                <a href="#item1" className="btn btn-xs"><Dot /></a>
                <a href="#item2" className="btn btn-xs"><Dot /></a>
                <a href="#item3" className="btn btn-xs"><Dot /></a>
                <a href="#item4" className="btn btn-xs"><Dot /></a>
            </div>
        </>
    );
};

export default Carousel;
