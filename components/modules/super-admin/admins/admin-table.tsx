import React from 'react'
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
import { ArrowDown } from 'lucide-react'
import DeleteIcon from '@/assets/icons/delete-icon'
import EditIcon from '@/assets/icons/edit-icon'

export default function AdminTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <div className="flex items-center gap-2">
              <span className="text-black font-semibold">Admin Name</span>
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
              <span className="text-black font-semibold">Status</span>
              <ArrowDown className="h-4 w-4" />
            </div>
          </TableHead>
          <TableHead >
            <div className="flex items-center gap-2">
              <span className="text-black font-semibold">Status</span>
              <ArrowDown className="h-4 w-4" />
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Ralph Edwards</TableCell>
          <TableCell>dolores.chambers@example.com</TableCell>
          <TableCell>
            <div className='flex justify-center items-center gap-2 border-2 p-1 w-[5rem] rounded-lg bg-white'>
              <div className='bg-green-500 rounded-full w-2 h-2'></div>
              <span>Active</span>
            </div>
          </TableCell>
          <TableCell>
            <div className='flex gap-2'>
              <button>
                <EditIcon />
              </button>
              <button>
                <DeleteIcon />
              </button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

  )
}
