"use client";

import React from "react";
import Sidebar from "@/components/shared/sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MobileNav from "@/components/shared/mobile-nav";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="md:grid w-full grid-cols-12 grid-rows-6 h-full">
      <nav
        className={`relative mobile:hidden h-full w-full row-span-6 xl:px-6 lg:px-4 md:px-3 col-start-1 border-r-2 bg-black text-white ${open ? "col-span-3 col-end-3" : "col-span-1 col-end-1"
          }`}
      >
        <Sidebar open={open} />
        <button
          className="absolute lg:-right-4 md:-right-6 top-6 rounded-full p-1.5 bg-white text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </nav>
      <MobileNav />
      <main
        className={`no-scrollbar px-8 ${open ? "col-start-3" : "col-start-2"
          } col-span-full row-span-full overflow-auto`}
      >
        {children}
      </main>
    </div>
  );
};

export default RootLayout;

