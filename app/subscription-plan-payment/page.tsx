import React from 'react'
import SubscriptionPlanPayment from '../components/modules/onboarding/PlanPayment'
import Navbar from '../components/shared/Navbar';

export default function page() {
  return (
    <>
      <Navbar
        buttonText="Login "
        textBeforeButton="Already have an account"
      />
      <SubscriptionPlanPayment />
    </>
  );
}