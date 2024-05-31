interface AuthLeftSideProps {
  heading1: string;
  heading2: string;
  heading3: string;
  url: any;
}

import React from "react";
import Image from "next/image";
import Eclipse from "@/assets/icons/eclipse-icon";

const AuthLeftSide: React.FC<AuthLeftSideProps> = ({
  heading1,
  heading2,
  heading3,
  url,
}) => {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <div className="w-full text-center font-medium md:text-5xl text-3xl p-2 xl:mt-32 mobile:mt-8">
        <h1>{heading1}</h1>
        <div className="relative">
          <div className="absolute bg-[#FFC7BD] h-6 w-1/2 bottom-0 left-1/2 transform -translate-x-1/2 z-0"></div>
          <h1 className="relative z-10 md:text-5xl text-3xl mt-3 xl:mt-6 font-medium">
            {heading2}
          </h1>
        </div>
        <div className="flex justify-center items-center relative lg:flex-wrap md:flex-wrap mt-1">
          <h1 className="md:text-5xl text-3xl mr-4 font-medium">
            {heading3}
          </h1>
          <Eclipse className="xl:w-[10rem] xl:h-[6rem] md:w-[6rem] md:h-[4rem] sm:w-[5rem] sm:h-[3rem] w-[5rem] h-[3rem]" />
        </div>
      </div>
      <Image
        className="rounded-2xl mt-20 hidden xl:block"
        src={url}
        alt="auth Page banner "
        layout="responsive"
        width={800}
        height={500}
        priority
      />
    </div>
  );
};

export default AuthLeftSide;

