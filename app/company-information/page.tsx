import React from 'react'
import CompanyInformation from '../components/modules/onboarding/companyInformation'
import Navbar from '../components/shared/Navbar';

export default function page() {
  return (
    <>
      <Navbar
        buttonText="Register Now"
        textBeforeButton="Don't have an account?"
      />
      <CompanyInformation />
    </>
  );
}