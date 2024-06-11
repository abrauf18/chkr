"use client";
import DashboardHeader from "@/components/shared/dashboard-header";
import { Button } from "@/components/ui/button";
import React from "react";
import CompanyInformation from "../../company-admin/settings/company-information";
import PlanCard from "../../company-admin/onboarding/plan-card";
import { ErrorMessage } from "@hookform/error-message";

export default function EditCompanyProfile() {
  return (
    <>
      <DashboardHeader title="Companies" />
      <div className="flex justify-between">
        <h1 className="text-xl mb-2">Edit Company Profile</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 my-4">
        <div className="bg-white rounded-xl p-3">
          <h1 className="text-lg font-semibold">
            Fill out the Company Information
          </h1>
          <hr className="my-3" />
          <CompanyInformation
            companyinfo={{
              company_name: "Company Name",
              firm_name: "A",
              phone_number: "Phone Number",
              location: "Location",
              country: "Pakistan",
            }}
          />
        </div>
      </div>
    </>
  );
}

