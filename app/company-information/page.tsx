import React from "react";
import CompanyInformation from "@/components/modules/onboarding/company-information";
import Navbar from "../../components/shared/navbar";

export default function page() {
  return (
    <>
      <Navbar buttonText="Login " textBeforeButton="Already have an account" />
      <CompanyInformation />
    </>
  );
}

