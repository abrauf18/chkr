import Admins from '@/components/modules/super-admin/admins/admins'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Admins",
  description: "A central location to manage all admin users within your system. Grant permissions, control access, and oversee admin activity."
};

export default function ManageAdminsPage() {
  return <Admins />
}
