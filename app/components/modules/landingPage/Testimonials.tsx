import React from 'react'
import bg from "@/app/assets/images/Testimonials.svg";
import Image from 'next/image';
import user from "@/app/assets/icons/testUser.svg";
import user1 from "@/app/assets/icons/testUser1.svg";
import TestimonialsCard from './TestimonialsCard';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/components/ui/carousel"

const Testimonials = () => {
    return (

        <div className=" mt-10 mx-10 rounded-2xl h-full ">
            <div
                className="bg-no-repeat h-screen bg-cover flex flex-col items-center  py-10 "
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

                <Carousel className="w-3/4">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <TestimonialsCard
                                        review="CKHR has made managing our team a breeze! It's user-friendly, boosts productivity, and ensures accountability."
                                        authorName="Emiley Johnson"
                                        companyName="ABC company"
                                    />
                                    <div className='ml-[20rem]'>
                                        <TestimonialsCard
                                            review="CKHR has made managing our team a breeze! It's user-friendly, boosts productivity, and ensures accountability."
                                            authorName="Emiley Johnson"
                                            companyName="ABC company"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </div >

    )
}

export default Testimonials
