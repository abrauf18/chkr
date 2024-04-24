import React from "react";
import Image from "next/image";
import bg from "@/assets/images/background.png";
import img1 from "@/assets/images/jobs.svg";
import img2 from "@/assets/images/Dashboard.svg";
import img3 from "@/assets/images/feedback.svg";
import Pros from "./pros";

const Benefits = () => {
  return (
    <div>
      <div className=" relative md:mb-56">
        <div
          className="flex md:w-full md:h-screen mt-6 h-1/2 justify-center bg-cover bg-no-repeat md:bg-center"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            height: "500px",
          }}
        >
          <div className="flex flex-col xl:mx-24 lg:py-10 mx-10 py-10 items-center gap-4 text-white">
            <h1 className="xl:font-semibold xl:text-4xl font-semibold md:text-3xl text-center">
              Experience the Benefits: Optimize Your Workforce
            </h1>
            <p className="xl:text-2xl lg:text-xl md:text-lg md:font-medium  text-sm text-center">
              Empower your business with seamless employee management and
              tracking.
            </p>
          </div>
        </div>
        <div className="flex gap-x-14 justify-center overflow-hidden w-full h-full md:h-[120%] absolute lg:top-56 sm:top-48 top-48">
          <Image
            src={img1}
            alt="left img"
            width={696}
            height={450}
            className="object-contain w-full h-1/4 md:h-1/2 lg:h-[70%] self-start hidden sm:block"
          />
          <Image
            src={img2}
            alt="left img"
            width={696}
            height={450}
            className="object-contain w-full md:h-1/2 lg:h-[70%] self-center"
          />
          <Image
            src={img3}
            alt="left img"
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

