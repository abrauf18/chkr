import React from "react";
import Image from "next/image";
import authImg from "@/app/assets/images/auth.jpg";
import eclipse from "@/app/assets/icons/eclipse.svg";

interface AuthLeftSideProps {
  heading1: string;
  heading2: string;
  heading3: string;
  url: any;
}

const AuthLeftSide: React.FC<AuthLeftSideProps> = ({
  heading1,
  heading2,
  heading3,
  url,
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full text-center font-semibold xl:text-5xl md:text-4xl sm:text-4xl text-xl p-2">
        <h1>{heading1}</h1>
        <div className="relative md:mt-2 sm:mt-2 mt-1">
          <div className="absolute bg-[#FFC7BD] h-6 w-1/2 bottom-0 left-1/2 transform -translate-x-1/2 z-0"></div>
          <h1 className="relative z-10 xl:text-5xl md:text-4xl sm:text-4xl text-xl">
            {heading2}
          </h1>
        </div>
        <div className="flex justify-center items-center relative lg:flex-wrap md:flex-wrap">
          <h1 className="xl:text-5xl md:text-4xl sm:text-4xl text-xl font-semibold mr-4">
            {heading3}
          </h1>
          <Image
            src={eclipse}
            alt="eclipse"
            className="xl:w-[10rem] xl:h-[6rem] md:w-[6rem] md:h-[4rem] sm:w-[5rem] sm:h-[3rem] w-[5rem] h-[3rem]"
          />
        </div>
      </div>
      <Image
        className="rounded-2xl mt-20 hidden xl:block"
        src={url}
        alt="auth Page banner "
        layout="responsive"
        width={800}
        height={500}
      />
    </div>
  );
};

export default AuthLeftSide;
