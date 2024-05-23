import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ArrowDown } from 'lucide-react';

const companyData = [
  {
    companyName: "Upyr Ltd",
    joinedDate: "9/18/16",
    amountPaid: 106.58,
    subscriptionEnd: "9/4/12",
    plan: "Monthly",
  },
  {
    companyName: "Aesop Inc",
    joinedDate: "10/22/19",
    amountPaid: 234.89,
    subscriptionEnd: "4/14/20",
    plan: "Yearly",
  },
  {
    companyName: "Baxter Corp",
    joinedDate: "11/09/17",
    amountPaid: 78.21,
    subscriptionEnd: "7/25/18",
    plan: "Monthly",
  },
  {
    companyName: "Cadence LLC",
    joinedDate: "12/15/18",
    amountPaid: 154.9,
    subscriptionEnd: "11/03/21",
    plan: "Yearly",
  },
  {
    companyName: "Dupont Inc",
    joinedDate: "01/07/20",
    amountPaid: 98.73,
    subscriptionEnd: "12/21/19",
    plan: "Monthly",
  },
];
export default function SubscriptionList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <div className='flex gap-2 items-center'>
              Company Name
              <ArrowDown className='w-4 h-4' />
            </div>
          </TableHead>
          <TableHead>
            <div className='flex gap-2 items-center'>
              Joined Date
              <ArrowDown className='w-4 h-4' />
            </div>
          </TableHead>
          <TableHead>
            <div className='flex gap-2 items-center'>
              Amount Paid
              <ArrowDown className='w-4 h-4' />
            </div>
          </TableHead>
          <TableHead>
            <div className='flex gap-2 items-center'>
              Subscription End
              <ArrowDown className='w-4 h-4' />
            </div>
          </TableHead>
          <TableHead>
            <div className='flex gap-2 items-center'>
              Plan
              <ArrowDown className='w-4 h-4' />
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companyData.map((company, index) => (
          <TableRow key={index}>
            <TableCell>{company.companyName}</TableCell>
            <TableCell>{company.joinedDate}</TableCell>
            <TableCell> {/* Assuming amountPaid is a number, format as currency */}
              {company.amountPaid.toFixed(2)}
            </TableCell>
            <TableCell>{company.subscriptionEnd}</TableCell>
            <TableCell>{company.plan}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

  )
}