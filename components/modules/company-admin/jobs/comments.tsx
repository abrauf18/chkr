import React from "react";
import Image from "next/image";

export interface CommentProps {
  createdAt: string;
  message: string;
  user: {
    first_name: string;
    last_name: string;
    picture: string;
    email: string;
    role: string;
  };
}

const Comment: React.FC<CommentProps> = ({ message, createdAt, user }) => {
  return (
    <div className="mt-6">
      <div className="flex justify-between font-semibold">
        <span>{new Date(createdAt).toLocaleDateString()}</span>
        <span>{new Date(createdAt).toLocaleTimeString()}</span>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-3">
          <Image
            src={user?.picture}
            width={33}
            height={33}
            className="w-10 h-10 rounded-full"
            alt="user"
          />
          <span>{message}</span>
        </div>
        <div
          className={`px-4 py-1 rounded-2xl h-1/2 text-white ${
            user.role === "company-admin" ? "bg-slate-500" : "bg-[#748AFE]"
          }`}
        >
          {user?.first_name}
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Comment;

