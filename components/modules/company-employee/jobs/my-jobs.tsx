"use client";
import React, { useState } from "react";
import JobRequests from "./job-requests";
import OngoingJobs from "./ongoing-jobs";
import CompletedJobs from "./completed-jobs";
import Header from "@/components/shared/header";

const tabsData = [
  { id: 1, text: "New Job Requests" },
  { id: 2, text: "Ongoing Jobs" },
  { id: 3, text: "Completed Jobs" },
];

export default function MyJobs() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <JobRequests />;
      case 2:
        return <OngoingJobs />;
      case 3:
        return <CompletedJobs />;
      default:
        return null;
    }
  };


  return (
    <div className="flex flex-col mx-auto gap-4">
      <Header title="Track your Assigned Services" />
      <div className="flex gap-2 items-center my-4">
        {tabsData.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex justify-center items-center text-center bg-white rounded-2xl md:py-3 md:px-6 px-3 py-2 gap-2 cursor-pointer ${activeTab === tab.id
              ? "bg-primary border-b-2 border-primary font-bold"
              : " text-gray-600"}`}
          >
            {/* Hide circle in inactive tabs */}
            {activeTab === tab.id && (
              <div className="rounded-full w-2 h-2 bg-primary" />
            )}
            <div className={`flex-grow text-center ${activeTab !== tab.id ? "text-center" : ""}`}>
              <span className="text-xs md:text-base whitespace-nowrap">
                {tab.text}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div>{renderContent()}</div>
    </div>
  );
}
