import React from "react";
import Image from "next/image";

export interface CommentProps {
  createdAt: string;
  message: string;
  url: string;
  user: {
    first_name: string;
  };
}

const Comment: React.FC<CommentProps> = ({ message, createdAt, user, url }) => {
  return (
    <div className="mt-6">
      <div className="flex justify-between font-semibold">
        <span>{new Date(createdAt).toLocaleDateString()}</span>
        <span>{new Date(createdAt).toLocaleTimeString()}</span>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="flex justify-center items-center">
          <div className="w-12 h-12 mr-3">
            <Image src={url} width={3} height={3} alt="user" />
          </div>
          <span>{message}</span>
        </div>
        <div className="bg-[#748AFE] px-4 py-1 rounded-2xl h-1/2 text-white">
          {user.first_name}
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default Comment;

