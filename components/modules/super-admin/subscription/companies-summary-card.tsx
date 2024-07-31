import React from "react";

interface CompaniesSummaryCardProps {
  title: string;
  companyCount: number;
}

export default function CompaniesSummaryCard({
  title,
  companyCount,
}: CompaniesSummaryCardProps) {
  return (
    <div className="flex flex-col py-6 pl-4 bg-white rounded-2xl gap-4">
      <p className="whitespace-nowrap">{title}</p>
      <div className="flex gap-2 items-baseline">
        <h1 className="font-bold text-2xl xl:text-3xl">{companyCount}</h1>
        <p className="text-sm">Companies</p>
      </div>
    </div>
  );
}
