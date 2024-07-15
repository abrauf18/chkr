import React from "react";
import ChkrLogo from "@/assets/icons/footer-logo";
import bg from "@/public/images/background.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" mb-20">
      <div
        className="flex flex-col w-full h-full  md:mt-6 justify-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          // height: '500px',
          overflow: "hidden",
        }}
      >
        <nav className="w-[95%] flex mobile:flex-col flex-row md:items-center justify-between md:flex-wrap md:mx-10 mx-4 my-6 md:py-2 md:px-10 rounded-3xl">
          {/* Left side content */}
          <Link href="/">
            <div className="flex items-center ">
              <ChkrLogo className="h-auto" />
            </div>
          </Link>

          {/* Right side content */}
          <div className="flex items-center mobile:mt-4">
            <div className="flex gap-4 lg:gap-10 md:ml-4 ml-1 text-white">
              <a
                href="#home"
                className="text-lg mobile:text-sm hover:text-primary"
              >
                Home
              </a>
              <a
                href="#aboutUs"
                className="text-lg mobile:text-sm hover:text-primary whitespace-nowrap"
              >
                <span>About Us</span>
              </a>
              <a
                href="#features"
                className="text-lg mobile:text-sm hover:text-primary"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-lg mobile:text-sm hover:text-primary"
              >
                Testimonials
              </a>
              <a
                href="#subscription"
                className="text-lg mobile:text-sm hover:text-primary"
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
            <Link href="/login">
              <Button className="w-[136px] py-6 border hover:border-white border-primary text-white hover:bg-transparent rounded-3xl">
                Sign in
              </Button>
            </Link>
            <Link href="/login">
              <Button className="w-[160px] py-6 border hover:border-primary border-white text-white bg-transparent hover:bg-primary hover:text-white rounded-3xl">
                Explore the Chkr
              </Button>
            </Link>
          </div>
          <div className="h-[1px] w-full bg-white rounded-full my-4"></div>
          <p className=" text-lg mobile:text-xs mb-4">
            CHKR. All Rights Reserved 2024. Licensing
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

