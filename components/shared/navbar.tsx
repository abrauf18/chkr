import React from "react";
import ChkrLogo from "@/assets/icons/ChkrLogo";

interface NavbarProps {
  buttonText: string;
  textBeforeButton: string;
}

const Navbar: React.FC<NavbarProps> = ({ buttonText, textBeforeButton }) => {
  return (
    <div className="flex justify-center items-center w-full ">
      <nav className="w-[95%] flex md:items-center justify-between md:flex-wrap bg-white md:mx-10 mx-4 my-6 py-2 px-4 rounded-3xl">
        {/* Left side content */}
        <div className="flex items-center flex-shrink-0 text-black">
          <ChkrLogo className="h-auto" />
        </div>
        {/* Right side content */}
        <div className="flex items-center">
          <div className="hidden md:block text-black mr-4">
            {textBeforeButton}
          </div>{" "}
          {/* Hidden on mobile */}
          <button className="bg-gray-900 text-white md:font-semibold font-light py-2 px-4 rounded-3xl">
            {buttonText}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

