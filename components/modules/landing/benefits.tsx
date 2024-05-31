import React from "react";
import Image from "next/image";
import bg from "@/public/images/background.png";
import img1 from "@/assets/images/jobs.svg";
import img3 from "@/assets/images/feedback.svg";
import Pros from "./pros";

const Benefits = () => {
  return (
    <div>
      <div className=" relative md:mb-56 mb-24">
        <div
          className="flex md:w-full md:h-screen mt-6 h-1/2 justify-center bg-cover bg-no-repeat md:bg-center"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            height: "620px",
          }}
        >
          <div className="flex flex-col xl:mx-24 lg:py-10 mx-10 md:py-10 py-24 items-center gap-4 text-white">
            <h1 className="font-medium text-3xl xl:text-5xl text-center md:pt-5">
              Experience the Benefits: Optimize Your Workforce
            </h1>
            <p className="xl:text-2xl lg:text-xl md:text-lg font-normal text-sm text-center">
              Empower your business with seamless employee management and
              tracking.
            </p>
          </div>
        </div>
        <div className="flex gap-x-14 justify-center overflow-hidden w-full h-full md:h-[120%] absolute lg:top-56 sm:top-48 top-48">
          <Image
            src="/images/jobs.svg"
            alt="left img"
            width={696}
            height={450}
            className="object-contain w-full h-1/4 md:h-1/2 lg:h-[70%] self-start hidden sm:block"
          />
          <Image
            src="/images/Dashboard.svg"
            alt="center img"
            width={696}
            height={450}
            className="object-contain w-full md:h-1/2 lg:h-[70%] self-center"
          />
          <Image
            src="/images/feedback.svg"
            alt="right img"
            width={696}
            height={450}
            className="object-contain w-full md:h-1/2 lg:h-[70%] self-end hidden sm:block"
          />
        </div>
      </div>
      <Pros />
    </div>
  );
};

export default Benefits;

