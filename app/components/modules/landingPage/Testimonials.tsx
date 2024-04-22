import React from 'react'
import bg from "@/app/assets/images/Testimonials.svg";
import Image from 'next/image';
import user from "@/app/assets/icons/testUser.svg";
import user1 from "@/app/assets/icons/testUser1.svg";
import TestimonialsCard from './TestimonialsCard';
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/app/components/ui/carousel"
import Carousel from './Carousel';

const Testimonials = () => {
    return (

        <div className=" mt-10 mx-10 rounded-2xl h-full border border-black ">
            <div
                className="bg-no-repeat h-screen md:h-[70rem] flex flex-col items-center  py-10 "
                style={{
                    backgroundImage: `url(${bg.src})`,
                }}
            >

                <div className="flex flex-col pt-2 pb-10 xl:mx-24 md:mx-10 justify-center items-center gap-4 text-white">
                    <h1 className="xl:font-semibold xl:text-4xl capitalize md:font-semibold md:text-3xl text-center">
                        See What our users says
                    </h1>
                    <p className="xl:text-2xl lg:text-xl md:text-lg md:font-medium text-center">
                        Discover the stories of success and satisfaction from our
                        satisfied customers.
                    </p>
                </div>
                <Carousel />

                {/*                     
                </Carousel> */}
            </div>
        </div >

    )
}

export default Testimonials
