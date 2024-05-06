"use client";
import React, { useState } from "react";
import {
  AlignLeft,
  Users,
  StickyNote,
  Settings,
  CircleHelp,
  Bell,
  LayoutDashboard,
} from "lucide-react";
import Image from "next/image";
import SidebarLogo from "@/assets/icons/sidebar-logo";

const MobileNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  console.log(sidebarOpen);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="md:hidden">
      <nav className="w-full mt-6 ">
        <div className="flex items-center justify-between py-4 ">
          <div className="flex mx-4 w-full justify-between">
            <div>
              <button
                onClick={toggleSidebar}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <AlignLeft />
              </button>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <div className="bg-white flex justify-center items-center rounded-full h-12 w-12">
                <Bell />
              </div>
              <div className="flex justify-center items-center bg-white rounded-full h-12 w-12">
                <Image
                  src="/images/user.jpeg"
                  width={6}
                  height={6}
                  alt="user"
                  className="w-8 h-8 border rounded-full"
                />
              </div>
            </div>
          </div>
          <div
            className={`z-10 absolute top-24 w-full ${
              sidebarOpen ? "block" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col items-baseline font-medium p-4 border-t-0 rounded-lg bg-black">
              <li className="mt-6">
                <SidebarLogo />
              </li>
              <li className="flex items-center justify-center mt-12">
                <LayoutDashboard color="white" />
                <a
                  href="#home"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:text-primary"
                >
                  Dashboard
                </a>
              </li>
              <li className="flex items-center justify-center">
                <StickyNote color="white" />
                <a
                  href="#aboutUs"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:text-primary"
                >
                  All Jobs
                </a>
              </li>
              <li className="flex items-center justify-center">
                <Users color="white" />
                <a
                  href="#Employees"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:text-primary"
                >
                  Employees
                </a>
              </li>
              <li className="flex items-center justify-center">
                <Settings color="white" />
                <a
                  href="#Settings"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:text-primary"
                >
                  Settings
                </a>
              </li>
              <div className="flex items-center justify-center w-12 h-12 p-2 bg-primary rounded-full hover:animate-bounce cursor-pointer mt-10">
                <CircleHelp color="white" />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;

