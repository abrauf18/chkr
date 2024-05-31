"use client";
import React, { useEffect, useState } from "react";
import {
  Users,
  StickyNote,
  Settings,
  CircleHelp,
  LayoutDashboard,
  Layers,
  Timer,
  Building2,
  MessageSquareText,
  Receipt,
} from "lucide-react";
import SidebarLogo from "@/assets/icons/sidebar-logo";
import LogoFooter from "@/assets/icons/footer-logo";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const SideBar = ({ width, open, setOpen}: { width:number, open: boolean, setOpen: (value:boolean) => void }) => {
  const [activePath, setActivePath] = useState<string>("");
 if(width <= 1024 && width >= 768){
  setOpen(false);
 }
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


  return (
    <>
      <div
        className={clsx(
          open
            ? "w-full flex gap-x-4 justify-start py-6"
            : "w-full flex gap-x-4 justify-center py-6"
        )}
      >
        <Link href="#">
          <div className="text-2xl font-bold">
            <div className="logo logo-triangle relative w-10 h-10 inline-block mt-6">
              {open ? <LogoFooter /> : <SidebarLogo width={45}/>}
            </div>
          </div>
        </Link>
      </div>
      <div className="relative w-full space-y-6 h-[85%] mt-12">
        <div className={clsx("space-y-3 h-[76%] overflow-auto section-scrollbar",
          !open && "flex flex-col items-center"
        )}>
          {list.map((item) => (
            <div key={item.path}>
              <Link href={item.path}>
                <div
                  className={clsx(
                    "flex gap-2 px-2 items-center w-full h-12 rounded-3xl xl:px-4",
                    activePath === item.path && "bg-white text-primary",
                    !open && "justify-center md:w-[38px] md:h-[38px] lg:w-[43px] lg:h-[43px]",
                    "hover:text-primary hover:bg-white cursor-pointer"
                  )}
                  onClick={() => handleClick(item.path)}
                >
                  <div>{item.icon}</div>
                  {open && <span>{item.title}</span>}
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center w-12 h-12 p-2 bg-primary rounded-full hover:animate-bounce cursor-pointer">
          <CircleHelp />
        </div>
      </div>
    </>
  );
};

export default SideBar;

