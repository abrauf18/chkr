"use client";
import React, { useState } from "react";
import Header from "./settings-header";
import PersonalInformation from "./personal-information";
import CompanyInformation from "../modules/company-admin/settings/company-information";

const Settings: React.FC<{ isAdmin?: boolean; data: any }> = ({
  isAdmin,
  data,
}) => {
  const [activeTab, setActiveTab] = useState<string>("personal");
  const userData = data;
  const [currentImage, setCurrentImage] = useState("");

  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-8 bg-white my-4 p-6 rounded-2xl">
        {userData && (
          <Header
            isAdmin={isAdmin}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setCurrentImage={setCurrentImage}
            personalData={{ imageSrc: userData.picture }}
            companyData={{ imageSrc: userData.company_logo }}
          />
        )}

        {!isAdmin ? (
          userData && (
            <PersonalInformation
              userData={userData}
              currentImage={currentImage}
            />
          )
        ) : (
          <div className="mt-6">
            {activeTab === "personal" && userData && (
              <PersonalInformation
                userData={userData}
                currentImage={currentImage}
              />
            )}
            {activeTab === "company" && (
              <CompanyInformation
                companyinfo={{
                  company_name: userData.company_name,
                  firm_name: userData.firm_name,
                  phone_number: userData.phone_number,
                  location: userData.location,
                  country: userData.country,
                  company_logo: userData.company_logo,
                }}
                currentImage={currentImage}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Settings;

