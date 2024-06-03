import Companies from '@/components/modules/super-admin/companies/companies'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Companies",
  description: "Manage companies within your system. View existing companies, add new ones, edit details, and manage access."
};


export default function CompaniesPage() {
  return <Companies />
}
