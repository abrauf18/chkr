import Settings from '@/components/shared/settings'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your profile settings on CHKR"
};

export default function SettingsPage() {
  return <Settings />
}
