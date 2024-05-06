import React from "react";
import {
  Users,
  StickyNote,
  Settings,
  CircleHelp,
  LayoutDashboard,
} from "lucide-react";
import SidebarLogo from "@/assets/icons/sidebar-logo";
import LogoFooter from "@/assets/icons/footer-logo";
import Link from "next/link";
import clsx from "clsx";

const SideBar = ({ open }: { open: boolean }) => {
  const list = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard />,
      path: "/dashboard",
    },
    {
      title: "All Jobs",
      icon: <StickyNote />,
      path: "/all-jobs",
    },
    {
      title: "Employees",
      icon: <Users />,
      path: "/employees",
    },
    {
      title: "Settings",
      icon: <Settings />,
      path: "/settings",
    },
  ];

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
          <div className="text-2xl font-bold hover:text-sky-400">
            <div className="logo logo-triangle relative w-10 h-10 inline-block mt-6">
              {open ? <LogoFooter /> : <SidebarLogo />}
            </div>
          </div>
        </Link>
      </div>
      <div className="relative w-full space-y-6 h-[85%] mt-12">
        <div className="space-y-3 h-[76%] overflow-auto section-scrollbar">
          {list.map((item) => (
            <div>
              <Link href={item.path}>
                <div
                  className={clsx(
                    "flex items-center w-full h-12 hover:text-primary hover:bg-white rounded-3xl xl:px-4",
                    !open && "justify-center"
                  )}
                >
                  <div>{item.icon}</div>
                  {open && <span className="ml-3">{item.title}</span>}
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

