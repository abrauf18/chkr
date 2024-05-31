'use client'
import React, { useState } from 'react';
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
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

const companyData = [
  { companyName: "Upyr Ltd", companyType: "Startup Agency", joinedDate: "9/18/16", amountPaid: 106.58, subscriptionEnd: "9/4/12", plan: "Monthly" },
  { companyName: "Aesop Inc", companyType: "Startup Agency", joinedDate: "10/22/19", amountPaid: 234.89, subscriptionEnd: "4/14/20", plan: "Yearly" },
  { companyName: "Baxter Corp", companyType: "Agency", joinedDate: "11/09/17", amountPaid: 78.21, subscriptionEnd: "7/25/18", plan: "Monthly" },
  { companyName: "Cadence LLC", companyType: "Startup Agency", joinedDate: "12/15/18", amountPaid: 154.9, subscriptionEnd: "11/03/21", plan: "Yearly" },
  { companyName: "Dupont Inc", companyType: "Agency", joinedDate: "01/07/20", amountPaid: 98.73, subscriptionEnd: "12/21/19", plan: "Monthly" },
  { companyName: "Echo Solutions", companyType: "Tech Agency", joinedDate: "03/12/21", amountPaid: 213.45, subscriptionEnd: "09/14/21", plan: "Monthly" },
  { companyName: "FusionWorks", companyType: "Consulting", joinedDate: "05/19/20", amountPaid: 345.60, subscriptionEnd: "12/01/20", plan: "Yearly" },
  { companyName: "GigaTech", companyType: "Hardware", joinedDate: "07/25/18", amountPaid: 564.32, subscriptionEnd: "11/20/18", plan: "Monthly" },
  { companyName: "Horizon Corp", companyType: "Finance", joinedDate: "11/30/19", amountPaid: 298.10, subscriptionEnd: "08/15/20", plan: "Yearly" },
  { companyName: "Innovatech", companyType: "Startup Agency", joinedDate: "02/14/22", amountPaid: 120.00, subscriptionEnd: "07/30/22", plan: "Monthly" },
];

export default function SubscriptionList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(companyData.length / itemsPerPage);

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
  const paginatedData = companyData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className='bg-white'>
            <TableHead>
              <div className='flex gap-2 items-center text-black whitespace-nowrap py-6 w-[12rem]'>
                Company Name
                <ArrowDown className='w-4 h-4' />
              </div>
            </TableHead>
            <TableHead>
              <div className='flex gap-2 items-center text-black whitespace-nowrap'>
                Joined Date
                <ArrowDown className='w-4 h-4' />
              </div>
            </TableHead>
            <TableHead>
              <div className='flex gap-2 items-center text-black whitespace-nowrap'>
                Amount Paid
                <ArrowDown className='w-4 h-4' />
              </div>
            </TableHead>
            <TableHead>
              <div className='flex gap-2 items-center text-black whitespace-nowrap'>
                Subscription End
                <ArrowDown className='w-4 h-4' />
              </div>
            </TableHead>
            <TableHead>
              <div className='flex gap-2 items-center text-black whitespace-nowrap'>
                Plan
                <ArrowDown className='w-4 h-4' />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((company, index) => (
            <TableRow key={index} className={index % 2 === 1 ? "bg-white" : "bg-gray-100"}>
              <TableCell>
                <div className='flex items-center gap-3'>
                  <Image src='/images/companyLogo.svg' width={2} height={2} alt='companylogo' className='w-12 h-12' />
                  <div className='flex flex-col gap-1'>
                    <p className='text-black font-semibold whitespace-nowrap'>{company.companyName}</p>
                    <p className='whitespace-nowrap text-gray-500 mobile:text-xs'>{company.companyType}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{company.joinedDate}</TableCell>
              <TableCell>{company.amountPaid.toFixed(2)}</TableCell>
              <TableCell>{company.subscriptionEnd}</TableCell>
              <TableCell>{company.plan}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination className="flex w-full justify-center items-center mt-4 bg-white rounded-2xl p-2 my-3">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePreviousPage()}
            />
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
    </div>
  );
}
