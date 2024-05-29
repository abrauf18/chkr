import React from "react";

const Pros = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center mt-36 sm:mt-56 md:mt-[20rem] lg:mt-96 gap-10">
      <div className="md:w-1/4 w-3/4">
      <div className="h-2 w-full bg-primary rounded-full my-4"></div>
        <h1 className="font-normal text-xl md:text-2xl">Efficiency</h1>
        <p className="md:text-base lg:text-xl text-sm">
          Employee task management and check-ins, saving time.
        </p>
      </div>
      <div className="md:w-1/4 w-3/4">
      <div className="h-2 w-full bg-primary rounded-full my-4"></div>
        <h1 className="font-normal text-xl md:text-2xl">Accuracy</h1>
        <p className="md:text-base lg:text-xl text-sm">
          Track employee activities with precision, reducing errors.
        </p>
      </div>
      <div className="md:w-1/4 w-3/4">
        <div className="h-2 w-full bg-primary rounded-full my-4"></div>
        <h1 className="font-normal text-xl md:text-2xl">Convenience</h1>
        <p className="md:text-base lg:text-xl text-sm">
          Access CHKR from anywhere with internet connectivity.
        </p>
      </div>
    </div>
  );
};

export default Pros;
