import Navbar from "@/app/components/modules/landingPage/LandingPageNavbar"
import React from "react";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            {/* <Navbar /> */}
            <div className=" md:grid md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-4">
                {children}
            </div>
        </main>
    );
};
export default LandingPageLayout;
