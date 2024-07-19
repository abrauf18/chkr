import React from "react";
import Image from "next/image";
import icon1 from "@/public/images/partner1.svg";
import icon2 from "@/public/images/partner2.svg";
import icon3 from "@/public/images/partner3.svg";
import icon4 from "@/public/images/partner4.svg";
import icon5 from "@/public/images/partner5.svg";
import icon6 from "@/public/images/partner6.svg";

const Partners: React.FC = () => {
  return (
    <div className="flex flex-col lg:py-10 mx-6 md:mx-16 items-center gap-4 mb-24">
      <h1 className="xl:font-semibold xl:text-4xl md:font-semibold md:text-3xl text-center">
        Our Partners
      </h1>
      <p className="xl:text-2xl lg:text-xl md:text-lg md:font-medium text-center text-gray-400">
        Trusted by top industry partners for seamless employee management.
      </p>
      <div className="scroll-container">
        <div className="scroll-content flex gap-10">
          <Image
            src={icon1}
            alt="Partner 1"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem] w-[5rem] h-[5rem]"
          />
          <Image
            src={icon2}
            alt="Partner 2"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem] w-[5rem] h-[5rem"
          />
          <Image
            src={icon3}
            alt="Partner 3"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem]  w-[5rem] h-[5rem]"
          />
          <Image
            src={icon4}
            alt="Partner 4"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem]  w-[5rem] h-[5rem]"
          />
          <Image
            src={icon5}
            alt="Partner 5"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem] w-[5rem] h-[5rem]"
          />
          <Image
            src={icon6}
            alt="Partner 6"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem]  w-[5rem] h-[5rem]"
          />
          {/* Duplicate images for seamless scroll */}
          <Image
            src={icon1}
            alt="Partner 1"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem] w-[5rem] h-[5rem]"
          />
          <Image
            src={icon2}
            alt="Partner 2"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem] w-[5rem] h-[5rem"
          />
          <Image
            src={icon3}
            alt="Partner 3"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem]  w-[5rem] h-[5rem]"
          />
          <Image
            src={icon4}
            alt="Partner 4"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem]  w-[5rem] h-[5rem]"
          />
          <Image
            src={icon5}
            alt="Partner 5"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem] w-[5rem] h-[5rem]"
          />
          <Image
            src={icon6}
            alt="Partner 6"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem]  w-[5rem] h-[5rem]"
          />
          <Image
            src={icon1}
            alt="Partner 1"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem] w-[5rem] h-[5rem]"
          />
          <Image
            src={icon2}
            alt="Partner 2"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem] w-[5rem] h-[5rem"
          />
          <Image
            src={icon3}
            alt="Partner 3"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem]  w-[5rem] h-[5rem]"
          />
          <Image
            src={icon4}
            alt="Partner 4"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem]  w-[5rem] h-[5rem]"
          />
          <Image
            src={icon5}
            alt="Partner 5"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem] w-[5rem] h-[5rem]"
          />
          <Image
            src={icon6}
            alt="Partner 6"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem]  w-[5rem] h-[5rem]"
          />
          <Image
            src={icon6}
            alt="Partner 6"
            className="partner-image xl:w-[9rem] xl:h-[9rem] lg:w-[7rem] lg:h-[7rem] w-[5rem] h-[5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;

