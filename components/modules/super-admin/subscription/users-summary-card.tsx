import React from "react";

interface UsersSummaryCardProps {
  period: string;
  amount?: number;
  currency?: string;
}

export default function UsersSummaryCard({
  period,
  amount,
  currency = "USD",
}: UsersSummaryCardProps) {
  return (
    <div className="flex flex-col py-6 pl-4 bg-white rounded-2xl gap-4">
      <p className="whitespace-nowrap">Your {period} Users</p>
      {amount !== undefined && (
        <h1 className="font-bold text-2xl xl:text-3xl whitespace-nowrap">
          $ {amount.toFixed(2)} {currency}
        </h1>
      )}
    </div>
  );
}