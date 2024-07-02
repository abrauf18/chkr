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
import DeleteModal from "../../super-admin/admins/delete-modal";
import EditAdmin from "../../super-admin/admins/edit-admin";
import { ITEMS_PER_PAGE } from "@/lib/utils";
import { Users } from "@/lib/interfaces";

const EmployeeTable = ({
  employees,
  currentPage,
  setCurrentPage,
  totalPageCount,
  currentEmployees,
}: {
  employees: Users[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPageCount: number;
  currentEmployees: Users[];
}) => {
  const handlePagination = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPageCount) return;
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="bg-white">
            <TableHead className="text-black font-semibold whitespace-nowrap">
              Employee Name
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                <span className="text-black font-semibold">Email</span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2">
                <span className="text-black font-semibold whitespace-nowrap">
                  Phone Number
                </span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>
              <div className="flex items-center gap-2 p-1">
                <span className="text-black font-semibold">Action</span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentEmployees.map((employee, index) => (
            <TableRow
              key={employee.email}
              className={index % 2 === 1 ? "bg-white" : "bg-gray-100"}
            >
              <TableCell className="font-medium whitespace-nowrap">
                {employee.first_name} {employee.last_name}
              </TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.contact_number}</TableCell>
              <TableCell className="w-32">
                <div className="flex gap-2">
                  <EditAdmin
                    isEmployee={true}
                    isAdmin={false}
                    currentUser={employee}
                  />
                  <DeleteModal userId={employee.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
          <TableRow></TableRow>
        </TableBody>
      </Table>
      {employees.length > ITEMS_PER_PAGE && (
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
              <PaginationNext
                onClick={() => handlePagination(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default EmployeeTable;

