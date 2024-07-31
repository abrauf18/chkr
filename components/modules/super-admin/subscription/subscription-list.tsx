"use client";
import React, { useState } from "react";
import { addDays, format } from "date-fns";
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
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function SubscriptionList({ plans }: { plans: any }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(plans.length / itemsPerPage);

  const handleClickPage = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = plans.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="bg-white">
            <TableHead>
              <div className="flex gap-2 items-center text-black whitespace-nowrap py-6 w-[12rem]">
                Company Name
                <ArrowDown className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex gap-2 items-center text-black whitespace-nowrap">
                Start Date
                <ArrowDown className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex gap-2 items-center text-black whitespace-nowrap">
                Subscription End
                <ArrowDown className="w-4 h-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex gap-2 items-center text-black whitespace-nowrap">
                Plan Type
                <ArrowDown className="w-4 h-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData?.length > 0 ? (
            paginatedData?.map((plan: any, index: any) => (
              <TableRow
                key={index}
                className={index % 2 === 1 ? "bg-white" : "bg-gray-100"}
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col gap-1">
                      <p className="text-black font-semibold whitespace-nowrap">
                        {plan.company_name}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {format(new Date(plan["plan.createdAt"]), "MM/dd/yyyy")}
                </TableCell>
                <TableCell>
                  {format(
                    addDays(
                      new Date(
                        plan["plan.updatedAt"]
                          ? plan["plan.updatedAt"]
                          : plan["plan.createdAt"]
                      ),
                      30
                    ),
                    "MM/dd/yyyy"
                  )}
                </TableCell>
                <TableCell>{plan["plan.plan_type"]}</TableCell>
              </TableRow>
            ))
          ) : (
            <div>no Companies to show </div>
          )}
        </TableBody>
      </Table>
      {plans?.length > itemsPerPage && (
        <Pagination className="flex w-full justify-center items-center mt-4 bg-white rounded-2xl p-2 my-3">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={() => handlePreviousPage()} />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink onClick={() => handleClickPage(i + 1)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={() => handleNextPage()} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}

