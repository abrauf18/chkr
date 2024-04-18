import React from "react";
import Image from "next/image";
import chkrLogo from "@/app/assets/icons/chkrLogo.svg";
import bg from "@/app/assets/images/background.png";
import { Button } from "@/app/components/ui/button";


const Footer = () => {
    return (
        <div className=" mb-20">
            <div className="flex md:w-full mt-6 w-screen justify-center bg-cover bg-no-repeat md:bg-center"
                style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundSize: 'cover',
                    height: '500px',
                    overflow: 'hidden', // Hide overflow content
                }}
            >
                <div className='flex flex-col xl:mx-24 lg:py-10 md:mx-16 items-center gap-4 text-white'>
                    <h1 className='xl:font-semibold xl:text-4xl md:font-semibold md:text-[40px] lg:leading-[56px] uppercase text-center'>Revolutionizing Workforce <br /> Management, One Click at a Time; WITH CHKR</h1>
                    <hr />
                    <div className="flex gap-2 mt-6 ">
                        <Button className="w-[136px] py-6 border border-white text-white bg-transparent hover:bg-white hover:text-black rounded-3xl">
                            Sign in
                        </Button>
                        <Button className="w-[160px] py-6 border border-white text-white bg-transparent hover:bg-white hover:text-black rounded-3xl">
                            Explore the Chkr
                        </Button>
                    </div>
                    <hr />
                    <p>CHKR. All Rights Reserved 2024. Licensing</p>
                </div>


            </div>
        </div>
    )
}

export default Footer
