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
  Building2,
  Layers,
  MessageSquareText,
  Receipt,
  Timer,
} from "lucide-react";
import SidebarLogo from "@/assets/icons/sidebar-logo";
import UserOptions from "./user-options";

const MobileNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePath, setActivePath] = useState("/company-admin/dashboard");
  const pathname = usePathname();
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const adminList = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard />,
      path: "/company-admin/dashboard",
    },
    {
      title: "All Jobs",
      icon: <StickyNote />,
      path: "/company-admin/jobs",
    },
    {
      title: "Employees",
      icon: <Users />,
      path: "/company-admin/employees",
    },
    {
      title: "Settings",
      icon: <Settings />,
      path: "/company-admin/settings",
    },
  ];

  const employeeList = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard />,
      path: "/company-employee/dashboard",
    },
    {
      title: "My Jobs",
      icon: <Timer />,
      path: "/company-employee/jobs",
    },
    {
      title: "Payments",
      icon: <Layers />,
      path: "/company-employee/payment",
    },
    {
      title: "Settings",
      icon: <Settings />,
      path: "/company-employee/settings",
    },
  ];

  const superAdminList = [
    {
      title: "Subscription",
      icon: <Receipt />,
      path: "/super-admin/subscription",
    },
    {
      title: "Companies",
      icon: <Building2 />,
      path: "/super-admin/companies",
    },
    {
      title: "Feedback",
      icon: <MessageSquareText />,
      path: "/super-admin/feedback",
    },
    {
      title: "Admins",
      icon: <Users />,
      path: "/super-admin/admins",
    },
    {
      title: "Settings",
      icon: <Settings />,
      path: "/super-admin/settings",
    },
  ];

  const AdminList = [
    {
      title: "Subscription",
      icon: <Receipt />,
      path: "/admin/subscription",
    },
    {
      title: "Companies",
      icon: <Building2 />,
      path: "/admin/companies",
    },
    {
      title: "Feedback",
      icon: <MessageSquareText />,
      path: "/admin/feedback",
    },
    {
      title: "Settings",
      icon: <Settings />,
      path: "/admin/settings",
    },
  ];
  // Select the appropriate list based on the active pathname
  const getList = () => {
    if (activePath.startsWith("/company-admin")) {
      return adminList;
    }
    if (activePath.startsWith("/company-employee")) {
      return employeeList;
    }
    if (activePath.startsWith("/super-admin")) {
      return superAdminList;
    }
    if (activePath.startsWith("/admin")) {
      return AdminList;
    }
    return []; // Default to an empty list if no match
  };

  const list = getList();

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
          <div className="flex mx-4 w-full justify-between items-center">
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
              {/* <UserOptions /> */}
            </div>
          </div>
          <div
            className={`z-10 absolute top-24 w-full ${
              sidebarOpen ? "block" : "hidden"
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

