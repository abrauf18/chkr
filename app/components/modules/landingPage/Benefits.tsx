import React from "react";
import Image from "next/image";
import bg from "@/app/assets/images/background.png";
import img1 from "@/app/assets/images/jobs.svg";
import img2 from "@/app/assets/images/Dashboard.svg";
import img3 from "@/app/assets/images/feedback.svg";
import Pros from "./Pros"


const Benefits = () => {
  return (
    <div>
      <div className=" relative mb-56">
        <div
          className="flex md:w-full mt-6 w-screen justify-center bg-cover bg-no-repeat md:bg-center"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            height: "500px",
          }}
        >
          <div className="flex flex-col xl:mx-24 lg:py-10 md:mx-10 items-center gap-4 text-white">
            <h1 className="xl:font-semibold xl:text-4xl md:font-semibold md:text-3xl text-center">
              Experience the Benefits: Optimize Your Workforce
            </h1>
            <p className="xl:text-2xl lg:text-xl md:text-lg md:font-medium text-center">
              Empower your business with seamless employee management and
              tracking.
            </p>
          </div>
        </div>
        <div className="flex gap-x-14 justify-center overflow-hidden w-full h-[120%] absolute lg:top-56 md:top-44">
          <Image
            src={img1}
            alt="left img"
            width={696}
            height={450}
            className="object-contain w-full xs:h-1/4 md:h-1/2 lg:h-[70%] self-start"
          />
          <Image
            src={img2}
            alt="left img"
            width={696}
            height={450}
            className="object-contain w-full xs:h-1/4 md:h-1/2 lg:h-[70%] self-center"
          />
          <Image
            src={img3}
            alt="left img"
            width={696}
            height={450}
            className="object-contain w-full md:h-1/2 xs:h-[30%] lg:h-[70%] self-end"
          />
        </div>

      </div>
      <Pros />
    </div>
  );
};

export default Benefits;
