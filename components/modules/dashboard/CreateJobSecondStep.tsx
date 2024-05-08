"use client"
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";

export default function CreateJobSecondStep() {
  const [description, setDescription] = useState<string>('');

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    if (value.length <= 500) {
      setDescription(value);
    }
  };

  return (
    <div className="mb-4 w-full relative">
      <Label
        htmlFor="description"
        className="md:text-lg text-sm font-semibold"
      >
        Description
      </Label>
      <textarea
        id="description"
        name="description"
        placeholder='Write Something...'
        rows={4}
        cols={50}
        value={description}
        onChange={handleDescriptionChange}
        maxLength={500}
        style={{ resize: 'none' }}
      >
        {description.length}/500 characters
      </textarea>
    </div>
  );
}
