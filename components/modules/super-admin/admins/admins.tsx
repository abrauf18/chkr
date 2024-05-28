import React from 'react'
import AdminTable from './admin-table'
import DashboardHeader from '@/components/shared/dashboard-header'
import AddAdmin from './add-admin'
import AdminHeader from '../../../shared/admin-header'

export default function Admins() {
  return (
    <div>
      <DashboardHeader title='Manage Admins' />
      <AdminHeader title='Admins' isAdmin={false} isSuperAdmin={true} />
      <AdminTable />
    </div>
  )
}
