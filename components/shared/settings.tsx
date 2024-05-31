"use client";
import React, { useState } from "react";
import Header from "./settings-header";
import PersonalInformation from "./personal-information";
import CompanyInformation from "../modules/company-admin/settings/company-information";
import DashboardHeader from "./dashboard-header";

const Settings: React.FC<{ isAdmin?: boolean }> = ({ isAdmin }) => {
  const [activeTab, setActiveTab] = useState<string>("personal");

  return (
    <>
    <DashboardHeader title="Profile"/>
    <div className="max-w-screen-xl mx-auto mt-8 bg-white my-4 p-6 rounded-2xl">
      <Header
        isAdmin={isAdmin}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        personalData={{ name: "Ayesha Rashid Khan", email: "asha@gmail.com" }}
        companyData={{ name: "Company Name", email: "seviceadmin@example.com" }}
      />

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

