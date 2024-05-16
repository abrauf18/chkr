"use client"
import React, { useState } from 'react';
import Header from './header';
import PersonalInformation from './personal-information';
import CompanyInformation from './company-information';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('personal');

  return (
    <div className="max-w-screen-lg mx-auto mt-8 bg-white my-4 p-6 rounded-2xl">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-6">
        {activeTab === 'personal' && <PersonalInformation />}
        {activeTab === 'company' && <CompanyInformation />}
      </div>
    </div>
  );
};

export default Settings;
