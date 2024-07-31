import React from "react";

interface UsersSummaryCardProps {
  period: string;
  amount?: number;
  currency?: string;
}

export default function UsersSummaryCard({
  period,
  amount,
}: UsersSummaryCardProps) {
  return (
    <div className="flex flex-col py-6 pl-4 bg-white rounded-2xl gap-4">
      <p className="whitespace-nowrap">{period} Companies</p>
      {amount !== undefined && (
        <div className="flex gap-2 items-baseline">
          <h1 className="font-bold text-2xl xl:text-3xl whitespace-nowrap">
            {amount}
            <span className="text-sm ml-1">Companies</span>
          </h1>
        </div>
      )}
    </div>
  );
}

