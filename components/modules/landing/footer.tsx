import React from "react";
import Image from "next/image";
import chkrLogo from "@/assets/icons/LogoFooter.svg";
import bg from "@/assets/images/background.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className=" mb-20">
      <div
        className="flex flex-col w-full h-full  md:mt-6 justify-center bg-cover bg-no-repeat md:bg-center"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          // height: '500px',
          overflow: "hidden",
        }}
      >
        <nav className="w-[95%] flex md:items-center justify-between md:flex-wrap md:mx-10 mx-4 my-6 md:py-2 md:px-10 rounded-3xl">
          {/* Left side content */}
          <div className="flex items-center ">
            <Image
              src={chkrLogo}
              alt="CHKR Logo"
              width={116}
              className="h-auto"
              priority
            />
          </div>

          {/* Right side content */}
          <div className="flex items-center">
            <div className="flex gap-2 md:gap-10 ml-4 text-white">
              <a href="#home" className="md:text-lg text-xs hover:text-primary">
                Home
              </a>
              <a
                href="#aboutUs"
                className="md:text-lg text-xs hover:text-primary"
              >
                <span>About Us</span>
              </a>
              <a
                href="#features"
                className="md:text-lg text-xs hover:text-primary"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="md:text-lg text-xs hover:text-primary"
              >
                Testimonials
              </a>
              <a
                href="#subscription"
                className="md:text-lg text-xs hover:text-primary"
              >
                Subscription
              </a>
            </div>
          </div>
        </nav>
        <div className="flex flex-col xl:mx-24 lg:py-10 md:mx-16 items-center gap-4 text-white">
          <div className="h-[1px] w-full bg-white rounded-full my-4"></div>
          <h1 className="xl:font-semibold xl:text-4xl md:font-semibold md:text-[40px] text-[15px] lg:px-20 xl:px-40 lg:leading-[50px] xl:leading-[60px] uppercase text-center">
            Revolutionizing Workforce Management, One Click at a Time; WITH CHKR
          </h1>
          <div className="flex gap-2 mt-6 ">
            <Button className="w-[136px] py-6 border border-white hover:border-primary text-white bg-transparent hover:bg-primary hover:text-black rounded-3xl">
              Sign in
            </Button>
            <Button className="w-[160px] py-6 border border-white hover:border-primary text-white bg-transparent hover:bg-primary hover:text-black rounded-3xl">
              Explore the Chkr
            </Button>
          </div>
          <div className="h-[1px] w-full bg-white rounded-full my-4"></div>
          <p>CHKR. All Rights Reserved 2024. Licensing</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

