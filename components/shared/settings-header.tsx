// use client (assuming you're using it for code splitting)
import React from "react";
import Image from "next/image";

interface TabData {
  name: string;
  email: string;
}

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  personalData: TabData;
  companyData: TabData;
  isAdmin?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  personalData,
  companyData,
  isAdmin,
}) => {
  const activeData = activeTab === "personal" ? personalData : companyData;

  return (
    <div className="max-w-screen-lg mx-auto mt-8 bg-white p-4 rounded-2xl">
      <div className="relative">
        <div className="bg-[url('/images/Profile_bg.svg')] h-32 rounded-2xl"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full border-4 border-white">
          <Image
            src="/images/companyLogo.svg"
            alt="company logo"
            width={5}
            height={5}
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
      <div className="mt-12 text-center">
        <h1 className="text-xl font-semibold">{activeData?.name}</h1>
        <p className="text-gray-500">{activeData?.email}</p>
      </div>
      {isAdmin && (
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("personal")}
              className={`pb-2 ${
                activeTab === "personal"
                  ? "border-b-4 border-red-500 font-bold"
                  : "font-medium"
              }`}
            >
              Personal Information
            </button>
            <button
              onClick={() => setActiveTab("company")}
              className={`pb-2 ${
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

