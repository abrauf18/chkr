"use client";
import React, { useState } from "react";
import ChkrLogo from "@/assets/icons/chkr-logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LandingPageNavbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "block py-2 px-3 lg:p-0 text-primary rounded hover:text-primary"
      : "block py-2 px-3 lg:p-0 text-[#272B30] rounded hover:text-primary";
  };

  return (
    <nav className="border-gray-200 w-full my-8 navbar">
      <div
        className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-[5%] px-5 py-4 shadow-md ${
          sidebarOpen ? "rounded-lg" : "rounded-full"
        } bg-white`}
      >
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <ChkrLogo className="h-8" />
        </Link>
        <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-primary font-medium rounded-2xl text-sm px-4 py-2 text-center"
            >
              Sign in
            </button>
          </Link>
          <button
            onClick={toggleSidebar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded={sidebarOpen ? "true" : "false"}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex items-center justify-between w-full lg:w-auto lg:order-1 mt-2 ${
            sidebarOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 lg:p-0 items-center lg:space-x-8 lg:flex-row bg-white lg:bg-transparent rounded-lg">
            <li>
              <Link
                href="#home"
                className={getLinkClass("#home")}
                onClick={toggleSidebar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#aboutUs"
                className={getLinkClass("#aboutUs")}
                onClick={toggleSidebar}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                className={getLinkClass("#features")}
                onClick={toggleSidebar}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#testimonials"
                className={getLinkClass("#testimonials")}
                onClick={toggleSidebar}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="#subscription"
                className={getLinkClass("#subscription")}
                onClick={toggleSidebar}
              >
                Subscription
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LandingPageNavbar;

