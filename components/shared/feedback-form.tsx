import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import StarRating from './star-rating'

export default function FeedbackForm() {
  const [currentRating, setCurrentRating] = useState(3);
  const handleRatingChange = (newRating: number) => {
    setCurrentRating(newRating);
  };
  return (
    <div className='mt-6'>
      <h1 className='text-black text-xl text-semibold'>How was your experience?</h1>
      <span className='text-lg whitespace-nowrap text-neutral-700'>Thank you for choosing to provide feedback. Please rate your experience from 1 to 5 stars</span>
      <StarRating rating={currentRating} onRatingChange={handleRatingChange} />
      <h1 className='text-black text-semibold text-xl'>Add your comments as feedback below.</h1>
      <span className='text-lg whitespace-nowrap text-neutral-700	'> Your thoughts and suggestions are highly appreciated and help us improve our services.</span>
      <textarea
        id="description"
        placeholder="Additional comments here"
        rows={4}
        cols={50}
        maxLength={500}
        style={{ resize: "none" }}
        // {...register("description")}
        className="border rounded-xl bg-gray-50 p-4 h-[25vh] w-full mt-4"
      />
      {/* <p className="text-red-500 text-sm">
        <ErrorMessage errors={errors} name="description" />
      </p> */}
      <div className='flex w-full gap-6 mt-6'>
        <Button className='w-full rounded-2xl bg-gray-300 text-black'>
          Cancel
        </Button>
        <Button className='w-full rounded-2xl text-white'>
          Submit Feedback
        </Button>
      </div>
    </div>
  )
}
