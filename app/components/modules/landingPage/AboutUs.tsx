import React from 'react'
import Image from 'next/image'
import AboutIcon from "@/app/assets/icons/about-icon.svg"
import team from "@/app/assets/icons/team.svg"
import AboutUsImg from "@/app/assets/images/AboutUsImg.png"
import AboutUsImg1 from "@/app/assets/images/AboutUsImg1.png"

const AboutUs = () => {
  return (
    <div className='bg-white pt-10'>
      <div className='flex flex-col w-1/2 md:w-3/4 xl:mx-24 md:mx-10 justify-start gap-4'>
        <h2 className='xl:font-semibold xl:text-4xl md:font-semibold md:text-3xl'>Why Choose Us <br />
          for best service experience</h2>
        <p className='xl:text-2xl lg:text-xl md:text-lg md:font-medium'>We're dedicated to revolutionizing how businesses handle home service tasks and employee check-ins. Our team brings expertise in software development, data analytics, and customer service to create a seamless solution for tracking activities and managing schedules</p>
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 xl:mx-24 md:mx-10 mt-20 md:gap-6'>
        <div className='flex md:w-[80%]'>
          <Image
            src={AboutIcon}
            alt="AboutIcon"
            className="xl:w-[4rem] xl:h-[4rem] mr-2 md:w-[3.5rem] md:h-[3rem] sm:w-[1rem] sm:h-[1rem] w-[1rem] h-[1rem]"
          />
          <div className='flex flex-col md:ml-4'>
            <h2 className='xl:text-3xl md:text-2xl md:font-bold'>Our Mission</h2>
            <p className='xl:text-2xl md:text-lg mt-2'>Revolutionizing home service task management and employee check-ins for streamlined operations and enhanced productivity.</p>
          </div>
        </div>
        <div className='flex md:w-[80%]'>
          <Image
            src={team}
            alt="AboutIcon"
            className="xl:w-[4rem] xl:h-[4rem] mr-2 md:w-[3.5rem] md:h-[3rem] sm:w-[1rem] sm:h-[1rem] w-[1rem] h-[1rem]"
          />
          <div className='flex flex-col md:ml-4'>
            <h2 className='xl:text-3xl md:text-2xl md:font-bold'>Our Team</h2>
            <p className='xl:text-2xl md:text-lg mt-2'>A dedicated group of professionals with expertise in software development, data analytics, and customer service, committed to ensuring CHKRR remains intuitive, reliable, and responsive to user needs.</p>
          </div>
        </div>
      </div>
      <div className='flex mt-20 md:mx-10 xl:mx-24 gap-4'>
        <Image
          src={AboutUsImg}
          alt="About"
          className="w-2/3"
        />
        <Image
          src={AboutUsImg1}
          alt="About"
          className="w-1/3"
        />
      </div>
    </div>
  )
}

export default AboutUs
