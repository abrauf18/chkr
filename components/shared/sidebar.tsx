"use client";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React from 'react';
import { Settings } from 'lucide-react';
import { Users } from 'lucide-react';
import { StickyNote } from 'lucide-react';
import DashboardSquare from '@/assets/icons/dashboard-square';
import { ChevronLeft } from 'lucide-react';
import SidebarLogo from '@/assets/icons/sidebar-logo';
import SupportIcon from '@/assets/icons/support-icon';
import clsx from 'clsx';
import { AlignJustify } from 'lucide-react';

const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(window.matchMedia('(max-width: 800px)').matches);


  return (
    <div>
      <Sidebar
        collapsed={collapsed} collapsedWidth="100px" transitionDuration={1000}
        onBackdropClick={() => setToggled(false)} toggled={toggled} customBreakPoint="800px" onBreakPoint={setBroken}
        backgroundColor='black'
        className='overflow-visible md:w-[90px] h-full lg:w-fit md:p-3 top-0 left-0 '>
        <Menu>
          <MenuItem icon={<SidebarLogo />} className='mb-16 mt-6 text-white hover:bg-black font-medium text-2xl'>CHKR</MenuItem>
          <MenuItem icon={<DashboardSquare />} className={clsx('text-white hover:text-orange-500 hover:bg-white', { 'text-orange-500 bg-white': collapsed })}>Dashboard</MenuItem>
          <MenuItem icon={<StickyNote />} className={clsx('text-white hover:text-orange-500 hover:bg-white', { 'text-orange-500 bg-white': collapsed })}>All Jobs</MenuItem>
          <MenuItem icon={<Users />} className={clsx('text-white hover:text-orange-500 hover:bg-white', { 'text-orange-500 bg-white': collapsed })} >Employees</MenuItem>
          <MenuItem icon={<Settings />} className={clsx('text-white hover:text-orange-500 hover:bg-white', { 'text-orange-500 bg-white': collapsed })}>Settings</MenuItem>
        </Menu>

        <div className='bg-red-500 overflow-visible mx-[210px] my-auto z-50 shadow-lg'>
          <button className="sb-button" onClick={() => setCollapsed(!collapsed)}>
            <div className='bg-white flex items-center justify-center rounded-full h-8 w-8'><ChevronLeft /></div>
          </button>
        </div>

        <div className='mt-96'>
          <SupportIcon />
        </div>
      </Sidebar>
      <main style={{ display: 'flex', padding: 10 }}>
        <div>
          <button className="sb-button text-black" onClick={() => setToggled(!toggled)}>
            <AlignJustify />
          </button>
        </div>
      </main>
    </div>
  );
};

export default SideBar;