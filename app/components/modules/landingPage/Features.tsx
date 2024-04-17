import React from 'react';
import arrorw from "@/app/assets/icons/arrow.svg";
import Image from 'next/image';
import featuresImg from "@/app/assets/images/featuresImg.png"
import featuresImg1 from "@/app/assets/images/featuresImg1.png"

const Features = () => {
    return (
        <div>
            <div className='flex flex-col xl:mx-24 md:mx-10 justify-center items-center gap-4'>
                <h1 className='xl:font-semibold xl:text-4xl md:font-semibold md:text-3xl text-center'>Efficiency Unleashed: Explore Our Tools</h1>
                <p className='xl:text-2xl lg:text-xl md:text-lg md:font-medium text-center'>Explore the robust features of CHKR designed to streamline employee check-ins, task assignments, and management with ease and efficiency.</p>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 xl:mx-24 md:mx-10 mt-20 md:gap-6'>
                <div style={{ position: 'relative', backgroundImage: 'linear-gradient(to right, #FF2600, #FBEB97)' }} className="w-[85%] h-full rounded-tr-[12rem] rounded-bl-[12rem] overflow-hidden">
                    <div className=" w-[14rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Image src={featuresImg} alt="Center Image" />
                    </div>
                    {/* Image starting from center and extending outwards to the right */}
                    <div className="absolute w-[30rem] top-1/2 left-1/2 transform -translate-y-1/2">
                        <Image src={featuresImg} alt="Right Image" />
                    </div>
                </div>


                <div className='flex flex-col gap-6'>
                    <div>
                        <Image
                            src={arrorw}
                            alt="AboutIcon"
                            className="xl:w-[4rem] xl:h-[4rem] mr-2 md:w-[3.5rem] md:h-[3rem] sm:w-[1rem] sm:h-[1rem] w-[1rem] h-[1rem]"
                        />
                        <h2 className='xl:text-3xl md:text-lg md:font-bold mt-2'>Employee Checkin/Checkout</h2>
                        <p className='xl:text-2xl md:text-base my-4'>Employees can easily clock in and out of their tasks, keeping track of their work time effortlessly.</p>
                        <hr />
                    </div>
                    <div>
                        <Image
                            src={arrorw}
                            alt="AboutIcon"
                            className="xl:w-[4rem] xl:h-[4rem] mr-2 md:w-[3.5rem] md:h-[3rem] sm:w-[1rem] sm:h-[1rem] w-[1rem] h-[1rem]"
                        />
                        <h2 className='xl:text-3xl md:text-lg md:font-bold mt-2'>Task Assignment</h2>
                        <p className='xl:text-2xl md:text-base mt-2 my-4'>Assign tasks to your team members within the app, making it simple to delegate responsibilities and keep everyone on the same page.</p>
                        <hr />
                    </div>
                    <div>
                        <Image
                            src={arrorw}
                            alt="AboutIcon"
                            className="xl:w-[4rem] xl:h-[4rem] mr-2 md:w-[3.5rem] md:h-[3rem] sm:w-[1rem] sm:h-[1rem] w-[1rem] h-[1rem]"
                        />
                        <h2 className='xl:text-3xl md:text-lg md:font-bold mt-2'>Task Management</h2>
                        <p className='xl:text-2xl md:text-base mt-2 my-4'>Stay organized by tracking and overseeing tasks efficiently, ensuring that everything gets done smoothly and on time.</p>
                        <hr />
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Features;
