"use client";
import React from "react";
import Header from "@/components/shared/header";
import CompanyCard from "./company-card";
import { useCompanyData } from "./companydata-context";
import Loader from "@/components/shared/loader";

const Companies: React.FC = () => {
  const { data, loading, error } = useCompanyData();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const sortedCompanies = data?.sort(
    (a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
  );

  const recentlyAddedCompanies = sortedCompanies?.slice(0, 2);

  return (
    <>
      <Header title="List of Companies Onboarded" />
      {data?.length == 0 ? (
        <div className="text-center mt-16">No companies to display</div>
      ) : (
        <div className="flex flex-col gap-4 my-8">
          <h1>Recently added</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {recentlyAddedCompanies?.map((company) => (
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
      )}
    </>
  );
};

export default Companies;

