import React, { useState } from "react";
import { Button } from "../ui/button";
import StarRating from "./star-rating";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FeedbackSchema } from "@/lib/types";
import { ErrorMessage } from "@hookform/error-message";
import { CreateFeedbackAction } from "@/actions/feedback/feedback-action";
import { toast } from "react-toastify";

export default function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FeedbackSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const onSubmit = async (data: any) => {
    try {
      if (rating === 0) {
        return toast.error("Rating is Required");
      }
      const messageData: any = {
        rating: rating,
        comment: data.comment,
      };

      const result = await CreateFeedbackAction(messageData);

      if (result && result.statusCode === 201) {
        return toast.success(result.message);
      } else {
        return toast.error(result?.message);
      }
    } catch (error) {
      console.error("Error sending feedback:", error);
      toast.error("An error occurred while creating feedback.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col text-left justify-start lg:whitespace-nowrap mx-auto w-full">
        <h1 className="text-black mobile:text-lg md:text-xl text-semibold">
          How was your experience?
        </h1>
        <span className="md:text-base xl:text-lg text-neutral-700">
          Thank you for choosing to provide feedback. Please rate your
          experience from 1 to 5 stars
        </span>
      </div>
      <div className="flex justify-center items-center w-full my-6">
        <StarRating rating={rating} onChange={handleRatingChange} />
      </div>
      <p className="text-red-500 text-sm">
        <ErrorMessage errors={errors} name="rating" />
      </p>
      <div className="flex flex-col text-left justify-start">
        <h1 className="text-black text-semibold mobile:text-lg md:text-xl">
          Add your comments as feedback below.
        </h1>
        <span className="md:text-base xl:text-lg lg:whitespace-nowrap text-neutral-700">
          Your thoughts and suggestions are highly appreciated and help us
          improve our services.
        </span>
      </div>
      <textarea
        id="comment"
        placeholder="Additional comments here"
        rows={4}
        cols={50}
        maxLength={500}
        style={{ resize: "none" }}
        {...register("comment")}
        className="border rounded-xl bg-gray-50 p-4 h-[25vh] w-full mt-4"
      />
      <p className="text-red-500 text-sm">
        <ErrorMessage errors={errors} name="comment" />
      </p>
      <div className="flex w-full gap-6 mt-6">
        <Button className="w-full rounded-2xl bg-gray-300 text-black">
          Cancel
        </Button>
        <Button className="w-full rounded-2xl text-white" type="submit">
          Submit Feedback
        </Button>
      </div>
    </form>
  );
}

