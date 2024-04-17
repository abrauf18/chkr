import React from "react";
import Image from "next/image";
import chkrLogo from "@/app/assets/icons/chkrLogo.svg";
import Link from "next/link";

const LandingPageNavbar: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <nav className="w-[95%] flex md:items-center justify-between md:flex-wrap bg-white md:mx-10 mx-4 my-6 py-2 px-4 rounded-3xl">
        {/* Left side content */}
        <div className="flex items-center text-black">
          <Image
            src={chkrLogo}
            alt="CHKR Logo"
            width={116}
            className="h-auto"
            priority
          />
          <div className="flex gap-10 ml-4">
            <a href="#" className="text-lg">
              Home
            </a>
            <a href="#" className="text-lg">
              <span>AboutUs</span>
            </a>
            <a href="#" className="text-lg">
              Features
            </a>
            <a href="#" className="text-lg">
              Testimonials
            </a>
            <a href="#" className="text-lg">
              Subscription
            </a>
          </div>
        </div >

        {/* Right side content */}
        < div className="flex items-center" >
          <button className="bg-gray-900 text-white md:font-semibold font-light py-2 px-4 rounded-3xl">
            Sign in
          </button>
        </div >
      </nav >
    </div >
  );
};

export default LandingPageNavbar;
