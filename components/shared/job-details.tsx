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
  CreateMessageAction,
  GetCommentByIDAction,
  GetEmployeeJobByIDAction,
  GetJobByIDAction,
} from "@/actions/jobs/job-action";
import SmallMap from "./small-map";
import Loader from "./loader";
import { toast } from "react-toastify";
import { MessageInterface } from "@/lib/interfaces";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSchema } from "@/lib/types";
import { ErrorMessage } from "@hookform/error-message";

export default function JobDetails({
  jobId,
  isAdmin,
}: {
  jobId: number;
  isAdmin?: boolean;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(MessageSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const pathname = usePathname();
  const [text, setText] = useState("");
  const [jobDetails, setJobDetails] = useState<any>(null);
  const [UserJobDetails, setUserJobDetails] = useState<any>(null);
  const [comments, setComments] = useState<CommentProps[]>([]);
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
        console.error("Error fetching user job data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [jobId]);

  const fetchComments = async () => {
    try {
      const response = await GetCommentByIDAction(jobId);
      if (response?.statusCode === 200 && Array.isArray(response.result)) {
        const commentsData: CommentProps[] = response.result.map(
          (comment: any) => ({
            createdAt: comment.createdAt,
            message: comment.message,
            user: comment.user,
          })
        );
        setComments(commentsData);
      } else {
        console.error("Invalid response format:", response);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  useEffect(() => {
    // Initial fetch
    fetchComments();

    // Set up the interval to fetch comments every 5 seconds
    const intervalId = setInterval(() => {
      fetchComments();
    }, 5000);

    // Cleanup interval on component unmount or jobId change
    return () => clearInterval(intervalId);
  }, [jobId]);

  const onSubmit = async (data: any) => {
    try {
      const messageData: MessageInterface = {
        job_id: jobId,
        message: data.message,
      };
      const result = await CreateMessageAction(messageData);
      if (result && result.statusCode === 201) {
        await fetchComments();
        return toast.success(result.message);
      } else {
        return toast.error(result?.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred while creating commenting.");
    } finally {
      setText("");
    }
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="h-full rounded-lg mt-2">
                <Textarea
                  className="min-h-32"
                  placeholder="Write your onsite progress here."
                  {...register("message")}
                />
                <p className="text-sm text-red-500 mt-1">
                  {" "}
                  <ErrorMessage errors={errors} name="message" />
                </p>
                <div className="flex items-end justify-end ">
                  <Button className="mt-1 rounded-lg text-white" type="submit">
                    Share
                  </Button>
                </div>
              </div>
            </form>
            <div className="mt-6">
              {comments.length === 0 ? (
                <p className="text-center">No messages to display</p>
              ) : (
                comments.map((comment, index) => (
                  <Comment
                    key={index}
                    createdAt={comment.createdAt}
                    message={comment.message}
                    user={comment.user}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

