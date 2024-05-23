"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { ArrowDown } from "lucide-react"
import { SetStateAction, useState } from "react";

const transactions = [

  {
    ID: "#AD1456",
    Date: "8/2/19",
    Amount: "$928.41",
    Status: "Cash in"
  },
  {
    ID: "#AD1456",
    Date: "8/21/15",
    Amount: "-$202.87",
    Status: "Cash out"
  },
  {
    ID: "#AD1456",
    Date: "5/30/14",
    Amount: "$576.28",
    Status: "Cash in"
  },
  {
    ID: "#AD1456",
    Date: "5/30/14",
    Amount: "$576.28",
    Status: "Cash in"
  },
  {
    ID: "#AD1456",
    Date: "8/21/15",
    Amount: "-$202.87",
    Status: "Cash out"
  },
  {
    ID: "#AD1456",
    Date: "5/30/14",
    Amount: "$576.28",
    Status: "Cash in"
  },

  {
    ID: "#AD1456",
    Date: "5/30/14",
    Amount: "$576.28",
    Status: "Cash in"
  },
  {
    ID: "#AD1456",
    Date: "8/2/19",
    Amount: "$928.41",
    Status: "Cash in"
  },
  {
    ID: "#AD1456",
    Date: "8/21/15",
    Amount: "-$202.87",
    Status: "Cash out"
  },
]
const ITEMS_PER_PAGE = 6;
export function TransactionHistory() {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedTransactions = transactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  return (
    <>
      <Table className=" rounded-2xl">
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
          {paginatedTransactions.map((transaction, index) => (
            <TableRow key={transaction.ID} className={index % 2 === 1 ? "bg-white" : ""}>
              <TableCell className="font-medium">{transaction.ID}</TableCell>
              <TableCell>{transaction.Date}</TableCell>
              <TableCell>{transaction.Amount}</TableCell>
              <TableCell >
                <div className="flex items-center justify-center border rounded-lg gap-1 w-[6rem] p-1">
                  <div className={`rounded-full w-2 h-2 ${transaction.Status === "Cash in" ? "bg-green-500" : "bg-primary"
                    }`}></div>
                  <span>{transaction.Status}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                href="#"
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationEllipsis />
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}
