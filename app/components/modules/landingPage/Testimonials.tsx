import React from 'react'
import bg from "@/app/assets/images/Testimonials.svg";
import Image from 'next/image';
import user from "@/app/assets/icons/testUser.svg";
import user1 from "@/app/assets/icons/testUser1.svg";
import TestimonialsCard from './TestimonialsCard';
import Carousel from './Carousel';

const Testimonials = () => {

    return (

        <div className=" mt-10 mx-10 rounded-2xl h-full md:h-[80rem] border border-black ">

            <div className="w-full md:h-[40vh] py-2 rounded-2xl" style={{ background: "linear-gradient(to bottom, #FF4115 0%, #FBEB97 30%, #F9F8F8 50%, #FFFFFF 100%)" }}>
                <div className="flex flex-col pt-2 pb-10 xl:mx-24 md:mx-10 justify-center items-center gap-4 text-white">
                    <h1 className="xl:font-semibold xl:text-4xl capitalize md:font-semibold md:text-3xl text-center">
                        See What our users says
                    </h1>
                    <p className="xl:text-2xl lg:text-xl md:text-lg md:font-medium text-center">
                        Discover the stories of success and satisfaction from our
                        satisfied customers.
                    </p>
                </div>
                {/* <Carousel /> */}
            </div>
        </div >

    )
}

export default Testimonials
