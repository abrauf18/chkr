import React from 'react';
import CompanyCard from './company-card';
import DashboardHeader from '@/components/shared/dashboard-header';
import CompanyHeader from './company-header';

const recentlyAddedCompanies = [
  {
    companyName: "Upyr Ltd",
    companyType: "Startup Agency",
    description: "Lorem ipsum dolor sit amet, Curabitur tempus ac leo eget luctus. Integer et odio id nisi.",
    subscriptionPlan: "Monthly Subscription Plan",
    location: "Singapore",
    staffCount: 3
  },
  {
    companyName: "Tech Solutions",
    companyType: "Tech Company",
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    subscriptionPlan: "Annual Subscription Plan",
    location: "USA",
    staffCount: 10
  }
];

const allCompanies = [
  {
    companyName: "Upyr Ltd",
    companyType: "Startup Agency",
    description: "Lorem ipsum dolor sit amet, Curabitur tempus ac leo eget luctus. Integer et odio id nisi.",
    subscriptionPlan: "Monthly Subscription Plan",
    location: "Singapore",
    staffCount: 3
  },
  {
    companyName: "Tech Solutions",
    companyType: "Tech Company",
    description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    subscriptionPlan: "Annual Subscription Plan",
    location: "USA",
    staffCount: 10
  },
  {
    companyName: "Green Energy",
    companyType: "Energy Solutions",
    description: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
    subscriptionPlan: "Annual Subscription Plan",
    location: "Germany",
    staffCount: 20
  },
  {
    companyName: "Healthcare Inc.",
    companyType: "Healthcare Provider",
    description: "Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.",
    subscriptionPlan: "Monthly Subscription Plan",
    location: "Tokyo",
    staffCount: 15
  },
  {
    companyName: "EduTech",
    companyType: "Educational Technology",
    description: "Etiam porta sem malesuada magna mollis euismod.",
    subscriptionPlan: "Annual Subscription Plan",
    location: "San Francisco",
    staffCount: 25
  },
  {
    companyName: "FinCorp",
    companyType: "Financial Services",
    description: "Nullam id dolor id nibh ultricies vehicula ut id elit.",
    subscriptionPlan: "Monthly Subscription Plan",
    location: "UK",
    staffCount: 40
  }
];

export default function Companies() {
  return (
    <>
      <DashboardHeader title='Companies' />
      <CompanyHeader title='List of Companies Onboarded' />
      <div className="flex flex-col gap-4 my-8">
        <h1>Recently added</h1>
        <div className="grid grid-cols-3 gap-4">
          {recentlyAddedCompanies.map((company, index) => (
            <CompanyCard
              key={index}
              companyName={company.companyName}
              companyType={company.companyType}
              description={company.description}
              subscriptionPlan={company.subscriptionPlan}
              location={company.location}
              staffCount={company.staffCount}
            />
          ))}
        </div>

        <h1>All Companies</h1>
        <div className="grid grid-cols-3 gap-4">
          {allCompanies.map((company, index) => (
            <CompanyCard
              key={index}
              companyName={company.companyName}
              companyType={company.companyType}
              description={company.description}
              subscriptionPlan={company.subscriptionPlan}
              location={company.location}
              staffCount={company.staffCount}
            />
          ))}
        </div>
      </div>
    </>
  );
}
