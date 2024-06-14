'use client'
import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationItem,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { ArrowDown, Ban } from 'lucide-react'
import DeleteIcon from '@/assets/icons/delete-icon'
import EditIcon from '@/assets/icons/edit-icon'
import Image from 'next/image'
import DeleteModal from './delete-modal'
import EditAdmin from './edit-admin'
import DisableModal from '../../../shared/disable-modal'

interface Admin {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

const adminData: Admin[] = [
  { id: 1, name: "Ralph Edwards", email: "dolores.chambers@example.com", phoneNumber:"(123) 9449494" },
  { id: 2, name: "Floyd Miles", email: "debbie.baker@example.com", phoneNumber:"74839202"},
  { id: 3, name: "Darrell Steward", email: "nevaeh.simmons@example.com", phoneNumber:"74839202" },
  { id: 4, name: "Jane Cooper", email: "willie.jennings@example.com", phoneNumber:"74839202" },
  { id: 5, name: "Kristin Watson", email: "willie.jennings@example.com", phoneNumber:"74839202" },
  { id: 6, name: "Albert Flores", email: "nevaeh.simmons@example.com", phoneNumber:"74839202" },
  { id: 7, name: "Devon Lane", email: "nathan.roberts@example.com", phoneNumber:"74839202" },
  { id: 8, name: "Arlene McCoy", email: "jessica.hanson@example.com", phoneNumber:"74839202" },
];

const AdminTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(adminData.length / itemsPerPage);

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
  const paginatedData = adminData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className='bg-white'>
            <TableHead>
              <div className="flex items-center gap-2 w-[12rem]">
                <span className="text-black font-semibold whitespace-nowrap">Admin Name</span>
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
            <TableHead >
              <div className="flex items-center gap-2">
                <span className="text-black font-semibold">Action</span>
                <ArrowDown className="h-4 w-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((admin) => (
            <TableRow key={admin.id}>
              <TableCell>
                <div className='flex items-center gap-2 mobile:w-[11rem]'>
                  <Image src='/images/avatar.svg' alt='admin-img' width={5} height={5} className='w-10 h-10' />
                  <span className='whitespace-nowrap'>{admin.name}</span>
                </div>
              </TableCell>
              <TableCell>{admin.email}</TableCell>
              <TableCell>{admin.phoneNumber}</TableCell>
              {/* <TableCell>
                <div className={`flex justify-center items-center gap-2 border-2 p-1 w-[6rem] rounded-lg bg-white ${admin.status === "Active" ? 'bg-green-500' : 'bg-red-500'}`}>
                  <div className={`rounded-full w-2 h-2 ${admin.status === "Active" ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span>{admin.status}</span>
                </div>
              </TableCell> */}
              <TableCell>
                <div className='flex gap-2'>
                  <EditAdmin isAdmin={true} isEmployee={false} />
                 <DeleteModal/>
                <DisableModal/>
                </div>
              </TableCell>
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
  )
}

export default AdminTable;
