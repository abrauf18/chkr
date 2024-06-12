import React from 'react'
import AdminTable from './admin-table'
import AdminHeader from '../../../shared/admin-header'

export default function Admins() {
  return (
    <div>
      <AdminHeader title='Admins' isAdmin={false} isSuperAdmin={true} />
      <AdminTable />
    </div>
  )
}
