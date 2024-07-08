'use client'
import React from "react";
import Header from "@/components/shared/header";
import CompanyCard from "./company-card";
import { useCompanyData } from "./companydata-context";

const Companies: React.FC = () => {
  const { data, loading, error } = useCompanyData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Header title="List of Companies Onboarded" />
      <div className="flex flex-col gap-4 my-8">
        <h1>Recently added</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {data?.map((company) => (
            <CompanyCard key={company.id} {...company} />
          ))}
        </div>

        <h1>All Companies</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {data?.map((company) => (
            <CompanyCard key={company.id} {...company} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Companies;
