"use client";
import React, { useState } from "react";
import Header from "./header";
import PersonalInformation from "./personal-information";
import CompanyInformation from "../modules/company-admin/settings/company-information";

const Settings: React.FC<{ isEmployee?: boolean }> = ({ isEmployee }) => {
  const [activeTab, setActiveTab] = useState<string>("personal");

  return (
    <div className="max-w-screen-lg mx-auto mt-8 bg-white my-4 p-6 rounded-2xl">
      <Header
        isEmployee={isEmployee}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        personalData={{ name: "Ayesha Rashid Khan", email: "asha@gmail.com" }}
        companyData={{ name: "Company Name", email: "seviceadmin@example.com" }}
      />

      {isEmployee ? (
        <PersonalInformation />
      ) : (
        <div className="mt-6">
          {activeTab === "personal" && <PersonalInformation />}
          {activeTab === "company" && <CompanyInformation />}
        </div>
      )}
    </div>
  );
};

export default Settings;

