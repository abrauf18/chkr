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
      <div className="max-w-screen-xl mx-auto mt-8 bg-white my-4 p-6 rounded-2xl">
        {userData && (
          <Header
            isAdmin={isAdmin}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            personalData={{ imageSrc: userData.picture }} // Update the personalData imageSrc if needed
            companyData={{ imageSrc: userData.company_logo }}
          />
        )}

        {!isAdmin ? (
          <PersonalInformation />
        ) : (
          <div className="mt-6">
            {activeTab === "personal" && <PersonalInformation />}
            {activeTab === "company" && (
              <CompanyInformation
                companyinfo={{
                  company_name: userData.company_name,
                  firm_name: userData.firm_name,
                  phone_number: userData.phone_number,
                  location: userData.location,
                  country: userData.country,
                }}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Settings;

