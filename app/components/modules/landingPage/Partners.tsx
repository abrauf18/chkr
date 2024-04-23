import React from 'react'
import Image from 'next/image';
import icon1 from '@/app/assets/icons/Logo Wrapper.svg';
import icon2 from '@/app/assets/icons/Logo Wrapper (1).svg';
import icon3 from '@/app/assets/icons/Logo Wrapper (3).svg';
import icon4 from '@/app/assets/icons/Logo Wrapper (4).svg';
import icon5 from '@/app/assets/icons/Logo Wrapper (5).svg';
import icon6 from '@/app/assets/icons/Logo Wrapper (6).svg';

const Partners = () => {
    return (
        <div className='flex flex-col lg:py-10 mx-6 md:mx-16 items-center gap-4'>
            <h1 className='xl:font-semibold xl:text-4xl md:font-semibold md:text-3xl text-center'>Our Partners</h1>
            <p className='xl:text-2xl lg:text-xl md:text-lg md:font-medium text-center text-gray-400'>Trusted by top industry partners for seamless employee management.</p>
            <div className='flex gap-x-4 md:gap-x-8'>
                <Image src={icon1} alt="Partner 1"
                    className="xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem]  w-[3rem] h-[3rem]"
                />
                <Image src={icon2} alt="Partner 2"
                    className="xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem]  w-[3rem] h-[3rem]"
                />
                <Image src={icon3} alt="Partner 3"
                    className="xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem]  w-[3rem] h-[3rem]"
                />
                <Image src={icon4} alt="Partner 4"
                    className="xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem]  w-[3rem] h-[3rem]"
                />
                <Image src={icon5} alt="Partner 5"
                    className="xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem]  w-[3rem] h-[3rem]"
                />
                <Image src={icon6} alt="Partner 6"
                    className="xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem]  w-[3rem] h-[3rem]"
                />
            </div>
        </div>
    )
}

export default Partners
