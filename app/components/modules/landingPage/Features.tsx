import React from 'react';
import Image from 'next/image';
import arrow from "@/app/assets/icons/arrow (1).svg";
import featuresImg from "@/app/assets/images/featuresImg.png"
import featuresImg1 from "@/app/assets/images/featuresImg1.png"

const Features = () => {
    return (
        <div className='bg-white pt-10'>
            <div className='flex flex-col xl:mx-24 md:mx-10 justify-center items-center gap-4'>
                <h1 className='xl:font-semibold xl:text-4xl md:font-semibold md:text-3xl text-center'>Efficiency Unleashed: Explore Our Tools</h1>
                <p className='xl:text-2xl lg:text-xl md:text-lg md:font-medium text-center'>Explore the robust features of CHKR designed to streamline employee check-ins, task assignments, and management with ease and efficiency.</p>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xl:mx-24 md:mx-10 mt-20 md:gap-6 lg:gap-14'>
                <div style={{ backgroundImage: 'linear-gradient(to right, #FF2600, #FBEB97)' }} className="xl:w-[90%] lg:w-[95%] md:w-[90%] h-full rounded-tr-[12rem] rounded-bl-[12rem] overflow-visible">
                    <div className="relative xl:w-[420px] lg:w-[300px] md:w-[255px] xs:w-[155px] border border-white border-4 rounded-xl top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Image src={featuresImg} alt="Center Image" />
                        <div className="absolute xl:w-[500px] lg:w-[360px] md:w-[290px] xs:w-[200px] border border-white border-4 rounded-xl top-full left-[16%] transform -translate-y-1/2">
                            <Image src={featuresImg1} alt="Right Image" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <div>
                        <Image
                            src={arrow}
                            alt="AboutIcon"
                            className="xl:w-[4rem] xl:h-[4rem] mr-2 md:w-[3.5rem] md:h-[3rem] sm:w-[1rem] sm:h-[1rem] w-[1rem] h-[1rem]"
                        />
                        <h2 className='xl:text-3xl md:text-lg md:font-bold mt-2'>Employee Checkin/Checkout</h2>
                        <p className='xl:text-2xl md:text-base my-4'>Employees can easily clock in and out of their tasks, keeping track of their work time effortlessly.</p>
                        <hr />
                    </div>
                    <div>
                        <Image
                            src={arrow}
                            alt="AboutIcon"
                            className="xl:w-[4rem] xl:h-[4rem] mr-2 md:w-[3.5rem] md:h-[3rem] sm:w-[1rem] sm:h-[1rem] w-[1rem] h-[1rem]"
                        />
                        <h2 className='xl:text-3xl md:text-lg md:font-bold mt-2'>Task Assignment</h2>
                        <p className='xl:text-2xl md:text-base mt-2 my-4'>Assign tasks to your team members within the app, making it simple to delegate responsibilities and keep everyone on the same page.</p>
                        <hr />
                    </div>
                    <div>
                        <Image
                            src={arrow}
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
