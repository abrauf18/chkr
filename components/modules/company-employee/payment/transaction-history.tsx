"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { fromUnixTime, format } from "date-fns";

const ITEMS_PER_PAGE = 6;

export function TransactionHistory({ transactions }: { transactions: any }) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Table className="rounded-2xl">
        <TableHeader>
          <TableRow className="bg-white">
            <TableHead>
              <div className="flex items-center gap-1 text-black">
                <span className="whitespace-nowrap">Transaction ID</span>
                <ArrowDown className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1 text-black">
                <span>Date</span>
                <ArrowDown className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1 text-black">
                <span>Amount</span>
                <ArrowDown className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-1 text-black">
                <span>Status</span>
                <ArrowDown className="w-4 h-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedTransactions.map((transaction: any, index: number) => (
            <TableRow key={index} className={index % 2 === 1 ? "bg-white" : ""}>
              <TableCell className="font-medium">{transaction.id}</TableCell>
              <TableCell>
                {format(
                  fromUnixTime(transaction?.created),
                  "dd MMMM yyyy, h:mm a"
                )}
              </TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>
                <div
                  className={`flex items-center justify-center border rounded-lg gap-1 w-[6rem] p-1 ${
                    transaction.type === "payment"
                      ? "bg-green-100"
                      : "bg-red-100"
                  }`}
                >
                  <div
                    className={`rounded-full w-2 h-2 ${
                      transaction.type === "payout"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  ></div>
                  <span>
                    {transaction.type === "payment" ? "Cash In" : "Cash Out"}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {transactions?.length > ITEMS_PER_PAGE && (
        <Pagination className="bg-white my-6 rounded-xl p-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePreviousPage} />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink onClick={() => handlePageChange(i + 1)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}

