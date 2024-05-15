"use client";
import React, { useState } from "react";
import AddEmployee from "./add-employee";
import EmployeeTable from "./employe-table";
import Feedback from "@/components/shared/feedback";
import DashboardHeader from "@/components/shared/dashboard-header";
import { Button } from "@/components/ui/button";
import { CalendarDays, ChevronDown } from "lucide-react";
import CreateJob from "../jobs/create-job";

export interface Employee {
  name: string;
  email: string;
  phone: string;
  availability: string;
}

const employees: Employee[] = [
  {
    name: "Ayesha Khan",
    email: "asha@gmai.com",
    phone: "(629) 555-0129",
    availability: "Assigned",
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(555) 555-5555",
    availability: "Available",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "(555) 555-1234",
    availability: "Available",
  },
  {
    name: "Michael Lee",
    email: "michael.lee@example.com",
    phone: "(555) 555-6789",
    availability: "Assigned",
  },
  {
    name: "Emma Brown",
    email: "emma.brown@example.com",
    phone: "(555) 555-9876",
    availability: "Available",
  },
  {
    name: "David Johnson",
    email: "david.johnson@example.com",
    phone: "(555) 555-3456",
    availability: "Assigned",
  },
  {
    name: "Sophia Wilson",
    email: "sophia.wilson@example.com",
    phone: "(555) 555-7890",
    availability: "Available",
  },
  {
    name: "William Anderson",
    email: "william.anderson@example.com",
    phone: "(555) 555-2345",
    availability: "Assigned",
  },
  {
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    phone: "(555) 555-5678",
    availability: "Available",
  },
  {
    name: "James Taylor",
    email: "james.taylor@example.com",
    phone: "(555) 555-4321",
    availability: "Assigned",
  },
  {
    name: "David Johnson",
    email: "david.johnson@example.com",
    phone: "(555) 555-3456",
    availability: "Assigned",
  },
  {
    name: "Sophia Wilson",
    email: "sophia.wilson@example.com",
    phone: "(555) 555-7890",
    availability: "Available",
  },
  {
    name: "William Anderson",
    email: "william.anderson@example.com",
    phone: "(555) 555-2345",
    availability: "Assigned",
  },
  {
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    phone: "(555) 555-5678",
    availability: "Available",
  },
  {
    name: "James Taylor",
    email: "james.taylor@example.com",
    phone: "(555) 555-4321",
    availability: "Assigned",
  },
  // Add more employee objects as needed
];

const ITEMS_PER_PAGE = 10;

export default function Employees() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPageCount = Math.ceil(employees.length / ITEMS_PER_PAGE);
  const indexOfLastEmployee = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstEmployee = indexOfLastEmployee - ITEMS_PER_PAGE;
  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  return (
    <>
      <DashboardHeader title="Here’s all completed & ongoing Jobs !" />
      <div className="flex lg:flex-row justify-between mobile:flex-col md:flex-col items-center">
        <div className="flex w-full">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <div className="flex items-center gap-2 mobile:mt-2 md:mt-2 lg:mt-0 justify-start lg:w-[80%] mobile:w-full md:w-full ">
          <Button className="md:w-3/4 bg-white hover:bg-white rounded-3xl md:p-6 text-sm lg:text-base ">
            <CalendarDays className="mr-2 mobile:hidden" color="#FF2600" />
            <span className="mobile:hidden"> March 11 - March 17, 2024</span>
            <span className="md:hidden">Select Date</span>
            <ChevronDown className="ml-2 mobile:hidden" />
            <CalendarDays className="ml-2 md:hidden w-4 h-4" color="black" />
          </Button>
          <Button className="md:w-1/2 bg-white rounded-3xl md:p-6 text-sm lg:text-base">
            Filter
            <ChevronDown className="ml-2 md:w-[1rem] md:h-[1rem] w-[1rem] h-[1rem]" />
          </Button>
          <AddEmployee />
        </div>
      </div>
      <div>
        <Feedback />
      </div>
      <div className="border rounded-2xl my-3">
        <EmployeeTable
          employees={employees}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPageCount={totalPageCount}
          currentEmployees={currentEmployees}
        />
      </div>
    </>
  );
}

