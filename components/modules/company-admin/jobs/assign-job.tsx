"use client";
import React, { useEffect, useState } from "react";
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
import { SearchUserAction, UsersAction } from "@/actions/users/user-actions";
import { Users } from "@/lib/interfaces";
import { useStateDebounced } from "@/hooks/use-state-debounced";

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

  const [employees, setEmployees] = useState<Users[]>([]);

  const fetchEmployees = async () => {
    try {
      const response = await UsersAction({ order: "", sort: "" });
      setEmployees(response);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  const selectedUsers = watch("selected_users");
  const { jobData, setJobData } = useJobStore();
  const [inputValue, debouncedInputValue, setInputValue] = useStateDebounced(
    "",
    300
  );

  const handleCheckboxChange = async () => {
    const isValid = await trigger(["selected_users"]);
    if (isValid) {
      const data = getValues("selected_users");
      setJobData({ ...jobData, selected_users: data });
      handleNextStep();
    }
  };

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = employees.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const isUserSelected = (id: number) => {
    return selectedUsers.some(
      (selectedUser: { id: number }) => selectedUser.id === id
    );
  };

  useEffect(() => {
    if (debouncedInputValue) {
      SearchUserAction(debouncedInputValue).then((response) => {
        setEmployees(response);
      });
    } else {
      fetchEmployees();
    }
  }, [debouncedInputValue]);

  function handleSearch(term: string) {
    setInputValue(term);
  }

  const handleChange = (user: Users) => {
    const users = getValues("selected_users");
    if (isUserSelected(user.id)) {
      setValue(
        "selected_users",
        users.filter(
          (selectedUser: { id: number }) => selectedUser.id !== user.id
        )
      );
    } else {
      setValue("selected_users", [
        ...users,
        {
          ...user,
        },
      ]);
      if (errors.selectedUsers) {
        clearErrors("selected_users");
      }
    }
  };

  return (
    <div>
      <div className="flex flex-row mobile:flex-col justify-between w-full mb-5 mx-auto">
        <div className="relative flex items-center w-full mobile:w-full">
          <Input
            className="bg-[#F9F8F8] pr-10"
            id="text"
            type="text"
            value={inputValue}
            placeholder="Search by Employee name"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Search />
          </div>
        </div>
      </div>
      <p className="text-sm text-red-500 text-right">
        {" "}
        <ErrorMessage errors={errors} name="selected_users" />
      </p>
      <div className="overflow-y-auto max-h-[400px] mt-1 border-2 rounded-xl">
        {employees.map((employees, index) => (
          <>
            <div
              key={employees.id}
              className={`px-4 ${
                index % 4 === 1 || index % 4 === 3 ? "bg-gray-100" : ""
              }`}
            >
              <div className="flex justify-between py-2 px-4">
                <div className="flex justify-center items-center">
                  <input
                    className="custom-check"
                    type="checkbox"
                    onChange={() => handleChange(employees)}
                    checked={isUserSelected(employees.id)}
                    value={employees.first_name}
                  />
                  <div className="ml-10 mr-2 rounded-full">
                    <Image
                      src={employees?.picture as string}
                      alt="user"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                  </div>
                  <span className="font-semibold whitespace-nowrap">
                    {employees.first_name} {employees.last_name}
                  </span>
                </div>
                <div className="flex items-center justify-center my-3 py-1 px-2 rounded-lg border-2 gap-2">
                  <div
                  // className={`rounded-full h-2 w-2 ${
                  //   user.status == "Available" ? "bg-green-500" : "bg-primary"
                  // }`}
                  ></div>
                  <span className="font-medium text-sm mobile:hidden">
                    {/* {user.status} */}
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
              { length: Math.ceil(employees.length / itemsPerPage) },
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

