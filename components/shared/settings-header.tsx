"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

interface TabData {
  imageSrc: string;
}

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setCurrentImage: (image: any) => void;
  personalData: TabData;
  companyData: TabData;
  isAdmin?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  setCurrentImage,
  personalData,
  companyData,
  isAdmin,
}) => {
  const activeData = activeTab === "personal" ? personalData : companyData;
  const [currentImageSrc, setCurrentImageSrc] = useState(
    activeData.imageSrc ||
      "https://chkr-buck.s3.amazonaws.com/user-profile/defaultImage.webp"
  );

  useEffect(() => {
    setCurrentImage(activeData.imageSrc);
  }, []);
  const handleRemovePhoto = () => {
    setCurrentImageSrc(
      "https://chkr-buck.s3.amazonaws.com/user-profile/defaultImage.webp"
    );
    setCurrentImage(
      "https://chkr-buck.s3.amazonaws.com/user-profile/defaultImage.webp"
    );
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
      setCurrentImage(file);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-white p-4 rounded-2xl">
      <div className="relative">
        <div className="bg-[url('https://chkr-buck.s3.amazonaws.com/Profile_bg.svg')] h-32 rounded-2xl bg-no-repeat bg-cover"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full border-4 border-white">
          <Image
            key={`${currentImageSrc}`}
            src={
              currentImageSrc?.startsWith("https")
                ? currentImageSrc
                : currentImageSrc
            }
            alt="profile image"
            width={100}
            height={100}
            className="rounded-full aspect-square object-cover max-h-24 max-w-24"
            priority
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-12 gap-4">
        <Button
          className="rounded-3xl bg-gray-300 hover:text-white hover:bg-primary px-6"
          onClick={handleRemovePhoto}
        >
          Remove
        </Button>
        <Button
          className="rounded-3xl text-white bg-primary px-6"
          onClick={() => document.getElementById("fileInput")!.click()}
        >
          Upload
        </Button>
        <input
          id="fileInput"
          type="file"
          accept="image/png, image/jpeg, image/jpg, image/gif"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      {isAdmin && companyData.imageSrc !== null && (
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-8">
            <button
              onClick={() => {
                setActiveTab("personal");
                setCurrentImageSrc(personalData.imageSrc);
              }}
              className={`pb-2 mobile:text-xs whitespace-nowrap ${
                activeTab === "personal"
                  ? "border-b-4 border-red-500 font-bold"
                  : "font-medium"
              }`}
            >
              Personal Information
            </button>
            <button
              onClick={() => {
                setActiveTab("company");
                setCurrentImageSrc(companyData.imageSrc);
              }}
              className={`pb-2 mobile:text-xs whitespace-nowrap ${
                activeTab === "company"
                  ? "border-b-4 border-red-500 font-bold"
                  : "font-medium"
              }`}
            >
              Company Information
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

