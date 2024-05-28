import React from 'react'
import AdminTable from './admin-table'
import DashboardHeader from '@/components/shared/dashboard-header'

export default function Admins() {
  return (
    <div>
      <DashboardHeader title='Manage Admins' />
      <AdminTable />
    </div>
  )
}
