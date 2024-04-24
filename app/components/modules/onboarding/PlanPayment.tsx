import React from 'react'
import Image from 'next/image'
import subscriptionIcon from "@/app/assets/icons/subPlanOrange.svg"
import companyIcon from "@/app/assets/icons/CompanyInfoWhite.svg"
import RegisteredCards from './RegisteredCard'
import NewCard from './NewCard'
const PlanPayment = () => {
  return (
    <div className='flex flex-col justify-center items-center my-20 md:mx-10'>
      <h1 className='font-semibold lg:text-2xl md:text-3xl text-2xl text-center mx-10'>Welcome Aboard! Let's Complete Your Profile.</h1>
      <p className='lg:text-lg md:text-lg md:font-medium text-center text-gray-400 mt-6'>Select Subscription Plan Which Suits Best for you!</p>
      <div className='flex flex-col md:flex-row mt-10 gap-6 text-lg'>
        <div className='flex items-center '>
          <Image src={companyIcon} alt="Company Icon"
            className='w-[4rem] h-[4rem]' />
          <span >Company Information</span>
        </div>
        <div className='flex items-center '>
          <Image src={subscriptionIcon} alt='subscription icon'
            className='w-[4rem] h-[4rem]' />
          <span className='text-gray-400'>Subscription Plan</span>
        </div>
      </div>
      <div className='flex flex-col md:w-[60%] w-full justify-center items-center'>
        <div className="w-full px-8 pt-6 pb-8 my-10 gap-6">
          <RegisteredCards
            cardType='VISA'
            cardOwner='Jane copper'
            expiryDate='12/34'
            cvv='123'
          />
          <NewCard />
        </div>
        <div className="flex w-full items-center md:justify-end justify-center mt-2 gap-6">
          <button
            className="w-full lg:w-[10rem] bg-gray-300 font-medium py-3 px-10 rounded-3xl"
            type="submit"
          >
            Cancel
          </button>
          <button
            className="w-full lg:w-[10rem] bg-primary text-white font-medium py-3 px-10 rounded-3xl"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>

    </div>
  )
}

export default PlanPayment
