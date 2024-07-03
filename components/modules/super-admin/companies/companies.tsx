import React from "react";
import Header from "@/components/shared/header";
import { GetCompanyAction } from "@/actions/company/company-action";
import CompanyCard from "./company-card";
import { CompanyInterface } from "@/lib/interfaces";

const Companies: React.FC = async () => {

  const response = await GetCompanyAction();
  const { data } = response; 
  return (
    <>
      <Header title="List of Companies Onboarded" />
      <div className="flex flex-col gap-4 my-8">
        <h1>Recently added</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {data.map((company: CompanyInterface) => (
            <CompanyCard 
            key={company.id} {...company} />
          ))}
        </div>

        <h1>All Companies</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {data.map((company: CompanyInterface) => (
            <CompanyCard key={company.id} {...company} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Companies;
