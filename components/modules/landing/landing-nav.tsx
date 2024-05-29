"use client";
import React, { useState } from "react";
import ChkrLogo from "@/assets/icons/chkr-logo";
import Link from "next/link";

const LandingPageNavbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className=" border-gray-200 fixed z-50 w-full mt-6 navbar">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-[5%] px-5 py-4 shadow-md rounded-full bg-white ">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <ChkrLogo className="h-8" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-gray-800 font-medium rounded-2xl text-sm px-4 py-2 text-center"
            >
              Sign in
            </button>
          </Link>
          <button
            onClick={toggleSidebar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-cta"
            aria-expanded="false"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`md:z-10 -z-10  absolute items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            sidebarOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 border-t-0 items-center rounded-lg md:space-x-8  md:flex-row md:mt-0 md:border-0 bg-white md:ml-32 mt-80 mr-10">
            <li>
              <a
                href="#home"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-primary"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutUs"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-primary"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-primary"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-primary"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#subscription"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:text-primary"
              >
                Subscription
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LandingPageNavbar;

