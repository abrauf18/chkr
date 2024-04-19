"use client"
import React, { useState } from 'react'
import { Button } from "@/app/components/ui/button";
import PlanCard from './PlanCard';

const Subscriptions = () => {
    const [activeButton, setActiveButton] = useState("Monthly");

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };
    return (
        <div className='bg-white'>
            <div className='flex flex-col xl:mx-24 md:mx-10 justify-center items-center gap-4 mt-32'>
                <h1 className='xl:font-semibold xl:text-4xl md:font-semibold md:text-3xl text-center'>Our Subscriptions</h1>
                <p className='xl:text-2xl lg:text-xl md:text-lg md:font-medium text-center mb-4'>Empower your business with seamless employee management and tracking.</p>
                <div className="flex gap-2 bg-gray-200  p-2 rounded-3xl">
                    <Button
                        className={`w-[7rem] py-4 ${activeButton === "Monthly" ? "bg-primary text-white" : "bg-transparent text-black"
                            } hover:bg-primary hover:text-white rounded-3xl`}
                        onClick={() => handleButtonClick("Monthly")}
                    >
                        Monthly
                    </Button>
                    <Button
                        className={`w-[7rem] py-4 ${activeButton === "Annually" ? "bg-primary text-white" : "bg-transparent text-black"
                            } hover:bg-primary hover:text-white rounded-3xl`}
                        onClick={() => handleButtonClick("Annually")}
                    >
                        Annually
                    </Button>
                </div>


            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 md:mx-24 xl:mx-36 gap-6 my-16'>
                <PlanCard
                    monthlyHeading="Monthly Plan"
                    monthlyPrice="$ 9.99/Per Month"
                    buttonText="Buy Monthly Subscription Plan"
                />
                <PlanCard
                    monthlyHeading="Yearly Plan"
                    monthlyPrice="$ 99.99/Per Year"
                    buttonText="Buy Yearly Subscription plan"
                />
            </div>

        </div>
    )
}

export default Subscriptions
