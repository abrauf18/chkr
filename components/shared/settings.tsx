"use client";
import React, { useState, useEffect } from "react";
import Header from "./settings-header";
import PersonalInformation from "./personal-information";
import CompanyInformation from "../modules/company-admin/settings/company-information";
import DashboardHeader from "./dashboard-header";
import { UserInfoAction } from "@/actions/settings/settings-action";

const Settings: React.FC<{ isAdmin?: boolean }> = ({ isAdmin }) => {
  const [activeTab, setActiveTab] = useState<string>("personal");
  const [userData, setUserData] = useState<any>(null); // State to store user data

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await UserInfoAction();
      setUserData(data);
    };
    fetchUserData();
  }, []);

  return (
    <>
      <DashboardHeader title="Profile" />
      <div className="max-w-screen-xl mx-auto mt-8 bg-white my-4 p-6 rounded-2xl">
        {userData && (
          <Header
            isAdmin={isAdmin}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            personalData={{ imageSrc: "/images/Avatar.svg" }} // Update the personalData imageSrc if needed
            companyData={{ imageSrc: userData.company_logo }} // Use the fetched company logo URL
          />
        )}

        {!isAdmin ? (
          <PersonalInformation />
        ) : (
          <div className="mt-6">
            {activeTab === "personal" && <PersonalInformation />}
            {activeTab === "company" && <CompanyInformation />}
          </div>
        )}
      </div>
    </>
  );
};

export default Settings;
