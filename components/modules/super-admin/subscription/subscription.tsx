import React from "react";
import UsersSummaryCard from "./users-summary-card";
import CompaniesSummaryCard from "./companies-summary-card";
import SubscriptionList from "./subscription-list";
import Header from "@/components/shared/header";
import { GetCompanyDetails } from "@/actions/company/company-action";

export default async function Subscription() {
  const data = await GetCompanyDetails();
  const userSummaryData = [
    { period: "Standard", amount: data?.companystats[0]?.Standard || 0 },
    { period: "Premium", amount: data?.companystats[0]?.Premium || 0 },
  ];

  const companySummaryData = [
    {
      title: "Total Companies",
      companyCount: data?.companystats[0]?.total_Company || 0,
    },
    { title: "Disable Companies", companyCount: data?.disableCount || 0 },
  ];

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl mt-4">Subscription Summary</h1>
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
          <div className="lg:col-span-1">
            <UsersSummaryCard {...userSummaryData[0]} />
          </div>
          <div className="lg:col-span-1">
            <UsersSummaryCard {...userSummaryData[1]} />
          </div>
          <div className="lg:col-span-2 md:col-span-2 grid grid-cols-2 gap-6">
            <CompaniesSummaryCard {...companySummaryData[0]} />
            <CompaniesSummaryCard {...companySummaryData[1]} />
          </div>
        </div>
        <Header title="Transaction Summary" hideFilter />
        <SubscriptionList plans={data?.plans} />
      </div>
    </>
  );
}

