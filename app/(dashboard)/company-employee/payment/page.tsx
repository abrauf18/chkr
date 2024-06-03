import Payments from '@/components/modules/company-employee/payment/payments'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Payments",
  description: "Track your earnings, view payment history, and manage your payment details on CHKR sfrom the company-employee/payments page."
};

export default function page() {
  return <Payments />
}
