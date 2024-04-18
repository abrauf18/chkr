import React from 'react'
import bg from "@/app/assets/images/Testimonials.svg";
import { Button } from "@/app/components/ui/button";


const Testimonials = () => {
    return (
        <div className='mt-20 mx-10  rounded-2xl'>
            <div className="flex mt-6 justify-center bg-no-repeat md:bg-center "
                style={{
                    backgroundImage: `url(${bg.src})`,

                }}
            >
                <div className='flex flex-col xl:mx-24 lg:py-10 md:mx-16 items-center gap-4 text-white'>
                    <div className='flex flex-col xl:mx-24 md:mx-10 justify-center items-center gap-4'>
                        <h1 className='xl:font-semibold xl:text-4xl capitalize md:font-semibold md:text-3xl text-center'>See What our users says</h1>
                        <p className='xl:text-2xl lg:text-xl md:text-lg md:font-medium text-center'>Discover the stories of success and satisfaction from our satisfied customers.</p>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Testimonials
