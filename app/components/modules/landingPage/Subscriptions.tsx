import React from 'react'
import { Button } from "@/app/components/ui/button";
import PlanCard from './PlanCard';

const Subscriptions = () => {
    return (
        <div>
            <div className='flex flex-col xl:mx-24 md:mx-10 justify-center items-center gap-4 mt-20'>
                <h1 className='xl:font-semibold xl:text-4xl md:font-semibold md:text-3xl text-center'>Our Subscriptions</h1>
                <p className='xl:text-2xl lg:text-xl md:text-lg md:font-medium text-center'>Empower your business with seamless employee management and tracking.</p>
                <div className="flex gap-2 bg-gray-200	mb-4 p-2  rounded-3xl">
                    <Button className="w-[7rem] py-4 text-black bg-transparent hover:bg-primary hover:text-white rounded-3xl">
                        Monthly
                    </Button>
                    <Button className="w-[7rem] py-4 text-black bg-transparent hover:bg-primary hover:text-white rounded-3xl">
                        Annually
                    </Button>
                </div>
            </div>
            <div className='flex md:mx-24 xl:mx-36 gap-6 mt-16'>
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
