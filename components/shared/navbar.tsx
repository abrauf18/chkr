interface NavbarProps {
  buttonText: string;
  textBeforeButton: string;
  url: string;
}

import React from "react";
import ChkrLogo from "@/assets/icons/chkr-logo";
import Link from "next/link";

const Navbar: React.FC<NavbarProps> = ({
  buttonText,
  textBeforeButton,
  url,
}) => {
  return (
    <section className="flex justify-center items-center w-full">
      <nav className="w-[95%] flex md:items-center justify-between md:flex-wrap bg-white md:mx-10 mx-4 my-6 py-3 px-4 rounded-3xl">
        {/* Left side content */}
        <Link href="/">
          <div className="flex items-center flex-shrink-0 text-black">
            <ChkrLogo className="h-12 ml-2" />
          </div>
        </Link>
        {/* Right side content */}
        <div className="flex items-center">
          <div className="hidden md:block text-black mr-4">
            {textBeforeButton}
          </div>{" "}
          {/* Hidden on mobile */}
          <Link href={url}>
            <button className="bg-[#3F3F3F] hover:bg-primary text-white font-medium text-sm py-2 px-4 rounded-3xl">
              {buttonText}
            </button>
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

