import React from 'react';
import Image from 'next/image';
import bg from "@/app/assets/images/background.png";
import img1 from "@/app/assets/images/jobs.png";
import img2 from "@/app/assets/images/dashboard.png";
import img3 from "@/app/assets/images/feedback.png";

const Benefits = () => {
    return (
        <div className="relative mb-20">
            <div className="flex md:w-full mt-6 w-screen justify-center bg-cover bg-no-repeat md:bg-center"
                style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: 'cover',
                    height: '500px',
                    overflow: 'hidden', // Hide overflow content
                }}
            >
                <div className='flex flex-col xl:mx-24 lg:py-10 md:mx-10 items-center gap-4 text-white'>
                    <h1 className='xl:font-semibold xl:text-4xl md:font-semibold md:text-3xl text-center'>Experience the Benefits: Optimize Your Workforce</h1>
                    <p className='xl:text-2xl lg:text-xl md:text-lg md:font-medium text-center'>Empower your business with seamless employee management and tracking.</p>
                </div>
                <div className="absolute xl:w-[400px] lg:w-[550px] border border-white border-8 rounded-xl top-[85%] md:left-[-25%] transform -translate-y-1/2">
                    <Image src={img1} alt="left img" />
                </div>
                <div className="absolute xl:w-[400px] lg:w-[500px] border border-white border-8 rounded-xl top-[90%] left-[32%] transform -translate-y-1/2">
                    <Image src={img1} alt="left img" />
                </div>
                {/* <div className="absolute xl:w-[400px] lg:w-[500px] border border-white border-8 rounded-xl md:top-[99%] left-[84%] transform -translate-y-1/2">
                    <Image src={img1} alt="left img" />
                </div> */}
            </div>
        </div>
    )
}

export default Benefits;
