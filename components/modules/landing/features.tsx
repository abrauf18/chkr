import React from "react";
import Image from "next/image";
import ArrowIcon from "@/assets/icons/arrow-icon";

const Features = () => {
  return (
    <div id="features" className="bg-white pt-10 mb-32">
      <div className="flex flex-col mx-auto justify-center items-center gap-4 w-full">
        <h1 className="font-medium text-5xl text-center">
          Efficiency Unleashed: Explore Our Tools
        </h1>
        <p className="xl:text-2xl lg:text-xl md:text-lg font-normal text-sm text-center w-[60%]">
          Explore the robust features of CHKR designed to streamline employee
          check-ins, task assignments, and management with ease and efficiency.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:mx-24 md:mx-10 mt-20 mx-10 gap-16 md:gap-6 lg:gap-14">
        <div
          style={{
            backgroundImage: "linear-gradient(to right, #FF2600, #FBEB97)",
          }}
          className="xl:w-[90%] lg:w-[95%] md:w-[90%] w-3/4 h-full rounded-tr-[12rem] rounded-bl-[12rem] hidden md:block"
        >
          <div className="relative xl:w-[420px] lg:w-[300px] md:w-[255px] w-[155px]  border-white border-4 rounded-xl top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/featuresImg.png"
              alt="Center Image"
              width={500}
              height={500}
            />
            <div className="absolute xl:w-[500px] lg:w-[360px] md:w-[290px] w-[200px]  border-white border-4 rounded-xl top-full left-[16%] transform -translate-y-1/2">
              <Image
                src="/images/featuresImg1.png"
                alt="Right Image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <ArrowIcon className="xl:w-[4rem] xl:h-[4rem] mr-2 md:w-[3.5rem] md:h-[3rem] w-[2rem] h-[2rem]" />
            <h2 className="text-2xl font-semibold mt-2 text-[#232324]">
              Employee Checkin/Checkout
            </h2>
            <p className="text-xl font-normal mt-2 my-4">
              Employees can easily clock in and out of their tasks, keeping
              track of their work time effortlessly.
            </p>
            <hr />
          </div>
          <div>
            <ArrowIcon className="xl:w-[4rem] xl:h-[4rem] mr-2 md:w-[3.5rem] md:h-[3rem]  w-[2rem] h-[2rem]" />
            <h2 className="text-2xl font-semibold mt-2 text-[#232324]">
              Task Assignment
            </h2>
            <p className="text-xl font-normal mt-2 my-4">
              Assign tasks to your team members within the app, making it simple
              to delegate responsibilities and keep everyone on the same page.
            </p>
            <hr />
          </div>
          <div>
            <ArrowIcon className="xl:w-[4rem] xl:h-[4rem] mr-2 md:w-[3.5rem] md:h-[3rem] w-[2rem] h-[2rem]" />
            <h2 className="text-2xl font-semibold mt-2 text-[#232324]">
              Task Management
            </h2>
            <p className="text-xl font-normal mt-2 my-4">
              Stay organized by tracking and overseeing tasks efficiently,
              ensuring that everything gets done smoothly and on time.
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

