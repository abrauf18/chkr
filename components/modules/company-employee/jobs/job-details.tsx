"use client";

import { MapPinned } from "lucide-react";
import React, { useRef, useState } from "react";
import Comment, { CommentProps } from "../../company-admin/jobs/comments";
import Select from "./select-status";
import MarkAsComplete from "./mark-as-complete";
import TextEditor from "@/components/shared/text-editor";

export default function JobDetails() {
  const [text, setText] = useState("");

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
  ];

  return (
    <div className="flex flex-col px-4 gap-4 w-full">
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl mb-3">Leslie Alexander</h1>
          <div className="flex items-center">
            <MapPinned />
            <span className="font-semibold text-lg text-gray-700 ml-2">
              8502 Preston Rd. Inglewood
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 h-3/4 mt-4 lg:mt-0">
          <Select />
          <MarkAsComplete />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-bold text-lg">Description:</span>
        <p>
          Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt.
          Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum
          tempor Lorem incididunt. Sed fermentum eget velit sit amet sagittis.
          Sed egestas egestas arcu, quis fermentum justo laoreet non. Maecenas
          sapien quam, mollis vitae blandit a, blandit vel lectus.
        </p>
      </div>
      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col text-sm lg:text-lg whitespace-nowrap">
          <span className="font-bold md:text-lg">Zip Code:</span>
          <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
            10010
          </span>
        </div>
        <div className="flex flex-col text-sm lg:text-lg whitespace-nowrap">
          <span className="font-bold md:text-lg">Date & Time:</span>
          <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
            15 March 2023 7:00 pm
          </span>
        </div>
        <div className="flex flex-col text-sm whitespace-nowrap">
          <span className="font-bold md:text-lg">Service:</span>
          <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
            Room Cleaning
          </span>
        </div>
        <div className="flex flex-col text-sm whitespace-nowrap">
          <span className="font-bold md:text-lg">To Pay:</span>
          <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base">
            verified
          </span>
        </div>
      </div>
      <div>
        <span className="font-bold text-lg">Map Direction</span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
          width="100%"
          height="200"
          style={{ border: 0, borderRadius: "1rem" }}
          aria-hidden="false"
        ></iframe>
      </div>
      <div>
        <span className="font-bold text-lg">Onsite Progress:</span>
        <TextEditor />
        {/* Map comments */}
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
    </div>
  );
}

