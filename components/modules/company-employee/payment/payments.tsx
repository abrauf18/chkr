import React from "react";
import EarningsOverview from "./earnings-overview";
import { TransactionHistory } from "./transaction-history";
import Header from "@/components/shared/header";

export default async function Payments({ results }: { results: any }) {
  return (
    <div className="flex flex-col gap-4">
      <Header title="My Earnings Overview" hideFilter />
      <EarningsOverview
        totalEarned={results?.totalEarned || 0}
        totalWithdrawn={results?.totalWithdrawn || 0}
        remainingBalance={results?.remainingBalance || 0}
      />
      <Header title="Transaction History" hideFilter />
      {results?.transactions?.length > 0 ? (
        <TransactionHistory transactions={results?.transactions} />
      ) : (
        <div className="flex justify-center items-center">
          No Transactions to show
        </div>
      )}
    </div>
  );
}

