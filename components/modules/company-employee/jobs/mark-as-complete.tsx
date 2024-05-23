"use client"
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MarkAsComplete() {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleMarkComplete = () => {
    setIsCompleted(true);
  };

  const handleCancel = () => {
    setIsCompleted(false);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger
          className={`bg-gray-200 flex items-center px-4 py-2 text-gray-400 whitespace-nowrap text-sm rounded-3xl gap-1 ${isCompleted ? 'bg-green-500' : ''
            }`}
        >
          <Check className='w-4 h-4' />
          <span>{isCompleted ? 'Completed' : 'Mark as Complete'}</span>
        </DialogTrigger>
        <DialogContent className='bg-white mobile:max-w-[90%] rounded-2xl'>
          <DialogHeader>
            <DialogTitle>Confirm Job Completion
              <hr className='my-4' />
            </DialogTitle>
            <DialogDescription className='text-gray-700'>
              Please ensure that all tasks associated with this job have been satisfactorily finished before proceeding.
            </DialogDescription>
          </DialogHeader>
          <div className='flex justify-between mt-4'>
            <Button className='bg-transparent border border-primary rounded-3xl hover:bg-primary text-primary hover:text-white' onClick={handleCancel}>
              Cancel
            </Button>
            <Button className='bg-green-500 text-white rounded-3xl hover:bg-green-500' onClick={handleMarkComplete}>
              Mark as Complete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
