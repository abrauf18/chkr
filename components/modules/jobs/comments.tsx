import React from 'react';
import Image from 'next/image';

export interface CommentProps {
  date: string;
  time: string;
  content: string;
  user: string;
}

const Comment: React.FC<CommentProps> = ({ date, time, content, user }) => {
  return (
    <div className='mt-6'>
      <div className='flex justify-between font-semibold'>
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div className='flex justify-between items-center mt-6'>
        <div className='flex justify-center items-center'>
          <div className='w-12 h-12 mr-3'><Image src='/images/avatar.svg' width={3} height={3} alt='user' /></div>
          <span>{content}</span>
        </div>
        <div className='bg-[#748AFE] px-4 py-1 rounded-2xl h-1/2 text-white'>{user}</div>
      </div>
      <hr className='my-4' />
    </div>
  );
};

export default Comment;
