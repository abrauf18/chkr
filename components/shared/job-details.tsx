"use client";

import { MapPinned } from "lucide-react";
import React, { useEffect, useState } from "react";
import Comment, { CommentProps } from "../modules/company-admin/jobs/comments";
import Select from "../modules/company-employee/jobs/select-status";
import MarkAsComplete from "../modules/company-employee/jobs/mark-as-complete";
import { usePathname } from "next/navigation";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  GetEmployeeJobByIDAction,
  GetJobByIDAction,
} from "@/actions/jobs/job-action";
import SmallMap from "./small-map";
import Loader from "./loader";

export default function JobDetails({
  jobId,
  isAdmin,
}: {
  jobId: number;
  isAdmin?: boolean;
}) {
  const pathname = usePathname();
  const [text, setText] = useState("");
  const [jobDetails, setJobDetails] = useState<any>(null);
  const [UserJobDetails, setUserJobDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const location = isAdmin
    ? jobDetails?.location
    : UserJobDetails?.job?.location;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await GetJobByIDAction(jobId);
        setJobDetails(data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [jobId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const UserData = await GetEmployeeJobByIDAction(jobId);
        setUserJobDetails(UserData);
      } catch (error) {
        console.error("Error fetching job data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [jobId]);

  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  const comments: CommentProps[] = [
    {
      date: "27/03/2023",
      time: "03:34 pm",
      content: "Try to cover tasks asap, we’ve alot of more jobs todo!",
      user: "You",
    },
    {
      date: "28/03/2023",
      time: "04:45 am",
      content: "Tasks completed on time. Ready for next tasks.",
      user: "Employee",
    },
    {
      date: "29/03/2024",
      time: "4:45 am",
      content: "tasks should be completed",
      user: "employee",
    },
  ];

  return (
    <>
      {isLoading || !UserJobDetails || !jobDetails ? (
        <div className="flex items-center justify-center h-96">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col px-4 gap-4 w-full text-black">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col mobile:text-left">
              {isAdmin && (
                <h1 className="font-bold text-xl mb-3">
                  {jobDetails?.customer_name}
                </h1>
              )}
              {!isAdmin && (
                <h1 className="font-bold text-xl mb-3">
                  {UserJobDetails?.job?.customer_name}
                </h1>
              )}
              <div className="flex items-center">
                <MapPinned />
                {isAdmin && (
                  <span className="font-semibold text-lg text-gray-700 ml-2">
                    {jobDetails?.location?.name}
                  </span>
                )}
                {!isAdmin && (
                  <span className="font-semibold text-lg text-gray-700 ml-2">
                    {UserJobDetails?.job?.location?.name}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 h-3/4 mt-4 lg:mt-0">
              {pathname === "/company-employee/jobs" && (
                <Select jobLocation={UserJobDetails?.job?.location} />
              )}
              {pathname === "/company-employee/jobs" && (
                <MarkAsComplete jobID={UserJobDetails?.job?.id} />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1 mobile:text-left">
            <span className="font-bold text-lg">Description:</span>
            {isAdmin && <p>{jobDetails?.description}</p>}
            {!isAdmin && (
              <p className="text-black"> {UserJobDetails?.job?.description}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-6 mobile:text-left">
            <div className="flex flex-col text-sm lg:text-lg whitespace-nowrap">
              <span className="font-bold md:text-lg">Date & Time:</span>
              {isAdmin && (
                <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
                  {new Date(jobDetails?.date_time).toLocaleString()}
                </span>
              )}
              {!isAdmin && (
                <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
                  {new Date(UserJobDetails?.job.date_time).toLocaleString()}
                </span>
              )}
            </div>
            <div className="flex flex-col text-sm whitespace-nowrap">
              <span className="font-bold md:text-lg">Service:</span>
              {isAdmin && (
                <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
                  {jobDetails?.service?.service_name}
                </span>
              )}
              {!isAdmin && (
                <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
                  {UserJobDetails?.job?.service?.service_name}
                </span>
              )}
            </div>
            <div className="flex flex-col text-sm whitespace-nowrap">
              <span className="font-bold md:text-lg">To Pay:</span>
              {isAdmin && (
                <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
                  $ {jobDetails?.price}
                </span>
              )}
              {!isAdmin && (
                <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
                  $ {UserJobDetails?.price}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 text-left">
            <span className="font-bold text-lg">Map Direction</span>
            {location && <SmallMap location={location?.name} />}
          </div>
          <div className="text-left">
            <span className="font-bold text-lg text-left">
              Onsite Progress:
            </span>
            <div className="h-full border rounded-lg mt-2">
              <Textarea
                className="min-h-32"
                placeholder="Write your onsite progress here."
              />
              <div className="flex items-end justify-end ">
                <Button className="m-2 text-white" type="button">
                  Share
                </Button>
              </div>
            </div>
            {/* Map comments */}
            {comments.map((comment, index) => (
              <Comment key={index} {...comment} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

