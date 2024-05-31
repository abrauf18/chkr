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
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ArrowDown } from "lucide-react";
import { Employee } from "./employees"; // Import the Employee type

const EmployeeTable = ({
  employees,
  currentPage,
  setCurrentPage,
  totalPageCount,
  currentEmployees,
}: {
  employees: Employee[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPageCount: number;
  currentEmployees: Employee[];
}) => {
  const handlePagination = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="bg-white">
            <TableHead className="text-black font-semibold whitespace-nowrap">Employee Name</TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                <span className="text-black font-semibold">Email</span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                <span className="text-black font-semibold whitespace-nowrap">Phone Number</span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2 p-1">
                <span className="text-black font-semibold">Availability</span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentEmployees.map((employee, index) => (
            <TableRow
              key={employee.name}
              className={index % 2 === 1 ? "bg-white" : "bg-gray-100"}
            >
              <TableCell className="font-medium whitespace-nowrap">{employee.name}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.phone}</TableCell>
              <TableCell className="w-32">
                <div className="flex items-center justify-center pl-2 gap-2 border rounded-lg py-1">
                  <span
                    className={`${employee.availability === "Available"
                      ? "bg-green-500"
                      : "bg-primary"
                      } rounded-full w-2 h-2`}
                  ></span>
                  <span>{employee.availability}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
          <TableRow></TableRow>
        </TableBody>
      </Table>
      <Pagination className="flex w-full justify-center items-center mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePagination(currentPage - 1)}
            />
          </PaginationItem>
          {Array.from({ length: totalPageCount }, (_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink onClick={() => handlePagination(i + 1)}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext onClick={() => handlePagination(currentPage + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default EmployeeTable;

