import React from 'react';
import { Button } from "@/app/components/ui/button";
import Image from 'next/image';
import heroImage from '@/app/assets/images/HeroImg.png';

const Hero = () => {
    return (
        <div className='relative h-full'>
            <div className="h-screen w-screen md:w-full sm:w-full bg-black rounded-2xl overflow-hidden">
                {/* Hero content */}
                <div className="flex flex-col  text-center items-center h-full mt-20 gap-10">
                    <h1 className="xl:font-normal xl:text-5xl md:text-5xl md:font-extralight uppercase text-white text-xl font-bold">
                        Streamline Your <br />
                        Employee
                        <span className='text-primary font-bold	'> Service Tracking</span> more easily.
                    </h1>
                    <p className="md:text-lg xl:text-2xl text-gray-500 text-sm font-thin">Simplify employee check-ins, task assignments, and management with CHKR. <br />Streamline your workflow and ensure accuracy effortlessly.</p>
                    <div className="flex gap-2 ">
                        <Button className="w-[10rem] py-6 border border-white text-white bg-transparent hover:bg-white hover:text-black rounded-2xl">
                            Get Started
                        </Button>
                        <Button className="w-[10rem] py-6 border border-white text-white bg-transparent hover:bg-white hover:text-black rounded-2xl">
                            Buy Subscription
                        </Button>
                    </div>
                </div>

                {/* Hero image */}
                {/* <div className="absolute lg:w-[75%] md:w-[70%] xl:top-[120%] lg:top-[125%] md:top-[115%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                    <Image src={heroImage} alt="Hero Image" width={800} height={600} />
                </div> */}
            </div>
        </div>
    );
};

export default Hero;