"use client";

import React from "react";
import Sidebar from "@/components/shared/sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MobileNav from "@/components/shared/mobile-nav";
import useWindowDimensions from "@/hooks/use-window-dimensions";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
// import { useSession } from "next-auth/react";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  const { width } = useWindowDimensions();

  // const session: any = useSession();
  // console.log(session);
  // if (!session?.data?.user) {
  //   return redirect("/login");
  // }

  return (
    <section className="h-screen md:overflow-hidden">
      <div className="md:grid w-full grid-cols-12 grid-rows-6 h-full">
        <nav
          className={`relative mobile:hidden h-full w-full row-span-6 xl:px-6 lg:px-4 md:px-3 col-start-1 border-r-2 bg-black text-white ${
            open ? "col-span-3 col-end-3" : "col-span-1 col-end-1"
          }`}
        >
          <Sidebar width={width} open={open} setOpen={setOpen} />
          <button
            className="absolute lg:-right-4 md:-right-6 top-6 rounded-full p-1.5 bg-white text-black tablet:hidden"
            onClick={() => setOpen(!open)}
          >
            {!(width <= 1024 && width >= 768) &&
              (open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />)}
          </button>
        </nav>
        <MobileNav />
        <main
          className={`no-scrollbar px-8 ${
            open ? "col-start-3" : "col-start-2"
          } col-span-full row-span-full overflow-auto`}
        >
          {children}
        </main>
      </div>
    </section>
  );
};

export default RootLayout;

