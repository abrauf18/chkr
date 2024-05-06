"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
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
  const pathname = usePathname();

  const list = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard />,
      path: "/company-admin/dashboard",
    },
    {
      title: "All Jobs",
      icon: <StickyNote />,
      path: "/company-admin/dashboard#all-jobs",
    },
    {
      title: "Employees",
      icon: <Users />,
      path: "/company-admin/dashboard#employees",
    },
    {
      title: "Settings",
      icon: <Settings />,
      path: "/company-admin/dashboard#settings",
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePath, setActivePath] = useState("/company-admin/dashboard");

  const handleClick = (path: string) => {
    setActivePath(path);
  };

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
            className={`z-10 absolute top-24 w-full ${sidebarOpen ? "block" : "hidden"
              }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col items-baseline font-medium p-4 border-t-0 rounded-lg bg-black">
              <li className="mt-6 mb-10">
                <SidebarLogo />
              </li>
              {list.map((item) => (
                <div key={item.path}>
                  <Link href={item.path}>
                    <div
                      className={clsx(
                        "flex items-center w-full h-12 rounded-3xl px-4",
                        activePath === item.path && "bg-white text-primary",
                        activePath !== item.path && "text-white"
                      )}
                      onClick={() => handleClick(item.path)}
                    >
                      <div>{item.icon}</div>
                      <span className="ml-3">{item.title}</span>
                    </div>
                  </Link>
                </div>
              ))}
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
