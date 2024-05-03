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
          <div>
            <Sidebar />
          </div>
          <div className="lg:basis-full w-full pr-6 md:pr-4 pt-2 lg:pr-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
