import React from "react";
import Image from "next/image";
import AboutIcon from "@/assets/icons/about-icon";
import TeamIcon from "@/assets/icons/team-icon";

const AboutUs = () => {
  return (
    <div id="aboutUs" className="bg-white pt-10">
      <div className="flex flex-col w-1/2 md:w-3/4 xl:mx-24 mx-4 md:mx-10 justify-start gap-4">
        <h2 className="xl:font-semibold xl:text-4xl font-semibold md:text-3xl">
          Why Choose Us <br />
          for best service experience
        </h2>
        <p className="xl:text-2xl lg:text-xl md:text-lg md:font-medium text-sm">
          We're dedicated to revolutionizing how businesses handle home service
          tasks and employee check-ins. Our team brings expertise in software
          development, data analytics, and customer service to create a seamless
          solution for tracking activities and managing schedules
        </p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 xl:mx-24 md:mx-10 mx-4 mt-20 gap-6">
        <div className="flex items-start gap-4">
          <span>
            <AboutIcon color="#FF2600" width={40} height={40} />
          </span>
          <div>
            <h2 className="xl:text-3xl md:text-2xl md:font-bold">
              Our Mission
            </h2>
            <p className="xl:text-xl text-sm md:text-lg mt-2">
              Revolutionizing home service task management and employee
              check-ins for streamlined operations and enhanced productivity.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span>
            <TeamIcon color="#FF2600" width={40} height={40} />
          </span>
          <div>
            <h2 className="xl:text-3xl md:text-2xl md:font-bold">Our Team</h2>
            <p className="xl:text-xl text-sm md:text-lg mt-2">
              A dedicated group of professionals with expertise in software
              development, data analytics, and customer service, committed to
              ensuring CHKRR remains intuitive, reliable, and responsive to user
              needs.
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-20 md:mx-10 xl:mx-24 mx-4 gap-4">
        <Image
          src="/images/AboutUsImg.png"
          width={500}
          height={500}
          alt="About"
          className="w-2/3"
        />
        <Image
          src="/images/AboutUsImg1.png"
          width={500}
          height={500}
          alt="About"
          className="w-1/3"
        />
      </div>
    </div>
  );
};

export default AboutUs;

