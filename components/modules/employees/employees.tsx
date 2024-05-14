"use client"
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
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
import { ArrowDown } from 'lucide-react';
import AddEmployee from './add-employee';

const employees = [
  { name: 'Ayesha Khan', email: 'asha@gmai.com', phone: '(629) 555-0129', availability: 'Assigned' },
  { name: 'John Doe', email: 'john.doe@example.com', phone: '(555) 555-5555', availability: 'Available' },
  { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '(555) 555-1234', availability: 'Available' },
  { name: 'Michael Lee', email: 'michael.lee@example.com', phone: '(555) 555-6789', availability: 'Assigned' },
  { name: 'Emma Brown', email: 'emma.brown@example.com', phone: '(555) 555-9876', availability: 'Available' },
  { name: 'David Johnson', email: 'david.johnson@example.com', phone: '(555) 555-3456', availability: 'Assigned' },
  { name: 'Sophia Wilson', email: 'sophia.wilson@example.com', phone: '(555) 555-7890', availability: 'Available' },
  { name: 'William Anderson', email: 'william.anderson@example.com', phone: '(555) 555-2345', availability: 'Assigned' },
  { name: 'Olivia Martinez', email: 'olivia.martinez@example.com', phone: '(555) 555-5678', availability: 'Available' },
  { name: 'James Taylor', email: 'james.taylor@example.com', phone: '(555) 555-4321', availability: 'Assigned' },
  { name: 'David Johnson', email: 'david.johnson@example.com', phone: '(555) 555-3456', availability: 'Assigned' },
  { name: 'Sophia Wilson', email: 'sophia.wilson@example.com', phone: '(555) 555-7890', availability: 'Available' },
  { name: 'William Anderson', email: 'william.anderson@example.com', phone: '(555) 555-2345', availability: 'Assigned' },
  { name: 'Olivia Martinez', email: 'olivia.martinez@example.com', phone: '(555) 555-5678', availability: 'Available' },
  { name: 'James Taylor', email: 'james.taylor@example.com', phone: '(555) 555-4321', availability: 'Assigned' },
  // Add more employee objects as needed
];

const ITEMS_PER_PAGE = 10;

export default function Employees() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPageCount = Math.ceil(employees.length / ITEMS_PER_PAGE);
  const indexOfLastEmployee = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstEmployee = indexOfLastEmployee - ITEMS_PER_PAGE;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const handlePagination = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  return (
    // <div className='border rounded-2xl my-20'>
    //   <div><AddEmployee /></div>
    <Table>
      <TableHeader>
        <TableRow className='bg-white'>
          <TableHead>Employee Name</TableHead>
          <TableHead>
            <div className='flex items-center gap-2'>
              <span>Email</span>
              <ArrowDown className='h-4 w-4' />
            </div>
          </TableHead>
          <TableHead>
            <div className='flex items-center gap-2'>
              <span>Phone Number</span>
              <ArrowDown className='h-4 w-4' />
            </div>
          </TableHead>
          <TableHead>
            <div className='flex items-center gap-2 p-1'>
              <span>Availability</span>
              <ArrowDown className='h-4 w-4' />
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {currentEmployees.map((employee, index) => (
          <TableRow key={employee.name} className={index % 2 === 1 ? 'bg-white' : 'bg-gray-100'}>
            <TableCell className="font-medium">{employee.name}</TableCell>
            <TableCell>{employee.email}</TableCell>
            <TableCell>{employee.phone}</TableCell>
            <TableCell>
              <div className='flex items-center justify-center gap-2 w-1/2 border rounded-lg py-1'>
                <div className={`!bg-${employee.availability === 'Available' ? 'black' : 'red-500'} rounded-full w-2 h-2`}></div>
                <span>{employee.availability}</span>
              </div>
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <Pagination className='flex w-full justify-center items-center mt-4 border border-black'>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => handlePagination(currentPage - 1)} />
              </PaginationItem>
              {Array.from({ length: totalPageCount }, (_, i) => (
                <PaginationItem key={i + 1} >
                  <PaginationLink onClick={() => handlePagination(i + 1)}>{i + 1}</PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext onClick={() => handlePagination(currentPage + 1)} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </TableRow>
      </TableBody>
    </Table>
    // </div>
  );
}
