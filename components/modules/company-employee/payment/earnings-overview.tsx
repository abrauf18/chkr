import WalletAdd from "@/assets/icons/wallet-add";
import {
  Receipt,
  MoveUpRight,
  StickyNote,
  MoveDownRight,
  CircleChevronRight,
  MailPlus,
  Wallet,
} from "lucide-react";
import React from "react";

export default function EarningsOverview({
  totalEarned,
  totalWithdrawn,
  remainingBalance,
}: {
  totalEarned: number;
  totalWithdrawn: number;
  remainingBalance: number;
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-2 my-2">
      <div className="flex flex-col w-full bg-white rounded-3xl py-8 px-6 gap-6">
        <div className="flex items-center xl:gap-9 gap-2 w-full">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
            <Receipt color="#3498DB" />
          </div>
          <div className="flex flex-col w-[40%]">
            <div className="flex items-baseline gap-2">
              <h1 className="font-bold text-2xl xl:text-3xl text-gray-700 whitespace-nowrap">
                ${totalEarned}
              </h1>
              <p className="font-bold">USD</p>
            </div>
            <p className="text-gray-400 text-xl whitespace-nowrap">
              Total Earnings
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-white rounded-3xl py-8 px-6 gap-6">
        <div className="flex items-center xl:gap-9 gap-2 w-full">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center ">
            <Wallet color="#31B867" />
          </div>
          <div className="flex flex-col w-[40%]">
            <div className="flex items-baseline gap-2">
              <h1 className="font-bold text-2xl xl:text-3xl text-gray-700">
                ${totalWithdrawn}
              </h1>
              <p className="font-bold">USD</p>
            </div>
            <p className="text-gray-400 text-xl whitespace-nowrap">
              Cash Withdrawal
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-red-500">
          {/* <div className="flex items-center gap-1 text-left">
            <MoveDownRight className="h-4 w-4" />
            <span className="text-xs xl:text-sm font-bold">2.84%</span>
          </div>
          <span className="text-gray-400 ml-2 whitespace-nowrap lg:text-sm text-base">
            since last month
          </span> */}
        </div>
      </div>
      <div className="flex flex-col w-full bg-white rounded-3xl py-8 px-6 gap-6">
        <div className="flex items-center xl:gap-9 gap-2">
          <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center">
            <WalletAdd />
          </div>
          <div className="flex flex-col w-[40%]">
            <div className="flex items-baseline gap-2">
              <h1 className="font-bold text-2xl xl:text-3xl text-gray-700">
                ${remainingBalance}
              </h1>
              <p className="font-bold">USD</p>
            </div>
            <p className="text-gray-400 text-xl xl:whitespace-nowrap">
              Cash in
            </p>
          </div>
        </div>
        {/* <div className="flex items-center gap-1 text-green-500">
          <div className="flex items-center gap-1">
            <MoveUpRight className="h-4 w-4" />
            <span className="text-xs xl:text-sm font-bold">3.64%</span>
          </div>
          <span className="text-gray-400 ml-2 whitespace-nowrap lg:text-sm text-base">
            since last month
          </span>
        </div> */}
      </div>
    </div>
  );
}

