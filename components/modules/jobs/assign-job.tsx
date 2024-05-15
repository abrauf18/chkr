import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useFormContext, useFieldArray } from "react-hook-form";
import useJobStore from "@/store/job-store";
import { ErrorMessage } from "@hookform/error-message";

export interface User {
  id: number;
  username: string;
  status: string;
  amount?: number;
}

const users: User[] = [
  { id: 1, username: "John Doe", status: "Available" },
  { id: 2, username: "Jane Smith", status: "Assigned" },
  { id: 3, username: "Michael Lee", status: "Available" },
  { id: 4, username: "Ayesha Khan", status: "Assigned" },
  { id: 5, username: "John", status: "Available" },
  { id: 6, username: "Jane", status: "Assigned" },
  { id: 7, username: "Michael", status: "Available" },
  { id: 8, username: "Ayesha ", status: "Assigned" },
];

export default function AssignJob({
  handleNextStep,
}: {
  handleNextStep: () => void;
}) {
  const {
    trigger,
    getValues,
    watch,
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext<Record<string, any>>();

  const selectedUsers = watch("selectedUsers");
  const { jobData, setJobData } = useJobStore();

  const handleCheckboxChange = async () => {
    const isValid = await trigger(["selectedUsers"]);
    if (isValid) {
      const data = getValues("selectedUsers");
      setJobData({ ...jobData, selectedUsers: data });
      handleNextStep();
    }
  };

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const isUserSelected = (id: number) => {
    return selectedUsers.some(
      (selectedUser: { id: number }) => selectedUser.id === id
    );
  };

  const handleChange = (user: User) => {
    const users = getValues("selectedUsers");
    if (isUserSelected(user.id)) {
      setValue(
        "selectedUsers",
        users.filter(
          (selectedUser: { id: number }) => selectedUser.id !== user.id
        )
      );
    } else {
      setValue("selectedUsers", [
        ...users,
        {
          ...user,
        },
      ]);
      if (errors.selectedUsers) {
        clearErrors("selectedUsers");
      }
    }
  };
  return (
    <div>
      <div className="flex flex-row mobile:flex-col justify-between w-full mb-5 mx-auto">
        <div className="relative flex items-center w-1/2 mobile:w-full">
          <Input
            className="bg-[#F9F8F8] pr-10"
            id="text"
            type="text"
            placeholder="Search by Employee name"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Search />
          </div>
        </div>
        <div className="flex items-center gap-2 mobile:mt-4">
          <Button className="bg-white mobile:w-full border rounded-xl p-4 text-sm lg:text-base">
            Select Date
            <Calendar className="ml-2" />
          </Button>
          <Button className="bg-white mobile:w-full border rounded-xl p-4 text-sm lg:text-base">
            Filter
            <ChevronDown className="ml-2 md:w-[1rem] md:h-[1rem] w-[1rem] h-[1rem]" />
          </Button>
        </div>
      </div>
      <p className="text-sm text-red-500 text-right">
        {" "}
        <ErrorMessage errors={errors} name="selectedUsers" />
      </p>
      <div className="overflow-y-auto max-h-[400px] mt-1 border-2 rounded-xl">
        {currentUsers.map((user, index) => (
          <>
            <div
              key={user.id}
              className={`px-4 ${
                index % 4 === 1 || index % 4 === 3 ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex justify-between py-2 px-4">
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    onChange={() => handleChange(user)}
                    checked={isUserSelected(user.id)}
                    value={user.username}
                  />
                  <div className="h-10 w-10 ml-10 mr-2">
                    <Image
                      src="/images/avatar.svg"
                      alt="user"
                      width={3}
                      height={3}
                    />
                  </div>
                  <span className="font-semibold whitespace-nowrap">
                    {user.username}
                  </span>
                </div>
                <div className="flex items-center justify-center my-3 py-1 px-2 rounded-lg border-2 gap-2">
                  <div
                    className={`rounded-full h-2 w-2 ${
                      user.status == "Available" ? "bg-green-500" : "bg-primary"
                    }`}
                  ></div>
                  <span className="font-medium text-sm mobile:hidden">
                    {user.status}
                  </span>
                </div>
              </div>
              <hr />
            </div>
          </>
        ))}
        <Pagination className="px-4 py-2">
          <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />
          <PaginationContent>
            {Array.from(
              { length: Math.ceil(users.length / itemsPerPage) },
              (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => paginate(i + 1)}
                    isActive={i + 1 === currentPage}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              )
            )}
          </PaginationContent>
          <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
        </Pagination>
      </div>

      <div className="flex w-full justify-end mt-10">
        <Button
          className="md:w-1/4 bg-primary text-white font-medium py-3 rounded-3xl"
          type="button"
          onClick={handleCheckboxChange}
        >
          Assign Job
          <ArrowRight className="h-6 w-6 pl-2" />
        </Button>
      </div>
    </div>
  );
}

