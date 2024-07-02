"use server";
import { auth } from "@/auth";
import { JobRequestInterface, JobsInterface } from "@/lib/interfaces";

export const ServiceAction = async () => {
  const session = await auth();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //@ts-ignore
      Authorization: `Bearer ${session?.token}`,
    },
  });
  const result = await response.json();
  return result;
};

export const CreateJobAction = async (data: JobsInterface) => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/job/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      body: JSON.stringify({
        ...data,
        service_id: +data.service_id,
      }),
    }
  );
  const result = await response.json();
  return result;
};

export const GetJobsAction = async () => {
  const session = await auth();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/job/company-jobs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //@ts-ignore
      Authorization: `Bearer ${session?.token}`,
    },
    next: {
      tags: ["getJobs"],
    },
  });
  const result = await response.json();
  return result;
};

export const GetUserJobsAction = async () => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/job/employee-jobs`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      next: {
        tags: ["GetUserJobs"],
      },
    }
  );
  const result = await response.json();
  return result;
};

export const JobRequestAction = async (data: JobRequestInterface) => {
  const session = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/job/job-request`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //@ts-ignore
        Authorization: `Bearer ${session?.token}`,
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
};

export const GetJobByIDAction = async (id: number) => {
  const session = await auth();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/job/company-job/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //@ts-ignore
      Authorization: `Bearer ${session?.token}`,
    },
    next: {
      tags: ["getJobByID"],
    },
  });
  const result = await response.json();
  return result;
};

export const GetEmployeeJobByIDAction = async (id: number) => {
  const session = await auth();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/job/employee-job/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //@ts-ignore
      Authorization: `Bearer ${session?.token}`,
    },
    next: {
      tags: ["getUserJobByID"],
    },
  });
  const result = await response.json();
  return result;
};

export const CompleteByIDAction = async (id: number) => {
  const session = await auth();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/job/complete-job/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      //@ts-ignore
      Authorization: `Bearer ${session?.token}`,
    },
  });
  const result = await response.json();
  return result;
};

