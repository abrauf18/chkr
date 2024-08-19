"use client";
import React from "react";
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
import DeleteModal from "../../../shared/delete-modal";
import { Services } from "@/lib/interfaces";
import { ITEMS_PER_PAGE } from "@/lib/utils";
import EditService from "./edit-service";

const ServiceTable = ({
  services,
  currentPage,
  setCurrentPage,
  totalPageCount,
  currentServices,
}: {
  services: Services[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPageCount: number;
  currentServices: Services[];
}) => {
  const handlePagination = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPageCount) return;
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="bg-white">
            <TableHead>
              <div className="flex items-center gap-2">
                <span className="text-black font-semibold whitespace-nowrap">
                  Service Id
                </span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                <span className="text-black font-semibold"> Service Name</span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-black font-semibold">Action</span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentServices.map((service, index) => (
            <TableRow key={service.id}>
              <TableCell>
                <div className="flex items-center">
                  <span className="whitespace-nowrap">
                    {index + 1 + (currentPage - 1) * ITEMS_PER_PAGE}
                  </span>
                </div>
              </TableCell>
              <TableCell>{service.service_name}</TableCell>
              <TableCell className="flex items-center justify-center">
                <div className="flex gap-2">
                  <EditService currentService={service} />{" "}
                  <DeleteModal serviceId={service.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {services.length > ITEMS_PER_PAGE && (
        <Pagination className="flex w-full justify-center items-center my-4">
          <PaginationContent>
            <PaginationItem className=" cursor-pointer">
              <PaginationPrevious
                onClick={() => handlePagination(currentPage - 1)}
              />
            </PaginationItem>
            {Array.from({ length: totalPageCount }, (_, i) => (
              <PaginationItem className=" cursor-pointer" key={i + 1}>
                <PaginationLink onClick={() => handlePagination(i + 1)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem className=" cursor-pointer">
              <PaginationNext
                onClick={() => handlePagination(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default ServiceTable;

