import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Calendar, ChevronDown, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useFormContext } from 'react-hook-form';
import useJobStore from '@/store/job-store';

const users: { username: string; status: string }[] = [
  { username: 'John Doe', status: 'Available' },
  { username: 'Jane Smith', status: 'Assigned' },
  { username: 'Michael Lee', status: 'Available' },
  { username: 'Ayesha Lee', status: 'Assigned' },
  { username: 'Doe', status: 'Available' },
  { username: ' Smith', status: 'Assigned' },
  { username: ' Lee', status: 'Available' },
  { username: 'Ayesha ', status: 'Assigned' },
  // Add more users as needed
];

export default function AssignJob({ handlePreviousStep, handleNextStep }: { handlePreviousStep: () => void; handleNextStep: () => void; }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { jobData, setJobData } = useJobStore();
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className='flex flex-row mobile:flex-col justify-between w-full '>
        <div className="relative flex items-center w-1/2 mobile:w-full">
          <Input
            // /{...register("password")}
            className="bg-[#F9F8F8] pr-10"
            id="text"
            type="text"
            placeholder='Search by Employee name'
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2" >
            <Search />
          </div>
        </div>
        <div className="flex items-center gap-2 mobile:mt-4">
          <Button className="bg-white mobile:w-full border rounded-xl p-4 text-sm lg:text-base">
            Select Date
            <Calendar className='ml-2' />
          </Button>
          <Button className="bg-white mobile:w-full border rounded-xl p-4 text-sm lg:text-base">
            Filter
            <ChevronDown
              className="ml-2 md:w-[1rem] md:h-[1rem] w-[1rem] h-[1rem]"
            />
          </Button>
        </div>
      </div>
      <div className='overflow-y-auto max-h-[400px] mt-10 border-2 rounded-xl'>
        {currentUsers.map((user) => (
          <div key={user.username} className=' px-4'>
            <div className='flex justify-between py-2 px-4'>
              <div className='flex justify-center items-center'>
                <Checkbox />
                <div className='h-12 w-12 ml-10 mr-2'><Image src="/images/avatar.svg" alt='user' width={3} height={3}
                /></div>
                <span className='font-semibold whitespace-nowrap'>{user.username}</span>
              </div>
              <div className='flex items-center justify-center my-3 p-2 mobile:rounded-lg rounded-xl border-2 gap-2'>
                <div className={`rounded-full h-2 w-2 ${user.status == 'Available' ? 'bg-green-500' : 'bg-primary'}`}></div>
                <span className='font-medium text-sm mobile:hidden'>{user.status}</span>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <Pagination>
        <PaginationPrevious
          onClick={() => setCurrentPage(currentPage - 1)}
        />
        <PaginationContent>
          {Array.from({ length: Math.ceil(users.length / itemsPerPage) }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                onClick={() => paginate(i + 1)}
                isActive={i + 1 === currentPage}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
        <PaginationNext
          onClick={() => setCurrentPage(currentPage + 1)}
        />
      </Pagination>
      <div className="flex justify-between mt-4">
        <Button
          className="w-full lg:w-[10rem] bg-gray-300 font-medium py-3 px-10 rounded-3xl mr-4"
          type="button"
          onClick={handlePreviousStep}
        >
          Previous
        </Button>
        <Button
          className="w-full lg:w-[10rem] bg-primary text-white font-medium py-3 px-10 rounded-3xl"
          type="button"
          onClick={handleNextStep}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
