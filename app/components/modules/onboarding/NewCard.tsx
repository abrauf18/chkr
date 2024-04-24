import React from 'react'
import Image from 'next/image'
import success from "@/app/assets/icons/Success.svg"
import cardlogo from "@/app/assets/icons/CardLogo's.svg"
import cardCheck from "@/app/assets/icons/cardcheck.svg"
import card from "@/app/assets/icons/card.svg"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"

const NewCard = () => {
  return (
    <div className="bg-white w-full shadow-md rounded-3xl px-8 pt-6 pb-8 my-10 gap-6">
      <div className='flex justify-between align-items'>
        <div className='flex items-center'>
          <Image src={success} alt='success'
            className='h-6 w-6 mr-2'></Image>
          <span className='font-semibold text-base md:text-lg'>Add new card</span>
        </div>
        <Image src={cardlogo} alt='cardlogos'
          className='md:w-40 w-32'></Image>
      </div>
      <div className='flex flex-col md:flex-row mt-4 gap-4'>
        <div className='flex flex-col md:w-[65%] w-full'>
          <h1>Card number</h1>
          <span className='text-xs'>Enter the 16-digit card number on the card</span>
        </div>
        <div className='flex w-full gap-4'>
          <div className="w-full relative">
            <div className="relative flex items-center">
              <span className="absolute left-3 top-[55%] transform -translate-y-1/2 h-5 w-5 text-gray-400">
                <Image src={card} alt='user' />
              </span>
              <Input
                className="pl-10 h-12"
                id="card number"
                type="text"
              />
            </div>
          </div>
          <Image src={cardCheck} alt='cardcheck'
            className='w-10' />
        </div>
      </div>
      <div className='flex flex-col md:flex-row mt-4 gap-4 '>
        <div className='flex flex-col w-3/4'>
          <h1>Card owner</h1>
          <span className='text-xs'>Enter the name on the card</span>
        </div>
        <div className="flex w-full items-center mr-14">
          <Input
            className="h-12"
            id="card owner"
            type="text"
          />
        </div>
      </div>
      <div className='flex flex-col md:flex-row mt-4 gap-4 '>
        <div className='flex flex-col w-3/4'>
          <h1>Expiry date</h1>
          <span className='text-xs'>Enter the expration date of the card</span>
        </div>
        <div className="flex flex-col md:flex-row w-full items-center mr-14 gap-4">
          <div className='flex md:w-[40%] w-full'>
            <Input
              className="h-12 md:w-1/2 w-1/4"
              id="card owner"
              type="text"
            />
            <span className='text-xl font-bold px-4 pt-2'>/</span>
            <Input
              className="h-12 md:w-1/2 w-1/4"
              id="card owner"
              type="text"
            />
          </div>
          <div className='flex w-full md:w-[60%] md:justify-end'>
            <div className='flex flex-col w-3/4 md:ml-10'>
              <h1>CVV2</h1>
              <span className='text-xs font-medium text-gray-500'>Security code</span>
            </div>
            <Input
              className="h-12 w-1/4"
              id="card owner"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCard
