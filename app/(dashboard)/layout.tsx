import React from "react";
import Sidebar from "@/components/shared/sidebar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col md:flex-row">
          <div className="md:basis-[100px] lg:basis-[280px] h-full relative">
            <Sidebar />
          </div>
          <div className="lg:basis-full md:w-10/12 md:mx-2 p-6 md:p-4 lg:p-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
