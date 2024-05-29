import React from "react";
import Carousel from "./carousel";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className=" mt-10 mx-[7%] rounded-2xl h-full md:h-screen "
    >
      <div
        className="w-full px-8 h-full py-2 rounded-2xl "
        style={{
          background:
            "linear-gradient(to bottom, #FF4115 0%, #FBEB97 40%, #F9F8F8 100%, #FFFFFF 60%)",
        }}
      >
        <div className="flex flex-col text-white mt-16 lg:mb-20 mb-12 lg:mx-2 mx-5 gap-6">
          <h1 className="xl:font-semibold text-3xl lg:text-5xl capitalize md:font-semibold text-center">
            See What our users says
          </h1>
          <p className="xl:text-2xl lg:text-xl md:text-lg font-normal text-center">
            Discover the stories of success and satisfaction from our satisfied
            customers.
          </p>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Testimonials;

