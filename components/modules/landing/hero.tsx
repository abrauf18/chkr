import React from "react";
import { Button } from "@/components/ui/button";
import bg from "@/public/images/background.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="mx-[5%] relative md:h-full mb-28 md:mb-[28rem] lg:mb-[32rem] xl:mb-[46rem]">
      <div
        id="home"
        className="h-[35rem] md:h-[150%] xl:h-[200%] w-full bg-black rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          // height: '800px',
        }}
      >
        {/* Hero content */}
        <div className="flex flex-col text-center items-center h-full mt-20 gap-10">
          <h1 className="xl:font-normal lg:leading-[3.5rem] xl:text-5xl md:text-5xl md:font-extralight uppercase text-white text-xl font-bold">
            Streamline Your <br />
            Employee
            <span className="text-primary font-bold	">
              {" "}
              Service Tracking
            </span>{" "}
            more easily.
          </h1>
          <p className="md:text-lg xl:text-2xl text-[#9A9A9B] text-sm font-normal">
            Simplify employee check-ins, task assignments, and management with
            CHKR. <br />
            Streamline your workflow and ensure accuracy effortlessly.
          </p>
          <div className="flex gap-2 ">
            <Button className="w-[10rem] py-6 border border-white hover:bg-transparent bg-white hover:text-white text-black rounded-3xl">
              Get Started
            </Button>
            <Button className="w-[10rem] py-6 border border-white text-white bg-transparent hover:bg-white hover:text-black rounded-3xl">
              Buy Subscription
            </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className="absolute w-3/4 md:w-[70%] xl:top-[210%] lg:top-[160%] md:top-[150%] top-[95%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <Image
            src="/images/HeroBanner.svg"
            alt="Hero Image"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

