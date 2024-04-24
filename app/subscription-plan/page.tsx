import React from 'react'
import SubscriptionPlan from '../components/modules/onboarding/SubscriptionPlan'
import Navbar from '../components/shared/Navbar';

export default function page() {
  return (
    <>
      <Navbar
        buttonText="Login "
        textBeforeButton="Already have an account"
      />
      <SubscriptionPlan />
    </>
  );
}