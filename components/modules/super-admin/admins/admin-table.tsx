"use client";
import React, { useState } from "react";
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
  PaginationItem,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import DeleteModal from "./delete-modal";
import EditAdmin from "./edit-admin";
import DisableModal from "../../../shared/disable-modal";
import { Users } from "@/lib/interfaces";
import { ITEMS_PER_PAGE } from "@/lib/utils";

const AdminTable = ({ admins }: { admins: Users[] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(admins.length / ITEMS_PER_PAGE);

  const handleClickPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
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

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = admins.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="bg-white">
            <TableHead>
              <div className="flex items-center gap-2 w-[12rem]">
                <span className="text-black font-semibold whitespace-nowrap">
                  Admin Name
                </span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                <span className="text-black font-semibold">Email Address</span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                <span className="text-black font-semibold">Phone Number</span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                <span className="text-black font-semibold">Action</span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((admin) => (
            <TableRow key={admin.email}>
              <TableCell>
                <div className="flex items-center  gap-2 mobile:w-[11rem]">
                  <Image
                    src={admin?.picture || "/images/admin-img.png"}
                    alt="admin-img"
                    width={33}
                    height={33}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="whitespace-nowrap">
                    {admin.first_name} {admin.last_name}
                  </span>
                </div>
              </TableCell>
              <TableCell>{admin.email}</TableCell>
              <TableCell>{admin.contact_number}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <EditAdmin
                    isAdmin={true}
                    isEmployee={false}
                    currentUser={admin}
                  />
                  <DeleteModal userId={admin.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {admins.length > ITEMS_PER_PAGE && (
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
};

export default AdminTable;

