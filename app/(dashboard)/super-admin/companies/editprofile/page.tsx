import EditCompanyProfile from '@/components/modules/super-admin/companies/edit-company-profile'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Edit Profile",
  description: "Edit the company information."
};

export default function EditProfilePage() {
  return <EditCompanyProfile />
}
