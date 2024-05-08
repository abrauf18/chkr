import DeleteIcon from '@/assets/icons/delete-icon'
import EditIcon from '@/assets/icons/edit-icon'
import { Button } from '@/components/ui/button'
import { Bold, Italic, Link2, MapPinned } from 'lucide-react'
import React from 'react'
import Comment, { CommentProps } from './Comment'

export default function JobDetails() {
  const comments: CommentProps[] = [
    {
      date: '27/03/2023',
      time: '03:34 pm',
      content: 'Try to cover tasks asap, we’ve alot of more jobs todo!',
      user: 'You'
    },
    {
      date: '28/03/2023',
      time: '04:45 am',
      content: 'Tasks completed on time. Ready for next tasks.',
      user: 'Employee'
    },
  ];

  return (

    <div className='flex flex-col px-4 gap-4 w-full'>
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
        <div className="flex gap-2 h-3/4 mt-4 lg:mt-0">
          <div className="flex items-center bg-gray-100 rounded-xl px-3">
            <div className="bg-primary rounded-full h-2 w-2 mr-2"></div>
            <span>status</span>
          </div>
          <EditIcon />
          <DeleteIcon />
        </div>
      </div>
      <div className='flex flex-col gap-1 '>
        <span className='font-bold text-lg '>Description:</span>
        <p>Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt. Sed fermentum eget velit sit amet sagittis. Sed egestas egestas arcu, quis fermentum justo laoreet non. Maecenas sapien quam, mollis vitae blandit a, blandit vel lectus.</p>
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
          <span className="bg-gray-100 rounded-2xl py-3 px-6 mt-2 md:text-base ">
            verified
          </span>
        </div>
      </div>
      <div>
        <span className='font-bold text-lg '>Map Direction</span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
          width="100%"
          height="200"
          style={{ border: 0, borderRadius: '1rem' }}
          aria-hidden="false"
        ></iframe>
      </div>
      <div>
        <span className='font-bold text-lg '>Onsite Progress:</span>
        <div className='border border-gray-200 rounded-lg'>
          <textarea
            id="onsite-progress "
            name="onsite progress "
            placeholder='Write your onsite progress here.'
            rows={4}
            cols={50}
            maxLength={500}
            style={{ resize: 'none' }}
            className='p-3 outline-none focus:outline-none w-full rounded-lg'
          >
          </textarea>
          <hr className='my-2 w-[95%] mx-auto' />

          <div className='flex justify-between items-center mx-3 my-3'>
            <div className='flex'>
              <Bold color='gray' />
              <Italic color='gray' />
              <Link2 color='gray' />
            </div>
            <div>
              <Button className='rounded-3xl text-white px-6'>Share</Button>
            </div>
          </div>
        </div>
        {/* Map comments */}
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
    </div>

  )
}
