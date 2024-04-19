import React from 'react'
import bg from "@/app/assets/images/Testimonials.svg";
import { Button } from "@/app/components/ui/button";
import Image from 'next/image';
import user from "@/app/assets/icons/testUser.svg";
import user1 from "@/app/assets/icons/testUser1.svg";
import dots from "@/app/assets/icons/dots.svg";

const Testimonials = () => {
    return (
        <div className="mt-10 mx-10  rounded-2xl ">
            <div
                className="bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${bg.src})`,
                }}
            >

                <div className="flex flex-col pt-20 pb-10 xl:mx-24 md:mx-10 justify-center items-center gap-4 text-white">
                    <h1 className="xl:font-semibold xl:text-4xl capitalize md:font-semibold md:text-3xl text-center">
                        See What our users says
                    </h1>
                    <p className="xl:text-2xl lg:text-xl md:text-lg md:font-medium text-center">
                        Discover the stories of success and satisfaction from our
                        satisfied customers.
                    </p>
                </div>
                <div className='grid  border border-black md:grid-cols-1 xl:grid-cols-2 h-screen '>
                    <div className='md:w-[40%] xl:w-[73%] xl:h-[20rem]  bg-white rounded-2xl p-8 xl:ml-20 mt-10' >
                        <p className='font-normal text-2xl'>“CKHR is a game-changer! It's streamlined our workforce management, saved us time, and improved accuracy. Highly recommend!“</p>
                        <div className='flex mt-4 justify-between items-center'>
                            <div >
                                <span className='text-xl font-semibold	'>- John Smith</span>
                                <p className='ml-3 text-base font-medium'>CEO, XYZ Company</p>
                            </div>
                            <Image src={user} alt="user icon" className='h-14 w-14' />
                        </div>
                    </div>
                    <div className='md:w-[40%] xl:w-[75%] xl:h-[20rem]  bg-white rounded-2xl p-8 md:ml-40 xl:ml-[10rem] xl:mt-20 md:mt-[5rem]' >
                        <p className='font-normal text-2xl'>“CKHR has made managing our team a breeze! It's user-friendly, boosts productivity, and ensures accountability.”</p>
                        <div className='flex mt-4 justify-between items-center'>
                            <div >
                                <span className='text-xl font-semibold	'>- Emiley Johnson</span>
                                <p className='ml-3 text-base font-medium'>HR Manager, ABC Company</p>
                            </div>
                            <Image src={user1} alt="user icon" className='h-14 w-14' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-20'>
                    <Image src={dots} alt="user icon" className='h-14 w-14' />
                </div>
            </div>
        </div >
    )
}

export default Testimonials
