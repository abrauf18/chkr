import React from 'react'

const Pros = () => {
    return (

        <div className="flex justify-center items-center w-full mt-96 gap-10 md:px-28 xl:px-40">
            <div className='w-1/3'>
                <div className="h-2 w-full bg-gray-300 rounded-full my-4"></div>
                <h1 className='font-semibold lg:text-xl'>Efficiency</h1>
                <p className='md:text-base lg:text-xl'>Employee task management and check-ins, saving time.</p>
            </div>
            <div className='w-1/3'>
                <div className="h-2 w-full bg-gray-300 rounded-full my-4"></div>
                <h1 className='font-semibold lg:text-xl'>Accuracy</h1>
                <p className='md:text-base lg:text-xl'>Track employee activities with precision, reducing errors.</p>
            </div>
            <div className='w-1/3'>
                <div className="h-2 w-full bg-primary rounded-full my-4"></div>
                <h1 className='font-semibold lg:text-xl'>Convenience</h1>
                <p className='md:text-base lg:text-xl'>Access CHKR from anywhere with internet connectivity.</p>
            </div>
        </div>

    )
}

export default Pros
