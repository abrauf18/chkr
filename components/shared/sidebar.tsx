"use client"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { Users } from 'lucide-react';
import { StickyNote } from 'lucide-react';
import DashboardSquare from '@/assets/icons/dashboard-square';

const SideBar: React.FC = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className='flex'>
      <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} backgroundColor='white' className='bg-light-gray md:w-[90px] lg:w-fit md:p-3 md:fixed'>
        <Menu>
          <MenuItem icon={<DashboardSquare />}>Dashboard</MenuItem>
          <MenuItem icon={<StickyNote />}>All Jobs</MenuItem>
          <MenuItem icon={<Users />}>Employees</MenuItem>
          <MenuItem icon={<Settings />}>Settings</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ display: 'flex', padding: 10 }}>
        <div>
          <button className="sb-button" onClick={() => setToggled(!toggled)}>
            Toggle
          </button>
        </div>
      </main>
    </div>
  );
};

export default SideBar;
