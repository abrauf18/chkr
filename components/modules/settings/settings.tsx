"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import PersonalInformation from './personal-information';


export default function Settings() {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="max-w-screen-lg mx-auto mt-8 bg-white my-4 p-6 rounded-2xl">
      <div className="relative">
        <div className="bg-gray-800 h-24 rounded-t-2xl"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-white">
          <Image
            src="/images/companyLogo.svg"
            alt='company logo'
            width={5}
            height={5}
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
      <div className="mt-12 text-center">
        <h1 className="text-xl font-semibold">Company Name</h1>
        <p className="text-gray-500">Serviceadmin@example.com</p>
      </div>
      <div className="mt-6 flex justify-center">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('personal')}
            className={`pb-2 ${activeTab === 'personal' ? 'border-b-4 border-red-500 font-bold' : 'font-medium'}`}
          >
            Personal Information
          </button>
          <button
            onClick={() => setActiveTab('company')}
            className={`pb-2 ${activeTab === 'company' ? 'border-b-4 border-red-500 font-bold' : 'font-medium'}`}
          >
            Company Information
          </button>
        </div>
      </div>
      <PersonalInformation />
    </div>
  )
}
